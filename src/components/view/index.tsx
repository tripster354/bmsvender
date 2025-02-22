import React from 'react';
import {StyleProp, View as RView, ViewStyle} from 'react-native';
import Colors from '../../utils/theme/colors';

type Props = {
  style?: StyleProp<ViewStyle>;
  pointerEvents?: any;
  marginVertical?: number;
  margin?: number;
  marginTop?: number | string;
  marginBottom?: number | string;
  marginHorizontal?: number;
  marginLeft?: number | string;
  marginRight?: number | string;
  marginStart?: number | string;
  children: any;
  textAlign?: 'center' | 'left' | 'right';
  color?: string;
  onPress?: () => void;
};

const View = (props: Props) => {
  const {
    margin = 0,
    marginHorizontal = 0,
    marginVertical = 0,
    marginLeft = 0,
    marginRight = 0,
    style = {},
    textAlign = 'left',
    color = Colors.black,
    marginTop = 0,
    marginBottom = 0,
    marginStart = 0,
    onPress = undefined,
  } = props;
  let newStyle: any = {};

  if (margin) {
    newStyle['margin'] = margin;
  } else if (marginHorizontal) {
    newStyle['marginHorizontal'] = marginHorizontal;
  } else if (marginVertical) {
    newStyle['marginVertical'] = marginVertical;
  }
  if (marginLeft) {
    newStyle['marginLeft'] = marginLeft;
  } else if (marginRight) {
    newStyle['marginRight'] = marginRight;
  }

  if (marginTop) {
    newStyle['marginTop'] = marginTop;
  }
  if (marginBottom) {
    newStyle['marginBottom'] = marginBottom;
  }
  if (marginStart) {
    newStyle['marginStart'] = marginStart;
  }

  if (textAlign) {
    newStyle['textAlign'] = textAlign;
  }
  if (color) {
    newStyle['color'] = color;
  }
  return <RView {...props} />;
};

export default View;
