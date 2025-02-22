import { Image, SectionList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from './style'
import CommonHeader from '../../components/CommonHeader'
import { NotificationData } from './MockData'

const Notification = () => {

    const NotificationItem = ({ userImage, text, date }) => {
        return (
          <View style={styles.notificationItem}>
              <Text style={styles.dateText}>{date}</Text>
            <View style={styles.textContainer}>
            <Image source={userImage} style={styles.image} />
              <Text style={styles.notificationText}>{text}</Text>
            </View>
          </View>
        );
      };

  return (
    <View style={styles.container}>
      <CommonHeader
        leftIcon={null}
        title={'Notification'}
        RigthIcon={''}
        SubTitle={''}
        rigthType={''}
        RigthIconProps={''}
        disabled={true}
      />
       <SectionList
        showsVerticalScrollIndicator={false}
        sections={NotificationData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
        <NotificationItem userImage={item.userImage} text={item.text} date={item.date} />
      )}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.sectionTitle}>{title}</Text>
      )}
      contentContainerStyle={styles.Seactioncontainer}
    />
    </View>
  )
}

export default Notification

