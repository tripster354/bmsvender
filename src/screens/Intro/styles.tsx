import {StyleSheet} from 'react-native';
import Colors from '../../utils/theme/colors';
import {dH, dW} from '../../utils/dynamicHeigthWidth';
import {resizeUI} from '../../../Helper/Constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  imagestyle: {
    height: dH(1125),
    width: dW(750),
    top: dH(-70),
  },
  playViewStyle: {
    flex: 1,
    marginTop: -dH(817),
    alignSelf: 'center',
  },
  playIconStyle: {
    height: dH(171),
    width: dW(171),
  },
  contentViewStyle: {
    flex: 1,
    backgroundColor: Colors.white,
    marginTop: -dH(690),
    borderTopLeftRadius: dW(85),
    borderTopEndRadius: dW(85),
    alignItems: 'center',
  },
  swiperView: {
    flex: 1,
    alignItems: 'center',
  },
  pageindexTextStyle: {
    marginTop: dH(100),
    fontSize: dH(169),
    color: Colors.light_grey,
  },
  titleTextStyle: {
    textAlign: 'center',
    marginTop: dH(24),
    color: Colors.black,
    fontWeight: 'bold',
    fontSize: dW(49),
  },
  DiscTextStyle: {
    paddingHorizontal: dW(104),
    textAlign: 'center',
    marginTop: dH(23),
    color: Colors.grey,
    fontSize: dW(30),
  },
  dot: {
    backgroundColor: 'rgba(0,0,0,.2)',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
    top: resizeUI(-185),
  },
  activeDot: {
    backgroundColor: '#000',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
    top: resizeUI(-185),
  },
  pagination: {
    bottom: 10,
  },
  skipViewStyle: {
    bottom: dH(20),
  },
  skipTextStyle: {
    color: Colors.lightBlue,
  },
});

export default styles;
