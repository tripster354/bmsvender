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
import styles from './style';
import {useRoute} from '@react-navigation/native';
import CommonHeader from '../../../../components/CommonHeader';
import images from '../../../../assets/images';
import {dW} from '../../../../utils/dynamicHeigthWidth';
import Colors from '../../../../utils/theme/colors';
import { AttendanceData } from '../../MockData';

const BookingDetail = () => {
  const Route = useRoute();
  const RouteData = Route?.params?.data;
  console.log('Route=>', RouteData);

  const AttendanceRender = ({item ,index}) =>{
    return(
        <View style={styles.CardMainStyle}>
            <View style={styles.MainCardViewStyle}>
                <View style={styles.CardViewStyle}>
                    <Image source={item.image} style={styles.ParticipentImageStyle}/>
                    <View style={styles.ParticipentInfoStyle}>
                        <Text style={styles.DetailViewTextStyle}>{item.Name}</Text>
                        <View style={styles.ButtonViewStyle}>
                            <TouchableOpacity style={styles.CommonButton}>
                                <Text style={styles.CommonTextStyle}>Present</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={[styles.CommonTextStyle,{backgroundColor:Colors.OffPink,color:Colors.OffRed}]}>Present</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            <Image source={item.QrCode} style={styles.QrCodeStyle} resizeMode={'contain'}/>
            </View>
            <View style={styles.HorizontalLineStyle}/>
        </View>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.HeaderViewStyle}>
        <CommonHeader
          leftIcon={null}
          title={'My Booking'}
          RigthIcon={null}
          SubTitle={''}
          rigthType={''}
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
              <View style={styles.HeaderDetailStyle}>
                <Text style={styles.WorkshopTitleTextStyle}>
                  {RouteData?.ActivityName}
                </Text>
                <View style={styles.PriceViewStyle}>
                  <Text style={styles.PriceTextStyle}>$ 230 </Text>
                  <Text style={styles.SessionTextStyle}>Per Session</Text>
                </View>
              </View>
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
            <Text style={styles.DiscTextStyle}>{RouteData.Disc}</Text>
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
                  {RouteData.TimeAndDate}
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
          </View>
        </View>
        <View style={styles.BottomDataViewStyle}>
          <View style={styles.AttendanceViewStyle}>
            <Text style={styles.AttendanceTextStyle}>Attendance</Text>
            <Text style={styles.ViewAllTextStyle}>View All</Text>
          </View>
          <FlatList
            style={styles.ListingViewStyle}
            showsVerticalScrollIndicator={false} 
            data={AttendanceData}
            renderItem={AttendanceRender}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default BookingDetail;
