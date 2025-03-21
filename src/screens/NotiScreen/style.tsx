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
    Seactioncontainer: {
        padding: dW(5),
        // backgroundColor: '#f9f9f9',
      },    
    sectionTitle: {
        fontSize: dW(18),
        fontFamily:fonts.NexaBold,
        color:Colors.black,
        marginTop:dH(47),
        marginBottom:dH(34)
      },
      notificationItem: {
        // flexDirection: 'row',
        // alignItems: 'center',
        // marginBottom: 16,
        // padding: 16,
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
        marginVertical:dH(20),
        paddingBottom:dH(25)
      },
      image: {
        width: dW(88),
        height: dH(88),
        borderRadius: dW(88),
        marginRight: dW(16),
        left:dW(18),

      },
      textContainer: {
        // flex: 1,
        flexDirection:"row",
        alignItems:'center'
      },
      notificationText: {
        fontSize: dW(16),
        color:Colors.black,
        fontFamily:fonts.NexaBook,
        width:dW(486),
        left:dW(14)
      },
      dateText: {
        fontSize: dW(12),
        color: '#aaa',
        marginTop: dH(4),
        textAlign:'right',
        paddingTop:dH(14),
        paddingRight:dW(17)
      },
})

export default styles