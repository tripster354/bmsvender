import { StyleSheet } from "react-native";
import { dH, dW } from "../../utils/dynamicHeigthWidth";
import Colors from "../../utils/theme/colors";
import fonts from "../../assets/fonts";

const styles = StyleSheet.create({
    container:{
        flex:1,
        // paddingHorizontal:dW(35),
        backgroundColor:Colors.white
    },
    HeaderViewStyle:{
        paddingHorizontal:dW(35)
    },
    WorkshopDetailViewStyle:{
        width:'100%',
        height:dH(781),
        backgroundColor:Colors.lightBlue,
        alignItems:'center',
        marginTop:dH(250),
    },
    WorkshopImageStyle:{
        height:dH(371),
        width:dW(683),
        top:dH(-185),
        alignItems:'flex-end',
    
    },
    TitleTextStyle:{
        backgroundColor:Colors.OffBlue,
        borderRadius:dW(26),
        paddingHorizontal:dW(25),
        paddingVertical:dH(7),
        color:Colors.white,
        fontFamily:fonts.NexaBook,
        fontSize:dW(28)
    },
    ImageViewContainerStyle:{
        flex:1,
        paddingVertical:dH(17),
        justifyContent:'space-between',
        alignItems:"center",
        right:dW(10)
    },
    PlayIconStyle:{
        height:dH(87),
        width:dW(87)
    },
    DetailViewStyle:{
        top:dH(-154),
        width:'100%',
        alignItems:"center",
    },
    WorkshopTitleTextStyle:{
        color:Colors.white,
        fontFamily:fonts.NexaBlack,
        fontSize:dW(47)
    },
    LocationViewStyle:{
        marginTop:dH(31),
        flexDirection:'row',
        alignItems:'center',
    },
    LocationIconStyle:{
        height:dH(30),
        width:dW(25)
    },
    locationTextStyle:{
        color:Colors.white,
        fontFamily:fonts.NexaLigth,
        fontSize:dW(27),
        left: dW(17),
        
    },
    PriceViewStyle:{
        marginTop:dH(34),
        flexDirection:"row",
        alignItems:"center"
    },
    PriceTextStyle:{
        color:Colors.white,
        fontSize:dW(50),
        fontFamily:fonts.NexaBold,
    },
    SessionTextStyle:{
        fontFamily:fonts.NexaBold,
        fontSize:dW(29),
        color:Colors.white
    },
    StarViewStyle:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:dH(37),
    },
    StarIconStyle:{
        height:dH(29),
        width:dW(28),
        marginRight:dW(3)
    },
    RatingTextStyle:{
        color:Colors.white,
        fontFamily:fonts.NexaBold,
        fontSize:dW(32),
        marginLeft:dW(12)
    },
    BottomDetailViewStyle:{
        flexDirection:"row",
        justifyContent:'space-between',
        marginTop:dH(34),
        width:'100%',
        paddingHorizontal:dW(33)
    },
    calenderViewStyle:{
        flexDirection:'row',
        alignItems:"center"
    },
    calenederIconStyle:{
        height:dH(41),
        width:dW(41),
        marginRight:dW(18)
    },
    TimeDateTextStyle:{
        color:Colors.white,
        fontFamily:fonts.NexaBook,
        fontSize:dW(24)
    },
    participentViewStyle:{
        flexDirection:'row',
        alignItems:"center"
    },
    participentIconStyle:{
        height:dH(44),
        width:dW(41)
    },
    ParticipentTextStyle:{
        color:Colors.white,
        fontFamily:fonts.NexaBook,
        fontSize:dW(24)
    },
    OnPressViewStyle:{
        marginTop:dH(51)
    },
    PublishTextStyle:{
        color:Colors.black,
        fontFamily:fonts.NexaBold,
        fontSize:dW(27),
        backgroundColor:Colors.white,
        paddingHorizontal:dW(40),
        paddingVertical:dH(13)
    },
    OtherDetailViewStyle:{
        paddingHorizontal:dW(34)
    },
    GalleryTextStyle:{
        marginTop:dH(44),
        fontFamily:fonts.NexaBold,
        color:Colors.black,
        fontSize:dW(40)
    },
    GalleryImageStyle:{
        height:dH(156),
        width:dW(156),
        marginLeft:dW(18)
    },
    participantTextStyle:{
        marginTop:dH(51),
        color:Colors.black,
        fontFamily:fonts.NexaBold,
        fontSize:dW(35)
    },
    ParticipantViewStyle:{
        marginTop:dH(52),
        // marginBottom:dW(52)
    },
    ParticipantCardStyle:{
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 4,
        },
        elevation: 4,
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        backgroundColor:'white',
        width:dW(255) ,
        borderRadius:dW(12),
        alignItems:"center",
        marginRight:dW(31),
        marginVertical:dH(80)
    },
    nameStyle:{
        marginTop:dH(100),
    color:Colors.black,
    fontFamily:fonts.NexaBold,
    fontSize:dW(25),
    },
    MusicStyle:{
        marginTop:dH(21),
        color:Colors.black,
        fontFamily:fonts.NexaBook,
        fontSize:dW(20)
    },
    Participantstyle:{
        marginTop:dW(21),
        color:Colors.black,
        fontFamily:fonts.NexaBook,
        fontSize:dW(18),
        marginBottom:dH(24)
    },
    MusicItemTextStyle:{
        fontFamily:fonts.NexaBold,
        color:Colors.black,
        fontSize:dW(20)
    },
    ParticipantNameItemStyle:{
        color:Colors.black,
        fontFamily:fonts.NexaBold,
        fontSize:dW(18)
    },
    ParticipantImageStyle:{
        height:dH(150),
        width:dW(150),
        borderColor:Colors.shadowColor,
        borderWidth:dW(3),
        borderRadius:dW(150),
        position:'absolute',
        marginTop:dH(-75)
    },
    RevenueViewStyle:{
        // marginTop:dW(68),
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    RevenueTextStyle:{
        color:Colors.black,
        fontFamily:fonts.NexaBold,
        fontSize:dW(35)
    },
    FilterIconStyle:{
        height:dH(46),
        width:dW(46),
        right:dW(20)
    },
    ReviewTextStyle:{
        marginTop:dH(53),
        color:Colors.black,
        fontFamily:fonts.NexaBold,
        fontSize:dW(35)
    },
    RatingStyle:{
        textAlign:'center',
        color:Colors.black,
        fontFamily:fonts.NexaBold,
        fontSize:dW(85),
        marginTop:dH(12)
    },
    BottomStarViewStyle:{
        flexDirection:'row',
        alignSelf:'center'
    },
    SingleStarIconStyle:{
        height:dH(37),
        width:dW(36),
        marginRight:dW(7)
    },
    BaseOnReviewTextStyle:{
        marginTop:dW(23),
        textAlign:"center",
        color:Colors.black,
        fontFamily:fonts.NexaBook,
        fontSize:dW(29)
    },
    renderProgresViewStyle:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    ProgressTitleViewStyle:{
        color:Colors.inActive,
          fontFamily: fonts.NexaBold,
          fontSize: dW(26),
          marginRight: dW(20),
          textAlignVertical: 'center',
    },
    inActiveProgressStyle:{
        backgroundColor: Colors.inActive,
          height: dH(10),
          width: dW(520),
    }
})

export default styles