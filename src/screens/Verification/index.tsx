import { Text, View } from 'react-native';
import React, { useState } from 'react';
import styles from './style';
import CommonHeader from '../../components/CommonHeader';
import OtpView from '../../components/otpView/OtpView';
import GradientButton from '../../constants/GradiantButton';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { onHandleLoginVerify } from '../../Redux/actions/AuthAction';
import { setAsyncStorage, showToast } from '../../utils/commonFunction';
import APICall from '../../utils/common';
import { endPoint } from '../../utils/endPoint';
import { handleLoader } from '../../store/actions/SessionActions';
import CustomLoader from '../../components/CustomLoader';

const Verification = () => {
  const [otpCode, setOtpCode] = useState<string>('');
  const [isLoading , setIsLoading] = useState(false);

  const navigation = useNavigation();
  const route = useRoute();
  const userNumber = route?.params?.userData;
  const flag = route?.params?.flag;
  console.log('userNumber', flag)
  const dispatch = useDispatch()

  const onNextScreen = async () => {
    try {
      setIsLoading(true);
      const body = ({
        phone_number: userNumber,
        country_code: "91",
        otp: otpCode
      })
      console.log('body', body)
      // const verifyResponse = await dispatch(onHandleLoginVerify(formdata));
      // console.log('OTP Verify Response:', verifyResponse.status);
    if(flag == 'register'){
      APICall('post', body, endPoint.verifyRegister, false)
        .then(async (res) => {
          setIsLoading(false);
          if (res && typeof res === 'object' && 'data' in res) {
            showToast((res as any).data.message);
            console.log('res', res.data)
            if ((res as any).data.status === 200) {
              const Token = res.data.access_token
              await setAsyncStorage("Token", Token.toString());
              navigation.navigate('SuccessScreen', {
                userData: res
              })
            }
          }
        })

    }
    else {
      setIsLoading(true);
      const body = ({
        phone_number: userNumber,
        country_code: "91",
        password: otpCode
      })
      APICall('post', body, endPoint.loginverify, false)
        .then(async (res) => {
          dispatch(handleLoader(false));
          if (res && typeof res === 'object' && 'data' in res) {
            showToast((res as any).data.message);
            console.log('res', res.data)
            if ((res as any).data.status === 200) {
              const Token = res.data.access_token
              await setAsyncStorage("Token", Token.toString());
              navigation.navigate('SuccessScreen', {
                userData: res
              })
            }
          }
        })

    }
    } catch (error) {
      console.error('OTP Verification Error:', error);
      showToast('Something went wrong. Please try again.');
    }
  }

  return (
    <>
    <View style={styles.container}>
      <CommonHeader
        leftIcon={null}
        title={''}
        RigthIcon={null}
        SubTitle={''}
        rigthType={''}
        RigthIconProps={''}
      />
      <Text style={styles.VerificationTextStyle}>Enter Verification Code</Text>
      <Text style={styles.VerificationDiscTextStyle}>Enter 4-digit code that we just send to{'\n'}your phone number <Text style={styles.NumberTextStyle}>+91 {userNumber}</Text></Text>
      <View style={styles.OtpViewStyle}>
        <OtpView onOtp={setOtpCode} />
      </View>
      <Text style={styles.ResetTextStyle}>Resend code in <Text style={styles.TimeTextStyle}>15:30</Text></Text>
      <View style={styles.ContinueViewStyle}>
        <GradientButton text={'Verify'} onNext={onNextScreen} Icon={true} />
      </View>
    </View>
    {isLoading && <CustomLoader isLoading={isLoading}/> }
    </>
  );
};

export default Verification;
