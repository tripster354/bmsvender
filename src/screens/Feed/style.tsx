import { StyleSheet } from "react-native";
import Colors from "../../utils/theme/colors";
import { dH, dW } from "../../utils/dynamicHeigthWidth";
import fonts from "../../assets/fonts";

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:Colors.white,
        paddingHorizontal:dW(35)
    },
    NewTextStyle:{
        marginTop:dH(47),
        color:Colors.black,
        fontFamily:fonts.NexaBold,
        fontSize:dW(40)
    },
    mainCardStyle:{
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 4,
        },
        elevation: 4,
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        backgroundColor:'white',
        // width:dW(255) ,
        borderRadius:dW(16),
        flex:1,
        marginHorizontal:dW(5),
        marginVertical:dH(5),
        marginBottom:dH(59)
        
    },
    HeaderCardViewStyle:{
        flexDirection:'row',
        paddingVertical:dH(16)
    },
    CardDetailViewStyle:{
        flexDirection:'row',
        justifyContent:'space-around'
    },
    FeedImageStyle:{
        height:dH(104),
        width:dW(107),
        borderRadius:dW(107)
    },
    ItemTextViewStyle:{
        width:'75%'
    },
    ItemTitleTextStyle:{
        color:Colors.black,
        fontFamily:fonts.NexaBold,
        fontSize:dW(30)
    },
    ItemDiscTextStyle:{
        color:Colors.black,
        fontFamily:fonts.NexaBook,
        fontSize:dW(20)
    },
    HeartIconStyle:{
        height:dH(49),
        width:dW(49),

    },
    HorizontalLineStyle:{
        flex:1,
        height:1,
        backgroundColor:Colors.inActive,
    },
    BottomViewStyle:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    BottomFistSeactionStyle:{
        flexDirection:'row',
        alignItems:'center'
    },
    ProfileIconStyle:{
        height:dH(79),
        width:dW(79),        
    },
    ItemNameStyle:{
        color:Colors.black,
        fontSize:dW(23),
        fontFamily:fonts.NexaBook
    },
    TimeDateTextStyle:{
        paddingRight:dW(23),
        color:Colors.inActive,
        fontFamily:fonts.NexaBold,
        fontSize:dW(13)
    },
    ListViewStyle:{
        marginTop:dH(14)
    },
})

export default styles;