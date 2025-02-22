import {
  FlatList,
  Image,
  Keyboard,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
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
import {
  ActivityInterestAction,
  CreateActivityAction,
  SelectedLocationDataGetClearAction,
} from '../../Redux/actions/CreateAction';
import * as Yup from 'yup';
import {useFormik} from 'formik';
import {AppHelper} from '../../constants';
import {resizeUI} from '../../../Helper/Constants';
import {useNavigation} from '@react-navigation/native';
import {
  DateTimePickerAndroid,
  DatePickerOptions,
} from '@react-native-community/datetimepicker';
import {differenceInMinutes} from 'date-fns';
import fonts from '../../assets/fonts';
import MainContainer from '../../components/MainContainer';
import moment from 'moment';

const AddPostBooking = () => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  const {activityinterest} = useAppSelector(state => state.CreateReducer);
  const {selectedlocationdata} = useAppSelector(state => state.CreateReducer);
  const {isLoading} = useAppSelector(state => state.GlobalReducer);

  useEffect(() => {
    dispatch(ActivityInterestAction());
  }, []);

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
      // totalhour: Yup.string().matches(
      //   /^(0*[1-9]|[1-9][0-9]*):([0-5][0-9])$/,
      //   'Total hour must be at least 1:00',
      // ),
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
    handleBlur,
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
      return moment(dateString, 'MM/DD/YYYY').format('DD/MM/YYYY');
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

    console.log('file', file);
    console.log('file', values.cover);

    const formdata = new FormData();
    formdata.append('BannerAttachment', file);
    formdata.append('ActivityTitle', `${values.activityname}`);
    formdata.append('ActivityAbout', `${values.activity}`);
    formdata.append('Venue', `${values?.venue}`);
    formdata.append(
      'StartDateTime',
      `${formatDate(values?.startDate?.toLocaleDateString())} 08:00`,
    );
    formdata.append(
      'EndDateTime',
      `${formatDate(values?.endDate?.toLocaleDateString())} 09:00`,
    );
    formdata.append('TotalSeats', values?.seat);
    formdata.append('Price', values?.price);
    formdata.append('WebinarLink', `${values?.webinarlink}`);
    formdata.append('StartTimeActual', starttime);
    formdata.append('EndTimeActual', endtime);
    formdata.append(
      'ActivityInterestName',
      `${values?.interest?.activityInterestName}`,
    );

    // const formdata = new FormData();
    // formdata.append('WebinarLink', 'jdjdjddd');
    // formdata.append('ActivityInterestName', 'drawing');
    // formdata.append('ActivityTitle', 'Classes ddssssksk dsjj');
    // formdata.append('Price', '200');
    // formdata.append('TotalSeats', '20');
    // formdata.append('Venue', 'Ahmedabad, Gujarat, India');
    // formdata.append('EndDateTime', '13/12/2024 09:00');
    // formdata.append('EndTimeActual', '15:00:00');
    // formdata.append('StartTimeActual', '12:00:00');
    // formdata.append('StartDateTime', '12/12/2024 08:00');
    // formdata.append('ActivityAbout', 'Making Tea');

    console.log('formdata', formdata._parts);

    dispatch(
      CreateActivityAction(formdata, res => {
        if (res?.status) {
          resetForm();
          dispatch(SelectedLocationDataGetClearAction());
          navigation.navigate('FeedStack');
        }
      }),
    );
  };

  console.log('err', errors);

  const handleDateChange = (type, selectedDate) => {
    if (selectedDate) {
      type === 'startDate'
        ? setFieldValue('startDate', selectedDate)
        : setFieldValue('endDate', selectedDate);
    }
  };

  const handleTimeChange = (type, selectedTime) => {
    if (selectedTime) {
      type === 'startTime'
        ? setFieldValue('startTime', selectedTime)
        : setFieldValue('endTime', selectedTime);
    }
  };

  const openDatePicker = type => {
    DateTimePickerAndroid.open({
      value: type === 'startDate' ? values.startDate : values.endDate,
      mode: 'date',
      display: 'default',
      minimumDate: new Date(), // restricts to future dates
      onChange: (event, selectedDate) => {
        if (selectedDate && selectedDate >= new Date()) {
          handleDateChange(type, selectedDate);
        }
      },
    });
  };

  const openTimePicker = type => {
    DateTimePickerAndroid.open({
      value: type === 'startTime' ? values.startTime : values.endTime,
      mode: 'time',
      display: 'default',
      onChange: (event, selectedTime) => handleTimeChange(type, selectedTime),
    });
  };

  useEffect(() => {
    const calculateTotalHours = () => {
      const start = values.startTime;
      const end = values.endTime;

      // Calculate difference in minutes
      const diffInMinutes = differenceInMinutes(end, start);

      if (diffInMinutes > 0) {
        // Convert minutes to hours and minutes format
        const hours = Math.floor(diffInMinutes / 60);
        const minutes = diffInMinutes % 60;
        setFieldValue(
          'totalhour',
          `${hours}:${minutes < 10 ? '0' : ''}${minutes}`,
        );
      } else {
        setFieldValue('totalhour', '0:00'); // Set default if end time is before start time
      }
    };

    calculateTotalHours();
  }, [values.startTime, values.endTime]);

  useEffect(() => {
    if (selectedlocationdata?.locationname !== formik.values.location) {
      formik.setFieldValue('venue', selectedlocationdata?.locationname);
    }
  }, [selectedlocationdata]);

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

  const onNextScreen = () => {
    console.log('Publish');
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
    <View style={styles.container}>
      <CommonHeader
        leftIcon={null}
        title={'Create Activity'}
        RigthIcon={null}
        SubTitle={''}
        rigthType={''}
        RigthIconProps={''}
      />
      <MainContainer absoluteLoading={isLoading}>
        <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
          <View style={styles.DropDownViewStyle}>
            <CustomDropDown
              LeftIcon={CreateIconImage.ActivityIcon}
              Placeholder={'Activity Intrerested in'}
              RigthIcon={CreateIconImage.DownArrow}
              data={activityinterest}
              select={values.interest}
              onSelect={selectedValue =>
                setFieldValue('interest', selectedValue)
              }
              keyField="activityID" // Custom key for ID
              valueField="activityInterestName" // Custom key for Title
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
              onBlur={handleBlur('activityname')}
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
              onBlur={handleBlur('activity')}
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
              onFocus={() => {
                Keyboard.dismiss(),
                  navigation.navigate('AddLocation', {
                    name: 'Booking',
                  });
              }}
              onBlur={handleBlur('venue')}
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
              onBlur={handleBlur('seat')}
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
              onBlur={handleBlur('totalhour')}
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
              onBlur={handleBlur('price')}
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
              onBlur={handleBlur('')}
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

          {/* <Text style={styles.OfferTextStyle}>Offers</Text>
        <FlatList
          data={OfferData}
          renderItem={Offerrender}
          keyExtractor={item => item.id.toString()}
        /> */}
          <View style={styles.ContinueViewStyle}>
            <GradientButton
              text={'Publish'}
              onNext={handleSubmit}
              Icon={false}
            />
          </View>
        </ScrollView>
      </MainContainer>
    </View>
  );
};

export default AddPostBooking;
