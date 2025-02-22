import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from './style';
import CommonHeader from '../../components/CommonHeader';
import {BookingData} from './MockData';
import {BookingIcon} from '../../assets/images/MyBooking';

const MyBooking = ({navigation}) => {

  const OnChange = (item) =>{
    navigation.navigate('BookingDetail', {
      data: item
    });
  }

  const BookingRender = ({item, index}) => {
    return (
      <TouchableOpacity style={styles.CardMainViewStyle}
        onPress={() =>OnChange(item)}
      >
        <View style={styles.CardInnerStyle}>
          <Image source={item.image} style={styles.CardImageStyle} />
          <View style={styles.FirstViewStyle}>
            <View style={styles.HeaderDetailViewStyle}>
              <View>
                <Text style={styles.BookingTitleStyle}>
                  {item.ActivityName}
                </Text>
                <Text style={styles.BookingTimeAndDateStyle}>
                  {item.TimeAndDate}
                </Text>
              </View>
              <View style={styles.RatingViewStyle}>
                <Image
                  source={BookingIcon.StarIcon}
                  style={styles.StarIconStyle}
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
        title={'My Booking'}
        RigthIcon={null}
        SubTitle={''}
        rigthType={''}
        RigthIconProps={''}
      />
      <Text style={styles.BookingTextStyle}>Booking</Text>
      <FlatList
        style={styles.ListViewStyle}
        showsVerticalScrollIndicator={false}
        data={BookingData}
        renderItem={BookingRender}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default MyBooking;
