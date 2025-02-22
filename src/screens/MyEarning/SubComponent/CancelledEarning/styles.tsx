import { StyleSheet } from "react-native";
import Colors from "../../../../utils/theme/colors";
import { dH, dW } from "../../../../utils/dynamicHeigthWidth";
import fonts from "../../../../assets/fonts";


const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:Colors.white
    },
    ListViewStyle:{
        marginTop:dH(40)
    },
    InnerViewStyle:{
        flexDirection:"row",
        justifyContent:"space-between",
        paddingVertical:dH(22)
    },
    FirstViewStyle:{
        flexDirection:"row",
    },
    CommonImageStyle:{
        height:dH(109),
        width:dW(109)
    },
    DetailTextStyle:{
        width:dW(346),
        marginLeft:dW(20)
    },
    ActivityNameStyle:{
        color:Colors.black,
        fontFamily:fonts.NexaBold,
        fontSize:dW(30)
    },
    DiscTextStyle:{
        color:Colors.dyGray,
        fontFamily:fonts.NexaBook,
        fontSize:dW(18),
    },
    SecoundViewStyle:{
        flexDirection:"row"
    },
    RsTextStyle:{
        color:Colors.black,
        fontFamily:fonts.NexaBold,
        fontSize:dW(29),
        textAlign:'right'
    },
    RuppeTextStyle:{
        color:Colors.Red,
        fontFamily:fonts.NexaBold,
        fontSize:dW(29)
    },
    pendingRuppeTexStyle:{
        color:Colors.OffOrange,
        fontFamily:fonts.NexaBold,
        fontSize:dW(19)
    },
    PendingTextStyle:{
        color:Colors.black,
        fontSize:dW(18),

    },
    CurrenceIconStyle:{
        height:dH(35),
        width:dW(35),
        right:dW(20),
        // paddingVertical:dH()
        alignSelf:"center"
    },
    HorizontalLine:{
        flex:1,
        height:1,
        backgroundColor:Colors.borderColor
    }
})

export default styles