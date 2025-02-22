import { StyleSheet } from "react-native";
import Colors from "../../utils/theme/colors";
import fonts from "../../assets/fonts";
import { dH, dW } from "../../utils/dynamicHeigthWidth";

const styles = StyleSheet.create({
    WoTextStyle:{
        color:Colors.OffBlack,
        fontFamily:fonts.NexaHeavy,
        fontSize:dW(52)
    },
    SuccessTextStyle:{
        color:Colors.OffBlack,
        fontFamily:fonts.NexaBook,
        fontSize:dW(45),  
        textAlign:"center"      
    },
    SeccessDiscTextStyle:{
        // marginTop:dH(28),
        color:Colors.grey,
        fontFamily:fonts.NexaBook,
        fontSize:dW(36)
    },   
})

export default styles;