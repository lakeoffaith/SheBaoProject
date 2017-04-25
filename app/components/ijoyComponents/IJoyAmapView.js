import { PropTypes } from 'react';
import { requireNativeComponent, View } from 'react-native';

var iface = {
  name: 'IJoyAmapView',
  propTypes: {
    ...View.propTypes // 包含默认的View的属性
  },
};

module.exports = requireNativeComponent('IJoyAmapView', iface);
