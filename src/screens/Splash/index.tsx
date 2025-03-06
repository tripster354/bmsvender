import { Image, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import styles from './styles'
import images from '../../assets/images'
import { useNavigation } from '@react-navigation/native'
import { getAsyncStorage } from '../../utils/commonFunction'

const Splash = () => {
  const navigation = useNavigation();
  useEffect(()=>{
    setTimeout(async()=>{
       const access_token = await getAsyncStorage('Token')
       console.log('access_token',access_token)
        if(access_token){
          navigation.navigate('SideMenu')
        }else{
          navigation.navigate('Intro')
        }
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

