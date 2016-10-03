/**
* Created by ajk on 12/16/15.
* Purpose: This file folds all the constants for the
*     OpenBCI Board
*/
'use strict';
/** Turning channels off */
const obciChannelOff_1 = '1';
const obciChannelOff_2 = '2';
const obciChannelOff_3 = '3';
const obciChannelOff_4 = '4';
const obciChannelOff_5 = '5';
const obciChannelOff_6 = '6';
const obciChannelOff_7 = '7';
const obciChannelOff_8 = '8';
const obciChannelOff_9 = 'q';
const obciChannelOff_10 = 'w';
const obciChannelOff_11 = 'e';
const obciChannelOff_12 = 'r';
const obciChannelOff_13 = 't';
const obciChannelOff_14 = 'y';
const obciChannelOff_15 = 'u';
const obciChannelOff_16 = 'i';

/** Turn channels on */
const obciChannelOn_1 = '!';
const obciChannelOn_2 = '@';
const obciChannelOn_3 = '#';
const obciChannelOn_4 = '$';
const obciChannelOn_5 = '%';
const obciChannelOn_6 = '^';
const obciChannelOn_7 = '&';
const obciChannelOn_8 = '*';
const obciChannelOn_9 = 'Q';
const obciChannelOn_10 = 'W';
const obciChannelOn_11 = 'E';
const obciChannelOn_12 = 'R';
const obciChannelOn_13 = 'T';
const obciChannelOn_14 = 'Y';
const obciChannelOn_15 = 'U';
const obciChannelOn_16 = 'I';

/** Test Signal Control Commands
* 1x - Voltage will be 1 * (VREFP - VREFN) / 2.4 mV
* 2x - Voltage will be 2 * (VREFP - VREFN) / 2.4 mV
*/
const obciTestSignalConnectToDC = 'p';
const obciTestSignalConnectToGround = '0';
const obciTestSignalConnectToPulse1xFast = '=';
const obciTestSignalConnectToPulse1xSlow = '-';
const obciTestSignalConnectToPulse2xFast = ']';
const obciTestSignalConnectToPulse2xSlow = '[';

/** Channel Setting Commands */
const obciChannelCmdADCNormal = '0';
const obciChannelCmdADCShorted = '1';
const obciChannelCmdADCBiasDRP = '6';
const obciChannelCmdADCBiasDRN = '7';
const obciChannelCmdADCBiasMethod = '2';
const obciChannelCmdADCMVDD = '3';
const obciChannelCmdADCTemp = '4';
const obciChannelCmdADCTestSig = '5';
const obciChannelCmdBiasInclude = '1';
const obciChannelCmdBiasRemove = '0';
const obciChannelCmdChannel_1 = '1';
const obciChannelCmdChannel_2 = '2';
const obciChannelCmdChannel_3 = '3';
const obciChannelCmdChannel_4 = '4';
const obciChannelCmdChannel_5 = '5';
const obciChannelCmdChannel_6 = '6';
const obciChannelCmdChannel_7 = '7';
const obciChannelCmdChannel_8 = '8';
const obciChannelCmdChannel_9 = 'Q';
const obciChannelCmdChannel_10 = 'W';
const obciChannelCmdChannel_11 = 'E';
const obciChannelCmdChannel_12 = 'R';
const obciChannelCmdChannel_13 = 'T';
const obciChannelCmdChannel_14 = 'Y';
const obciChannelCmdChannel_15 = 'U';
const obciChannelCmdChannel_16 = 'I';
const obciChannelCmdGain_1 = '0';
const obciChannelCmdGain_2 = '1';
const obciChannelCmdGain_4 = '2';
const obciChannelCmdGain_6 = '3';
const obciChannelCmdGain_8 = '4';
const obciChannelCmdGain_12 = '5';
const obciChannelCmdGain_24 = '6';
const obciChannelCmdLatch = 'X';
const obciChannelCmdPowerOff = '1';
const obciChannelCmdPowerOn = '0';
const obciChannelCmdSet = 'x';
const obciChannelCmdSRB1Connect = '1';
const obciChannelCmdSRB1Diconnect = '0';
const obciChannelCmdSRB2Connect = '1';
const obciChannelCmdSRB2Diconnect = '0';

/** Channel Setting Helper Strings */
const obciStringADCNormal = 'normal';
const obciStringADCShorted = 'shorted';
const obciStringADCBiasMethod = 'biasMethod';
const obciStringADCMvdd = 'mvdd';
const obciStringADCTemp = 'temp';
const obciStringADCTestSig = 'testSig';
const obciStringADCBiasDrp = 'biasDrp';
const obciStringADCBiasDrn = 'biasDrn';

/** Default Channel Settings */
const obciChannelDefaultAllSet = 'd';
const obciChannelDefaultAllGet = 'D';

/** LeadOff Impedance Commands */
const obciChannelImpedanceLatch = 'Z';
const obciChannelImpedanceSet = 'z';
const obciChannelImpedanceTestSignalApplied = '1';
const obciChannelImpedanceTestSignalAppliedNot = '0';

/** SD card Commands */
const obciSDLogForHour1 = 'G';
const obciSDLogForHour2 = 'H';
const obciSDLogForHour4 = 'J';
const obciSDLogForHour12 = 'K';
const obciSDLogForHour24 = 'L';
const obciSDLogForMin5 = 'A';
const obciSDLogForMin15 = 'S';
const obciSDLogForMin30 = 'F';
const obciSDLogForSec14 = 'a';
const obciSDLogStop = 'j';

/** SD Card String Commands */
const obciStringSDHour1 = '1hour';
const obciStringSDHour2 = '2hour';
const obciStringSDHour4 = '4hour';
const obciStringSDHour12 = '12hour';
const obciStringSDHour24 = '24hour';
const obciStringSDMin5 = '5min';
const obciStringSDMin15 = '15min';
const obciStringSDMin30 = '30min';
const obciStringSDSec14 = '14sec';

/** Stream Data Commands */
const obciStreamStart = 'b';
const obciStreamStop = 's';

