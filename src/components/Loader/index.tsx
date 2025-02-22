import LottieView from 'lottie-react-native';
import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import {resizeUI} from '../../../Helper/Constants';

const Loader = ({absolute, loaderTop}: any) => {
  //  = absolute ? styles.absLoadingContainer : styles.loadingContainer
  let style;
  if (absolute) {
    style = styles.absLoadingContainer;
  }
  if (!absolute) {
    if (loaderTop) {
      style = styles.loaderTopStyle;
    }
    style = styles.loadingContainer;
  }
  return (
    <View style={style}>
      {/* <ActivityIndicator size="large" color={themecolor} /> */}
      <LottieView
        style={{height: resizeUI(100), width: resizeUI(100)}}
        source={require('../../assets/json/loading.json')}
        autoPlay
        loop={true}
        resizeMode={'cover'}
      />
    </View>
  );
};

const LoaderHOC =
  (WrapperComponent: any) =>
  ({
    loadingLabel,
    absoluteLoading,
    loading,
    absolute,
    loaderTop,
    ...props
  }: any) => {
    const isAbsoluteLoading = () => {
      if (absoluteLoading) return <Loader absolute={true} />;
    };

    const loadingContainer = () => {
      if (loading) return <Loader absolute={absolute} loaderTop={loaderTop} />;
    };

    if (loading) {
      return loadingContainer();
    } else {
      return (
        <>
          <WrapperComponent {...props} />
          {isAbsoluteLoading()}
        </>
      );
    }
  };

export default LoaderHOC;
