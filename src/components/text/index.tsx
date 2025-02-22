import React from 'react';
import {StyleSheet, Text, TextStyle} from 'react-native';
import {AppColors, AppFonts} from '../../constants';
import {composeStyle} from '../../constants/helper';
import {resizeUI} from '../../../Helper/Constants';

type Props = {
  marginVertical?: number;
  margin?: number;
  marginTop?: number | string;
  marginBottom?: number | string;
  marginHorizontal?: number;
  marginLeft?: number | string;
  marginRight?: number | string;
  marginStart?: number | string;
  children: any;
  style?: TextStyle;
  textAlign?: 'center' | 'left' | 'right';
  color?: string;
  tag?:
    | 'r11'
    | 'r12'
    | 'r13'
    | 'r14'
    | 'r15'
    | 'm11'
    | 'm12'
    | 'm13'
    | 'm14'
    | 'm15'
    | 'm16'
    | 'm17'
    | 'm20'
    | 'sb10'
    | 'sb11'
    | 'sb12'
    | 'sb13'
    | 'sb14'
    | 'sb15'
    | 'sb16'
    | 'sb17'
    | 'sb18'
    | 'sb22'
    | 'sb24'
    | 'sb32'
    | 'sbp17'
    | 'sbp32'
    | 'sb8'
    | 'b14'
    | 'b16'
    | 'b22'
    | 'b24'
    | 'b20'
    | 'nH35'
    | 'nEx15'
    | 'nH16'
    | 'b28'
    | 'moR16'
    | 'moSB16'
    | 'moM14'
    | 'moM15'
    | 'nH14'
    | 'nH25'
    | 'nH12'
    | 'moSB18'
    | 'moM16'
    | 'moR12'
    | 'moSB14'
    | 'moR10'
    | 'moM12'
    | 'moB20'
    | 'moR14'
    | 'moM11'
    | 'moSB12'
    | 'moB12'
    | 'moL12'
    | 'moSB15'
    | 'nEx16'
    | 'nEx13'
    | 'moR15'
    | 'mon32'
    | 'nEx25'
    | 'moSB22'
    | 'moSB28'
    | 'moM9'
    | 'moM10'
    | 'moM13'
    | 'moB25'
    | 'moB22'
    | 'moL14'
    | 'grR10'
    | 'grR12'
    | 'grR14'
    | 'grR15'
    | 'grR16'
    | 'grR17'
    | 'grR18'
    | 'grR19'
    | 'grR20'
    | 'grR24'
    | 'grL10'
    | 'grL12'
    | 'grL15'
    | 'grM12'
    | 'grM14'
    | 'grM15'
    | 'grM16'
    | 'grM18'
    | 'grM25'
    | 'grM32'
    | 'grM36'
    | 'grB10'
    | 'grB14'
    | 'grB16'
    | 'grB18'
    | 'grB22'
    | 'grB24'
    | string;
  onPress?: () => void;
  single?: boolean;
  numberOfLines?: number;
};

