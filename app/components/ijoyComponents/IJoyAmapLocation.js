import { PropTypes } from 'react';
import { NativeModules,DeviceEventEmitter } from 'react-native';
const AMapLocation = NativeModules.IJoyAmapLocation;
const onLocationChanged = 'mapLocationChanged';


export default class ALocation {

  static startLocation() {
    AMapLocation.startLocation();
  }

  static stopLocation() {
    AMapLocation.stopLocation();
  }

  static addEventListener(handler) {

    const listener = DeviceEventEmitter.addListener(
        onLocationChanged,
        handler,
    );
    return listener;
  }
}
