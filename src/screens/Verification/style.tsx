import { StyleSheet } from "react-native";
import Colors from "../../utils/theme/colors";
import { dH, dW } from "../../utils/dynamicHeigthWidth";
import fonts from "../../assets/fonts";

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.white,
        paddingHorizontal:dW(45)
    },
    VerificationTextStyle:{
        marginTop:dH(65),
        color:Colors.black,
        fontFamily:fonts.NexaBlack,
        fontSize:dW(46)
    },
    VerificationDiscTextStyle:{
        marginTop:dH(62),
        color:Colors.grey,
        fontFamily:fonts.NexaBook,
        fontSize:dW(27),
        lineHeight:dH(44)
    },
    NumberTextStyle:{
        fontSize:dW(31),
        color:Colors.lightBlue,
        fontFamily:fonts.NexaBook,
        lineHeight:dH(44)
    },
    OtpViewStyle:{
        flexDirection: 'row',
            width: '90%',
            height: dH(50),
            borderRadius: 8,
            alignSelf: 'center',
            marginTop: dH(102),
            justifyContent: 'space-evenly',
    },
    ResetTextStyle:{
        marginTop:dH(82),
        textAlign:'center',
        color:Colors.grey,
        fontFamily:fonts.NexaBold,
        fontSize:dW(32)
    },
    TimeTextStyle:{
        color:Colors.black,
        fontFamily:fonts.NexaBold,
        fontSize:dW(32)
      },
      ContinueViewStyle:{
        flex:1,
        marginBottom:dH(156),
        justifyContent:"flex-end",
        alignItems:"center"
    }
})

export default styles