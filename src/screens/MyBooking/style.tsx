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
    BookingTextStyle:{
        marginTop:dH(43),
        color:Colors.black,
        fontFamily:fonts.NexaBold,
        fontSize:dW(40)
    },
    ListViewStyle:{
        marginTop:dH(62)
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
    marginBottom:dH(59)
    },
    CardInnerStyle:{
        marginVertical:dH(15),
        flexDirection:"row",
        paddingLeft:dW(15)
    },
    CardImageStyle:{
        height:dH(160),
        width:dW(149),
        borderRadius:dW(11)
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
        fontSize:dW(23)
    },
    HeaderDetailViewStyle:{
        flexDirection:"row",
        justifyContent:'space-between',
        flex:1,
    },
    StarIconStyle:{
        height:dH(24),
        width:dW(24),
        right:dW(9)
    },
    RatingTextStyle:{
        color:Colors.lightBlue,
        fontFamily:fonts.NexaBold,
        fontSize:dW(30)
    },
    RatingViewStyle:{
        marginTop:dH(10),
        flexDirection:'row',
        alignSelf:'flex-start',
        alignItems:'center'
    }
})

export default styles