import { StyleSheet } from "react-native";
import Colors from "../../../utils/theme/colors";
import { dH, dW } from "../../../utils/dynamicHeigthWidth";
import fonts from "../../../assets/fonts";

const styles = StyleSheet.create({
    container :{
        flex:1,
        backgroundColor:Colors.white,
        // paddingHorizontal:dW(35)
    },
    InnerViewStyle:{
        paddingHorizontal:dW(35)
    }
})


export default styles