import {
  Alert,
  BackHandler,
  FlatList,
  Image,
  ImageBackground,
  RefreshControl,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { FC, useCallback, useEffect, useState } from 'react';
import styles from './style';
import CommonHeader from '../../components/CommonHeader';
import images from '../../assets/images';
import CommonSearch from '../../components/CommonSearch';
import { CommonIcon } from '../../assets/images/CommonIcon';
import {
  ActivityData,
  CardDetail,
  GalleryData,
  ParticipantData,
  SkillCard,
} from './MockData';
import { dH, dW } from '../../utils/dynamicHeigthWidth';
import LinearGradient from 'react-native-linear-gradient';
import HomeIcon from '../../assets/images/home';
import CustomLineChart from '../../components/chart/CustomLineChart';
import { NavigationContainer, useFocusEffect } from '@react-navigation/native';
import { useAppDispatch } from '../../Redux/reducers/hook';
import { GetAllActivity } from '../../Redux/actions/HomeAction';
import ActivityComponent from './Components/ActivityComponent';
import { getAsyncStorage } from '../../utils/commonFunction';
import CustomLoader from '../../components/CustomLoader';
// import { ActivityData } from './MockData';

interface HomeProps { }

const Home: FC<HomeProps> = ({ navigation }) => {
  const dispatch = useAppDispatch();
  const [search, setSearch] = useState('');
  const [apiMessage, setApiMessage] = useState('')
  const [loading, setLoading] = useState(false);
  const [isLoading , setIsLoading] = useState(false);
  const [activityData, setActivityData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMoreData, setHasMoreData] = useState(true);
  const [refreshing, setRefreshing] = useState(false);


  useFocusEffect(
    useCallback(() => {
      const fetchData = async () => {
        setIsLoading(true);
        setActivityData([]); // Reset data before fetching
        setCurrentPage(1);
        setHasMoreData(true);
        await fetchActivities(1);
        setIsLoading(false);
      };
  
      fetchData();
    }, [])
  );
  
  useFocusEffect(
    useCallback(() => {
      const backAction = () => {
        Alert.alert(
          "Exit App",
          "Are you sure you want to exit?",
          [
            { text: "Cancel", style: "cancel" },
            { text: "Exit", onPress: () => BackHandler.exitApp() },
          ],
          { cancelable: true }
        );
        return true;
      };
  
      const backHandler = BackHandler.addEventListener(
        "hardwareBackPress",
        backAction
      );
  
      return () => backHandler.remove(); // Cleanup on screen exit
    }, [])
  );
  const onRefresh = async () => {
    setRefreshing(true);
    setHasMoreData(true);
    setCurrentPage(1);
    setActivityData([]); // Clear old data
    await fetchActivities(1);
    setRefreshing(false);
  };


  const fetchActivities = async (page) => {
    if (loading || !hasMoreData) return;
    setLoading(true);

    try {
      const Token = await getAsyncStorage("Token");
      const myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${Token}`);

      const formdata = new FormData();
      formdata.append("page", page.toString());
      formdata.append("item_count", "10");
      formdata.append("status", "0");

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: formdata,
        redirect: "follow",
      };

      const response = await fetch(
        "https://honeydew-magpie-887435.hostingersite.com/api/vender/list-activity",
        requestOptions
      );

      const result = await response.json();
      setLoading(false);
      if (result?.status === 200) {
        console.log('resul====>',result)
        setApiMessage(result?.message || "No data available.");
        if (result?.data?.result?.length > 0) {
          setActivityData((prevData) => [...prevData, ...result.data.result]);
          setCurrentPage((prevPage) => prevPage + 1);
        } else {
          setHasMoreData(false); // No more data available
        }
      } else {
        setActivityData([]); // Clear existing data
        setApiMessage(result?.message || "No data available.");
        setHasMoreData(false)
        setLoading(false);
      }
    } catch (error) {
      console.error("API Fetch Error:", error);
      setApiMessage("Failed to load data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // useEffect(() => {
  //   dispatch(GetAllActivity({page: 1}));
  // }, []);

  // const OnPress = (item: any) => {
  //   // console.log('Item==>',item)
  //   navigation.navigate('WorkShop', {
  //     data: item,
  //   });
  // };





  const renderGalleryItem = ({ item, index }) => {
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

  const renderCardDetail = ({ item, index }) => {
    return (
      <View style={styles.CardViewStyle}>
        <View style={styles.ProfileHeaderViewStyle}>
          <View style={styles.ProfileViewStyle}>
            <Image
              source={item.image}
              style={styles.ProfileImageStyle}
              resizeMode={'contain'}
            />
            <Text style={styles.UserNameStyle}>User-1</Text>
          </View>
          <View style={styles.ProfileViewStyle}>
            <Image
              source={images.home.StarIcon}
              style={styles.ProfileStarIconStyle}
              resizeMode={'contain'}
            />
            <Text style={styles.ratingTextStyle}>{item.rating}</Text>
          </View>
        </View>
        <Text style={styles.TitleTextStyle}>
          Lorem Ipsum is dollar text for dum...
        </Text>
        <Text style={styles.discTextStyle}>{item.Disc}</Text>
        <Text style={styles.readMoreTextStyle}>{'Read More >'}</Text>
        <View style={styles.HorizontalLineStyle} />
        <View style={styles.FooterStyle}>
          <View style={styles.likeSeactioViewStyle}>
            <Image
              source={HomeIcon.StaticIcons.LikeIcon}
              resizeMode={'contain'}
              style={styles.ComonLikeIconStyle}
            />
            <Text style={styles.CommonLikeDislikeTextStyle}>{item.Like}</Text>
            <Image
              source={HomeIcon.StaticIcons.LikeIcon}
              resizeMode={'contain'}
              style={styles.ComonLikeIconStyle}
            />
            <Text style={styles.CommonLikeDislikeTextStyle}>
              {item.DisLike}
            </Text>
          </View>
          <View style={styles.likeSeactioViewStyle}>
            <Text style={styles.TimeTextStyle}>{item.Time}</Text>
            <Image
              source={HomeIcon.StaticIcons.VerticalMenuIcon}
              resizeMode={'contain'}
              style={styles.MenuIconStyle}
            />
          </View>
        </View>
      </View>
    );
  };

  const SkillRender = ({ item, index }) => {
    return (
      <View style={styles.SkillCardViewStyle}>
        <ImageBackground
          source={item.Skillimage}
          style={styles.ActivityImageStyle}
          imageStyle={{ borderRadius: dW(30) }}>
          <LinearGradient
            colors={['#00000000', '#000000']}
            start={{ x: 0.5, y: 0.5 }}
            end={{ x: 0.5, y: 1 }}
            style={styles.LiniarEffectViewStyle}>
            <View style={styles.IconViewStyle}>
              <Image
                source={HomeIcon.StaticIcons.DotIconMenu}
                style={styles.DotIConStyle}
                resizeMode={'cover'}
              />
              <Image
                source={HomeIcon.StaticIcons.HertIcon}
                style={styles.HeartIconStyle}
                resizeMode={'contain'}
              />
            </View>
            {/* <View style={styles.RatigViewStyle}>
              <Image source={images.home.StarIcon} tintColor={'#FECF6A'} style={styles.StarIconStyle} resizeMode={'contain'}/>
              <Text style={styles.RatingTextStyle}>{item.rating}</Text>
            </View> */}
          </LinearGradient>
        </ImageBackground>
        <View style={styles.SkillDetailViewStyle}>
          <Text style={styles.SkilNameTextStyle}>{item.SkillName}</Text>
          <Text style={styles.timeTextStyle}>{item.TimeDate}</Text>
          <View style={styles.SkillFooterViewStyle}>
            <View style={styles.ProfileDetailStyle}>
              <Image
                source={item.Profileimage}
                style={styles.ProfileIconStyle}
                resizeMode={'contain'}
              />
              <Text style={styles.nameTextStyle}>{item.name}</Text>
            </View>
            <Text style={styles.RoundTextStyle}>{item.round}</Text>
          </View>
        </View>
      </View>
    );
  };

  const Participantrender = ({ item, index }) => {
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

  return (
    <>
    <View style={styles.container}>
      <CommonHeader
        leftIcon={CommonIcon.BurgerMenu}
        LeftProps={'BurgerMenu'}
        title={'Dashboard'}
        RigthIcon={CommonIcon.NotificationIcon}
        SubTitle={''}
        rigthType={'path'}
        RigthIconProps={''}
        disabled={false}
      />
      <ScrollView showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View style={styles.SearchTextinputViewStyle}>
          <CommonSearch
            serachicon={images.Location.search_icon}
            placeholder={'Search...'}
            text={search}
            onChange={setSearch}
          />
        </View>
        <View style={styles.UpcomingViewStyle}>
          <Text style={styles.UpcomingTextStyle}>
            Upcoming Activities for {'\n'}approval
          </Text>
          <Image
            source={CommonIcon.FilterIcon}
            style={styles.FilterIconStyle}
            resizeMode={'contain'}
          />
        </View>

        <ActivityComponent activityData={activityData} currentPage={currentPage} fetchActivities={fetchActivities} load={loading} hasMoreData={hasMoreData}
          apiMessage={apiMessage}
        />

        <Text style={styles.GalleryTextStyle}>Gallery</Text>
        <FlatList
          style={{ marginTop: dH(30) }}
          horizontal
          data={GalleryData}
          renderItem={renderGalleryItem}
          keyExtractor={item => item.id.toString()}
        />
        <Text style={styles.ParticipantTextStyle}>Participant Info</Text>
        <View style={styles.CommonTotalViewStyle}>
          <Text style={styles.CommonFirstTextStyle}>Total Booking</Text>
          <Text style={styles.CommonSecoundTextStyle}>550</Text>
        </View>
        <View style={styles.CommonTotalViewStyle}>
          <Text style={styles.CommonFirstTextStyle}>Total Activities</Text>
          <Text style={styles.CommonSecoundTextStyle}>120</Text>
        </View>
        <FlatList
          horizontal
          data={CardDetail}
          renderItem={renderCardDetail}
          keyExtractor={item => item.id.toString()}
          style={styles.CardListViewStyle}
        />

        <View style={styles.RevenueViewStyle}>
          <Text style={styles.RevenueTextStyle}>Total Revenue</Text>
          <Image
            source={CommonIcon.FilterIcon}
            style={styles.FilterIconStyle}
            resizeMode={'contain'}
          />
        </View>

        <View>
          <CustomLineChart />
        </View>

        <Text style={styles.FeedTextStyle}>Feed</Text>
        <FlatList
          horizontal
          style={styles.SkillListViewStyle}
          data={SkillCard}
          renderItem={SkillRender}
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
      </ScrollView>
    </View>
    {isLoading && <CustomLoader isLoading={isLoading}/>}
    </>
  );
};

export default Home;