/** Miscellaneous */
const obciMiscQueryRegisterSettings = '?';
const obciMiscQueryRegisterSettingsChannel1 = 'CH1SET';
const obciMiscQueryRegisterSettingsChannel2 = 'CH2SET';
const obciMiscQueryRegisterSettingsChannel3 = 'CH3SET';
const obciMiscQueryRegisterSettingsChannel4 = 'CH4SET';
const obciMiscQueryRegisterSettingsChannel5 = 'CH5SET';
const obciMiscQueryRegisterSettingsChannel6 = 'CH6SET';
const obciMiscQueryRegisterSettingsChannel7 = 'CH7SET';
const obciMiscQueryRegisterSettingsChannel8 = 'CH8SET';
const obciMiscSoftReset = 'v';

/** 16 Channel Commands */
const obciChannelMaxNumber8 = 'c';
const obciChannelMaxNumber16 = 'C';

/** 60Hz line filter */
const obciFilterDisable = 'g';
const obciFilterEnable = 'f';

/** Triggers */
const obciTrigger = '`';

/** Sync Clocks */
const obciSyncTimeSet = '<';
const obciSyncTimeSent = ',';

/** Radio Key */
const obciRadioKey = 0xF0;
/** Radio Commands */
const obciRadioCmdChannelGet = 0x00;
const obciRadioCmdChannelSet = 0x01;
const obciRadioCmdChannelSetOverride = 0x02;
const obciRadioCmdPollTimeGet = 0x03;
const obciRadioCmdPollTimeSet = 0x04;
const obciRadioCmdBaudRateSetDefault = 0x05;
const obciRadioCmdBaudRateSetFast = 0x06;
const obciRadioCmdSystemStatus = 0x07;

/** Possible number of channels */
const obciNumberOfChannelsDaisy = 16;
const obciNumberOfChannelsDefault = 8;
const obciNumberOfChannelsGanglion = 4;

/** Possible OpenBCI board types */
const obciBoardDaisy = 'daisy';
const obciBoardDefault = 'default';
const obciBoardGanglion = 'ganglion';

/** Possible Simulator Line Noise injections */
const obciSimulatorLineNoiseHz60 = '60Hz';
const obciSimulatorLineNoiseHz50 = '50Hz';
const obciSimulatorLineNoiseNone = 'None';

/** Possible Sample Rates*/
const obciSampleRate125 = 125;
const obciSampleRate250 = 250;

/** Max sample number */
const obciSampleNumberMax = 255;

/** Packet Size */
const obciPacketSize = 33;

/** OpenBCI V3 Standard Packet Positions */
/**
* 0:[startByte] | 1:[sampleNumber] | 2:[Channel-1.1] | 3:[Channel-1.2] | 4:[Channel-1.3] | 5:[Channel-2.1] | 6:[Channel-2.2] | 7:[Channel-2.3] | 8:[Channel-3.1] | 9:[Channel-3.2] | 10:[Channel-3.3] | 11:[Channel-4.1] | 12:[Channel-4.2] | 13:[Channel-4.3] | 14:[Channel-5.1] | 15:[Channel-5.2] | 16:[Channel-5.3] | 17:[Channel-6.1] | 18:[Channel-6.2] | 19:[Channel-6.3] | 20:[Channel-7.1] | 21:[Channel-7.2] | 22:[Channel-7.3] | 23:[Channel-8.1] | 24:[Channel-8.2] | 25:[Channel-8.3] | 26:[Aux-1.1] | 27:[Aux-1.2] | 28:[Aux-2.1] | 29:[Aux-2.2] | 30:[Aux-3.1] | 31:[Aux-3.2] | 32:StopByte
*/
const obciPacketPositionChannelDataStart = 2; // 0:startByte | 1:sampleNumber | [2:4] | [5:7] | [8:10] | [11:13] | [14:16] | [17:19] | [21:23] | [24:26]
const obciPacketPositionChannelDataStop = 25; // 24 bytes for channel data
const obciPacketPositionSampleNumber = 1;
const obciPacketPositionStartByte = 0; // first byte
const obciPacketPositionStopByte = 32; // [32]
const obciPacketPositionStartAux = 26; // [26,27]:Aux 1 | [28,29]:Aux 2 | [30,31]:Aux 3
const obciPacketPositionStopAux = 31; // - - - [30,31]:Aux 3 | 32: Stop byte
const obciPacketPositionTimeSyncAuxStart = 26;
const obciPacketPositionTimeSyncAuxStop = 28;
const obciPacketPositionTimeSyncTimeStart = 28;
const obciPacketPositionTimeSyncTimeStop = 32;

/** Notable Bytes */
const obciByteStart = 0xA0;
const obciByteStop = 0xC0;

/** Errors */
const ErrorInvalidByteLength = 'Invalid Packet Byte Length';
const ErrorInvalidByteStart = 'Invalid Start Byte';
const ErrorInvalidByteStop = 'Invalid Stop Byte';
const ErrorUndefinedOrNullInput = 'Undefined or Null Input';

/** Max Master Buffer Size */
const obciMasterBufferSize = 4096;

/** Impedance Calculation Variables */
const obciLeadOffDriveInAmps = 0.000000006;
const obciLeadOffFrequencyHz = 31.5;

/** Command send delay */
const obciWriteIntervalDelayMSLong = 50;
const obciWriteIntervalDelayMSNone = 0;
const obciWriteIntervalDelayMSShort = 10;

/** Impedance */
const obciImpedanceTextBad = 'bad';
const obciImpedanceTextNone = 'none';
const obciImpedanceTextGood = 'good';
const obciImpedanceTextInit = 'init';
const obciImpedanceTextOk = 'ok';

const obciImpedanceThresholdGoodMin = 0;
const obciImpedanceThresholdGoodMax = 5000;
const obciImpedanceThresholdOkMin = 5001;
const obciImpedanceThresholdOkMax = 10000;
const obciImpedanceThresholdBadMin = 10001;
const obciImpedanceThresholdBadMax = 1000000;

const obciImpedanceSeriesResistor = 2200; // There is a 2.2 k Ohm series resistor that must be subtracted

/** Simulator */
const obciSimulatorPortName = 'OpenBCISimulator';

