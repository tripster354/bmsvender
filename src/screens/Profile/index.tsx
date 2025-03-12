import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
import CommonHeader from '../../components/CommonHeader'
import profile from '../../assets/images/profile'
import CreateIconImage from '../../assets/images/CreateImageIcon'
import { dH, dW } from '../../utils/dynamicHeigthWidth'
import TopTabNavigator from './TopNavigation'
import { CommonIcon } from '../../assets/images/CommonIcon'
import { AppHelper } from '../../constants'

const Profile = () => {

  const [selectimage , setSelectImage] = useState();

  // values?.cover?.data?.path || values?.cover?.path


  const selectImage = () => {
      AppHelper.profilePictureClick('Post')
  
        .then((result: string) => {
          setSelectImage(result)
        })
        .catch((error: any) => {});
    };

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
              source={(selectimage?.data?.path || selectimage?.path)  ? {uri: (selectimage?.data?.path || selectimage?.path)} : null }
              resizeMode={'cover'}
              borderRadius={dW(200)}
            >
              <Image
                source={(selectimage?.data?.path || selectimage?.path) ? null : CreateIconImage.PhoneIcon}
                resizeMode={'contain'}
                style={styles.PhoneIconStyle}
              />
            </ImageBackground>
            <TouchableOpacity style={{top: dH(-35)}} 
              onPress={selectImage}
            >
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

