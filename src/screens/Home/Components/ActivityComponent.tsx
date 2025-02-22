import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React, {useCallback, useEffect} from 'react';
import MainContainer from '../../../components/MainContainer';
import styles from '../style';
import LinearGradient from 'react-native-linear-gradient';
import images from '../../../assets/images';
import {useAppDispatch, useAppSelector} from '../../../Redux/reducers/hook';
import {useNavigation} from '@react-navigation/native';
import {dW} from '../../../utils/dynamicHeigthWidth';
import {GetAllActivity} from '../../../Redux/actions/HomeAction';
import {debounce} from 'lodash';
import Colors from '../../../utils/theme/colors';

const ActivityComponent = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<any>();
  const {activitydata, APage, AMore} = useAppSelector(
    state => state.HomeReducer,
  );

  console.log('activitydata', activitydata);

  const OnPress = (item: any) => {
    navigation.navigate('WorkShop', {
      data: item,
    });
  };

  const fetchdata = async () => {
    const obj = {
      page: 1,
    };

    await dispatch(GetAllActivity(obj));
  };

  useEffect(() => {
    fetchdata();
  }, []);

  const LordPostsData = async () => {
    const obj = {
      page: APage,
      item_count: 10,
    };
    if (AMore) {
      await dispatch(GetAllActivity(obj));
    }
  };

  const debouncedOnEndReached = useCallback(debounce(LordPostsData, 1000), [
    AMore,
    APage,
  ]);

  const renderActivity = ({item, index}: any) => {
    return (
      <TouchableOpacity
        style={styles.ActivityCardViewStyle}
        onPress={() => OnPress(item)}>
        <ImageBackground
          source={item.image}
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
                resizeMode={'contain'}
              />
              <Text style={styles.RatingTextStyle}>{item.rating || 4}</Text>
            </View>
          </LinearGradient>
        </ImageBackground>
        <View style={styles.DetailViewStyle}>
          <Text style={styles.ActivityTextStyle}>{item?.ActivityTitle}</Text>
          <View style={styles.LocationViewStyle}>
            <Image
              source={images.profile.LocationMark}
              style={styles.LocationIconStyle}
              resizeMode={'contain'}
            />
            <Text style={styles.LocationTextStyle}>{item.Venue}</Text>
          </View>
          <Text style={styles.PriceStyle}>Price: {item.Price}</Text>

          <Text style={[styles.TimeDateTextStyle, {color: Colors.black}]}>
            Date:{' '}
            <Text style={styles.TimeDateTextStyle}>
              {item.StartDateTime} To {item?.EndDateTime}
            </Text>
          </Text>
          <Text style={[styles.TimeDateTextStyle, {color: Colors.black}]}>
            Time:{' '}
            <Text style={styles.TimeStyle}>
              {item.StartTimeActual} To {item?.EndTimeActual}
            </Text>
          </Text>
          <View>
            <Text style={styles.DiscTextStyle} numberOfLines={2}>
              {item.ActivityAbout}
            </Text>
            {/* <Text style={styles.ReadMoreTextStyle}>Read More</Text> */}
          </View>
          <View style={styles.SeatsViewStyle}>
            <Image
              source={images.home.GroupIcon}
              style={styles.GroupIconStyle}
              resizeMode={'contain'}
            />
            <Text style={styles.totalseattext}>{item.TotalSeats}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <MainContainer>
      <FlatList
        style={styles.ActivityDataListViewStyle}
        horizontal
        bounces={false}
        data={activitydata}
        renderItem={renderActivity}
        keyExtractor={item => item.ActivityIDP.toString()}
        onEndReachedThreshold={1}
        onEndReached={() => {
          console.log('End');
          if (activitydata?.length > 0) {
            // dispatch(GlobalAction.handleLoader(true, false, types.MENU_LIST));
            debouncedOnEndReached();
          }
        }}
      />
    </MainContainer>
  );
};

export default React.memo(ActivityComponent);
