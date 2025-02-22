import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Colors from '../../../../utils/theme/colors'
import { dH, dW } from '../../../../utils/dynamicHeigthWidth'
import fonts from '../../../../assets/fonts'
import { OfferData } from '../../../AddPostBooking/MockData'
import images from '../../../../assets/images'
import HomeIcon from '../../../../assets/images/home'
import CommonSearch from '../../../../components/CommonSearch'
import FeedImage from '../../../../assets/images/Feed'

const Explore = ({}) => {

  const [comment , setComment] = useState('')
   const MyPostData=[
    {
        id:1,
        image: require('../../../../assets/images/Feed/dummy1.png'),
        Disc1: 'Lorem Ipsum #tag1 #tag2 #tag3 #tag4',
        Disc2:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy of type and scrambled it... Read More",
        commentText:"View all 9 Comments"
    },
    {
      id:2,
      image: require('../../../../assets/images/Feed/dummy1.png'),
      Disc1: 'Lorem Ipsum #tag1 #tag2 #tag3 #tag4',
      Disc2:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy of type and scrambled it... Read More",
      commentText:"View all 9 Comments"
  },
]

  const Offerrender = ({item, index}) => {
    return (
      <View style={styles.MainCardViewStyle}>
        <View style={styles.InnerViewStyle}>
          <View style={styles.FistViewStyle}>
            <Image
              source={item.image}
              resizeMode={'contain'}
              style={styles.OfferImageStyle}
            />
            <View style={styles.TextSectionStyle}>
              <Text style={styles.OfferTitleTextStyle}>{item.OffetTitle}</Text>
              <Text style={styles.OfferDiscTextStyle}>{item.OfferDisc}</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.OnPressViewStyle}>
          <Text style={styles.AppleTextStyle}>Apply</Text>
        </TouchableOpacity>
      </View>
    );
  };

  
  const MyRender = ({item,index})=>{
    return(
      <View style={{marginBottom:dH(20)}}>
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingHorizontal:dW(35)}}>
          <View style={{flexDirection:"row",alignItems:"center"}}>
          <Image source={images.profile.ProfileIcon}style={{height:dH(62),width:dW(62)}} resizeMode='contain'/>
          <Text style={{color:Colors.grey,fontFamily:fonts.NexaBold,fontSize:dW(25),left:dW(17)}}>John Doe</Text>
          </View>
          <Image source={HomeIcon.StaticIcons.VerticalMenuIcon} style={{height:dH(30),width:dW(32)}} resizeMode={'cover'}/>
        </View>
        <Image source={item.image} style={{height:dH(750),width:dW(750)}}/>
        <View style={{flexDirection:"row",justifyContent:'space-between',paddingHorizontal:dW(35)}}>
          <View style={{flexDirection:"row",alignItems:"center"}}>
            <Image source={images.profile.heart} style={{height:dH(34),width:dW(39),marginRight:dW(29)}} resizeMode='contain'/>
            <Image source={images.profile.commentIcon} style={{height:dH(34),width:dW(36)}} resizeMode='contain'/>
            <Image source={FeedImage.shareIcon} style={{height:dH(40),width:dW(40),left:dW(29)}} resizeMode='contain'/>
          </View>
          <Image source={images.profile.saveIcon} style={{height:dH(45),width:dW(35)}} resizeMode='contain'/>
        </View>
        <Text style={{color:Colors.grey,fontFamily:fonts.NexaBook,fontSize:dW(21),paddingHorizontal:dW(35),marginTop:dH(38)}}>5000 Likes</Text>
        <Text style={{color:'#A4A4A4',fontSize:dW(21),fontWeight:'bold',paddingHorizontal:dW(35)}}>{item.Disc1}</Text>
        <Text style={{color:'#A4A4A4',fontSize:dW(21),paddingHorizontal:dW(35)}} >{item.Disc2}</Text>
        <View style={{marginTop:dH(15),flexDirection:"row",paddingHorizontal:dW(35)}}>
          <Image source={images.profile.ProfileIcon}style={{height:dH(37),width:dW(37)}} resizeMode='contain'/>
          <Text style={{color:'#CCCCCC',fontWeight:'bold',fontSize:dW(21),marginLeft:dW(17)}}>{item.commentText}</Text>
        </View>
        <View style={{paddingHorizontal:dW(35)}}>

        <CommonSearch
        serachicon={images.profile.ProfileIcon}
        placeholder={'Add a Comments..'}
        text={comment}
        onChange={setComment}
        />
        <Text style={{color:Colors.grey,fontFamily:fonts.NexaBook,fontSize:dW(21),marginVertical:dH(11)}}>2 hours ago</Text>
        </View>
        {/* <CustomTextInput serachicon={null} placeholder={'Comment'} filtericon={images.profile.sendIcon} search={comment} onChange={setComment} /> */}
      </View>
    )
  }
  // console.log('Data',parentData)
  return (
    <View style={styles.container}>
      {/* <Text style={styles.DiscTextStyle}>{parentData}</Text>
      <Text style={styles.OfferDataTextStyle}>Suggested Offers</Text>
      <FlatList
          showsVerticalScrollIndicator={false}
          style={styles.ListViewStyle}
          data={OfferData}
          renderItem={Offerrender}
          keyExtractor={item => i
          
          tem.id.toString()}
        /> */}
        <FlatList 
        style={{marginTop:dH(40),marginBottom:dH(50)}}
            data={MyPostData}
            renderItem={MyRender}
          />
    </View>
  )
}

export default Explore

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:Colors.white
  },
//   DiscTextStyle:{
//     marginTop:dH(30),
//     color:Colors.dyGray,
//     fontFamily:fonts.NexaBook,
//     fontSize:dW(23)
//   },
//   ListViewStyle:{
//     marginTop:dH(46)
//   },
//   OfferDataTextStyle:{
//     marginTop:dH(66),
//     color:Colors.black,
//     fontFamily:fonts.NexaBold,
//     fontSize:dW(40)
//   },
//   MainCardViewStyle:{
//     flexDirection:'row',
//     justifyContent:'space-between',
//     paddingVertical:dH(21),
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 4,
//     },
//     shadowOpacity: 0.23,
//     shadowRadius: 2.62,
//     elevation: 4,
//     flex: 1,
//     borderRadius: dW(10),
//     backgroundColor:'white',
//     marginBottom:dH(43),
//     marginTop:dH(5),
//     marginHorizontal:dW(5)
// },
// InnerViewStyle:{
//     flexDirection:'row',
//     alignItems:'center',
//     flex:1
// },
// FistViewStyle:{
//   flexDirection:"row",
//   justifyContent:"space-between",
//   left:dW(21)
// },
// TextSectionStyle:{
//   left:dW(16)
// },
// OnPressViewStyle:{
// right:dW(47)  
// },
// OfferImageStyle:{
//     height:dH(76),
//     width:dW(76),
// },
// OfferTitleTextStyle:{
//     color:Colors.black,
//     fontFamily:fonts.NexaBold,
//     fontSize:dW(21)
// },
// OfferDiscTextStyle:{
//     color:Colors.lightBlue,
//     fontFamily:fonts.NexaBook,
//     fontSize:dW(18)
// },
// AppleTextStyle:{
//     color:Colors.lightBlue,
//     fontFamily:fonts.NexaBold,
//     fontSize:dW(18),
//     borderWidth:dW(1),
//     borderColor:Colors.inActive,
//     borderRadius:dW(8),
//     paddingHorizontal:dW(21),
//     paddingVertical:dH(10)
// },
})