/**
* Stream packet types/codes
*/
const obciStreamPacketStandardAccel = 0; // 0000
const obciStreamPacketStandardRawAux = 1; // 0001
const obciStreamPacketUserDefinedType = 2; // 0010
const obciStreamPacketAccelTimeSyncSet = 3; // 0011
const obciStreamPacketAccelTimeSynced = 4; // 0100
const obciStreamPacketRawAuxTimeSyncSet = 5; // 0101
const obciStreamPacketRawAuxTimeSynced = 6; // 0110

/** Time from board */
const obciStreamPacketTimeByteSize = 4;

/** Time synced with accel packet */
const obciAccelAxisX = 7;
const obciAccelAxisY = 8;
const obciAccelAxisZ = 9;

/** Firmware version indicator */
const obciFirmwareV1 = 'v1';
const obciFirmwareV2 = 'v2';

/** Parse */
const obciParseDaisy = 'Daisy';
const obciParseFirmware = 'v2';
const obciParseFailure = 'Failure';
const obciParseEOT = '$$$';
const obciParseSuccess = 'Success';

/** Used in parsing incoming serial data*/
const obciParsingChannelSettings = 2;
const obciParsingEOT = 4;
const obciParsingNormal = 3;
const obciParsingReset = 0;
const obciParsingTimeSyncSent = 1;

/** Timeouts */
const obciTimeoutProcessBytes = 500; // 0.5 seconds

/** Simulator Board Configurations */
const obciSimulatorRawAux = 'rawAux';
const obciSimulatorStandard = 'standard';

/** OpenBCI Radio Limits */
const obciRadioChannelMax = 25;
const obciRadioChannelMin = 1;
const obciRadioPollTimeMax = 255;
const obciRadioPollTimeMin = 0;

/** Time sync stuff */
const obciTimeSyncArraySize = 10;
const obciTimeSyncMultiplierWithSyncConf = 0.9;
const obciTimeSyncMultiplierWithoutSyncConf = 0.75;
const obciTimeSyncThresholdTransFailureMS = 10; // ms

/** Baud Rates */
const obciRadioBaudRateDefault = 115200;
const obciRadioBaudRateDefaultStr = 'default';
const obciRadioBaudRateFast = 230400;
const obciRadioBaudRateFastStr = 'fast';

