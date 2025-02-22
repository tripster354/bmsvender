import { Image, ImageSourcePropType, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { dH, dW } from '../utils/dynamicHeigthWidth';
import Colors from '../utils/theme/colors';

interface ICommonSeach{
    serachicon: ImageSourcePropType;
    placeholder: string;
    text : string;
    onChange: (value: string) => void;
}

const CommonSearch = (props : ICommonSeach) => {
    const CustomIcon = () => {
        return (
          <Image source={props.serachicon} style={styles.serachIconStyle} resizeMode={'contain'}/>
        );
      };
  return (
    <View>
    <View style={styles.MainViewStyle}>
      {props.serachicon !== null ? CustomIcon() : null}
      <TextInput 
      style={styles.TextinputStyle}
        placeholder={props.placeholder}
        value = {props.text}
        onChangeText={props.onChange}
      />
    </View>
      <View style={styles.HorizontalLineStyle}/>
    </View>
  )
}

export default CommonSearch

const styles = StyleSheet.create({
    serachIconStyle:{
        height:dH(46),
        width:dW(46)
      },
      MainViewStyle:{
        flexDirection:'row',
        alignItems:'center',
      },
      TextinputStyle:{
        marginLeft:dW(19),
        flex:1
      },
      HorizontalLineStyle:{
        flex:1,
        height:1,
        backgroundColor:Colors.inActive
      },
})