import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
import CommonHeader from '../../components/CommonHeader'
import ToggleOption from '../../components/ToggleOption'
import { dH } from '../../utils/dynamicHeigthWidth'

const Setting = () => {
  const [Like, setLike] = useState(false);
  const [Comments, setComments] = useState(false); 
  const [NewFolloers, setNewFolloers] = useState(false); 
  const [Messages, setMessages] = useState(false); 
  const [MessagesRequest, setMessagesRequest] = useState(false); 
  const [AccountSuggetions, setAccountSuggetions] = useState(false); 
  const [Mentions, setMentions] = useState(false); 
  const [VideoChats, setVideoChats] = useState(false); 
  const [SuggestedAccounts, setSuggestedAccounts] = useState(false);  
  return (
    <ScrollView style={styles.container}>
      <CommonHeader
          leftIcon={null}
          title={'Notifications'}
          RigthIcon={''}
          SubTitle={''}
          rigthType={''}
          RigthIconProps={''}
          disabled={true}
        />
        <View style={{marginTop:dH(64)}}/>
        <ToggleOption 
          title={'Likes'}
          ToggleOn ={Like}
          ToggleOff={setLike}

        />
        <ToggleOption 
          title={'Comments'}
          ToggleOn ={Comments}
          ToggleOff={setComments}

        />
        <ToggleOption 
          title={'New Folloers'}
          ToggleOn ={NewFolloers}
          ToggleOff={setNewFolloers}

        />
        <ToggleOption 
          title={'Messages'}
          ToggleOn ={Messages}
          ToggleOff={setMessages}

        />
        <ToggleOption 
          title={'Messages Request'}
          ToggleOn ={MessagesRequest}
          ToggleOff={setMessagesRequest}

        />
        {/* <ToggleOption 
          title={'MessagesRequest'}
          ToggleOn ={MessagesRequest}
          ToggleOff={setMessagesRequest}

        /> */}
        <ToggleOption 
          title={'AccountSuggetions'}
          ToggleOn ={AccountSuggetions}
          ToggleOff={setAccountSuggetions}

        />
        <ToggleOption 
          title={'Mentions'}
          ToggleOn ={Mentions}
          ToggleOff={setMentions}

        />
        <ToggleOption 
          title={'VideoChats'}
          ToggleOn ={VideoChats}
          ToggleOff={setVideoChats}

        />
        <ToggleOption 
          title={'Suggested Accounts'}
          ToggleOn ={SuggestedAccounts}
          ToggleOff={setSuggestedAccounts}

        />
    </ScrollView>
  )
}

export default Setting