module.exports = {
  /** Turning channels off */
  OBCIChannelOff_1: obciChannelOff_1,
  OBCIChannelOff_2: obciChannelOff_2,
  OBCIChannelOff_3: obciChannelOff_3,
  OBCIChannelOff_4: obciChannelOff_4,
  OBCIChannelOff_5: obciChannelOff_5,
  OBCIChannelOff_6: obciChannelOff_6,
  OBCIChannelOff_7: obciChannelOff_7,
  OBCIChannelOff_8: obciChannelOff_8,
  OBCIChannelOff_9: obciChannelOff_9,
  OBCIChannelOff_10: obciChannelOff_10,
  OBCIChannelOff_11: obciChannelOff_11,
  OBCIChannelOff_12: obciChannelOff_12,
  OBCIChannelOff_13: obciChannelOff_13,
  OBCIChannelOff_14: obciChannelOff_14,
  OBCIChannelOff_15: obciChannelOff_15,
  OBCIChannelOff_16: obciChannelOff_16,
  /**
  * Purpose: To get the proper command to turn a channel off
  * @param channelNumber - A number (1-16) of the desired channel
  * @returns {Promise}
  */
  commandChannelOff: function (channelNumber) {
    return new Promise(function (resolve, reject) {
      switch (channelNumber) {
        case 1:
          resolve(obciChannelOff_1);
          break;
        case 2:
          resolve(obciChannelOff_2);
          break;
        case 3:
          resolve(obciChannelOff_3);
          break;
        case 4:
          resolve(obciChannelOff_4);
          break;
        case 5:
          resolve(obciChannelOff_5);
          break;
        case 6:
          resolve(obciChannelOff_6);
          break;
        case 7:
          resolve(obciChannelOff_7);
          break;
        case 8:
          resolve(obciChannelOff_8);
          break;
        case 9:
          resolve(obciChannelOff_9);
          break;
        case 10:
          resolve(obciChannelOff_10);
          break;
        case 11:
          resolve(obciChannelOff_11);
          break;
        case 12:
          resolve(obciChannelOff_12);
          break;
        case 13:
          resolve(obciChannelOff_13);
          break;
        case 14:
          resolve(obciChannelOff_14);
          break;
        case 15:
          resolve(obciChannelOff_15);
          break;
        case 16:
          resolve(obciChannelOff_16);
          break;
        default:
          reject('Error [commandChannelOff]: Invalid Channel Number');
          break;
      }
    });
  },
  /** Turning channels on */
  OBCIChannelOn_1: obciChannelOn_1,
  OBCIChannelOn_2: obciChannelOn_2,
  OBCIChannelOn_3: obciChannelOn_3,
  OBCIChannelOn_4: obciChannelOn_4,
  OBCIChannelOn_5: obciChannelOn_5,
  OBCIChannelOn_6: obciChannelOn_6,
  OBCIChannelOn_7: obciChannelOn_7,
  OBCIChannelOn_8: obciChannelOn_8,
  OBCIChannelOn_9: obciChannelOn_9,
  OBCIChannelOn_10: obciChannelOn_10,
  OBCIChannelOn_11: obciChannelOn_11,
  OBCIChannelOn_12: obciChannelOn_12,
  OBCIChannelOn_13: obciChannelOn_13,
  OBCIChannelOn_14: obciChannelOn_14,
  OBCIChannelOn_15: obciChannelOn_15,
  OBCIChannelOn_16: obciChannelOn_16,
  commandChannelOn: function (channelNumber) {
    return new Promise(function (resolve, reject) {
      switch (channelNumber) {
        case 1:
          resolve(obciChannelOn_1);
          break;
        case 2:
          resolve(obciChannelOn_2);
          break;
        case 3:
          resolve(obciChannelOn_3);
          break;
        case 4:
          resolve(obciChannelOn_4);
          break;
        case 5:
          resolve(obciChannelOn_5);
          break;
        case 6:
          resolve(obciChannelOn_6);
          break;
        case 7:
          resolve(obciChannelOn_7);
          break;
        case 8:
          resolve(obciChannelOn_8);
          break;
        case 9:
          resolve(obciChannelOn_9);
          break;
        case 10:
          resolve(obciChannelOn_10);
          break;
        case 11:
          resolve(obciChannelOn_11);
          break;
        case 12:
          resolve(obciChannelOn_12);
          break;
        case 13:
          resolve(obciChannelOn_13);
          break;
        case 14:
          resolve(obciChannelOn_14);
          break;
        case 15:
          resolve(obciChannelOn_15);
          break;
        case 16:
          resolve(obciChannelOn_16);
          break;
        default:
          reject('Error [commandChannelOn]: Invalid Channel Number');
          break;
      }
    });
  },
  /** Test Signal Control Commands */
  OBCITestSignalConnectToDC: obciTestSignalConnectToDC,
  OBCITestSignalConnectToGround: obciTestSignalConnectToGround,
  OBCITestSignalConnectToPulse1xFast: obciTestSignalConnectToPulse1xFast,
  OBCITestSignalConnectToPulse1xSlow: obciTestSignalConnectToPulse1xSlow,
  OBCITestSignalConnectToPulse2xFast: obciTestSignalConnectToPulse2xFast,
  OBCITestSignalConnectToPulse2xSlow: obciTestSignalConnectToPulse2xSlow,
  getTestSignalCommand: (signal) => {
    return new Promise((resolve, reject) => {
      switch (signal) {
        case 'dc':
          resolve(obciTestSignalConnectToDC);
          break;
        case 'ground':
          resolve(obciTestSignalConnectToGround);
          break;
        case 'pulse1xFast':
          resolve(obciTestSignalConnectToPulse1xFast);
          break;
        case 'pulse1xSlow':
          resolve(obciTestSignalConnectToPulse1xSlow);
          break;
        case 'pulse2xFast':
          resolve(obciTestSignalConnectToPulse2xFast);
          break;
        case 'pulse2xSlow':
          resolve(obciTestSignalConnectToPulse2xSlow);
          break;
        case 'none':
          resolve(obciChannelDefaultAllSet);
          break;
        default:
          reject('Invalid selection! Check your spelling.');
          break;
      }
    });
  },
  /** Channel Setting Commands */
  OBCIChannelCmdADCNormal: obciChannelCmdADCNormal,
  OBCIChannelCmdADCShorted: obciChannelCmdADCShorted,
  OBCIChannelCmdADCBiasDRP: obciChannelCmdADCBiasDRP,
  OBCIChannelCmdADCBiasDRN: obciChannelCmdADCBiasDRN,
  OBCIChannelCmdADCBiasMethod: obciChannelCmdADCBiasMethod,
  OBCIChannelCmdADCMVDD: obciChannelCmdADCMVDD,
  OBCIChannelCmdADCTemp: obciChannelCmdADCTemp,
  OBCIChannelCmdADCTestSig: obciChannelCmdADCTestSig,
  OBCIChannelCmdBiasInclude: obciChannelCmdBiasInclude,
  OBCIChannelCmdBiasRemove: obciChannelCmdBiasRemove,
  OBCIChannelCmdChannel_1: obciChannelCmdChannel_1,
  OBCIChannelCmdChannel_2: obciChannelCmdChannel_2,
  OBCIChannelCmdChannel_3: obciChannelCmdChannel_3,
  OBCIChannelCmdChannel_4: obciChannelCmdChannel_4,
  OBCIChannelCmdChannel_5: obciChannelCmdChannel_5,
  OBCIChannelCmdChannel_6: obciChannelCmdChannel_6,
  OBCIChannelCmdChannel_7: obciChannelCmdChannel_7,
  OBCIChannelCmdChannel_8: obciChannelCmdChannel_8,
  OBCIChannelCmdChannel_9: obciChannelCmdChannel_9,
  OBCIChannelCmdChannel_10: obciChannelCmdChannel_10,
  OBCIChannelCmdChannel_11: obciChannelCmdChannel_11,
  OBCIChannelCmdChannel_12: obciChannelCmdChannel_12,
  OBCIChannelCmdChannel_13: obciChannelCmdChannel_13,
  OBCIChannelCmdChannel_14: obciChannelCmdChannel_14,
  OBCIChannelCmdChannel_15: obciChannelCmdChannel_15,
  OBCIChannelCmdChannel_16: obciChannelCmdChannel_16,
  commandChannelForCmd,
  OBCIChannelCmdGain_1: obciChannelCmdGain_1,
  OBCIChannelCmdGain_2: obciChannelCmdGain_2,
  OBCIChannelCmdGain_4: obciChannelCmdGain_4,
  OBCIChannelCmdGain_6: obciChannelCmdGain_6,
  OBCIChannelCmdGain_8: obciChannelCmdGain_8,
  OBCIChannelCmdGain_12: obciChannelCmdGain_12,
  OBCIChannelCmdGain_24: obciChannelCmdGain_24,
  commandForGain,
  OBCIChannelCmdLatch: obciChannelCmdLatch,
  OBCIChannelCmdPowerOff: obciChannelCmdPowerOff,
  OBCIChannelCmdPowerOn: obciChannelCmdPowerOn,
  OBCIChannelCmdSet: obciChannelCmdSet,
  OBCIChannelCmdSRB1Connect: obciChannelCmdSRB1Connect,
  OBCIChannelCmdSRB1Diconnect: obciChannelCmdSRB1Diconnect,
  OBCIChannelCmdSRB2Connect: obciChannelCmdSRB2Connect,
  OBCIChannelCmdSRB2Diconnect: obciChannelCmdSRB2Diconnect,
  /** Channel Settings Object */
  channelSettingsObjectDefault,
  channelSettingsArrayInit: (numberOfChannels) => {
    var newChannelSettingsArray = [];
    for (var i = 0; i < numberOfChannels; i++) {
      newChannelSettingsArray.push(channelSettingsObjectDefault(i));
    }
    return newChannelSettingsArray;
  },
  /** Channel Setting Helper Strings */
  OBCIStringADCNormal: obciStringADCNormal,
  OBCIStringADCShorted: obciStringADCShorted,
  OBCIStringADCBiasMethod: obciStringADCBiasMethod,
  OBCIStringADCMvdd: obciStringADCMvdd,
  OBCIStringADCTemp: obciStringADCTemp,
  OBCIStringADCTestSig: obciStringADCTestSig,
  OBCIStringADCBiasDrp: obciStringADCBiasDrp,
  OBCIStringADCBiasDrn: obciStringADCBiasDrn,
  /**
  * @description To convert a string like 'normal' to the correct command (i.e. '1')
  * @param adcString
  * @returns {Promise}
  * @author AJ Keller (@pushtheworldllc)
  */
  commandForADCString,
  /** Default Channel Settings */
  OBCIChannelDefaultAllSet: obciChannelDefaultAllSet,
  OBCIChannelDefaultAllGet: obciChannelDefaultAllGet,
  /** LeadOff Impedance Commands */
  OBCIChannelImpedanceLatch: obciChannelImpedanceLatch,
  OBCIChannelImpedanceSet: obciChannelImpedanceSet,
  OBCIChannelImpedanceTestSignalApplied: obciChannelImpedanceTestSignalApplied,
  OBCIChannelImpedanceTestSignalAppliedNot: obciChannelImpedanceTestSignalAppliedNot,
  /** SD card Commands */
  OBCISDLogForHour1: obciSDLogForHour1,
  OBCISDLogForHour2: obciSDLogForHour2,
  OBCISDLogForHour4: obciSDLogForHour4,
  OBCISDLogForHour12: obciSDLogForHour12,
  OBCISDLogForHour24: obciSDLogForHour24,
  OBCISDLogForMin5: obciSDLogForMin5,
  OBCISDLogForMin15: obciSDLogForMin15,
  OBCISDLogForMin30: obciSDLogForMin30,
  OBCISDLogForSec14: obciSDLogForSec14,
  OBCISDLogStop: obciSDLogStop,
  /** SD Card String Commands */
  OBCIStringSDHour1: obciStringSDHour1,
  OBCIStringSDHour2: obciStringSDHour2,
  OBCIStringSDHour4: obciStringSDHour4,
  OBCIStringSDHour12: obciStringSDHour12,
  OBCIStringSDHour24: obciStringSDHour24,
  OBCIStringSDMin5: obciStringSDMin5,
  OBCIStringSDMin15: obciStringSDMin15,
  OBCIStringSDMin30: obciStringSDMin30,
  OBCIStringSDSec14: obciStringSDSec14,
  /**
  * @description Converts a sd string into the proper setting.
  * @param stringCommand {String} - The length of time you want to record to the SD for.
  * @returns {Promise} The command to send to the Board, returns an error on improper `stringCommand`
  */
  sdSettingForString: (stringCommand) => {
    return new Promise((resolve, reject) => {
      switch (stringCommand) {
        case obciStringSDHour1:
          resolve(obciSDLogForHour1);
          break;
        case obciStringSDHour2:
          resolve(obciSDLogForHour2);
          break;
        case obciStringSDHour4:
          resolve(obciSDLogForHour4);
          break;
        case obciStringSDHour12:
          resolve(obciSDLogForHour12);
          break;
        case obciStringSDHour24:
          resolve(obciSDLogForHour24);
          break;
        case obciStringSDMin5:
          resolve(obciSDLogForMin5);
          break;
        case obciStringSDMin15:
          resolve(obciSDLogForMin15);
          break;
        case obciStringSDMin30:
          resolve(obciSDLogForMin30);
          break;
        case obciStringSDSec14:
          resolve(obciSDLogForSec14);
          break;
        default:
          reject(new Error(TypeError));
          break;

      }
    });
  },
  /** Stream Data Commands */
  OBCIStreamStart: obciStreamStart,
  OBCIStreamStop: obciStreamStop,
  /** Miscellaneous */
  OBCIMiscQueryRegisterSettings: obciMiscQueryRegisterSettings,
  OBCIMiscQueryRegisterSettingsChannel1: obciMiscQueryRegisterSettingsChannel1,
  OBCIMiscQueryRegisterSettingsChannel2: obciMiscQueryRegisterSettingsChannel2,
  OBCIMiscQueryRegisterSettingsChannel3: obciMiscQueryRegisterSettingsChannel3,
  OBCIMiscQueryRegisterSettingsChannel4: obciMiscQueryRegisterSettingsChannel4,
  OBCIMiscQueryRegisterSettingsChannel5: obciMiscQueryRegisterSettingsChannel5,
  OBCIMiscQueryRegisterSettingsChannel6: obciMiscQueryRegisterSettingsChannel6,
  OBCIMiscQueryRegisterSettingsChannel7: obciMiscQueryRegisterSettingsChannel7,
  OBCIMiscQueryRegisterSettingsChannel8: obciMiscQueryRegisterSettingsChannel8,
  channelSettingsKeyForChannel: channelNumber => {
    return new Promise((resolve, reject) => {
      switch (channelNumber) {
        case 1:
          resolve(new Buffer(obciMiscQueryRegisterSettingsChannel1));
          break;
        case 2:
          resolve(new Buffer(obciMiscQueryRegisterSettingsChannel2));
          break;
        case 3:
          resolve(new Buffer(obciMiscQueryRegisterSettingsChannel3));
          break;
        case 4:
          resolve(new Buffer(obciMiscQueryRegisterSettingsChannel4));
          break;
        case 5:
          resolve(new Buffer(obciMiscQueryRegisterSettingsChannel5));
          break;
        case 6:
          resolve(new Buffer(obciMiscQueryRegisterSettingsChannel6));
          break;
        case 7:
          resolve(new Buffer(obciMiscQueryRegisterSettingsChannel7));
          break;
        case 8:
          resolve(new Buffer(obciMiscQueryRegisterSettingsChannel8));
          break;
        default:
          reject('Invalid channel number');
          break;
      }
    });
  },
  OBCIMiscSoftReset: obciMiscSoftReset,
  /** 16 Channel Commands */
  OBCIChannelMaxNumber8: obciChannelMaxNumber8,
  OBCIChannelMaxNumber16: obciChannelMaxNumber16,
  /** Filters */
  OBCIFilterDisable: obciFilterDisable,
  OBCIFilterEnable: obciFilterEnable,
  /** Triggers */
  OBCITrigger: obciTrigger,
  /** Possible number of channels */
  OBCINumberOfChannelsDaisy: obciNumberOfChannelsDaisy,
  OBCINumberOfChannelsDefault: obciNumberOfChannelsDefault,
  OBCINumberOfChannelsGanglion: obciNumberOfChannelsGanglion,
  /** Possible OpenBCI board types */
  OBCIBoardDaisy: obciBoardDaisy,
  OBCIBoardDefault: obciBoardDefault,
  OBCIBoardGanglion: obciBoardGanglion,
  numberOfChannelsForBoardType: boardType => {
    switch (boardType) {
      case obciBoardDaisy:
        return obciNumberOfChannelsDaisy;
      case obciBoardGanglion:
        return obciNumberOfChannelsGanglion;
      default:
        return obciNumberOfChannelsDefault;
    }
  },
  /** Possible Sample Rates */
  OBCISampleRate125: obciSampleRate125,
  OBCISampleRate250: obciSampleRate250,
  /** Max sample number */
  OBCISampleNumberMax: obciSampleNumberMax,
  /** Packet Size */
  OBCIPacketSize: obciPacketSize,
  /** Notable Bytes */
  OBCIByteStart: obciByteStart,
  OBCIByteStop: obciByteStop,
  /** Errors */
  ErrorInvalidByteLength,
  ErrorInvalidByteStart,
  ErrorInvalidByteStop,
  ErrorUndefinedOrNullInput,
  /** Max Master Buffer Size */
  OBCIMasterBufferSize: obciMasterBufferSize,
  /** Impedance Calculation Variables */
  OBCILeadOffDriveInAmps: obciLeadOffDriveInAmps,
  OBCILeadOffFrequencyHz: obciLeadOffFrequencyHz,
  /** Channel Setter Maker */
  getChannelSetter: channelSetter,
  /** Impedance Setter Maker */
  getImpedanceSetter: impedanceSetter,
  /** Command send delay */
  OBCIWriteIntervalDelayMSLong: obciWriteIntervalDelayMSLong,
  OBCIWriteIntervalDelayMSNone: obciWriteIntervalDelayMSNone,
  OBCIWriteIntervalDelayMSShort: obciWriteIntervalDelayMSShort,
  /** Sync Clocks */
  OBCISyncTimeSent: obciSyncTimeSent,
  OBCISyncTimeSet: obciSyncTimeSet,
  /** Radio Key */
  OBCIRadioKey: obciRadioKey,
  /** Radio Commands */
  OBCIRadioCmdChannelGet: obciRadioCmdChannelGet,
  OBCIRadioCmdChannelSet: obciRadioCmdChannelSet,
  OBCIRadioCmdChannelSetOverride: obciRadioCmdChannelSetOverride,
  OBCIRadioCmdPollTimeGet: obciRadioCmdPollTimeGet,
  OBCIRadioCmdPollTimeSet: obciRadioCmdPollTimeSet,
  OBCIRadioCmdBaudRateSetDefault: obciRadioCmdBaudRateSetDefault,
  OBCIRadioCmdBaudRateSetFast: obciRadioCmdBaudRateSetFast,
  OBCIRadioCmdSystemStatus: obciRadioCmdSystemStatus,
  /** Impedance */
  OBCIImpedanceTextBad: obciImpedanceTextBad,
  OBCIImpedanceTextGood: obciImpedanceTextGood,
  OBCIImpedanceTextInit: obciImpedanceTextInit,
  OBCIImpedanceTextOk: obciImpedanceTextOk,
  OBCIImpedanceTextNone: obciImpedanceTextNone,
  OBCIImpedanceThresholdBadMax: obciImpedanceThresholdBadMax,
  OBCIImpedanceSeriesResistor: obciImpedanceSeriesResistor,
  getTextForRawImpedance: (value) => {
    if (value > obciImpedanceThresholdGoodMin && value < obciImpedanceThresholdGoodMax) {
      return obciImpedanceTextGood;
    } else if (value > obciImpedanceThresholdOkMin && value < obciImpedanceThresholdOkMax) {
      return obciImpedanceTextOk;
    } else if (value > obciImpedanceThresholdBadMin && value < obciImpedanceThresholdBadMax) {
      return obciImpedanceTextBad;
    } else {
      return obciImpedanceTextNone;
    }
  },
  /** Simulator */
  OBCISimulatorPortName: obciSimulatorPortName,
  /**
  * Stream packet types/codes
  */
  OBCIStreamPacketStandardAccel: obciStreamPacketStandardAccel,
  OBCIStreamPacketStandardRawAux: obciStreamPacketStandardRawAux,
  OBCIStreamPacketUserDefinedType: obciStreamPacketUserDefinedType,
  OBCIStreamPacketAccelTimeSyncSet: obciStreamPacketAccelTimeSyncSet,
  OBCIStreamPacketAccelTimeSynced: obciStreamPacketAccelTimeSynced,
  OBCIStreamPacketRawAuxTimeSyncSet: obciStreamPacketRawAuxTimeSyncSet,
  OBCIStreamPacketRawAuxTimeSynced: obciStreamPacketRawAuxTimeSynced,
  /** fun funcs */
  isNumber,
  isBoolean,
  isString,
  /** OpenBCI V3 Standard Packet Positions */
  OBCIPacketPositionStartByte: obciPacketPositionStartByte,
  OBCIPacketPositionStopByte: obciPacketPositionStopByte,
  OBCIPacketPositionStartAux: obciPacketPositionStartAux,
  OBCIPacketPositionStopAux: obciPacketPositionStopAux,
  OBCIPacketPositionChannelDataStart: obciPacketPositionChannelDataStart,
  OBCIPacketPositionChannelDataStop: obciPacketPositionChannelDataStop,
  OBCIPacketPositionSampleNumber: obciPacketPositionSampleNumber,
  OBCIPacketPositionTimeSyncAuxStart: obciPacketPositionTimeSyncAuxStart,
  OBCIPacketPositionTimeSyncAuxStop: obciPacketPositionTimeSyncAuxStop,
  OBCIPacketPositionTimeSyncTimeStart: obciPacketPositionTimeSyncTimeStart,
  OBCIPacketPositionTimeSyncTimeStop: obciPacketPositionTimeSyncTimeStop,
  /** Possible Simulator Line Noise injections */
  OBCISimulatorLineNoiseHz60: obciSimulatorLineNoiseHz60,
  OBCISimulatorLineNoiseHz50: obciSimulatorLineNoiseHz50,
  OBCISimulatorLineNoiseNone: obciSimulatorLineNoiseNone,
  /** Firmware version indicator */
  OBCIFirmwareV1: obciFirmwareV1,
  OBCIFirmwareV2: obciFirmwareV2,
  /** Time synced accel packet */
  OBCIAccelAxisX: obciAccelAxisX,
  OBCIAccelAxisY: obciAccelAxisY,
  OBCIAccelAxisZ: obciAccelAxisZ,
  /** Time from board */
  OBCIStreamPacketTimeByteSize: obciStreamPacketTimeByteSize,
  /** Parse */
  OBCIParseDaisy: obciParseDaisy,
  OBCIParseFailure: obciParseFailure,
  OBCIParseFirmware: obciParseFirmware,
  OBCIParseEOT: obciParseEOT,
  OBCIParseSuccess: obciParseSuccess,
  /** Used in parsing incoming serial data*/
  OBCIParsingChannelSettings: obciParsingChannelSettings,
  OBCIParsingEOT: obciParsingEOT,
  OBCIParsingNormal: obciParsingNormal,
  OBCIParsingReset: obciParsingReset,
  OBCIParsingTimeSyncSent: obciParsingTimeSyncSent,
  /** Timeouts */
  OBCITimeoutProcessBytes: obciTimeoutProcessBytes,
  /** Simulator Board Configurations */
  OBCISimulatorRawAux: obciSimulatorRawAux,
  OBCISimulatorStandard: obciSimulatorStandard,
  /** Radio Channel Limits */
  OBCIRadioChannelMax: obciRadioChannelMax,
  OBCIRadioChannelMin: obciRadioChannelMin,
  OBCIRadioPollTimeMax: obciRadioPollTimeMax,
  OBCIRadioPollTimeMin: obciRadioPollTimeMin,
  /** Time sync stuff */
  OBCITimeSyncArraySize: obciTimeSyncArraySize,
  OBCITimeSyncMultiplierWithSyncConf: obciTimeSyncMultiplierWithSyncConf,
  OBCITimeSyncMultiplierWithoutSyncConf: obciTimeSyncMultiplierWithoutSyncConf,
  obciTimeSyncThresholdTransFailureMS,
  /** Baud Rates */
  OBCIRadioBaudRateDefault: obciRadioBaudRateDefault,
  OBCIRadioBaudRateDefaultStr: obciRadioBaudRateDefaultStr,
  OBCIRadioBaudRateFast: obciRadioBaudRateFast,
  OBCIRadioBaudRateFastStr: obciRadioBaudRateFastStr,
  getVersionNumber
};

