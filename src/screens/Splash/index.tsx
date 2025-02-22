import { Image, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import styles from './styles'
import images from '../../assets/images'
import { useNavigation } from '@react-navigation/native'

const Splash = () => {
  const navigation = useNavigation();
  useEffect(()=>{
    setTimeout(async()=>{
        navigation.navigate('Intro')
    },1000)
  },[])
  return (
    <View style={styles.container}>
      <Image source={images.app_icon.appLogo} resizeMode={'contain'} style={styles.LogoImageStyle}/>
      <Text style={styles.MainText}>VENDOR</Text>
    </View>
  )
}

export default Splash

