import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../utils/theme/colors';
import images from '../assets/images';
import {dH, dW} from '../utils/dynamicHeigthWidth';

interface ICommonButton {
  text: string;
  Icon: boolean;
  onNext: () => void;
}

const GradientButton = (props: ICommonButton) => {
  return (
    <View style={styles.shadowWrapper}>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.8}
        onPress={props?.onNext}>
        <LinearGradient
          colors={['#00C6FF', '#FFF000']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={styles.gradient}>
          <Text style={styles.text}>{props?.text}</Text>
          {props.Icon === null ? null : (
            <Image source={images.Intro.LeftArrow} style={styles.arrowStyle} />
          )}
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  shadowWrapper: {},
  button: {},
  gradient: {
    flexDirection: 'row',
    width: dW(604),
    height: dH(132),
    shadowColor: '#00C6FF',
    shadowOffset: {width: 0, height: 20},
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 20, // Android shadow
    borderRadius: dH(33),
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: Colors.black,
    fontSize: dW(38),
    fontWeight: 'bold',
    textAlignVertical: 'center',
  },
  arrowStyle: {
    height: dH(25),
    width: dW(41),
    marginLeft: dW(20),
    marginTop: dH(6),
  },
});

export default GradientButton;
