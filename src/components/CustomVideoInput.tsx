import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React from 'react';
import fonts from '../assets/fonts';
import Colors from '../utils/theme/colors';
import {dH, dW} from '../utils/dynamicHeigthWidth';

interface ICustomVideoInput {
  //   text?: string;
  //   secure?: boolean;
  //   onChange?: (value: string) => void;
  RigthIcon?: ImageSourcePropType;
  PlaceholderText?: string;
  Editable?: boolean;
  //   keyBoradTextType?: KeyboardTypeOptions ;
  placeholderTextColor?: string;
  //   NumberLegth?: number
}

const CustomVideoInput = (props: ICustomVideoInput) => {
  return (
    <View style={styles.Maincontainer}>
    <View style={styles.MainTextinputView}>
      <TextInput
        editable={props.Editable}
        style={styles.TextinputStyle}
        placeholder={props.PlaceholderText}
        placeholderTextColor={props.placeholderTextColor}
      />
      <Image
        source={props.RigthIcon}
        style={styles.IconStyle}
        resizeMode={'contain'}
      />
    </View>
        <View style={styles.ProgressLineStyle}/>
    </View>
  );
};

export default CustomVideoInput;

const styles = StyleSheet.create({
    Maincontainer:{
        justifyContent:'flex-end'
    },
  MainTextinputView: {
    alignItems: 'center',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
    height: dH(117),
    flex: 1,
    borderRadius: dW(10),
    backgroundColor: 'white',
  },
  IconStyle: {
    height: dH(55),
    width: dW(63),
    right:dW(36)
  },
  TextinputStyle: {
    flex: 1,
    fontFamily: fonts.NexaBold,
    color: Colors.black,
    fontSize: dW(30),
    marginLeft: dW(36),
  },
  ProgressLineStyle:{
    width:'35%',height:2,backgroundColor:Colors.lightBlue,marginHorizontal:dW(40),position:'absolute',
  },
});
