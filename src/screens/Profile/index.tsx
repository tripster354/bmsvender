import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from './style'
import CommonHeader from '../../components/CommonHeader'
import profile from '../../assets/images/profile'
import CreateIconImage from '../../assets/images/CreateImageIcon'
import { dH } from '../../utils/dynamicHeigthWidth'
import TopTabNavigator from './TopNavigation'
import { CommonIcon } from '../../assets/images/CommonIcon'

const Profile = () => {
  return (
    <View style={styles.container}>
      <CommonHeader
        leftIcon={null}
        title={'Profile Setting'}
        RigthIcon={''}
        SubTitle={''}
        rigthType={'text'}
        RigthIconProps={''}
      />
       <View style={styles.TopViewStyle}>
            <ImageBackground
              style={styles.SetImageViewStyle}
              // source={CreateIconImage.PhoneIcon}
              resizeMode={'contain'}
            >
              <Image
                source={CreateIconImage.PhoneIcon}
                resizeMode={'contain'}
                style={styles.PhoneIconStyle}
              />
            </ImageBackground>
            <TouchableOpacity style={{top: dH(-35)}}>
              <Image
                source={CreateIconImage.EditImageIcon}
                style={styles.EditImageStyle}
                resizeMode={'contain'}
              />
            </TouchableOpacity>
          </View>
          <TopTabNavigator />
    </View>
  )
}

export default Profile

