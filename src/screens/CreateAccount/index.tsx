import {
  Alert,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './styles';
import CommonHeader from '../../components/CommonHeader';
import CreateIconImage from '../../assets/images/CreateImageIcon';
import { dH, dW } from '../../utils/dynamicHeigthWidth';
import TopTabNavigator from '../../navigation/TopTabNavigator';
import CommonTextinput from '../../components/CommonTextinput';
import InputIcon from '../../assets/images/InputIcon';
import GradientButton from '../../constants/GradiantButton';
import Colors from '../../utils/theme/colors';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import CustomDropDown from '../../components/CustomDropDown';
import CustomVideoInput from '../../components/CustomVideoInput';
import { useAppDispatch, useAppSelector } from '../../Redux/reducers/hook';
import { onHandleRegister } from '../../Redux/actions/AuthAction';
import { useNavigation } from '@react-navigation/native';
import { all } from 'axios';
import { AppHelper } from '../../constants';
import { isEmpty, selectVideoFromGallery } from '../../constants/helper';
import fonts from '../../assets/fonts';
import { useSelector } from 'react-redux';
import { ActivityInterestAction, handleLoader } from '../../store/actions/SessionActions';
import APICall from '../../utils/common';
import { endPoint } from '../../utils/endPoint';
import { showToast } from '../../utils/commonFunction';
import CustomLoader from '../../components/CustomLoader';


const CreateAccount = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(true);
  // const ActivityData = [
  //   { id: 1, title: 'Music' },
  //   { id: 2, title: 'Sports' },
  //   { id: 3, title: 'Science' },
  //   { id: 4, title: 'Arts' },
  // ];
  const DocumentData = [
    { id: 1, name: 'PAN Card' },
    { id: 2, name: 'Aadhar Number' },
    { id: 3, name: 'Voter ID' },
    { id: 4, name: 'License No.' },
  ];

  // const {activityinterest} = useAppSelector(state => state.CreateReducer);
  const ActivityData = useSelector(state => state.SessionReducer.activityData);
  useEffect(() => {
    // dispatch(ActivityInterestAction());
    // dispatch(handleLoader(false));
    ActivityApiCall()
  }, []);
  
  const ActivityApiCall = async() =>{
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
      profile: '',
      name: '',
      mobile: '',
      email: '',
      instagram: '',
      tweeter: '',
      linkedin: '',
      interest: '',
      year: '',
      docname: '',
      doc: '',
      video: '',
    },
    validationSchema: Yup.object({
      profile: Yup.object().required('profile image is required'),
      name: Yup.string().required('Name is required'),
      email: Yup.string().required('email is required'),
      mobile: Yup.string()
        .required('Mobile number is required')
        .matches(/^[0-9]+$/, 'Mobile number must include only digits')
        .min(10, 'Mobile number must be exactly 10 digits')
        .max(10, 'Mobile number must be exactly 10 digits'),
      interest: Yup.object().required('interest is required'),
      year: Yup.number().required('year of experiance is required'),
      docname: Yup.object().required('docname is required'),
      doc: Yup.object().required('docname is required'),
      video: Yup.object().required('video is required'),
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
  } = formik;

  const submitPress = async (values: any) => {
    function getImageName(imageData: any) {
      const pathParts = imageData?.path.split('/');

      return pathParts[pathParts?.length - 1];
    }
    const file = {
      uri: values.profile?.data?.path || values.profile?.path,
      name: getImageName(values.profile.data || values.profile),
      type: values.profile?.data?.mime || values.profile?.mime,
    };
    const video = {
      uri: values.video?.uri,
      name: values.video.fileName,
      type: values.video?.type,
    };
    const doc = {
      uri: values.doc?.path,
      name: getImageName(values.doc),
      type: values.doc?.mime,
    };

    // console.log('file', file);
    // console.log('video', video);
    // console.log('doc', doc);

    // const formdata = new FormData();
    // formdata.append('FullName', values.name);
    // formdata.append('MobileNumber', values.mobile);
    // formdata.append('Email', values.email);
    // formdata.append('InstaLink', values?.instagram);
    // formdata.append('TwitterLink', values.tweeter);
    // formdata.append('LinkedInLink', values.linkedin);
    // formdata.append('WebSite', '');
    // formdata.append('ActivityInterestName', values?.interest?.title);
    // formdata.append('YearsOfExperience', values?.year);
    // formdata.append('UploadDocName', values?.docname?.title);
    // formdata.append('Video', video);
    // formdata.append('ProfileImage', file);
    // formdata.append('uploadDoc', doc);

    // console.log('formdata', formdata._parts);

    setIsLoading(true)
    const body = ({
      name: values.name,
      phone_number: values.mobile,
      refer_code: '',
      email: values.email,
      country_code: 91,
      years_of_exp: values.year,
      kyc_name: values?.docname?.title,
      category_id: 1,
      linkdin_urllinkdin_url: values.linkedin,
      insta_url: values?.instagram,
      tweeter_url: values.tweeter,
      image: file,
      kyc_proof_image: doc,
      intro_video: video
    })
    // console.log('body', body);
    // return
    await APICall('post', body, endPoint.register, true)
      .then((res) => {
        // console.log('res', res)
        showToast((res as any).data.message);
        if (res && typeof res === 'object' && 'data' in res) {
          setIsLoading(false)
          if ((res as any).data.status === 200) {
            // console.log('res', res.data)
            navigation.navigate('Verification', {
              userData: values.mobile,
              flag: 'register',
            })
          }
        }
      })
    return

    dispatch(
      onHandleRegister(formdata, res => {
        if (res?.status) {
          navigation.navigate('Login');
        }
      }),
    );
  };

  const selectImage = () => {
    AppHelper.profilePictureClick('ProfilePost')
      .then((result: string) => {
        // console.log('result',result)
        setFieldValue('profile', result);
      })
      .catch((error: any) => { });
  };
  const selectDoc = () => {
    AppHelper.profilePictureClick('Post')
      .then((result: string) => {
        setFieldValue('doc', result?.data || result);
        // console.log('doc', result.data);
      })
      .catch((error: any) => { });
  };
  const handleSelectVideo = async () => {
    try {
      const selectedVideo = await selectVideoFromGallery();
      if (selectedVideo) {
        // console.log('video', selectedVideo);
        setFieldValue('video', selectedVideo);
      } else {
        Alert.alert('No video selected');
      }
    } catch (error) {
      // console.log('Error selecting video: ', error);
      Alert.alert('Error selecting video');
    }
  };

  // console.log('error', errors);

  return (
    <View style={styles.container}>
      <CommonHeader
        leftIcon={null}
        title={'Create Account'}
        RigthIcon={null}
        SubTitle={''}
        rigthType={''}
        RigthIconProps={''}
      />
      <>
        <ScrollView style={{ flex: 1 }}>
          <View>
            <View style={styles.MainView}>
              <View style={styles.TopViewStyle}>
                <ImageBackground
                  borderRadius={dH(200)}
                  style={styles.SetImageViewStyle}
                  source={{
                    uri:
                      values?.profile?.data?.path || values?.profile?.path
                        ? values?.profile?.data?.path || values?.profile?.path
                        : '',
                  }}>
                  <Image
                    source={
                      values?.profile?.data?.path || values?.profile?.path
                        ? ''
                        : CreateIconImage.PhoneIcon
                    }
                    resizeMode={'contain'}
                    style={styles.PhoneIconStyle}
                  />
                </ImageBackground>
                <TouchableOpacity style={{ top: dH(-35) }} onPress={selectImage}>
                  <Image
                    source={CreateIconImage.EditImageIcon}
                    style={styles.EditImageStyle}
                    resizeMode={'contain'}
                  />
                </TouchableOpacity>

                {!values.profile && errors.profile ? (
                  <View>
                    <Text
                      style={{
                        fontSize: dW(25),
                        fontFamily: fonts.NexaLigth,
                        color: Colors.Red,
                      }}>
                      {errors.profile}
                    </Text>
                  </View>
                ) : (
                  <></>
                )}
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View
                  style={{
                    width: 4,
                    height: dH(50),
                    backgroundColor: Colors.OffBlue,
                  }}></View>
                <Text style={styles.personalText}>Personal detail</Text>
              </View>

              {/* personal detail  */}
              <View>
                <View style={styles.CommonTextinputStyle}>
                  <CommonTextinput
                    InputIcon={InputIcon.UserIcon}
                    text={values.name}
                    secure={false}
                    onChange={handleChange('name')}
                    placeholderText={'Name'}
                    keyBoradTextType={'default'}
                    placeholderTextColor={Colors.inActive}
                    onBlur={handleBlur('name')}
                    touched={touched.name}
                    error={errors.name}
                  />
                </View>
                <View
                  style={[styles.CommonTextinputStyle, { marginTop: dH(40) }]}>
                  <CommonTextinput
                    InputIcon={InputIcon.SecureIcon}
                    text={values.mobile}
                    secure={false}
                    onChange={handleChange('mobile')}
                    placeholderText={'Mobile'}
                    NumberLegth={10}
                    keyBoradTextType={'number-pad'}
                    placeholderTextColor={Colors.inActive}
                    onBlur={handleBlur('mobile')}
                    touched={touched.mobile}
                    error={errors.mobile}
                  />
                </View>
                <View
                  style={[styles.CommonTextinputStyle, { marginTop: dH(45) }]}>
                  <CommonTextinput
                    InputIcon={CreateIconImage.EmailIcon}
                    text={values.email}
                    secure={false}
                    onChange={handleChange('email')}
                    placeholderText={'Email'}
                    keyBoradTextType={'default'}
                    placeholderTextColor={Colors.inActive}
                    onBlur={handleBlur('email')}
                    touched={touched.email}
                    error={errors.email}
                  />
                </View>
                <Text style={styles.LinkProfileTextStyle}>
                  Link Your Profile
                </Text>
                <View>
                  <CommonTextinput
                    InputIcon={CreateIconImage.InstaLinkIcon}
                    text={values.instagram}
                    secure={false}
                    onChange={handleChange('instagram')}
                    placeholderText={'instagram link'}
                    keyBoradTextType={'default'}
                    placeholderTextColor={Colors.inActive}
                  />
                </View>
                <View
                  style={[styles.CommonTextinputStyle, { marginTop: dH(45) }]}>
                  <CommonTextinput
                    InputIcon={CreateIconImage.TwiterLinkIcon}
                    text={values.tweeter}
                    secure={false}
                    onChange={handleChange('tweeter')}
                    placeholderText={'tweeter link'}
                    keyBoradTextType={'default'}
                    placeholderTextColor={Colors.inActive}
                  />
                </View>
                <View
                  style={[styles.CommonTextinputStyle, { marginTop: dH(45) }]}>
                  <CommonTextinput
                    InputIcon={CreateIconImage.LinkdinLinkIcon}
                    text={values.linkedin}
                    secure={false}
                    onChange={handleChange('linkedin')}
                    placeholderText={'linkedin link'}
                    keyBoradTextType={'default'}
                    placeholderTextColor={Colors.inActive}
                  />
                </View>
              </View>

              {/* Professional detail  */}
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: dH(50),
                }}>
                <View
                  style={{
                    width: 4,
                    height: dH(50),
                    backgroundColor: Colors.OffBlue,
                  }}></View>
                <Text style={styles.personalText}>Professional detail</Text>
              </View>

              <View>
                <View style={styles.DropDownViewStyle}>
                  <CustomDropDown
                    LeftIcon={CreateIconImage.ActivityIcon}
                    Placeholder={'Activity Intrerested in'}
                    RigthIcon={CreateIconImage.DownArrow}
                    data={ActivityData}
                    select={values.interest}
                    onSelect={selectedValue =>
                      setFieldValue('interest', selectedValue)
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
                  style={[styles.CommonTextinputStyle, { marginTop: dH(74) }]}>
                  <CommonTextinput
                    InputIcon={CreateIconImage.ActivityIcon}
                    text={values.year}
                    secure={false}
                    onChange={handleChange('year')}
                    placeholderText={'year of Experiance'}
                    keyBoradTextType={'number-pad'}
                    NumberLegth={2}
                    placeholderTextColor={Colors.inActive}
                    onBlur={handleBlur('year')}
                    touched={touched.year}
                    error={errors.year}
                  />
                </View>
                <View style={styles.DropDownViewStyle}>
                  <CustomDropDown
                    LeftIcon={CreateIconImage.UploadDocIcon}
                    Placeholder={'Upload Doc. for KYC'}
                    RigthIcon={CreateIconImage.DownArrow}
                    data={DocumentData}
                    select={values.docname}
                    onSelect={selectedValue =>
                      setFieldValue('docname', selectedValue)
                    }
                    keyField="id" // Custom key for ID
                    valueField="name" // Custom key for Title
                  />
                  {!values.docname && errors.docname ? (
                    <View>
                      <Text
                        style={{
                          fontSize: dW(25),
                          fontFamily: fonts.NexaLigth,
                          color: Colors.Red,
                        }}>
                        {errors.docname}
                      </Text>
                    </View>
                  ) : (
                    <></>
                  )}
                  <TouchableOpacity onPress={selectDoc}>
                    <Text style={styles.adddoctext}>Add Document</Text>
                  </TouchableOpacity>
                  {!values.doc && errors.doc ? (
                    <View>
                      <Text
                        style={{
                          fontSize: dW(25),
                          fontFamily: fonts.NexaLigth,
                          color: Colors.Red,
                        }}>
                        {errors.doc}
                      </Text>
                    </View>
                  ) : (
                    <></>
                  )}

                  {values?.doc?.data?.path ||
                    (values?.doc?.path && (
                      <Image
                        style={styles.docImage}
                        source={{
                          uri:
                            values?.doc?.data?.path || values?.doc?.path
                              ? values?.doc?.data?.path || values?.doc?.path
                              : '',
                        }}
                      />
                    ))}
                </View>
                <View style={styles.CommonTextinputViewStyle}>
                  <CustomVideoInput
                    RigthIcon={CreateIconImage.CameraIcon}
                    PlaceholderText={
                      values?.video
                        ? values?.video?.fileName
                        : 'Shoot 30 Sec. Video'
                    }
                    Editable={false}
                    placeholderTextColor={Colors.inActive}
                  />
                  {!values.video && errors.video ? (
                    <View>
                      <Text
                        style={{
                          fontSize: dW(25),
                          fontFamily: fonts.NexaLigth,
                          color: Colors.Red,
                        }}>
                        {errors.video}
                      </Text>
                    </View>
                  ) : (
                    <></>
                  )}
                </View>
                <TouchableOpacity onPress={handleSelectVideo}>
                  <Text style={styles.adddoctext}>Add Video</Text>
                </TouchableOpacity>
                {/* <Text style={styles.PercentageTextStyle}>35%</Text> */}
                {/* <Text style={styles.OnboardingTextStyle}>Onboarding</Text> */}
                {/* 
            <View style={styles.ApprocalViewStyle}>
              <View style={styles.OuterBorderViewStyle}>
                <View style={styles.InnerDotStyle} />
              </View>
              <Text style={styles.ApprovalTextStyle}>Send for Approval</Text>
            </View>
            <Text style={styles.ReferredTextStyle}>Referred by</Text>
            <View style={styles.ReferrelCodeViewStyle}>
              <Text style={styles.ReferrelTextStyle}>KcONmbrk</Text>
              <View style={styles.ReferrelIconViewStyle}>
                <Image
                  source={CreateIconImage.CopyIcon}
                  style={[styles.CommonIconStyle, {right: dW(36)}]}
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
            </View> */}
                {/* <View style={styles.HorizonalLineStyle} /> */}
                <View style={styles.ContinueViewStyle2}>
                  <GradientButton
                    text={'Continue'}
                    // onNext={handleSubmit}
                    onNext={handleSubmit}
                    Icon={true}
                  />
                </View>
              </View>
            </View>
            {/* <TopTabNavigator /> */}
          </View>
        </ScrollView>
        {isLoading && <CustomLoader isLoading={isLoading}/> }
        </>
    </View>
  );
};

export default CreateAccount;
