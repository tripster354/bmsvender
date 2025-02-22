import {Dimensions, Platform} from 'react-native';
import {isIphoneWithNotch} from './Utils';

const {width, height} = Dimensions.get('window');

const guidelineBaseWidth = 428;
const guidelineBaseHeight = 926;

const scale = size => (width / guidelineBaseWidth) * size;
const resizeUI = (size, useResize = false) => {
  if (isIphoneWithNotch() || Platform.OS === 'android' || useResize) {
    return (height / guidelineBaseHeight) * size;
  }
  return (width / guidelineBaseWidth) * size;
};
const moderateScale = (size, factor = 0.5) =>
  size + (scale(size) - size) * factor;

export {scale, resizeUI, moderateScale};
