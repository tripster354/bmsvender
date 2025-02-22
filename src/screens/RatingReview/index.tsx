import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
import CommonHeader from '../../components/CommonHeader'
import EditPage from '../../assets/images/RatingReview'
import images from '../../assets/images'
import { dH, dW } from '../../utils/dynamicHeigthWidth'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { BookingData } from '../MyBooking/MockData'
import { BookingIcon } from '../../assets/images/MyBooking'

const RatingReview = () => {
    const [selectedRating, setSelectedRating] = useState(null);
    const ReviewProgressData =[
        {
            id:1,
            title: 'Excellent',
            percentage: '70%',
            color: '#00C6FF'
        },
        {
            id:2,
            title: 'Good',
            percentage: '40%',
            color: '#00C6FF'
        },
        {
            id:3,
            title: 'Average',
            percentage: '10%',
            color: '#00C6FF'
        },
        {
            id:4,
            title: 'Poor',
            percentage: '4%',
            color: '#00C6FF'
        },
        {
            id:5,
            title: 'Poor',
            percentage: '1%',
            color: '#00C6FF'
        },
    ];
    const RattingList = [
        {id:1,title:'All'},
        {id:2,title:'5'},
        {id:3,title:'4'},
        {id:4,title:'3'},
        {id:5,title:'2'},
    ]
    const renderProgress = ({item,index}) =>{
        return(
          <View>
            <View
            style={styles.renderProgresViewStyle}>
            <View
              style={styles.inActiveProgressStyle}>
              <View
                style={{backgroundColor: item.color, height: dW(5), width: item.percentage}}
              />
            </View>
            <Text
              style={styles.ProgressTitleViewStyle}>
              {item.percentage}
            </Text>
          </View>
          </View>
        );
      }
    
      const RatingRender = ({item , index})=>{
        return(
            <TouchableOpacity style={[
                styles.MainRatingViewStyle,
                { backgroundColor: selectedRating === item.id ? '#00C6FF' : '#CCCCCC' } // Change background color on selection
              ]}
              onPress={() => setSelectedRating(item.id)}  >
                <View style={styles.ratingViewStyle}>
                    <Text style={styles.RatingTextStyle}>{item.title}</Text>
                    {item.title === 'All' ? null :    
                    <Image
                    source={images.home.StarIcon}
                    style={[styles.StarIconStyle,{left:dW(5)}]}
                    resizeMode={'contain'}
                    />
                }
                </View>
            </TouchableOpacity>
        )
      }

      const BookingRender = ({item, index}) => {
        return (
          <TouchableOpacity style={styles.CardMainViewStyle}
            // onPress={() =>OnChange(item)}
          >
            <View style={styles.CardInnerStyle}>
              <Image source={item.image} style={styles.CardImageStyle} />
              <View style={styles.FirstViewStyle}>
                <View style={styles.HeaderDetailViewStyle}>
                    <Text style={styles.BookingTitleStyle}>
                    User Name 1
                    </Text>
                  <View style={styles.RattingContainerViewStyle}>
                    <Image
                      source={BookingIcon.StarIcon}
                      style={styles.StarChangeIconStyle}
                      resizeMode={'contain'}
                    />
                    <Text style={styles.RatingTextStyle}>{item.Rating}</Text>
                  </View>
                </View>
                <Text style={styles.DiscTextStyle} numberOfLines={2}>
                  {item.Disc}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        );
      };

  return (
    <View style={styles.container}>
       <CommonHeader
          leftIcon={null}
          title={'Rating & Review'}
          RigthIcon={EditPage.EditIcon}
          SubTitle={''}
          rigthType={'path'}
          RigthIconProps={''}
          disabled={true}
        />
        <Text style={styles.GuitarTextStyle}>Guitar Class</Text>
        <View style={styles.ReviewViewStyle}>
            <View style={styles.RatingViewStyle}>
                <Text style={styles.SumRetingTextStyle}>4.8</Text>
                <View style={styles.StarViewStyle}>
              <Image
                source={images.home.StarIcon}
                style={styles.StarIconStyle}
                resizeMode={'contain'}
              />
              <Image
                source={images.home.StarIcon}
                style={styles.StarIconStyle}
                resizeMode={'contain'}
              />
              <Image
                source={images.home.StarIcon}
                style={styles.StarIconStyle}
                resizeMode={'contain'}
              />
              <Image
                source={images.home.StarIcon}
                style={styles.StarIconStyle}
                resizeMode={'contain'}
              />
              <Image
                source={images.home.HalfStartIcon}
                style={styles.StarIconStyle}
                resizeMode={'contain'}
              />
            </View>
            <Text style={styles.TotelReviewTextStyle}>4,981 Review</Text>
            </View>
            <View>
            <FlatList 
        data={ReviewProgressData}
        renderItem={renderProgress}
        scrollEnabled={false}
        style={{marginTop:dH(23)}}
      />
            </View>
        </View>
        <View>
            <FlatList 
                horizontal
                data={RattingList}
                style={{marginTop:dH(113)}}
                contentContainerStyle={{flex:1,justifyContent:"space-between"}}
                renderItem={RatingRender}
                keyExtractor={(item) => item.id.toString()}
            />
            </View>
            <View style={styles.CommentViewStyle}>
                <Text>Comment</Text>
                <Text>4.8 (4,981)</Text>
            </View>
            <FlatList
        style={{marginTop:dH(55)}}
        showsVerticalScrollIndicator={false}
        data={BookingData}
        renderItem={BookingRender}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  )
}

export default RatingReview

