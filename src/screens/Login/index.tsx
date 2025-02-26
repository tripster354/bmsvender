import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import CommonHeader from '../../components/CommonHeader';
import CommonTextinput from '../../components/CommonTextinput';
import InputIcon from '../../assets/images/InputIcon';
import Colors from '../../utils/theme/colors';
import {dH} from '../../utils/dynamicHeigthWidth';
import GradientButton from '../../constants/GradiantButton';
import {useNavigation} from '@react-navigation/native';
import * as Yup from 'yup';
import {useFormik} from 'formik';
import {useAppDispatch, useAppSelector} from '../../Redux/reducers/hook';
import {onHandleLogin, onHandleLoginVerify} from '../../Redux/actions/AuthAction';
import MainContainer from '../../components/MainContainer';

const Login = () => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  const {isLoading} = useAppSelector(state => state.GlobalReducer);

  const formik = useFormik({
    initialValues: {
      mobile: '',
      // password: '',
    },
    validationSchema: Yup.object({
      mobile: Yup.string()
        .required('Mobile number is required')
        .matches(/^[0-9]+$/, 'Mobile number must include only digits')
        .min(10, 'Mobile number must be exactly 10 digits')
        .max(10, 'Mobile number must be exactly 10 digits'),
      // password: Yup.string().required('Password number is required'),
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
    const formdata = new FormData();
    formdata.append('phone_number', values.mobile);
    formdata.append('country_code', 91);
    try {
      const loginResponse = await dispatch(onHandleLogin(formdata));
      console.log('loginResponse',loginResponse)
      if(loginResponse.status){
        navigation.navigate('Verification',{
          userData: values.mobile 
        })
      }
    } catch (error) {
      console.log('error',error)
    }
    
  };

  const onNextScreen = () => {
    handleSubmit();
  };
  const onSignUpPress = () => {
    navigation.navigate('CreateAccount');
  };

  return (
    <MainContainer absoluteLoading={isLoading}>
      {/* <CommonHeader
        leftIcon={null}
        title={''}
        RigthIcon={null}
        SubTitle={''}
        rigthType={''}
        RigthIconProps={''}
      /> */}
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.MainView}>
            <Text style={styles.LoginTextStyle}>
              Login from{'\n'}Mobile Number/Email id
            </Text>
            <Text style={styles.VerificationTextStyle}>
              Enter your phone number/email so we can send you the verification
              code
            </Text>

            {/* <View style={styles.CommonTextinputStyle}>
      <CommonTextinput    
        InputIcon = {InputIcon.UserIcon}
        text = {email}
        secure = {false}
        onChange = {setEmail}
        placeholderText ={'Email id'}
        keyBoradTextType = {'default'}
        placeholderTextColor = {Colors.inActive}
      />   
      </View> 
      <View style={[styles.CommonTextinputStyle,{marginTop:dH(40)}]}>
      <CommonTextinput    
        InputIcon = {InputIcon.SecureIcon}
        text = {password}
        secure = {false}
        onChange = {setPassword}
        placeholderText ={'Password'}
        keyBoradTextType = {'default'}
        placeholderTextColor = {Colors.inActive}
      />  
      </View>
      <TouchableOpacity>
      <Text style={styles.ForgetTextStyle}>Forgot Password</Text>
      </TouchableOpacity> */}
          </View>

          {/* <View style={styles.HorizontalLineStyle}>
          <View style={styles.OrViewStyle}>
            <Text style={styles.ORTextStyle}>OR</Text>
          </View>
        </View> */}
          <View style={styles.MainView}>
            <View style={[styles.CommonTextinputStyle, {marginTop: dH(40)}]}>
              <CommonTextinput
                InputIcon={InputIcon.UserIcon}
                text={values.mobile}
                secure={false}
                onChange={handleChange('mobile')}
                placeholderText={'Mobile'}
                keyBoradTextType={'number-pad'}
                NumberLegth={10}
                placeholderTextColor={Colors.inActive}
                onBlur={handleBlur('mobile')}
                touched={touched.mobile}
                error={errors.mobile}
              />
            </View>
            {/* <View style={[styles.CommonTextinputStyle, {marginTop: dH(40)}]}>
              <CommonTextinput
                InputIcon={InputIcon.SecureIcon}
                text={values.password}
                secure={false}
                onChange={handleChange('password')}
                placeholderText={'password'}
                keyBoradTextType={'default'}
                placeholderTextColor={Colors.inActive}
                onBlur={handleBlur('password')}
                touched={touched.password}
                error={errors.password}
              />
              <TouchableOpacity onPress={onSignUpPress}>
                <Text style={styles.ForgetTextStyle}>Sign Up</Text>
              </TouchableOpacity>
            </View> */}
            <View style={styles.ContinueViewStyle}>
              <GradientButton
                text={'Continue'}
                onNext={onNextScreen}
                Icon={true}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </MainContainer>
  );
};

export default Login;