/**
* @description To add a usability abstraction layer above channel setting commands. Due to the
*          extensive and highly specific nature of the channel setting command chain, this
*          will take several different human readable inputs and merge to one array filled
*          with the correct commands, prime for sending directly to the write command.
* @param channelNumber - Number (1-16)
* @param powerDown - Bool (true -> OFF, false -> ON (default))
*          turns the channel on or off
* @param gain - Number (1,2,4,6,8,12,24(default))
*          sets the gain for the channel
* @param inputType - String (normal,shorted,biasMethod,mvdd,temp,testsig,biasDrp,biasDrn)
*          selects the ADC channel input source
* @param bias - Bool (true -> Include in bias (default), false -> remove from bias)
*          selects to include the channel input in bias generation
* @param srb2 - Bool (true -> Connect this input to SRB2 (default),
*                     false -> Disconnect this input from SRB2)
*          Select to connect (true) this channel's P input to the SRB2 pin. This closes
*              a switch between P input and SRB2 for the given channel, and allows the
*              P input to also remain connected to the ADC.
* @param srb1 - Bool (true -> connect all N inputs to SRB1,
*                     false -> Disconnect all N inputs from SRB1 (default))
*          Select to connect (true) all channels' N inputs to SRB1. This effects all pins,
*              and disconnects all N inputs from the ADC.
* @returns {Promise} resolves array of commands to be sent, rejects on bad input or no board
*/
function channelSetter (channelNumber, powerDown, gain, inputType, bias, srb2, srb1) {

  // Used to store and assemble the commands
  var cmdPowerDown,
    cmdBias,
    cmdSrb2,
    cmdSrb1;

  return new Promise(function (resolve, reject) {
    // Validate the input
    if (!isNumber(channelNumber)) reject("channelNumber must be of type 'number' ");
    if (!isBoolean(powerDown)) reject("powerDown must be of type 'boolean' ");
    if (!isNumber(gain)) reject("gain must be of type 'number' ");
    if (!isString(inputType)) reject("inputType must be of type 'string' ");
    if (!isBoolean(bias)) reject("bias must be of type 'boolean' ");
    if (!isBoolean(srb2)) reject("srb1 must be of type 'boolean' ");
    if (!isBoolean(srb1)) reject("srb2 must be of type 'boolean' ");

    // Set Channel Number
    var p1 = commandChannelForCmd(channelNumber)
      .catch(err => reject(err));

    // Set POWER_DOWN
    cmdPowerDown = powerDown ? obciChannelCmdPowerOff : obciChannelCmdPowerOn;

    // Set Gain
    var p2 = commandForGain(gain)
      .catch(err => reject(err));

    // Set ADC string
    var p3 = commandForADCString(inputType)
      .catch(err => reject(err));

    // Set BIAS
    cmdBias = bias ? obciChannelCmdBiasInclude : obciChannelCmdBiasRemove;

    // Set SRB2
    cmdSrb2 = srb2 ? obciChannelCmdSRB2Connect : obciChannelCmdSRB2Diconnect;

    // Set SRB1
    cmdSrb1 = srb1 ? obciChannelCmdSRB1Connect : obciChannelCmdSRB1Diconnect;

    var newChannelSettingsObject = {
      channelNumber: channelNumber,
      powerDown: powerDown,
      gain: gain,
      inputType: inputType,
      bias: bias,
      srb2: srb2,
      srb1: srb1
    };

    Promise.all([p1, p2, p3]).then(function (values) {
      var outputArray = [
        obciChannelCmdSet,
        values[0],
        cmdPowerDown,
        values[1],
        values[2],
        cmdBias,
        cmdSrb2,
        cmdSrb1,
        obciChannelCmdLatch
      ];
      // console.log(outputArray)
      resolve(outputArray, newChannelSettingsObject);
    });
  });
}

