import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import MainContainer from '../../../components/MainContainer';
import styles from '../style';
import LinearGradient from 'react-native-linear-gradient';
import images from '../../../assets/images';
import {useAppDispatch, useAppSelector} from '../../../Redux/reducers/hook';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {dW} from '../../../utils/dynamicHeigthWidth';
import {GetAllActivity} from '../../../Redux/actions/HomeAction';
import Colors from '../../../utils/theme/colors';
import { useSelector } from 'react-redux';
import { getAsyncStorage } from '../../../utils/commonFunction';

const ActivityComponent = (props) => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<any>();
  const [apiMessage , setApiMessage] = useState('')


  const OnPress = (item: any) => {
    // navigation.navigate('WorkShop', {
    //   data: item,
    // });
  };
  const renderActivity = ({item, index}: any) => {
    return (
      <TouchableOpacity
        style={styles.ActivityCardViewStyle}
        onPress={() => OnPress(item)}>
        <ImageBackground
          source={{uri:item?.images[0]}}
          style={styles.ActivityImageStyle}
          imageStyle={{borderRadius: dW(30)}}>
          <LinearGradient
            colors={['#00000000', '#000000']}
            start={{x: 0.5, y: 0.5}}
            end={{x: 0.5, y: 1}}
            style={styles.LiniarEffectViewStyle}>
            <View style={styles.RatigViewStyle}>
              <Image
                source={images.home.StarIcon}
                tintColor={'#FECF6A'}
                style={styles.StarIconStyle}
                // resizeMode={'contain'}
              />
              <Text style={styles.RatingTextStyle}>{item.rating || 4}</Text>
            </View>
          </LinearGradient>
        </ImageBackground>
        <View style={styles.DetailViewStyle}>
          <Text style={styles.ActivityTextStyle}>{item?.name}</Text>
          <View style={styles.LocationViewStyle}>
            <Image
              source={images.profile.LocationMark}
              style={styles.LocationIconStyle}
              resizeMode={'contain'}
            />
            <Text style={styles.LocationTextStyle}>{item.location_name}</Text>
          </View>
          <Text style={styles.PriceStyle}>Price: {item.price}</Text>

          <Text style={[styles.TimeDateTextStyle, {color: Colors.black}]}>
            Date:{' '}
            <Text style={styles.TimeDateTextStyle}>
              {item.start_date} To {item?.end_date}
            </Text>
          </Text>
          <Text style={[styles.TimeDateTextStyle, {color: Colors.black}]}>
            Time:{' '}
            <Text style={styles.TimeStyle}>
              {item.start_time} To {item?.end_time}
            </Text>
          </Text>
          <View>
            <Text style={styles.DiscTextStyle} numberOfLines={2}>
              {item.description}
            </Text>
            <Text style={styles.ReadMoreTextStyle}>Read More</Text>
          </View>
          <View style={styles.SeatsViewStyle}>
            <Image
              source={images.home.GroupIcon}
              style={styles.GroupIconStyle}
              resizeMode={'contain'}
            />
            <Text style={styles.totalseattext}>{item.total_seat}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    // <MainContainer>
    <View>
      <FlatList
        style={{ margin: 10 }}
        horizontal
        data={props.activityData}
        renderItem={renderActivity}
        keyExtractor={(item, index) => item.id}
        onEndReached={() => {
          if (!props.loading && props.hasMoreData) {
            console.log("Fetching more data... Page:", props.currentPage);
            props.fetchActivities(props.currentPage);
          }
        }}
        onEndReachedThreshold={1}
        ListFooterComponent={props.loading ? (  <View style={{ padding: 10, alignItems: "center" }}>
          <ActivityIndicator size="large" color="blue" />
        </View>) : null}
        ListEmptyComponent={() => (
          <Text style={{ textAlign: "center", marginTop: 20 }}>{props.apiMessage}</Text>
        )}
      />
      </View>
    // </MainContainer>
  );
};

export default React.memo(ActivityComponent);
