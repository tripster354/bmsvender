import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from './style'
import CommonHeader from '../../components/CommonHeader'
import { FeedData } from './MockData'
import HomeIcon from '../../assets/images/home'

const Feed = ({navigation}) => {

  const OnChange =(item)=>{
    navigation.navigate('FeedDetail',{
      data: item
    })
  }

  const FeedRender = ({item,index}) =>{
    return(
      <TouchableOpacity style={styles.mainCardStyle} 
        onPress={() => OnChange(item)}
      >
          <View style={styles.HeaderCardViewStyle}>
            <View style={styles.CardDetailViewStyle}>
              <Image source={item.FeedImage} style={styles.FeedImageStyle} resizeMode={'cover'}/>
              <View style={styles.ItemTextViewStyle}>
                <Text style={styles.ItemTitleTextStyle}>{item.Title}</Text>
                <Text style={styles.ItemDiscTextStyle}>{item.Disc}</Text>
              </View>
            </View>
            <Image source={HomeIcon.StaticIcons.HertIcon} style={styles.HeartIconStyle} resizeMode={'contain'}/>
          </View>
          <View style={styles.HorizontalLineStyle} />
          <View style={styles.BottomViewStyle}>
            <View style={styles.BottomFistSeactionStyle}>
              <Image source={item.ProfilePic} style={styles.ProfileIconStyle} resizeMode={'contain'}/>
              <Text style={styles.ItemNameStyle}>{item.name}</Text>
            </View>
            <Text style={styles.TimeDateTextStyle}>{item.TimeDate}</Text>
          </View>
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.container}>
      <CommonHeader
          leftIcon={null}
          title={'Feeds'}
          RigthIcon={null}
          SubTitle={''}
          rigthType={''}
          RigthIconProps={''}
          disabled={true}
        />
        <Text style={styles.NewTextStyle}>New</Text>
        <FlatList
          style={styles.ListViewStyle}
          showsVerticalScrollIndicator={false}
          data={FeedData}
          renderItem={FeedRender}
          keyExtractor={(item) => item.id.toString()}
        />
    </View>
  )
}

export default Feed

