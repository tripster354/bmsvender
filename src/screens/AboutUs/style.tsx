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
    titleTextStyle:{
        marginTop:dH(142),
        color:Colors.black,
        fontFamily:fonts.NexaBook,
        fontSize:dW(23)
    }
})

export default styles