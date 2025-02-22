import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from './styles'
import CommonHeader from '../../components/CommonHeader'
import FeedImage from '../../assets/images/Feed'
import { CommonIcon } from '../../assets/images/CommonIcon'
import CustomLineChart from '../../components/chart/CustomLineChart'
import TopTabNavigator from './SubComponent/TopTabNavigator'

const MyEarning = () => {
  return (
    <View style={styles.container}>
      <CommonHeader
          leftIcon={null}
          title={'Feeds'}
          RigthIcon={FeedImage.ProfileImage}
          SubTitle={''}
          rigthType={'path'}
          RigthIconProps={''}
          disabled={true}
        />
        <View style={styles.RevenueViewStyle}>
        <Text style={styles.RevenueTextStyle}>Total Revenue</Text>
        <Image source={CommonIcon.FilterIcon} style={styles.FilterIconStyle} resizeMode={'contain'}/>
        </View>

      <View>
      <CustomLineChart />
      </View>
     <TopTabNavigator />

    </View>
  )
}

export default MyEarning

