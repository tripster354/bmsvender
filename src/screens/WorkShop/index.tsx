import {
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import styles from './styles';
import CommonHeader from '../../components/CommonHeader';
import {CommonIcon} from '../../assets/images/CommonIcon';
import {useRoute} from '@react-navigation/native';
import {dH, dW} from '../../utils/dynamicHeigthWidth';
import images from '../../assets/images';
import Colors from '../../utils/theme/colors';
import {GalleryData, ParticipantData} from '../Home/MockData';
import CustomLineChart from '../../components/chart/CustomLineChart';
import fonts from '../../assets/fonts';
import { ReviewProgressData } from './MockData';

const renderGalleryItem = ({item, index}) => {
  return (
    <View>
      <Image
        source={item.image}
        style={styles.GalleryImageStyle}
        resizeMode={'contain'}
      />
    </View>
  );
};
const Participantrender = ({item, index}) => {
  return (
    <View style={styles.ParticipantCardStyle}>
      <Text style={styles.nameStyle}>{item.ParticipantName}</Text>
      <Text style={styles.MusicStyle}>
        Music: <Text style={styles.MusicItemTextStyle}>{item.Music}</Text>
      </Text>
      <Text style={styles.Participantstyle}>
        Participant:{' '}
        <Text style={styles.ParticipantNameItemStyle}>
          {item.ParticipantName}
        </Text>
      </Text>
      <Image
        source={item.image}
        resizeMode={'contain'}
        style={styles.ParticipantImageStyle}
      />
    </View>
  );
};

const WorkShop = () => {
  const route = useRoute();
  const RouteData = route?.params?.data;


const renderProgress = ({item,index}) =>{
  return(
    <View>
      <View
      style={styles.renderProgresViewStyle}>
      <Text
        style={styles.ProgressTitleViewStyle}>
        {item.title}
      </Text>
      <View
        style={styles.inActiveProgressStyle}>
        <View
          style={{backgroundColor: item.color, height: dW(10), width: item.percentage}}
        />
      </View>
    </View>
    </View>
  );
}

  return (
    <View style={styles.container}>
      <View style={styles.HeaderViewStyle}>
        <CommonHeader
          leftIcon={null}
          title={'Guitar Workshop'}
          RigthIcon={CommonIcon.NotificationIcon}
          SubTitle={''}
          rigthType={'path'}
          RigthIconProps={''}
        />
      </View>
      <ScrollView style={{flex: 1}}>
        <View style={styles.WorkshopDetailViewStyle}>
          <ImageBackground
            source={RouteData.image}
            style={styles.WorkshopImageStyle}
            imageStyle={{borderRadius: dW(25)}}>
            <View style={styles.ImageViewContainerStyle}>
              <Text style={styles.TitleTextStyle}>Music</Text>
              <Image
                source={images.home.playIcon}
                resizeMode={'contain'}
                style={styles.PlayIconStyle}
              />
            </View>
          </ImageBackground>
          <View style={styles.DetailViewStyle}>
            <View>
              <Text style={styles.WorkshopTitleTextStyle}>Guitar Workshop</Text>
              <View style={styles.LocationViewStyle}>
                <Image
                  source={images.profile.LocationMark}
                  style={styles.LocationIconStyle}
                  resizeMode={'contain'}
                  tintColor={Colors.white}
                />
                <Text style={styles.locationTextStyle}>
                  {RouteData.location}
                </Text>
              </View>
            </View>
            <View style={styles.PriceViewStyle}>
              <Text style={styles.PriceTextStyle}>$ 230 </Text>
              <Text style={styles.SessionTextStyle}>Per Session</Text>
            </View>
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
              <Text style={styles.RatingTextStyle}>4.5</Text>
            </View>
            <View style={styles.BottomDetailViewStyle}>
              <View style={styles.calenderViewStyle}>
                <Image
                  source={images.home.CalenderIcon}
                  style={styles.calenederIconStyle}
                  resizeMode={'contain'}
                />
                <Text style={styles.TimeDateTextStyle}>
                  {RouteData.TimeDate}
                </Text>
              </View>
              <View style={styles.participentViewStyle}>
                <Image
                  source={images.home.SingleUserIcon}
                  style={styles.participentIconStyle}
                  resizeMode={'contain'}
                />
                <Text style={styles.ParticipentTextStyle}>80 Participants</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.OnPressViewStyle}>
              <Text style={styles.PublishTextStyle}>Publish</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.OtherDetailViewStyle}>
          <Text style={styles.GalleryTextStyle}>Gallery</Text>
          <FlatList
            style={{marginTop: dH(30)}}
            horizontal
            data={GalleryData}
            renderItem={renderGalleryItem}
            keyExtractor={item => item.id.toString()}
          />
          <Text style={styles.participantTextStyle}>Participant info</Text>
          <FlatList
            style={styles.ParticipantViewStyle}
            horizontal
            data={ParticipantData}
            renderItem={Participantrender}
            keyExtractor={item => item.id.toString()}
          />
          <View style={styles.RevenueViewStyle}>
            <Text style={styles.RevenueTextStyle}>Total Revenue</Text>
            <Image
              source={CommonIcon.FilterIcon}
              style={styles.FilterIconStyle}
              resizeMode={'contain'}
            />
          </View>
          <CustomLineChart />
          <Text style={styles.ReviewTextStyle}>Reviews</Text>
          <Text style={styles.RatingStyle}>{RouteData.rating}</Text>
          <View style={styles.BottomStarViewStyle}>
            <Image
              source={images.home.StarIcon}
              style={styles.SingleStarIconStyle}
              resizeMode={'contain'}
            />
            <Image
              source={images.home.StarIcon}
              style={styles.SingleStarIconStyle}
              resizeMode={'contain'}
            />
            <Image
              source={images.home.StarIcon}
              style={styles.SingleStarIconStyle}
              resizeMode={'contain'}
            />
            <Image
              source={images.home.StarIcon}
              style={styles.SingleStarIconStyle}
              resizeMode={'contain'}
            />
            <Image
              source={images.home.HalfStartIcon}
              style={styles.SingleStarIconStyle}
              resizeMode={'contain'}
            />
          </View>
          <Text style={styles.BaseOnReviewTextStyle}>based on 53 review</Text>
          <FlatList 
        data={ReviewProgressData}
        renderItem={renderProgress}
        scrollEnabled={false}
        style={{marginTop:dH(23),marginBottom:dH(134)}}
      />
        </View>
      </ScrollView>
    </View>
  );
};

export default WorkShop;
