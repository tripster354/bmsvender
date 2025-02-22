import {StyleSheet} from 'react-native';
import Colors from '../../utils/theme/colors';
import {dH, dW} from '../../utils/dynamicHeigthWidth';
import fonts from '../../assets/fonts';
import {resizeUI} from '../../../Helper/Constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: dW(35),
  },
  DropDownViewStyle: {
    marginTop: dH(64),
  },
  CommonTextinputStyle: {
    marginTop: dH(65),
  },
  CoverTextStyle: {
    fontFamily: fonts.NexaBold,
    fontSize: dW(40),
    color: Colors.black,
  },
  GalleryImageStyle: {
    height: dH(250),
    width: dW(500),
    marginLeft: dW(18),
    borderRadius: resizeUI(10),
  },
  CommonSelectionViewStyle: {
    marginTop: dH(50),
    paddingHorizontal: dW(5),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  WebinarTextStyle: {
    marginTop: dW(80),
    color: Colors.black,
    fontFamily: fonts.NexaBold,
    fontSize: dW(40),
  },
  ReferrelCodeViewStyle: {
    marginTop: dH(44),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ReferrelTextStyle: {
    color: Colors.lightBlue,
    fontFamily: fonts.NexaBold,
    fontSize: dW(34),
  },
  ReferrelIconViewStyle: {
    flexDirection: 'row',
  },
  CommonIconStyle: {
    height: dH(49),
    width: dW(49),
  },
  HorizonalLineStyle: {
    height: dH(1),
    flex: 1,
    backgroundColor: Colors.borderColor,
  },
  OfferTextStyle: {
    marginTop: dH(50),
    color: Colors.black,
    fontFamily: fonts.NexaBold,
    fontSize: dW(40),
  },
  MainCardViewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: dH(21),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    flex: 1,
    borderRadius: dW(10),
    backgroundColor: 'white',
    marginBottom: dH(43),
    marginTop: dH(5),
    marginHorizontal: dW(5),
  },
  InnerViewStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  OfferImageStyle: {
    height: dH(76),
    width: dW(76),
  },
  OfferTitleTextStyle: {
    color: Colors.black,
    fontFamily: fonts.NexaBold,
    fontSize: dW(21),
  },
  OfferDiscTextStyle: {
    color: Colors.lightBlue,
    fontFamily: fonts.NexaBook,
    fontSize: dW(18),
  },
  AppleTextStyle: {
    color: Colors.lightBlue,
    fontFamily: fonts.NexaBold,
    fontSize: dW(18),
    borderWidth: dW(1),
    borderColor: Colors.inActive,
    borderRadius: dW(8),
    paddingHorizontal: dW(21),
    paddingVertical: dH(10),
  },
  FistViewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    left: dW(21),
  },
  TextSectionStyle: {
    left: dW(16),
  },
  OnPressViewStyle: {
    right: dW(47),
  },
  ContinueViewStyle: {
    marginTop: dH(30),
    marginBottom: dH(100),

    justifyContent: 'center',
    alignItems: 'center',
  },
  covertextcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: dW(50),
  },
  addcovertext: {
    color: Colors.black,
    fontFamily: fonts.NexaBook,
    fontSize: dW(30),
  },
});

export default styles;
