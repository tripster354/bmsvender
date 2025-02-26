import {Text, View} from 'react-native';
import React, { useState } from 'react';
import styles from './style';
import CommonHeader from '../../components/CommonHeader';
import OtpView from '../../components/otpView/OtpView';
import GradientButton from '../../constants/GradiantButton';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { onHandleLoginVerify } from '../../Redux/actions/AuthAction';
import commonFunction from '../../utils/commonFunction';

const Verification = () => {
    const [otpCode, setOtpCode] = useState<string>('');

    const navigation = useNavigation();
    const route = useRoute();
    const userNumber = route?.params?.userData;
    console.log('userNumber',userNumber)
    const dispatch = useDispatch()

    const onNextScreen = async() =>{
        const formdata = new FormData();
        formdata.append('phone_number', userNumber);
        formdata.append('country_code', 91);
        formdata.append('password',otpCode)
        try {
          const verifyResponse = await dispatch(onHandleLoginVerify(formdata));
          console.log('OTP Verify Response:', verifyResponse.status);
      
          if (verifyResponse?.status) {
            navigation.navigate('SuccessScreen'); 
          } else {
            console.log('OTP verification failed:', verifyResponse?.message);
            commonFunction.showToast(verifyResponse?.message || 'OTP verification failed');
          }
        } catch (error) {
          console.error('OTP Verification Error:', error);
          commonFunction.showToast('Something went wrong. Please try again.');
        }
    }

  return (
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
  );
};

export default Verification;
