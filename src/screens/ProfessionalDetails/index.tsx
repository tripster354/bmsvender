import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import CustomDropDown from '../../components/CustomDropDown';
import CreateIconImage from '../../assets/images/CreateImageIcon';
import CommonTextinput from '../../components/CommonTextinput';
import Colors from '../../utils/theme/colors';
import {dH, dW} from '../../utils/dynamicHeigthWidth';
import CustomVideoInput from '../../components/CustomVideoInput';
import GradientButton from '../../constants/GradiantButton';
import { useNavigation } from '@react-navigation/native';

const ProfessionalDetails = () => {
  const [activityselect, setActivitySelect] = useState(null);
  const [docselect, setDocSelect] = useState(null);
  const [experience, setExperience] = useState();

  const navigation = useNavigation()

  const ActivityData = [
    {id: 1, title: 'Music'},
    {id: 2, title: 'Sports'},
    {id: 3, title: 'Science'},
    {id: 4, title: 'Arts'},
  ];
  const DocumentData = [
    {id: 1, title: 'PAN Card'},
    {id: 2, title: 'Aadhar Number'},
    {id: 3, title: 'Voter ID'},
    {id: 4, title: 'License No.'},
  ];

  const onNextScreen = () => {
    navigation.navigate('Verification')
  };

  return (
    <ScrollView style={styles.container} nestedScrollEnabled={true}>
      <View style={styles.DropDownViewStyle}>
        <CustomDropDown
          LeftIcon={CreateIconImage.ActivityIcon}
          Placeholder={'Activity Intrerested in'}
          RigthIcon={CreateIconImage.DownArrow}
          data={ActivityData}
          select={activityselect}
          onSelect={setActivitySelect}
        />
      </View>
      <View style={[styles.CommonTextinputStyle, {marginTop: dH(74)}]}>
        <CommonTextinput
          InputIcon={CreateIconImage.ActivityIcon}
          text={experience}
          secure={false}
          onChange={setExperience}
          placeholderText={'year of Experiance'}
          keyBoradTextType={'number-pad'}
          NumberLegth={2}
          placeholderTextColor={Colors.inActive}
        />
      </View>
      <View style={styles.DropDownViewStyle}>
        <CustomDropDown
          LeftIcon={CreateIconImage.UploadDocIcon}
          Placeholder={'Upload Doc. for KYC'}
          RigthIcon={CreateIconImage.DownArrow}
          data={DocumentData}
          select={docselect}
          onSelect={setDocSelect}
        />
      </View>
      <View style={styles.CommonTextinputViewStyle}>
        <CustomVideoInput
          RigthIcon={CreateIconImage.CameraIcon}
          PlaceholderText={'Shoot 30 Sec. Video'}
          Editable={false}
          placeholderTextColor={Colors.inActive}
        />
      </View>
      <Text style={styles.PercentageTextStyle}>35%</Text>
      <Text style={styles.OnboardingTextStyle}>Onboarding</Text>
      
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
            style={[styles.CommonIconStyle, {height: dH(46), width: dW(46)}]}
            resizeMode={'contain'}
          />
        </View>
      </View>
      <View style={styles.HorizonalLineStyle} />
      <View style={styles.ContinueViewStyle}>
        <GradientButton text={'Continue'} onNext={{onNextScreen}} Icon={true} />
      </View>
    </ScrollView>
  );
};

export default ProfessionalDetails;
