import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    Image,
} from 'react-native';

const width =Dimensions.get("window").width;
const height=Dimensions.get("window").height;
const scale=Dimensions.get("window").scale;

module.exports = {

  // Core
  width,
  height,
  scale,

};

// 1———-mdpi Android 设备 (160 dpi)
// 1.5——–hdpi Android 设备 (240 dpi)
// 2———-iPhone 4,4S,5,5c,5s,6,6s,7 xhdpi Android 设备 (320 dpi)
// 3———-iPhone 6/6s/7 plus xxhdpi Android 设备 (480 dpi)
// 3.5——–测试为2k分辨率屏幕
