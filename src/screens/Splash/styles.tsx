import { StyleSheet } from "react-native";
import Colors from "../../utils/theme/colors";
import fonts from "../../assets/fonts";
import { dH, dW } from "../../utils/dynamicHeigthWidth";

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:Colors.white
    },
    LogoImageStyle:{
        height:dH(689),
        width:dW(689)
    },
    MainText:{
        fontFamily:fonts.NexaBold,
        color:Colors.black,
        fontSize:dW(40),
        top:dH(218)
    }
})


export default styles