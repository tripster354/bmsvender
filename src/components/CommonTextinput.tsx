import {
  Image,
  ImageSourcePropType,
  KeyboardTypeOptions,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React from 'react';
import {dH, dW} from '../utils/dynamicHeigthWidth';
import Colors from '../utils/theme/colors';
import fonts from '../assets/fonts';

interface ICommonTextInput {
  InputIcon?: ImageSourcePropType;
  RigthIcon?: ImageSourcePropType;
  text?: string;
  secure?: boolean;
  onChange?: (value: string) => void;
  placeholderText?: string;
  keyBoradTextType?: KeyboardTypeOptions;
  placeholderTextColor?: string;
  NumberLegth?: number;
  multiline?: boolean;
  onBlur?: any;
  touched?: any;
  error?: string;
  onFocus?: any;
  editable?: boolean;
}

const CommonTextinput = (props: ICommonTextInput) => {
  return (
    <>
      <View
        style={[
          styles.MainTextinputView,
          {height: props.multiline ? dH(229) : dH(117)},
        ]}>
        {props.multiline ? null : (
          <Image
            source={props.InputIcon}
            style={styles.IconStyle}
            resizeMode={'contain'}
          />
        )}
        {props.multiline ? null : <View style={styles.VerticalLine} />}
        <TextInput
          value={props.text}
          onChangeText={props.onChange}
          secureTextEntry={props.secure}
          keyboardType={props.keyBoradTextType}
          maxLength={props.NumberLegth}
          style={styles.TextinputStyle}
          placeholder={props.placeholderText}
          placeholderTextColor={props.placeholderTextColor}
          multiline={props.multiline}
          textAlignVertical={props.multiline ? 'top' : 'center'}
          onBlur={props.onBlur}
          onFocus={props.onFocus}
          editable={props.editable}
        />
        {props.RigthIcon && (
          <Image
            source={props.RigthIcon}
            resizeMode={'contain'}
            style={styles.RigthIconStyle}            
          />
        )}
      </View>
      {!props.text && props.touched && props.error ? (
        <View>
          <Text
            style={{
              fontSize: dW(25),
              fontFamily: fonts.NexaLigth,
              color: Colors.Red,
            }}>
            {props.error}
          </Text>
        </View>
      ) : (
        <></>
      )}
    </>
  );
};

export default CommonTextinput;

const styles = StyleSheet.create({
  MainTextinputView: {
    // alignItems:'center',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
    flex: 1,
    borderRadius: dW(10),
    backgroundColor: 'white',
  },
  IconStyle: {
    height: dH(48),
    width: dW(42),
    // left:dW(26)
    marginLeft: dW(26),
    alignSelf: 'center',
  },
  VerticalLine: {
    backgroundColor: Colors.inActive,
    width: 1,
    height: dH(67),
    marginLeft: dW(33),
    alignSelf: 'center',
  },
  TextinputStyle: {
    flex: 1,
    fontFamily: fonts.NexaBold,
    color: Colors.black,
    fontSize: dW(30),
    marginLeft: dW(36),
    // backgroundColor:'blue'
  },
  RigthIconStyle: {
    height: dH(47),
    width: dW(47),
    alignSelf: 'center',
    marginRight: dW(31),
  },
});