const RText = (props: Props) => {
  const {
    margin = 0,
    marginHorizontal = 0,
    marginVertical = 0,
    marginLeft = 0,
    marginRight = 0,
    style = {},
    textAlign = 'left',
    color = AppColors.solid.black,
    tag = 'r15',
    marginTop = 0,
    marginBottom = 0,
    marginStart = 0,
    onPress = undefined,
    single = false,
    numberOfLines = undefined,
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
  if (tag) {
    newStyle = composeStyle(newStyle, styles[tag]);
  }

  return (
    <Text
      {...{props}}
      style={composeStyle(newStyle, style)}
      onPress={onPress}
      numberOfLines={single ? 1 : numberOfLines}>
      {props.children}
    </Text>
  );
};

export default RText;

const styles = StyleSheet.create({
  r11: {
    fontSize: resizeUI(11),
    lineHeight: resizeUI(24),
    fontFamily: AppFonts.Regular,
  },
  r12: {
    fontSize: resizeUI(12),
    lineHeight: resizeUI(19.2),
    fontFamily: AppFonts.Regular,
  },
  r13: {
    fontSize: resizeUI(13),
    lineHeight: resizeUI(24),
    fontFamily: AppFonts.Regular,
  },
  r14: {
    fontSize: resizeUI(14),
    lineHeight: resizeUI(22),
    fontFamily: AppFonts.Regular,
  },
  r15: {
    fontSize: resizeUI(15),
    lineHeight: resizeUI(24),
    fontFamily: AppFonts.Regular,
  },
  m11: {
    fontSize: resizeUI(11),
    lineHeight: resizeUI(24),
    fontFamily: AppFonts.Medium,
  },
  m12: {
    fontSize: resizeUI(12),
    lineHeight: resizeUI(19.2),
    fontFamily: AppFonts.Medium,
  },
  m13: {
    fontSize: resizeUI(13),
    lineHeight: resizeUI(24),
    fontFamily: AppFonts.Medium,
  },
  m14: {
    fontSize: resizeUI(14),
    lineHeight: resizeUI(21),
    fontFamily: AppFonts.Medium,
  },
  m15: {
    fontSize: resizeUI(15),
    lineHeight: resizeUI(24),
    fontFamily: AppFonts.Medium,
  },
  m16: {
    fontSize: resizeUI(16),
    lineHeight: resizeUI(18),
    fontFamily: AppFonts.Medium,
  },
  m17: {
    fontSize: resizeUI(17),
    lineHeight: resizeUI(24),
    fontFamily: AppFonts.Medium,
  },
  m20: {
    fontSize: resizeUI(20),
    lineHeight: resizeUI(24),
    fontFamily: AppFonts.Medium,
  },
  sb8: {
    fontSize: resizeUI(8),
    lineHeight: resizeUI(14),
    fontFamily: AppFonts.SemiBold,
  },
  sb10: {
    fontSize: resizeUI(10),
    lineHeight: resizeUI(14),
    fontFamily: AppFonts.SemiBold,
  },
  sb11: {
    fontSize: resizeUI(11),
    lineHeight: resizeUI(28),
    fontFamily: AppFonts.SemiBold,
  },
  sb12: {
    fontSize: resizeUI(12),
    lineHeight: resizeUI(18),
    fontFamily: AppFonts.SemiBold,
  },
  sb13: {
    fontSize: resizeUI(13),
    lineHeight: resizeUI(28),
    fontFamily: AppFonts.SemiBold,
  },
  sb14: {
    fontSize: resizeUI(14),
    lineHeight: resizeUI(21),
    fontFamily: AppFonts.SemiBold,
  },
  sb15: {
    fontSize: resizeUI(15),
    lineHeight: resizeUI(28),
    fontFamily: AppFonts.SemiBold,
  },
  sb16: {
    fontSize: resizeUI(16),
    lineHeight: resizeUI(22),
    fontFamily: AppFonts.SemiBold,
  },
  sb17: {
    fontSize: resizeUI(17),
    lineHeight: resizeUI(28),
    fontFamily: AppFonts.SemiBold,
  },
  sb18: {
    fontSize: resizeUI(18),
    lineHeight: resizeUI(28),
    fontFamily: AppFonts.SemiBold,
  },
  sb22: {
    fontSize: resizeUI(22),
    lineHeight: resizeUI(28),
    fontFamily: AppFonts.SemiBold,
  },
  sb24: {
    fontSize: resizeUI(24),
    lineHeight: resizeUI(28),
    fontFamily: AppFonts.SemiBold,
  },
  sb32: {
    fontSize: resizeUI(32),
    lineHeight: resizeUI(32),
    fontFamily: AppFonts.SemiBold,
  },

  sbp17: {
    fontSize: resizeUI(17),
    lineHeight: resizeUI(28),
    fontFamily: AppFonts.SemiBold,
  },
  sbp32: {
    fontSize: resizeUI(32),
    lineHeight: resizeUI(40),
    fontFamily: AppFonts.SemiBold,
  },
  b24: {
    fontSize: resizeUI(24),
    fontFamily: AppFonts.Bold,
    lineHeight: resizeUI(33),
  },
  b28: {
    fontSize: resizeUI(28),
    fontFamily: AppFonts.Montserrat_Bold,
    lineHeight: resizeUI(36),
  },
  b22: {
    fontSize: resizeUI(22),
    fontFamily: AppFonts.Bold,
    lineHeight: resizeUI(38),
  },
  b16: {
    fontSize: resizeUI(16),
    lineHeight: resizeUI(22),
    fontFamily: AppFonts.Bold,
  },
  b14: {
    fontSize: resizeUI(14),
    lineHeight: resizeUI(22),
    fontFamily: AppFonts.Bold,
  },
  b20: {
    fontSize: resizeUI(20),
    lineHeight: resizeUI(28),
    fontFamily: AppFonts.Bold,
  },
  nH35: {
    fontSize: resizeUI(35),
    // lineHeight: 42,
    fontFamily: AppFonts.Nexa_Heavy,
  },
  nEx15: {
    fontSize: resizeUI(15),
    // lineHeight: 22,
    fontFamily: AppFonts.Nexa_Extra_Light,
  },
  nH12: {
    fontSize: resizeUI(12),
    lineHeight: resizeUI(20),
    fontFamily: AppFonts.Nexa_Heavy,
  },
  nH14: {
    fontSize: resizeUI(14),
    lineHeight: resizeUI(22),
    fontFamily: AppFonts.Nexa_Heavy,
  },
  nH16: {
    fontSize: resizeUI(16),
    lineHeight: resizeUI(22),
    fontFamily: AppFonts.Nexa_Heavy,
  },
  nH18: {
    fontSize: resizeUI(18),
    lineHeight: resizeUI(25),
    fontFamily: AppFonts.Nexa_Heavy,
  },
  nH25: {
    fontSize: resizeUI(25),
    lineHeight: resizeUI(32),
    fontFamily: AppFonts.Nexa_Heavy,
  },
  moR16: {
    fontSize: resizeUI(16),
    lineHeight: resizeUI(22),
    fontFamily: AppFonts.Montserrat_Regular,
  },
  moSB12: {
    fontSize: resizeUI(12),
    lineHeight: resizeUI(18),
    fontFamily: AppFonts.Montserrat_SemiBold,
  },
  moSB14: {
    fontSize: resizeUI(14),
    lineHeight: resizeUI(20),
    fontFamily: AppFonts.Montserrat_SemiBold,
  },
  moSB16: {
    fontSize: resizeUI(16),
    lineHeight: resizeUI(22),
    fontFamily: AppFonts.Montserrat_SemiBold,
  },
  moSB18: {
    fontSize: resizeUI(18),
    lineHeight: resizeUI(22),
    fontFamily: AppFonts.Montserrat_SemiBold,
  },
  moM9: {
    fontSize: resizeUI(9),
    lineHeight: resizeUI(14),
    fontFamily: AppFonts.Montserrat_Medium,
  },
  moM10: {
    fontSize: resizeUI(10),
    lineHeight: resizeUI(14),
    fontFamily: AppFonts.Montserrat_Medium,
  },
  moM13: {
    fontSize: resizeUI(13),
    lineHeight: resizeUI(18),
    fontFamily: AppFonts.Montserrat_Medium,
  },
  moM14: {
    fontSize: resizeUI(14),
    lineHeight: resizeUI(20),
    fontFamily: AppFonts.Montserrat_Medium,
  },
  moM15: {
    fontSize: resizeUI(15),
    lineHeight: resizeUI(21),
    fontFamily: AppFonts.Montserrat_Medium,
  },
  moM16: {
    fontSize: resizeUI(16),
    lineHeight: resizeUI(21),
    fontFamily: AppFonts.Montserrat_Medium,
  },
  moR12: {
    fontSize: resizeUI(12),
    lineHeight: 22,
    fontFamily: AppFonts.Montserrat_Regular,
  },
  moR10: {
    fontSize: resizeUI(10),
    lineHeight: resizeUI(14),
    fontFamily: AppFonts.Montserrat_Regular,
  },
  moR14: {
    fontSize: resizeUI(14),
    lineHeight: resizeUI(18),
    fontFamily: AppFonts.Montserrat_Regular,
  },
  moM11: {
    fontSize: resizeUI(11),
    lineHeight: resizeUI(16),
    fontFamily: AppFonts.Montserrat_Medium,
  },
  moM12: {
    fontSize: resizeUI(12),
    lineHeight: resizeUI(16),
    fontFamily: AppFonts.Montserrat_Medium,
  },
  moM44: {
    fontSize: resizeUI(44),
    lineHeight: resizeUI(48),
    fontFamily: AppFonts.Montserrat_Medium,
  },
  moB20: {
    fontSize: resizeUI(20),
    lineHeight: 26,
    fontFamily: AppFonts.Montserrat_Bold,
  },
  moB22: {
    fontSize: resizeUI(22),
    lineHeight: resizeUI(28),
    fontFamily: AppFonts.Montserrat_Bold,
  },
  moB25: {
    fontSize: resizeUI(25),
    lineHeight: resizeUI(32),
    fontFamily: AppFonts.Montserrat_Bold,
  },
  moB12: {
    fontSize: resizeUI(12),
    lineHeight: 18,
    fontFamily: AppFonts.Montserrat_Bold,
  },
  moL12: {
    fontSize: resizeUI(12),
    lineHeight: resizeUI(18),
    fontFamily: AppFonts.Montserrat_Light,
  },
  moL14: {
    fontSize: resizeUI(14),
    lineHeight: 20,
    fontFamily: AppFonts.Montserrat_Light,
  },
  moSB15: {
    fontSize: resizeUI(15),
    lineHeight: resizeUI(20),
    fontFamily: AppFonts.Montserrat_SemiBold,
  },
  moSB22: {
    fontSize: resizeUI(22),
    lineHeight: resizeUI(27),
    fontFamily: AppFonts.Montserrat_SemiBold,
  },
  moSB28: {
    fontSize: resizeUI(28),
    lineHeight: resizeUI(32),
    fontFamily: AppFonts.Montserrat_SemiBold,
  },
  nEx16: {
    fontSize: resizeUI(16),
    // lineHeight: 22,
    fontFamily: AppFonts.Nexa_Extra_Light,
  },
  nEx13: {
    fontSize: resizeUI(13),
    // lineHeight: 22,
    fontFamily: AppFonts.Nexa_Extra_Light,
  },
  moR15: {
    fontSize: resizeUI(15),
    lineHeight: resizeUI(19),
    fontFamily: AppFonts.Montserrat_Regular,
  },
  mon32: {
    fontSize: resizeUI(32),
    lineHeight: resizeUI(32),
    fontFamily: AppFonts.Monalisa_Serif,
  },
  nEx25: {
    fontSize: resizeUI(25),
    fontFamily: AppFonts.Nexa_Extra_Light,
  },
  grR10: {
    fontSize: resizeUI(10),
    fontFamily: AppFonts.Graphit_Regular,
  },
  grR12: {
    fontSize: resizeUI(12),
    fontFamily: AppFonts.Graphit_Regular,
  },
  grR14: {
    fontSize: resizeUI(14),
    fontFamily: AppFonts.Graphit_Regular,
  },
  grR15: {
    fontSize: resizeUI(15),
    fontFamily: AppFonts.Graphit_Regular,
  },
  grR16: {
    fontSize: resizeUI(16),
    fontFamily: AppFonts.Graphit_Regular,
  },
  grR17: {
    fontSize: resizeUI(17),
    fontFamily: AppFonts.Graphit_Regular,
  },
  grR18: {
    fontSize: resizeUI(18),
    fontFamily: AppFonts.Graphit_Regular,
  },
  grR19: {
    fontSize: resizeUI(19),
    fontFamily: AppFonts.Graphit_Regular,
  },
  grR20: {
    fontSize: resizeUI(20),
    fontFamily: AppFonts.Graphit_Regular,
  },
  grR24: {
    fontSize: resizeUI(24),
    fontFamily: AppFonts.Graphit_Regular,
  },

  grM12: {
    fontSize: resizeUI(12),
    fontFamily: AppFonts.Graphit_Medium,
  },
  grM14: {
    fontSize: resizeUI(14),
    fontFamily: AppFonts.Graphit_Medium,
  },
  grM15: {
    fontSize: resizeUI(15),
    fontFamily: AppFonts.Graphit_Medium,
  },
  grM16: {
    fontSize: resizeUI(16),
    fontFamily: AppFonts.Graphit_Medium,
  },
  grM18: {
    fontSize: resizeUI(18),
    fontFamily: AppFonts.Graphit_Medium,
  },
  grM25: {
    fontSize: resizeUI(25),
    fontFamily: AppFonts.Graphit_Medium,
  },
  grM32: {
    fontSize: resizeUI(32),
    fontFamily: AppFonts.Graphit_Medium,
  },
  grM36: {
    fontSize: resizeUI(36),
    fontFamily: AppFonts.Graphit_Medium,
  },
  grL10: {
    fontSize: resizeUI(10),
    fontFamily: AppFonts.Graphit_Light,
  },
  grL12: {
    fontSize: resizeUI(12),
    fontFamily: AppFonts.Graphit_Light,
  },
  grL15: {
    fontSize: resizeUI(15),
    fontFamily: AppFonts.Graphit_Light,
  },
  grB14: {
    fontSize: resizeUI(14),
    fontFamily: AppFonts.Graphit_Bold,
  },
  grB10: {
    fontSize: resizeUI(10),
    fontFamily: AppFonts.Graphit_Bold,
  },
  grB16: {
    fontSize: resizeUI(16),
    fontFamily: AppFonts.Graphit_Bold,
  },
  grB18: {
    fontSize: resizeUI(18),
    fontFamily: AppFonts.Graphit_Bold,
  },
  grB22: {
    fontSize: resizeUI(22),
    fontFamily: AppFonts.Graphit_Bold,
  },
  grB24: {
    fontSize: resizeUI(24),
    fontFamily: AppFonts.Graphit_Bold,
  },
});
