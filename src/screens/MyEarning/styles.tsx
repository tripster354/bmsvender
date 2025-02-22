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
    RevenueViewStyle:{
        marginTop:dW(68),
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    RevenueTextStyle:{
        color:Colors.black,
        fontFamily:fonts.NexaBold,
        fontSize:dW(35)
    },
    FilterIconStyle:{
        height:dH(46),
        width:dW(46),
        right:dW(20)
    },
})


export default styles