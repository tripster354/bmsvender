import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import images from '../assets/images';
import Colors from '../utils/theme/colors';
import fonts from '../assets/fonts';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { dH, dW } from '../utils/dynamicHeigthWidth';

interface ICommonHeader{
    leftIcon? : null,
    title?: string,
    SubTitle?: string,
    RigthIcon?: any
    rigthType?: string
    RigthIconProps?: string
    disabled?: boolean
    LeftProps?: string
}

const CommonHeader = (props:ICommonHeader) => {
    const insets = useSafeAreaInsets();
    const STATUSBAR_HEIGHT = insets.top;
    const navigation = useNavigation();
    // const openDrawer = useIsDrawerOpen()

    const ChangeSubScreen = () =>{
      if(props.RigthIconProps === 'Edit'){
        // navigation.navigate('EditScreen')
        console.log('Press Edit')
      }
      else{
        navigation.navigate('Notification')
      }
    }

    const OpenSideMenu = () =>{
      // navigation.openDrawer();
      navigation.dispatch(DrawerActions.openDrawer())
      // DrawerActions.openDrawer()
      // navigation.dispatch(DrawerActions.openDrawer());
    }

  const CommonBackButton = () =>{
    return(
      <TouchableOpacity style={styles.CommonViewStyle}
        onPress={() => {
          if(props.LeftProps === 'BurgerMenu'){
            OpenSideMenu()
          }
           else{
            navigation.goBack()
           }
          }
        }
      >
        {
          props.leftIcon === null ?
          <Image source={images.Intro.LeftArrow} style={{height:dH(19),width:dW(32),transform: [{rotate: '180deg'}]}} resizeMode={'contain'}/>
          :
          <Image source={props.leftIcon} style={{height:dH(90),width:dW(90)}} resizeMode={'cover'}/>
        }
      </TouchableOpacity>
    )
  }

  return (
    <View style={[styles.headerContainer,{marginTop:STATUSBAR_HEIGHT }]}>
      {CommonBackButton()}
      <View style={styles.HeaderTextViewStyle}>
      <Text style={styles.titleTextStyle}>{props.title}</Text>
      {
        props.SubTitle && 
      <Text style={styles.SubTitleTextStyle}>{props.SubTitle}</Text>
      }
      </View>
      {
        props.rigthType === 'path' ? 
        <TouchableOpacity onPress={() => ChangeSubScreen()} disabled ={props.disabled}>
          <Image source={props.RigthIcon} style={styles.EditImageStyle}/>
        </TouchableOpacity>:
        props.rigthType === 'text'?
        <TouchableOpacity>
          <Text style={styles.PostTextStle}>Edit</Text>
        </TouchableOpacity>:
        <View style={{height:dH(96),width:dW(96)}}></View>
      }
    </View>
  )
}

export default CommonHeader

const styles = StyleSheet.create({
  CommonViewStyle:{
    backgroundColor:Colors.greyBlue,
    height:dH(90),
    width:dW(90),
    borderRadius:dW(16),
    justifyContent:"center",
    alignItems:"center",
    
  },
  HeaderTextViewStyle:{
    alignItems:"center",
  },
  titleTextStyle:{
    color:Colors.black,
    fontSize:dW(40),
    fontFamily:fonts.NexaBold,
  },
  EditImageStyle:{
    height:dH(90),
    width:dW(90),
  },
    headerContainer:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:'space-between',
        // paddingHorizontal:dW(24)
    },
    SubTitleTextStyle:{
      fontFamily:fonts.NexaBold,
      fontSize:dW(26),
      color:Colors.black,
    },
    PostTextStle:{
      fontFamily:fonts.NexaBold,
      color:'#00C6FF',
      fontSize:dW(31)
    }
})