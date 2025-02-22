import React, {Component} from 'react';
import {StyleSheet, Dimensions, View, ActivityIndicator} from 'react-native';
import { resizeUI } from '../../../Helper/Constants';
import Colors from '../../utils/theme/colors';

export default class Loader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }
  render() {
    let style = this.props.absolute ? styles.absolute : styles.withoutAbsolute;
    return (
      <View style={{...style}}>
        <ActivityIndicator
          style={styles.indicator}
          color={Colors.Green}
          size={50}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  absolute: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    zIndex: 100,
  },
  withoutAbsolute: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  indicator: {
    color: Colors.Green,
    opacity: 0.7,
    height: resizeUI(50),
    width: resizeUI(50),
  },
});

Loader.defaultProps = {
  absolute: true,
};
