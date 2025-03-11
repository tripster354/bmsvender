import {
  Alert,
  FlatList,
  Image,
  Keyboard,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import styles from './styles';
import CommonHeader from '../../components/CommonHeader';
import {CommonIcon} from '../../assets/images/CommonIcon';
import CustomDropDown from '../../components/CustomDropDown';
import CreateIconImage from '../../assets/images/CreateImageIcon';
import {dH, dW} from '../../utils/dynamicHeigthWidth';
import Colors from '../../utils/theme/colors';
import CommonTextinput from '../../components/CommonTextinput';
import {GalleryData} from '../Home/MockData';
import CommonShortInput from '../../components/CommonShortInput';
import {OfferData} from './MockData';
import GradientButton from '../../constants/GradiantButton';
import {useAppDispatch, useAppSelector} from '../../Redux/reducers/hook';
import * as Yup from 'yup';
import {useFormik} from 'formik';
import {AppHelper} from '../../constants';
import {resizeUI} from '../../../Helper/Constants';
import {useFocusEffect, useNavigation, useRoute} from '@react-navigation/native';
import RNDateTimePicker, { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import {differenceInMinutes} from 'date-fns';
import fonts from '../../assets/fonts';
import MainContainer from '../../components/MainContainer';
import moment from 'moment';
import CustomLoader from '../../components/CustomLoader';
import APICall from '../../utils/common';
import { endPoint } from '../../utils/endPoint';
import { ActivityInterestAction } from '../../store/actions/SessionActions';
import { useSelector } from 'react-redux';
import { getAsyncStorage, showToast } from '../../utils/commonFunction';
import GetLocation, {
  Location,
  LocationErrorCode,
  isLocationError,
} from 'react-native-get-location';

const AddPostBooking = () => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const route = useRoute()
  const [isLoading , setIsLoading] = useState(false);
  const [location, setLocation] = useState();
  const [error, setError] = useState(null);
  const [showPicker, setShowPicker] = useState(false);
  const [pickerType, setPickerType] = useState(null);
  const [tempDate, setTempDate] = useState(new Date());
  const locationData = route?.params
  
  const ActivityData = useSelector(state => state.SessionReducer.activityData);
  // const getLoacation = useSelector(state => state.SessionReducer.getLoacation)
  useEffect(() => {
    ActivityApiCall()
    // LocationGet()
  }, []);
  useFocusEffect(
  useCallback(() => {
    console.log('locationData ===>', locationData?.initialRegion);

    if (locationData?.initialRegion?.locationname) {
      handleChange('venue')(locationData.initialRegion.locationname);
    }
  }, [locationData?.initialRegion?.locationname])
);
  // useEffect(()=>{
  //   console.log('getLoacation',getLoacation)
  //   setLocation(getLoacation?.locationdata)
  // },[])

  const LocationGet = async() =>{
    // setLocation(null);
    // setError(null);

    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 30000,
      rationale: {
        title: 'Location permission',
        message: 'The app needs the permission to request your location.',
        buttonPositive: 'Ok',
      },
    })
      .then(newLocation => {
        console.log('newLoction',newLocation)
        setLocation(newLocation);
      })
      .catch(ex => {
        if (isLocationError(ex)) {
          const {code, message} = ex;
          Alert.alert('please Turn On Location')
          setError(code);
        } else {
          console.warn(ex);
        }
        setLocation(null);
      });
  }
  
  const ActivityApiCall = async() =>{
    const Token = await getAsyncStorage('Token')
    const body = ''
    setIsLoading(true)
    await APICall('get', body, endPoint.getactivity, false)
    .then((res) => {
      setIsLoading(false);
      if (res && typeof res === 'object' && 'data' in res) {
        if ((res as any).data.status === 200) {
          dispatch(ActivityInterestAction(res.data.data))
        }
      }
    })

  }

  const formik = useFormik({
    initialValues: {
      interest: '',
      activityname: '',
      activity: '',
      cover: '',
      venue: '',
      startDate: new Date(),
      endDate: new Date(),
      startTime: new Date(),
      endTime: new Date(),
      seat: '',
      totalhour: '',
      price: '',
      webinarlink: '',
    },
    validationSchema: Yup.object({
      interest: Yup.object().required('interest is required'),
      activityname: Yup.string().required('Activity name is required'),
      activity: Yup.string().required('Activity is required'),
      cover: Yup.object().required('Cover Image is required'),
      venue: Yup.string().required('Venue is required'),
      seat: Yup.string().required('Total seat is required'),
      price: Yup.number().required('Price is required'),
      webinarlink: Yup.string().required('Webinarlink is required'),
    }),
    onSubmit: values => {
      submitPress(values);
    },
  });

  const {
    values,
    errors,
    handleSubmit,
    handleChange,
    setFieldValue,
    touched,
    resetForm,
  } = formik;

  const submitPress = async (values: any) => {
    function getImageName(imageData: any) {
      const pathParts = imageData?.path?.split('/');
      return pathParts[pathParts?.length - 1];
    }
    const file = {
      uri: values.cover?.data?.path || values?.cover?.path,
      name: getImageName(values?.cover?.data || values?.cover),
      type: values.cover?.data?.mime || values?.cover?.mime,
    };

    const ST = new Date(values.startTime);
    const ET = new Date(values.endTime);

    const formatDate = dateString => {
      return moment(dateString, 'MM/DD/YYYY').format('YYYY-MM-DD');
    };

    const starttime = ST.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    });
    const endtime = ET.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    });



    console.log('${formatDate(values?.startDate?.toLocaleDateString())}',values?.startDate?.toLocaleDateString())
    const myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${await getAsyncStorage("Token")}`);

const formdata = new FormData();
formdata.append("category_id",`${values.interest.id}`);
formdata.append("name", `${values.activityname}`);
formdata.append("description", `${values.activity}`);
formdata.append("location_name", `${values.venue}`);
formdata.append("latitude", locationData?.initialRegion?.locationdata?.latitude);
formdata.append("longitude", locationData?.initialRegion?.locationdata?.longitude);
formdata.append("start_date", `${moment(values?.startDate, 'MM/DD/YYYY').format('YYYY-MM-DD')}`);
formdata.append("end_date", `${moment(values?.endDate, 'MM/DD/YYYY').format('YYYY-MM-DD')}`);
formdata.append("start_time", starttime);
formdata.append("end_time", endtime);
formdata.append("total_seat", values?.seat);
formdata.append("price", `${values.price}`);
formdata.append("url_link", "https://testbyrahil.com");
formdata.append("images", file);

console.log('fotmdata',formdata)
// return
const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: formdata,
  redirect: "follow"
};
setIsLoading(true)
fetch("https://honeydew-magpie-887435.hostingersite.com/api/vender/create-activity", requestOptions)
  .then((response) => response.json())
  .then((result) => {
    setIsLoading(false)
    if(result.status == 201){
      console.log('message==>',result)
      showToast(result.message)
      resetForm();
      navigation.navigate('FeedStack');
    }
  })
  .catch((error) => console.error(error));
  };

  console.log('err', errors);

  const handleDateChange = (type, selectedDate) => {
    console.log('selectDate===>',selectedDate)
    if (selectedDate) {
      type === 'startDate'
        ? setFieldValue('startDate', selectedDate)
        : setFieldValue('endDate', selectedDate);
    }
    setShowPicker(false);
  };

  const handleTimeChange = (type, selectedTime) => {
    console.log('selecteTime===>',type,selectedTime)
    if (selectedTime) {
      type === 'startTime'
        ? setFieldValue('startTime', selectedTime)
        : setFieldValue('endTime', selectedTime);
    }
    setShowPicker(false);
  };


  const openDatePicker = (type) => {
    console.log('type=====>>>>>',values)
    if (Platform.OS === 'android') {
      DateTimePickerAndroid.open({
        value: type === 'startDate' ? values.startDate : values.endDate,
        mode: 'date',
        display: 'default',
        minimumDate: new Date(),
        onChange: (event, selectedDate) => {
          console.log('seleDate====>>',selectedDate)
          if (selectedDate && selectedDate >= new Date()) {
            handleDateChange(type, selectedDate);
          }        },
      });
    } else {
      setPickerType(type);
      handleDateChange(type, new Date());
      setShowPicker(true);
    }
  };

  const openTimePicker = (type) => {
    if (Platform.OS === 'android') {
      DateTimePickerAndroid.open({
        value: type === 'startTime' ? values.startTime : values.endTime,
        mode: 'time',
        display: 'default',
        onChange: (event, selectedTime) => handleTimeChange(type, selectedTime),
      });
    } else {
      setPickerType(type);
      handleDateChange(type, new Date());
      setShowPicker(true);
    }
  };

  useEffect(() => {
    const calculateTotalHours = () => {
      const start = values.startTime;
      const end = values.endTime;
      console.log('startdata , end Dat==',start ,end)

      const diffInMinutes = differenceInMinutes(end, start);

      if (diffInMinutes > 0) {
        const hours = Math.floor(diffInMinutes / 60);
        const minutes = diffInMinutes % 60;
        setFieldValue(
          'totalhour',
          `${hours}:${minutes < 10 ? '0' : ''}${minutes}`,
        );
      } else {
        setFieldValue('totalhour', '0:00'); 
      }
    };

    calculateTotalHours();
  }, [values.startTime, values.endTime]);


  const selectImage = () => {
    AppHelper.profilePictureClick('Post')

      .then((result: string) => {
        setFieldValue('cover', result);
      })
      .catch((error: any) => {});
  };

  const renderGalleryItem = (item: any) => {
    return (
      <View style={{marginTop: resizeUI(20), alignItems: 'center'}}>
        <Image
          source={{uri: item}}
          style={styles.GalleryImageStyle}
          resizeMode={'cover'}
        />
      </View>
    );
  };


  const Offerrender = ({item, index}) => {
    return (
      <View style={styles.MainCardViewStyle}>
        <View style={styles.InnerViewStyle}>
          <View style={styles.FistViewStyle}>
            <Image
              source={item.image}
              resizeMode={'contain'}
              style={styles.OfferImageStyle}
            />
            <View style={styles.TextSectionStyle}>
              <Text style={styles.OfferTitleTextStyle}>{item.OffetTitle}</Text>
              <Text style={styles.OfferDiscTextStyle}>{item.OfferDisc}</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.OnPressViewStyle}>
          <Text style={styles.AppleTextStyle}>Apply</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <>
    <View style={styles.container}>
      <CommonHeader
        leftIcon={null}
        title={'Create Activity'}
        RigthIcon={null}
        SubTitle={''}
        rigthType={''}
        RigthIconProps={''}
      />
 
        <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
          <View style={styles.DropDownViewStyle}>
            <CustomDropDown
              LeftIcon={CreateIconImage.ActivityIcon}
              Placeholder={'Activity Intrerested in'}
              RigthIcon={CreateIconImage.DownArrow}
              data={ActivityData}
              select={values.interest}
              onSelect={selectedValue =>
              {
                console.log('selectedValue',selectedValue.id);
                setFieldValue('interest', selectedValue)}
              }
              keyField="id" // Custom key for ID
              valueField="name" // Custom key for Title
            />
            {!values.interest && errors.interest ? (
              <View>
                <Text
                  style={{
                    fontSize: dW(25),
                    fontFamily: fonts.NexaLigth,
                    color: Colors.Red,
                  }}>
                  {errors.interest}
                </Text>
              </View>
            ) : (
              <></>
            )}
          </View>
          <View
            style={[
              styles.CommonTextinputStyle,
              {marginTop: dH(74), paddingHorizontal: dW(5)},
            ]}>
            <CommonTextinput
              InputIcon={CreateIconImage.ActivityIcon}
              text={values.activityname}
              secure={false}
              onChange={handleChange('activityname')}
              placeholderText={'Activity Name'}
              keyBoradTextType={'default'}
              placeholderTextColor={Colors.inActive}
              touched={touched.activityname}
              error={errors.activityname}
            />
          </View>
          <View
            style={[
              styles.CommonTextinputStyle,
              {marginTop: dH(74), paddingHorizontal: dW(5)},
            ]}>
            <CommonTextinput
              InputIcon={CreateIconImage.ActivityIcon}
              text={values.activity}
              secure={false}
              onChange={handleChange('activity')}
              placeholderText={'About Activity'}
              keyBoradTextType={'default'}
              placeholderTextColor={Colors.inActive}
              multiline={true}
              touched={touched.activity}
              error={errors.activity}
            />
          </View>

          <View style={styles.covertextcon}>
            <Text style={styles.CoverTextStyle}>Cover Pictcure</Text>
            <TouchableOpacity onPress={selectImage}>
              <Text style={styles.addcovertext}>Add Cover</Text>
            </TouchableOpacity>
          </View>

          {!values.cover && errors.cover ? (
            <View>
              <Text
                style={{
                  fontSize: dW(25),
                  fontFamily: fonts.NexaLigth,
                  color: Colors.Red,
                }}>
                {errors.cover}
              </Text>
            </View>
          ) : (
            <></>
          )}
          {values?.cover?.data?.path &&
            renderGalleryItem(values?.cover?.data?.path)}
          <View
            style={[
              styles.CommonTextinputStyle,
              {marginTop: dH(79), paddingHorizontal: dW(5)},
            ]}>
            <CommonTextinput
              InputIcon={CommonIcon.LocationIcon}
              text={values.venue}
              secure={false}
              onChange={handleChange('venue')}
              placeholderText={'Venue'}
              keyBoradTextType={'default'}
              placeholderTextColor={Colors.inActive}
              RigthIcon={CommonIcon.TargetIcon}
              // onFocus={() =>LocationGet}
              onFocus={() => {
                // Keyboard.dismiss(),
                // LocationGet()
                  navigation.navigate('AddLocation', {
                    name: 'Booking',
                  });
              }}
              touched={touched.venue}
              error={errors.venue}
            />
          </View>

          <View style={styles.CommonSelectionViewStyle}>
            <CommonShortInput
              InputIcon={CommonIcon.MonthIcon}
              Text={`${values?.startDate?.toLocaleDateString()}`}
              onPress={() => {
                openDatePicker('startDate');
              }}
            />
            <CommonShortInput
              InputIcon={CommonIcon.MonthIcon}
              Text={`${values?.endDate?.toLocaleDateString()}`}
              onPress={() => {
                openDatePicker('endDate');
              }}
            />
          </View>
          <View style={styles.CommonSelectionViewStyle}>
            <CommonShortInput
              InputIcon={CommonIcon.TimeIcon}
              Text={`${values?.startTime?.toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
              })}`}
              onPress={() => openTimePicker('startTime')}
            />
            <CommonShortInput
              InputIcon={CommonIcon.TimeIcon}
              Text={`${values?.endTime?.toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
              })}`}
              onPress={() => openTimePicker('endTime')}
            />
          </View>
          {showPicker && Platform.OS === 'ios' && (
        <RNDateTimePicker
        style={{borderWidth:1,borderColor:'grey',borderRadius:10}}
          value={tempDate}
          mode={pickerType.includes('Date') ? 'date' : 'time'}
          display="spinner"
          minimumDate={pickerType.includes('Date') ? new Date() : undefined}
          onChange={(event, selectedValue) => {
            if (pickerType.includes('Date')) {
              handleDateChange(pickerType, selectedValue);
            } else {
              handleTimeChange(pickerType, selectedValue);
            }
          }}
        />
      )}

          <View
            style={[
              styles.CommonTextinputStyle,
              {marginTop: dH(50), paddingHorizontal: dW(5)},
            ]}>
            <CommonTextinput
              InputIcon={CommonIcon.SeatIcon}
              text={values.seat}
              secure={false}
              onChange={handleChange('seat')}
              placeholderText={'Total Seat'}
              keyBoradTextType={'number-pad'}
              placeholderTextColor={Colors.inActive}
              touched={touched.seat}
              error={errors.seat}
            />
          </View>
          <View
            style={[
              styles.CommonTextinputStyle,
              {marginTop: dH(50), paddingHorizontal: dW(5)},
            ]}>
            <CommonTextinput
              InputIcon={CommonIcon.TimeIcon}
              text={values.totalhour}
              secure={false}
              onChange={handleChange('totalhour')}
              placeholderText={'Total Hours'}
              keyBoradTextType={'number-pad'}
              placeholderTextColor={Colors.inActive}
              touched={touched.totalhour}
              error={errors.totalhour}
              editable={false}
            />
          </View>
          <View
            style={[
              styles.CommonTextinputStyle,
              {marginTop: dH(50), paddingHorizontal: dW(5)},
            ]}>
            <CommonTextinput
              InputIcon={CommonIcon.WalletIcon}
              text={values.price}
              secure={false}
              onChange={handleChange('price')}
              placeholderText={'Price'}
              keyBoradTextType={'number-pad'}
              placeholderTextColor={Colors.inActive}
              touched={touched.price}
              error={errors.price}
            />
          </View>
          <Text style={styles.WebinarTextStyle}>Webinar Link</Text>
          <View style={styles.ReferrelCodeViewStyle}>
            <TextInput
              placeholder="Enter Webinar link"
              style={{
                color: Colors.black,
                fontSize: resizeUI(25),
                flex: 1,
                marginRight: resizeUI(30),
              }}
              placeholderTextColor={Colors.grey}
              value={values.webinarlink}
              onChangeText={handleChange('webinarlink')}
              numberOfLines={1}
            />

            <View style={styles.ReferrelIconViewStyle}>
              <Image
                source={CreateIconImage.CopyIcon}
                style={[styles.CommonIconStyle, {right: dW(40)}]}
                resizeMode={'contain'}
              />
              <Image
                source={CreateIconImage.ShereIcon}
                style={[
                  styles.CommonIconStyle,
                  {height: dH(46), width: dW(46)},
                ]}
                resizeMode={'contain'}
              />
            </View>
          </View>
          <View style={styles.HorizonalLineStyle} />
          {!values.webinarlink && touched.webinarlink && errors.webinarlink ? (
            <View>
              <Text
                style={{
                  fontSize: dW(25),
                  fontFamily: fonts.NexaLigth,
                  color: Colors.Red,
                }}>
                {errors.webinarlink}
              </Text>
            </View>
          ) : (
            <></>
          )}
          <View style={styles.ContinueViewStyle}>
            <GradientButton
              text={'Publish'}
              onNext={handleSubmit}
              Icon={false}
            />
          </View>
        </ScrollView>

    </View>
    {isLoading && <CustomLoader isLoading={isLoading}/> }
    </>
  );
};

export default AddPostBooking;
