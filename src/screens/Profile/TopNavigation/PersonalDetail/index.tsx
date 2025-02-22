import {ScrollView, Text, View} from 'react-native';
import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import CommonTextinput from '../../../../components/CommonTextinput';
import InputIcon from '../../../../assets/images/InputIcon';
import Colors from '../../../../utils/theme/colors';
import { dH } from '../../../../utils/dynamicHeigthWidth';
import CreateIconImage from '../../../../assets/images/CreateImageIcon';
import GradientButton from '../../../../constants/GradiantButton';
import styles from './styles';

const PersonalDetails = () => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [instaLink, setInstaLink] = useState('');

  const navigation = useNavigation();

  const SendCode = () => {
    console.log('sendCode');
  };

  const onNextScreen = () => {
    console.log('Continue');
    // navigation.navigate('Verification')
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.CommonTextinputStyle}>
        <CommonTextinput
          InputIcon={InputIcon.UserIcon}
          text={name}
          secure={false}
          onChange={setName}
          placeholderText={'Email id'}
          keyBoradTextType={'default'}
          placeholderTextColor={Colors.inActive}
        />
      </View>
      <View style={[styles.CommonTextinputStyle, {marginTop: dH(40)}]}>
        <CommonTextinput
          InputIcon={InputIcon.SecureIcon}
          text={mobile}
          secure={false}
          onChange={setMobile}
          placeholderText={'Mobile'}
          NumberLegth={10}
          keyBoradTextType={'number-pad'}
          placeholderTextColor={Colors.inActive}
        />
      </View>
      <Text style={styles.SendCodeTextStyle} onPress={SendCode}>
        Send Code
      </Text>
      <View style={[styles.CommonTextinputStyle, {marginTop: dH(45)}]}>
        <CommonTextinput
          InputIcon={CreateIconImage.EmailIcon}
          text={email}
          secure={false}
          onChange={setEmail}
          placeholderText={'Email'}
          keyBoradTextType={'default'}
          placeholderTextColor={Colors.inActive}
        />
      </View>
      <Text style={styles.LinkProfileTextStyle}>Link Your Profile</Text>
      <View>
        <CommonTextinput
          InputIcon={CreateIconImage.InstaLinkIcon}
          text={instaLink}
          secure={false}
          onChange={setInstaLink}
          placeholderText={'instagram link'}
          keyBoradTextType={'default'}
          placeholderTextColor={Colors.inActive}
        />
      </View>
      <View style={[styles.CommonTextinputStyle, {marginTop: dH(45)}]}>
        <CommonTextinput
          InputIcon={CreateIconImage.TwiterLinkIcon}
          text={email}
          secure={false}
          onChange={setEmail}
          placeholderText={'tweeter link'}
          keyBoradTextType={'default'}
          placeholderTextColor={Colors.inActive}
        />
      </View>
      <View style={[styles.CommonTextinputStyle, {marginTop: dH(45)}]}>
        <CommonTextinput
          InputIcon={CreateIconImage.LinkdinLinkIcon}
          text={email}
          secure={false}
          onChange={setEmail}
          placeholderText={'tweeter link'}
          keyBoradTextType={'default'}
          placeholderTextColor={Colors.inActive}
        />
      </View>

      <View style={styles.ContinueViewStyle}>
        <GradientButton text={'Continue'} onNext={{onNextScreen}} Icon={true} />
      </View>
    </ScrollView>
  );
};

export default PersonalDetails;
