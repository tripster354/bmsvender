import { StyleSheet } from "react-native";
import Colors from "../../utils/theme/colors";
import { dH, dW } from "../../utils/dynamicHeigthWidth";
import fonts from "../../assets/fonts";


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.white
    },
    MainView:{
        paddingHorizontal:dW(45)
    },
    LoginTextStyle:{
        marginTop:dH(65),
        color:Colors.black,
        fontFamily:fonts.NexaBlack,
        fontSize:dW(46),
        lineHeight:dH(65)
    },
    VerificationTextStyle:{
        marginTop:dH(65),
        color:Colors.placeHolderColor,
        fontFamily:fonts.NexaBook,
        lineHeight:dH(44),
        fontSize:dW(31)
    },
    CommonTextinputStyle:{
        marginTop:dH(65)
    },
    ForgetTextStyle:{
        textAlign:'right',
        marginTop:dH(23),
        fontFamily:fonts.NexaBold,
        fontSize:dW(32),
        color:Colors.black
    },
    HorizontalLineStyle:{
        flex:1,
        backgroundColor:Colors.inActive,
        height:dH(1),
        marginVertical:dH(100),
        justifyContent:'center',
        alignItems:"center",        
    },
    OrViewStyle:{
        height:dH(96),
        width:dW(96),
        borderColor:Colors.inActive,
        borderWidth:dW(2),
        justifyContent:"center",
        alignItems:"center",
        borderRadius:dW(100),
        backgroundColor:Colors.white
        // position:'absolute'
    },
    ORTextStyle:{
        color:Colors.black,
        fontFamily:fonts.NexaBold,
        fontSize:dW(30)
    },
    ContinueViewStyle:{
        marginTop:dH(68),
        justifyContent:"center",
        alignItems:"center"
    }
})

export default styles