import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ToggleSwitch from 'toggle-switch-react-native';
import Colors from '../utils/theme/colors';
import fonts from '../assets/fonts';
import { dH, dW } from '../utils/dynamicHeigthWidth';

interface IToggleProps {
  title?: string;
  ToggleOn?: boolean;
  ToggleOff?: () => void;
}

const ToggleOption = (props: IToggleProps) => {

    const handleToggle = () =>{
        props.ToggleOff(!props.ToggleOn)
    }

  return (
    <View style={{marginTop:dH(64)}}>
      <View style={styles.ToggleViewStyle}>
        <Text style={styles.ToggleTitleTextStyle}>{props.title}</Text>
        <ToggleSwitch
          isOn={props.ToggleOn}
          onColor="#21BF73"
          offColor="#CCCCCC"
        //   labelStyle={{color: 'black', fontWeight: '900'}}
          size="small"
          onToggle={handleToggle}
        />
      </View>
      <View style={{
        marginTop:dH(24),
    borderStyle: 'dashed',
    borderWidth: 1,
    borderRadius: 1,
    height:1
  }} />
    </View>
  );
};

export default ToggleOption;

const styles = StyleSheet.create({
    ToggleViewStyle:{
        flexDirection:"row",
        justifyContent:'space-between'
    },
    ToggleTitleTextStyle:{
        color:Colors.black,
        fontFamily:fonts.NexaBold,
        fontSize:dW(30)
    },
});
