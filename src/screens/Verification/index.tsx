import {Text, View} from 'react-native';
import React, { useState } from 'react';
import styles from './style';
import CommonHeader from '../../components/CommonHeader';
import OtpView from '../../components/otpView/OtpView';
import GradientButton from '../../constants/GradiantButton';
import { useNavigation } from '@react-navigation/native';

const Verification = () => {
    const [otpCode, setOtpCode] = useState<string>('');

    const navigation = useNavigation();

    const onNextScreen =() =>{
        navigation.navigate('SuccessScreen')
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
      <Text style={styles.VerificationDiscTextStyle}>Enter 4-digit code that we just send to{'\n'}your phone number <Text style={styles.NumberTextStyle}>+91 9727 241 678</Text></Text>
      <View style={styles.OtpViewStyle}>
      <OtpView onOtp={setOtpCode} />
      </View>
      <Text style={styles.ResetTextStyle}>Resend code in <Text style={styles.TimeTextStyle}>15:30</Text></Text>
      <View style={styles.ContinueViewStyle}>
        <GradientButton text={'Verify'} onNext={{onNextScreen}} Icon={true} />
      </View>
    </View>
  );
};

export default Verification;
