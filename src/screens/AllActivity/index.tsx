import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from './style'
import CommonHeader from '../../components/CommonHeader'

const AllActivity = () => {

    const AllActivity = [
        {
            id: 1,
            userImage: require('../../assets/images/staticImage/UserIcon.png'),
            SkillName: 'Skill Name come here',
            Disc: 'Lorem Ipsum is simply dummy text of the printing and typesetting...',
            TimeAndDate: '22-Nov-2023 | 17:35:00'
        },
        {
            id: 2,
            userImage: require('../../assets/images/staticImage/UserIcon.png'),
            SkillName: 'Skill Name come here',
            Disc: 'Lorem Ipsum is simply dummy text of the printing and typesetting...',
            TimeAndDate: '22-Nov-2023 | 17:35:00'
        },
        {
            id: 3,
            userImage: require('../../assets/images/staticImage/UserIcon.png'),
            SkillName: 'Skill Name come here',
            Disc: 'Lorem Ipsum is simply dummy text of the printing and typesetting...',
            TimeAndDate: '22-Nov-2023 | 17:35:00'
        },
        {
            id: 4,
            userImage: require('../../assets/images/staticImage/UserIcon.png'),
            SkillName: 'Skill Name come here',
            Disc: 'Lorem Ipsum is simply dummy text of the printing and typesetting...',
            TimeAndDate: '22-Nov-2023 | 17:35:00'
        },
        {
            id: 5,
            userImage: require('../../assets/images/staticImage/UserIcon.png'),
            SkillName: 'Skill Name come here',
            Disc: 'Lorem Ipsum is simply dummy text of the printing and typesetting...',
            TimeAndDate: '22-Nov-2023 | 17:35:00'
        },
        {
            id: 6,
            userImage: require('../../assets/images/staticImage/UserIcon.png'),
            SkillName: 'Skill Name come here',
            Disc: 'Lorem Ipsum is simply dummy text of the printing and typesetting...',
            TimeAndDate: '22-Nov-2023 | 17:35:00'
        },
        {
            id: 7,
            userImage: require('../../assets/images/staticImage/UserIcon.png'),
            SkillName: 'Skill Name come here',
            Disc: 'Lorem Ipsum is simply dummy text of the printing and typesetting...',
            TimeAndDate: '22-Nov-2023 | 17:35:00'
        },
        {
            id: 8,
            userImage: require('../../assets/images/staticImage/UserIcon.png'),
            SkillName: 'Skill Name come here',
            Disc: 'Lorem Ipsum is simply dummy text of the printing and typesetting...',
            TimeAndDate: '22-Nov-2023 | 17:35:00'
        },
    ]

    const AllActivityRender = ({item,index})=>{
        return(
            <View style={styles.notificationItem}>
              <Text style={styles.dateText}>{item.TimeAndDate}</Text>
            <View style={styles.textContainer}>
            <Image source={item.userImage} style={styles.image} />
            <View style={styles.TextSectioViewStyle}>
            <Text style={styles.SkillNameTextStyle}>{item.SkillName}</Text>
              <Text style={styles.notificationText}>{item.Disc}</Text>
              </View>
            </View>
          </View>
        );
    }

  return (
    <View style={styles.container}>
      <CommonHeader
          leftIcon={null}
          title={'All Activity'}
          RigthIcon={null}
          SubTitle={''}
          rigthType={''}
          RigthIconProps={''}
          disabled={true}
        />
        <FlatList 
            showsVerticalScrollIndicator={false}
            data={AllActivity}
            renderItem={AllActivityRender}
            keyExtractor={(item) => item.id.toString()}
        />
    </View>
  )
}

export default AllActivity

