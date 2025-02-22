import { StyleSheet } from "react-native";
import Colors from "../../../../utils/theme/colors";
import { dH, dW } from "../../../../utils/dynamicHeigthWidth";
import fonts from "../../../../assets/fonts";

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:Colors.white,
        // paddingHorizontal:dW(35)
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
        paddingHorizontal:dW(53),
        // alignItems:"center",
    },
    HeaderDetailStyle:{
        flexDirection:'row',
        alignItems:"center",
        justifyContent:"space-between",
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
        flexDirection:"row",
        alignItems:"center"
    },
    PriceTextStyle:{
        color:Colors.white,
        fontSize:dW(34),
        fontFamily:fonts.NexaBold,
    },
    SessionTextStyle:{
        fontFamily:fonts.NexaBold,
        fontSize:dW(17),
        color:Colors.white
    },
    DiscTextStyle:{
        color:Colors.white,
        fontFamily:fonts.NexaBook,
        fontSize:dW(23)
    },
    StarViewStyle:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:dH(37),
        alignSelf:'center'
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
        // paddingHorizontal:dW(33)
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
    BottomDataViewStyle:{
        paddingHorizontal:dW(38)
    },
    AttendanceViewStyle:{
        marginTop:dH(69),
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    AttendanceTextStyle:{
        color:Colors.black,
        fontFamily:fonts.NexaBold,
        fontSize:dW(40)
    },
    ViewAllTextStyle:{
        color:Colors.lightBlue,
        fontSize:dW(25),
        fontFamily:fonts.NexaBold
    },
    ParticipentImageStyle:{
        height:dH(116),
        width:dW(116),
        borderRadius:dW(116),
        borderWidth:2,
        borderColor:Colors.shadowColor
    },
    MainCardViewStyle:{
        flexDirection:"row",
        alignItems:'center',
        justifyContent:"space-between"
    },
    ListingViewStyle:{
        marginTop:dH(64)
    },
    CardMainStyle:{
        marginBottom:dH(40)
    },
    CommonButton:{

    },
    CommonTextStyle:{
        backgroundColor:Colors.OffGreen,
        paddingVertical:dH(11),
        paddingHorizontal:dW(25),
        borderRadius:dW(5),
        color:Colors.Green,
        fontFamily:fonts.NexaBold,
        fontSize:dW(22),
        marginRight:dW(30)
    },
    DetailViewTextStyle:{
        color:Colors.black,
        fontFamily:fonts.NexaBold,
        fontSize:dW(30),
        paddingBottom:dH(17)
    },
    CardViewStyle:{
        flexDirection:'row'
    },
    ButtonViewStyle:{
        flexDirection:'row',
    },
    QrCodeStyle:{
        height:dH(69),
        width:dW(69)
    },
    ParticipentInfoStyle:{
        marginLeft:dW(19)
    },
    HorizontalLineStyle:{
        marginTop:dH(30),
        flex:1,
        height:dH(1),
        backgroundColor:Colors.black
    }
})

export default styles;