import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from './style'
import CommonHeader from '../../../components/CommonHeader'
import { useRoute } from '@react-navigation/native'
import { dW } from '../../../utils/dynamicHeigthWidth'
import FeedImage from '../../../assets/images/Feed'
import images from '../../../assets/images'
import Colors from '../../../utils/theme/colors'
import TopTabNavigator from './TabBarComponent/TobTabNavigation'

const FeedDetail = () => {
    const route = useRoute()
    const RouteData = route?.params?.data;
    console.log('RouteData=>',RouteData)
  return (
    <View style={styles.container}>
      <View style={styles.InnerViewStyle}>
      <CommonHeader
          leftIcon={null}
          title={'Feeds'}
          RigthIcon={FeedImage.ProfileImage}
          SubTitle={''}
          rigthType={'path'}
          RigthIconProps={''}
          disabled={true}
        />
        {/* <ImageBackground source={RouteData.FeedImage} style={styles.CoverImageStyle} imageStyle={{borderRadius:dW(25)}}>
            <Image source={FeedImage.ProfileImage} style={styles.ProfileImageStyle}/>
        </ImageBackground>
        <Text style={styles.NameTextStyle}>{RouteData.name}</Text>
        <View style={styles.LocationViewStyle}>
        <Image
                  source={images.profile.LocationMark}
                  style={styles.LocationIconStyle}
                  resizeMode={'contain'}
                  tintColor={Colors.black}
                />
                <Text style={styles.LocationTextStyle}>Venue Comes Here</Text>
        </View> */}
        </View>
        <TopTabNavigator  data={RouteData.Disc}/>
    </View>
  )
}

export default FeedDetail

