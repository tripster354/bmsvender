import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
// import CommonHeader from '../../../components/CommonHeader'
// import Colors from '../../../utils/theme/colors'
// import { dH, dW } from '../../../utils/dynamicHeightWidth'
// import { CommonIcon } from '../../../assets/images/CommonIcon'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'
import CommonHeader from '../../components/CommonHeader'
import Colors from '../../utils/theme/colors'
import { dH, dW } from '../../utils/dynamicHeigthWidth'
import { CommonIcon } from '../../assets/images/CommonIcon'

const SuccessScreen = () => {
    const navigation = useNavigation()
    useEffect(()=>{
        setTimeout(() => {
            navigation.navigate('SideMenu')
        }, 2000);
    },[])
    

  return (
    <View style={{ flex: 1, backgroundColor: Colors.white, paddingHorizontal: dW(34), paddingBottom: dH(50) }}>
        <CommonHeader
          leftIcon={null}
          title={''}
          RigthIcon={null}
          SubTitle={''}
          rigthType={null}
        />
        <ImageBackground 
            source={CommonIcon.SuccessScreen}
            style={{flex:1,alignItems:"center",justifyContent:"space-evenly"}}
            resizeMode={'contain'} 
        >
            <Text style={styles.WoTextStyle}>Congratulations</Text>
            <Image 
                source={CommonIcon.VerifyImage}
                style={{height:dH(281),width:dW(281)}}
                resizeMode='contain'
            />
            <Text style={styles.SuccessTextStyle}>You’re verified!</Text>
            <Text style={styles.SeccessDiscTextStyle}>You have been successfully verified</Text>
            </ImageBackground>
    </View>
  )
}

export default SuccessScreen

