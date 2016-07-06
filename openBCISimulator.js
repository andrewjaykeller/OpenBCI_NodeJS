'use strict';

var EventEmitter = require('events').EventEmitter;
var util = require('util');
var stream = require('stream');

var openBCISample = require('./openBCISample');
var k = openBCISample.k;
var now = require('performance-now');


function OpenBCISimulatorFactory() {
    var factory = this;
    
    var _options = {
        accel: true,
        alpha: true,
        boardFailure:false,
        daisy: false,
        drift: 0,
        firmwareVersion: k.OBCIFirmwareV1,
        lineNoise: '60Hz',
        sampleRate: 250,
        serialPortFailure:false,
        verbose: false
    };

    function OpenBCISimulator(portName, options) {
        options = (typeof options !== 'function') && options || {};
        var opts = {};

        stream.Stream.call(this);

        /** Configuring Options */
        if (options.accel === false) {
            opts.accel = false;
        } else {
            opts.accel = _options.accel;
        }
        if (options.alpha === false) {
            opts.alpha = false;
        } else {
            opts.alpha = _options.alpha;
        }
        opts.boardFailure = options.boardFailure || _options.boardFailure;
        opts.daisy = options.daisy || _options.daisy;
        opts.drift = options.drift || _options.drift;
        opts.firmwareVersion = options.firmwareVersion || _options.firmwareVersion;
        opts.lineNoise = options.lineNoise || _options.lineNoise;
        if (options.sampleRate) {
            opts.sampleRate = options.sampleRate;
        } else {
            if (opts.daisy) {
                opts.sampleRate = k.OBCISampleRate125;
            } else {
                opts.sampleRate = k.OBCISampleRate250;
            }
        }
        opts.serialPortFailure = options.serialPortFailure || _options.serialPortFailure;
        opts.verbose = options.verbose || _options.verbose;

        this.options = opts;

        // Bools
        this.connected = false;
        this.sd = {
            active:false,
            startTime: 0
        };
        this.streaming = false;
        this.synced = false;
        // Buffers
        this.buffer = new Buffer(500);
        this.eotBuf = new Buffer("$$$");
        // Numbers
        this.channelNumber = 1;
        this.sampleNumber = -1; // So the first sample is 0
        // Objects
        this.time = {
            current: 0,
            start: now(),
            loop: null
        };
        // Strings
        this.portName = portName || k.OBCISimulatorPortName;

        // Call 'open'
        if (this.options.verbose) console.log(`Port name: ${portName}`);
        setTimeout(() => {
            this.emit('open');
            this.connected = true;
        }, 200);

    }

    // This allows us to use the emitter class freely outside of the module
    util.inherits(OpenBCISimulator, stream.Stream);

    OpenBCISimulator.prototype.flush = function() {
        this.buffer.fill(0);
        //if (this.options.verbose) console.log('flushed');
    };

    OpenBCISimulator.prototype.write = function(data,callback) {
        switch (data[0]) {
            case k.OBCIRadioKey:
                this._processPrivateRadioMessage(data);
                break;
            case k.OBCIStreamStart:
                if (!this.stream) this._startStream();
                this.streaming = true;
                break;
            case k.OBCIStreamStop:
                if (this.stream) clearInterval(this.stream); // Stops the stream
                this.streaming = false;
                break;
            case k.OBCIMiscSoftReset:
                if (this.stream) clearInterval(this.stream);
                this.streaming = false;
                console.log(`firmware version is ${this.options.firmwareVersion}`);
                this.emit('data', new Buffer(`OpenBCI V3 Simulator\nOn Board ADS1299 Device ID: 0x12345\n${this.options.daisy ? "On Daisy ADS1299 Device ID: 0xFFFFF\n" : ""}LIS3DH Device ID: 0x38422\n${this.options.firmware === k.OBCIFirmwareV2 ? "Firmware: v2.0.0\n" : ""}$$$`));
                break;
            case k.OBCISDLogForHour1:
            case k.OBCISDLogForHour2:
            case k.OBCISDLogForHour4:
            case k.OBCISDLogForHour12:
            case k.OBCISDLogForHour24:
            case k.OBCISDLogForMin5:
            case k.OBCISDLogForMin15:
            case k.OBCISDLogForMin30:
            case k.OBCISDLogForSec14:
                // If we are not streaming, then do verbose output
                if (!this.streaming) {
                    this.emit('data', new Buffer('Wiring is correct and a card is present.\nCorresponding SD file OBCI_69.TXT\n$$$'));
                }
                this.sd.active = true;
                this.sd.startTime = now();
                break;
            case k.OBCISDLogStop:
                if (!this.streaming) {
                    if (this.SDLogActive) {
                        this.emit('data', new Buffer(`Total Elapsed Time: ${now() - this.sd.startTime} ms\n`));
                        this.emit('data', new Buffer(`Max write time: ${Math.random()*500} us\n`));
                        this.emit('data', new Buffer(`Min write time: ${Math.random()*200} us\n`));
                        this.emit('data', new Buffer(`Overruns: 0\n$$$`));
                    } else {
                        this.emit('data', new Buffer('No open file to close\n$$$'));
                    }
                }
                this.SDLogActive = false;
                break;
            case k.OBCISyncTimeSet:
                if (this.options.firmwareVersion === k.OBCIFirmwareV2) {
                    setTimeout(() => {
                        this.emit('data', new Buffer([k.OBCISyncTimeSent]));
                        this._syncUp();
                    }, 10);
                }
                break;
            default:
                break;
        }

        /** Handle Callback */
        if (this.connected) {
            callback(null,'Success!');
        }
    };

    OpenBCISimulator.prototype.drain = function(callback) {
        callback();
    };

    OpenBCISimulator.prototype.close = function(callback) {
        if (this.connected) {
            this.emit('close');
        }
        this.connected = false;
        callback();
    };

    OpenBCISimulator.prototype._startStream = function() {
        var intervalInMS = 1000 / this.options.sampleRate;

        if (intervalInMS < 2) intervalInMS = 2;

        var generateSample = openBCISample.randomSample(k.OBCINumberOfChannelsDefault, k.OBCISampleRate250, this.options.alpha, this.options.lineNoise);

        var getNewPacket = sampNumber => {
            if (this.options.accel) {
                if (this.synced) {
                    return openBCISample.convertSampleToPacketTimeSyncAccel(generateSample(sampNumber),now().toFixed(0));
                } else {
                    return openBCISample.convertSampleToPacketStandard(generateSample(sampNumber));
                }
            } else {
                if (this.synced) {
                    return openBCISample.convertSampleToPacketTimeSyncRawAux(generateSample(sampNumber),now().toFixed(0),new Buffer([0,0,0,0,0,0]));
                } else {
                    return openBCISample.convertSampleToPacketRawAux(generateSample(sampNumber),new Buffer([0,0,0,0,0,0]));
                }

            }
        };

        this.stream = setInterval(() => {
            this.emit('data', getNewPacket(this.sampleNumber));
            this.sampleNumber++;
        }, intervalInMS);
    };

    OpenBCISimulator.prototype._syncUp = function() {
        this.synced = true;

        var timeSyncSetPacket = openBCISample.samplePacketTimeSyncSet();

        timeSyncSetPacket.writeInt32BE(now().toFixed(0),28);

        this.emit('data',timeSyncSetPacket);
    };

    OpenBCISimulator.prototype._processPrivateRadioMessage = function(dataBuffer) {
        switch (dataBuffer[1]) {
            case k.OBCIRadioCmdChannelGet:
                if (this.options.firmwareVersion === k.OBCIFirmwareV2) {
                    if (!this.options.boardFailure) {
                        this.emit('data', new Buffer("Success: Channel changed to 0x"));
                        this.emit('data', new Buffer([this.channelNumber]));
                        this.emit('data', this.eotBuf);
                    } else {
                        this.emit('data', new Buffer("Failure: No Board communications; Dongle on channel number: 0x"));
                        this.emit('data', new Buffer([this.channelNumber]));
                        this.emit('data', this.eotBuf);
                    }
                }
                break;
            case k.OBCIRadioCmdChannelSet:
                if (this.options.firmwareVersion === k.OBCIFirmwareV2) {
                    if (!this.options.boardFailure) {
                        this.channelNumber = dataBuffer[2];
                        this.emit('data', new Buffer("Success: Channel changed to 0x"));
                        this.emit('data', new Buffer([this.channelNumber]));
                        this.emit('data', this.eotBuf);
                    } else {
                        this.emit('data', new Buffer("Failure: No communications from Board. Is your Board on the right channel? Is your Board powered up?"));
                        this.emit('data', this.eotBuf);
                    }
                }
                break;
            case k.OBCIRadioCmdPollTimeSet:
                if (this.options.firmwareVersion === k.OBCIFirmwareV2) {
                    if (!this.options.boardFailure) {
                        this.emit('data', new Buffer("Success: Poll time set"));
                        this.emit('data', this.eotBuf);
                    } else {
                        this.emit('data', new Buffer("Failure: No communications from Board. Is your Board on the right channel? Is your Board powered up?"));
                        this.emit('data', this.eotBuf);
                    }
                }
                break;
            default:
                break;
        }
    };

    factory.OpenBCISimulator = OpenBCISimulator;
}

util.inherits(OpenBCISimulatorFactory, EventEmitter);

module.exports = new OpenBCISimulatorFactory();
