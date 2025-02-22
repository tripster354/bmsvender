import {FlatList, Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import CustomDropDown from '../../../../components/CustomDropDown';
import CreateIconImage from '../../../../assets/images/CreateImageIcon';
import CommonTextinput from '../../../../components/CommonTextinput';
import { dH, dW } from '../../../../utils/dynamicHeigthWidth';
import GradientButton from '../../../../constants/GradiantButton';
import Colors from '../../../../utils/theme/colors';
import CustomVideoInput from '../../../../components/CustomVideoInput';

const ProfessionalDetails = () => {
  const [activityselect, setActivitySelect] = useState(null);
  const [docselect, setDocSelect] = useState(null);
  const [experience, setExperience] = useState();

  const Document = [
    {
        id: 1,
        image: require('../../../../assets/images/profile/Aadhar.png')
    },
    {
        id: 2,
        image: require('../../../../assets/images/profile/Aadhar.png')
    },
    {
        id: 3,
        image: require('../../../../assets/images/profile/Aadhar.png')
    },
  ]

  const BankDetail = [
    {
        id:1,
        image: require('../../../../assets/images/profile/BankIcon.png'),
        BankName: 'HDFC BANK',
        AccountNumber: '123XXXX6',
        AccountType:'Primary Account'
    },
    {
        id:2,
        image: require('../../../../assets/images/profile/BankIcon.png'),
        BankName: 'AXIS BANK',
        AccountNumber: '356XXXX6',
        AccountType:'Secondry Account'
    },
  ]

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
    console.log('Continue')
    // navigation.navigate('Verification')
  };

  const DocumentRender =({item,index})=>{
    return(
        <View>
            <Image source={item.image} style={styles.DocumentImageStyle} resizeMode={'stretch'}/>
        </View>
    );
  }

  const BankDetailRender = ({item,index})=>{
    return(
        <View style={styles.BankDetailMainCardViewStyle}>
            <Image source={item.image} resizeMode={'contain'} style={styles.BankImageStyle}/>
            <View >
                <Text style={styles.BankNameStyle}>{item.BankName}</Text>
                <Text style={styles.AccountTextStyle}>{item.AccountNumber}</Text>
                <Text style={styles.AccountTypeTextStyle}>{item.AccountType}</Text>
            </View>
        </View>
    )
  }

  return (
    <ScrollView style={styles.container} nestedScrollEnabled={true} showsVerticalScrollIndicator={false}>
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
        <Text style={styles.KYCTextStyle}>KYC Documents</Text>
        <FlatList 
            horizontal
            style={styles.DocumentListViewStyle}
            data={Document}
            renderItem={DocumentRender}
            keyExtractor={(item) => item.id.toString()}
        />
        <Text style={styles.BankDetailTextStyle}>Bank Details</Text>
        <FlatList 
            data={BankDetail}
            renderItem={BankDetailRender}
            keyExtractor={(item) => item.id.toString()}
        />
      <View style={styles.ContinueViewStyle}>
        <GradientButton text={'Continue'} onNext={{onNextScreen}} Icon={true} />
      </View>
    </ScrollView>
  );
};

export default ProfessionalDetails;