/**
* @description To build the array of commands to send to the board to measure impedance
* @param channelNumber
* @param pInputApplied - Bool (true -> Test Signal Applied, false -> Test Signal Not Applied (default))
*          applies the test signal to the P input
* @param nInputApplied - Bool (true -> Test Signal Applied, false -> Test Signal Not Applied (default))
*          applies the test signal to the N input
* @returns {Promise} - fulfilled will contain an array of comamnds
*/
function impedanceSetter (channelNumber, pInputApplied, nInputApplied) {
  var cmdNInputApplied,
    cmdPInputApplied;
  return new Promise((resolve, reject) => {
    // validate inputs
    if (!isNumber(channelNumber)) reject("channelNumber must be of type 'number' ");
    if (!isBoolean(pInputApplied)) reject("pInputApplied must be of type 'boolean' ");
    if (!isBoolean(nInputApplied)) reject("nInputApplied must be of type 'boolean' ");

    // Set pInputApplied
    cmdPInputApplied = pInputApplied ? obciChannelImpedanceTestSignalApplied : obciChannelImpedanceTestSignalAppliedNot;

    // Set nInputApplied
    cmdNInputApplied = nInputApplied ? obciChannelImpedanceTestSignalApplied : obciChannelImpedanceTestSignalAppliedNot;

    // Set Channel Number
    commandChannelForCmd(channelNumber).then(command => {
      var outputArray = [
        obciChannelImpedanceSet,
        command,
        cmdPInputApplied,
        cmdNInputApplied,
        obciChannelImpedanceLatch
      ];
      // console.log(outputArray)
      resolve(outputArray);
    }).catch(err => reject(err));
  });
}

