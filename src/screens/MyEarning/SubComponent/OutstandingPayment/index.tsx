import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Earning } from '../../../../assets/images/Earning';
import styles from './style';

const OutstandingPayment = () => {

    const EarningData = [
        {
            id: 1,
            image : require('../../../../assets/images/Earning/Dumme1.png'),
            ActivityName: 'Activity Name 1',
            Disc: 'Lorem Ipsum is simply dummy text of the printing and typing industry...',
            EarningMoney: '1200.00',
            pending: '5000'
        },
        {
            id: 2,
            image : require('../../../../assets/images/Earning/Dummy2.png'),
            ActivityName: 'Activity Name 1',
            Disc: 'Lorem Ipsum is simply dummy text of the printing and typing industry...',
            EarningMoney: '2500.00',
            pending: '1500'
        },
        {
            id: 3,
            image : require('../../../../assets/images/Earning/Dumme1.png'),
            ActivityName: 'Activity Name 1',
            Disc: 'Lorem Ipsum is simply dummy text of the printing and typing industry...',
            EarningMoney: '1200.00',
            pending: '5000'
        },
        {
            id: 4,
            image : require('../../../../assets/images/Earning/Dummy2.png'),
            ActivityName: 'Activity Name 1',
            Disc: 'Lorem Ipsum is simply dummy text of the printing and typing industry...',
            EarningMoney: '2500.00',
            pending: '1500'
        },
    ]

    const CommonDataRender = ({item ,index}) =>{
        return(
            <View>
                <View style={styles.InnerViewStyle}>
                    <View style={styles.FirstViewStyle}>
                        <Image source={item.image} style ={styles.CommonImageStyle} resizeMode={'contain'}/>
                        <View style={styles.DetailTextStyle}>
                            <Text style={styles.ActivityNameStyle}>{item.ActivityName}</Text>
                            <Text style={styles.DiscTextStyle} numberOfLines={2}>{item.Disc}</Text>
                        </View>
                        </View>
                    <View style={styles.SecoundViewStyle}>
                        <Image source={Earning.GetCurrence} style={styles.CurrenceIconStyle} resizeMode={'contain'} />
                        <View>
                        <Text style={styles.RsTextStyle}>Rs.</Text>
                        <Text style={styles.RuppeTextStyle}>{item.EarningMoney}</Text>
                        {/* <Text style={styles.pendingRuppeTexStyle}>{item.pending} <Text style={styles.PendingTextStyle}>Pending</Text></Text> */}
                        </View>
                    </View>
                </View>
                <View style={styles.HorizontalLine}/>
            </View>
        );
    } 

  return (
    <View style={styles.container}>
      <FlatList 
        style={styles.ListViewStyle}
        data={EarningData}
        renderItem={CommonDataRender}
        keyExtractor={(item)=> item.id.toString()}
      />
    </View>
  )
}

export default OutstandingPayment