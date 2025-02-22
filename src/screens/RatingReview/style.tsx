import { StyleSheet } from "react-native";
import Colors from "../../utils/theme/colors";
import { dH, dW } from "../../utils/dynamicHeigthWidth";
import fonts from "../../assets/fonts";

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.white,
        paddingHorizontal:dW(35)
    },
    GuitarTextStyle:{
        marginTop:dH(55),
        color:Colors.black,
        fontFamily:fonts.NexaBold,
        fontSize:dW(75),
        textAlign:'center'
    },
    StarViewStyle:{
        flexDirection:'row',
        alignItems:'center',
        // marginTop:dH(37),
        // alignSelf:'center'
    },
    StarIconStyle:{
        height:dH(29),
        width:dW(28),
        marginRight:dW(3),
        tintColor:Colors.black
    },
    TotelReviewTextStyle:{
        color:Colors.inActive,
        marginTop:dH(19),
        fontFamily:fonts.NexaBold,
        fontSize:dW(24)
    },
    SumRetingTextStyle:{
        color:Colors.black,
        fontFamily:fonts.NexaBold,
        fontSize:dW(90)
    },
    RatingViewStyle:{
        alignItems:"center",
        // alignSelf:'center'
    },
    ReviewViewStyle:{
        flexDirection:"row",
        justifyContent:'space-between',
        alignItems:"center",
        // alignSelf:"center"
    },
    renderProgresViewStyle:{
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'space-between',
    },
    ProgressTitleViewStyle:{
        color:Colors.black,
          fontFamily: fonts.NexaBold,
          fontSize: dW(24),
          marginLeft: dW(10),
          textAlignVertical: 'center',
    },
    inActiveProgressStyle:{
        backgroundColor: Colors.inActive,
          height: dH(5),
          width: dW(211),
          borderRadius:dW(10)
    },
    MainRatingViewStyle:{
        // backgroundColor:Colors.inActive,
        backgroundColor:Colors.inActive,
        borderRadius:dW(37)

    },
    RatingTextStyle:{
        color:Colors.black,
        fontFamily:fonts.NexaBold,
        fontSize:dW(28)
    },
    ratingViewStyle:{
        flexDirection:'row',
        alignItems:'center',
        paddingVertical:dH(10),
        paddingHorizontal:dW(29),
        
    },
    CommentViewStyle:{
        marginTop:dH(117),
        flexDirection:'row',
        justifyContent:'space-between'
    },
    CardMainViewStyle:{
        shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    elevation: 4,
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    // width:dW(453),
    borderRadius: dW(30),
    backgroundColor:'white',
    marginHorizontal:dW(5),
    marginBottom:dH(59),
    marginTop:dH(10)
    },
    CardInnerStyle:{
        marginVertical:dH(15),
        flexDirection:"row",
        paddingLeft:dW(15)
    },
    CardImageStyle:{
        height:dH(87),
        width:dW(87),
        borderRadius:dW(87)
    },
    HeaderDetailViewStyle:{
        flexDirection:"row",
        justifyContent:"space-between"
    },
    FirstViewStyle:{
        flex:1,
        paddingHorizontal:dW(24),
        flexDirection:"column"
    },
    BookingTitleStyle:{
        color:Colors.black,
        fontFamily:fonts.NexaBold,
        fontSize:dW(30)
    },
    
    BookingTimeAndDateStyle:{
        color:Colors.grey,
        fontFamily:fonts.NexaLigth,
        fontSize:dW(17)
    },
    DiscTextStyle:{
        color:Colors.black,
        fontFamily:fonts.NexaBook,
        fontSize:dW(23),
        paddingTop:dH(43)
    },
    StarChangeIconStyle:{
        height:dH(29),
        width:dW(28),
        marginRight:dW(3),
        tintColor:'#FECF6A'
    },
    RattingContainerViewStyle:{
        flexDirection:"row",
        alignItems:"center"
    }
})

export default styles;