function isNumber (input) {
  return (typeof input === 'number');
}
function isBoolean (input) {
  return (typeof input === 'boolean');
}
function isString (input) {
  return (typeof input === 'string');
}

function commandForADCString (adcString) {
  return new Promise(function (resolve, reject) {
    switch (adcString) {
      case obciStringADCNormal:
        resolve(obciChannelCmdADCNormal);
        break;
      case obciStringADCShorted:
        resolve(obciChannelCmdADCShorted);
        break;
      case obciStringADCBiasMethod:
        resolve(obciChannelCmdADCBiasMethod);
        break;
      case obciStringADCMvdd:
        resolve(obciChannelCmdADCMVDD);
        break;
      case obciStringADCTemp:
        resolve(obciChannelCmdADCTemp);
        break;
      case obciStringADCTestSig:
        resolve(obciChannelCmdADCTestSig);
        break;
      case obciStringADCBiasDrp:
        resolve(obciChannelCmdADCBiasDRP);
        break;
      case obciStringADCBiasDrn:
        resolve(obciChannelCmdADCBiasDRN);
        break;
      default:
        reject('Invalid ADC string');
        break;
    }
  });
}

function commandForGain (gainSetting) {
  return new Promise(function (resolve, reject) {
    switch (gainSetting) {
      case 1:
        resolve(obciChannelCmdGain_1);
        break;
      case 2:
        resolve(obciChannelCmdGain_2);
        break;
      case 4:
        resolve(obciChannelCmdGain_4);
        break;
      case 6:
        resolve(obciChannelCmdGain_6);
        break;
      case 8:
        resolve(obciChannelCmdGain_8);
        break;
      case 12:
        resolve(obciChannelCmdGain_12);
        break;
      case 24:
        resolve(obciChannelCmdGain_24);
        break;
      default:
        reject('Invalid gain setting of ' + gainSetting + ' tisk tisk, gain must be (1,2,4,6,8,12,24)');
        break;
    }
  });
}

