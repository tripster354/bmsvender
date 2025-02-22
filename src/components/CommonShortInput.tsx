import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {dH, dW} from '../utils/dynamicHeigthWidth';
import Colors from '../utils/theme/colors';
import fonts from '../assets/fonts';

interface ICommonShortInput {
  InputIcon?: ImageSourcePropType;
  Text?: string;
  onPress: () => void;
}

const CommonShortInput = (props: ICommonShortInput) => {
  return (
    <TouchableOpacity style={styles.MainViewStyle} onPress={props.onPress}>
      <Image
        source={props.InputIcon}
        style={styles.IconStyle}
        resizeMode={'contain'}
      />
      <View style={styles.VerticalLine} />
      <Text style={styles.TextStyle}>{props.Text}</Text>
    </TouchableOpacity>
  );
};

export default CommonShortInput;

const styles = StyleSheet.create({
  MainViewStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
    // flex: 1,
    borderRadius: dW(10),
    backgroundColor: 'white',
    width: dW(301),
    height: dH(117),
  },
  IconStyle: {
    height: dH(39),
    width: dW(34),
    marginLeft: dW(24),
  },
  VerticalLine: {
    backgroundColor: Colors.inActive,
    width: 1,
    height: dH(67),
    marginLeft: dW(25),
    alignSelf: 'center',
  },
  TextStyle: {
    color: Colors.black,
    fontFamily: fonts.NexaBold,
    fontSize: dW(30),
    left: dW(10),
  },
});
