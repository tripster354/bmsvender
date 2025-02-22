import { StyleSheet } from "react-native";
import Colors from "../../utils/theme/colors";
import { dW } from "../../utils/dynamicHeigthWidth";


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.white,
        paddingHorizontal:dW(35)
    }
})

export default styles