function commandChannelForCmd (channelNumber) {
  return new Promise(function (resolve, reject) {
    switch (channelNumber) {
      case 1:
        resolve(obciChannelCmdChannel_1);
        break;
      case 2:
        resolve(obciChannelCmdChannel_2);
        break;
      case 3:
        resolve(obciChannelCmdChannel_3);
        break;
      case 4:
        resolve(obciChannelCmdChannel_4);
        break;
      case 5:
        resolve(obciChannelCmdChannel_5);
        break;
      case 6:
        resolve(obciChannelCmdChannel_6);
        break;
      case 7:
        resolve(obciChannelCmdChannel_7);
        break;
      case 8:
        resolve(obciChannelCmdChannel_8);
        break;
      case 9:
        resolve(obciChannelCmdChannel_9);
        break;
      case 10:
        resolve(obciChannelCmdChannel_10);
        break;
      case 11:
        resolve(obciChannelCmdChannel_11);
        break;
      case 12:
        resolve(obciChannelCmdChannel_12);
        break;
      case 13:
        resolve(obciChannelCmdChannel_13);
        break;
      case 14:
        resolve(obciChannelCmdChannel_14);
        break;
      case 15:
        resolve(obciChannelCmdChannel_15);
        break;
      case 16:
        resolve(obciChannelCmdChannel_16);
        break;
      default:
        reject('Invalid channel number');
        break;
    }
  });
}
function channelSettingsObjectDefault (channelNumber) {
  return {
    channelNumber: channelNumber,
    powerDown: false,
    gain: 24,
    inputType: obciStringADCNormal,
    bias: true,
    srb2: true,
    srb1: false
  };
}

/**
* @description This function is used to extract the major version from a github
*  version string.
* @returns {Number} The major version number
*/
function getVersionNumber (versionStr) {
  return Number(versionStr[1]);
}
