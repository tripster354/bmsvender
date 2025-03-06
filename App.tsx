import {
  LogBox,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import Root from './src/navigation/root';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import { persistor, store } from './src/store/configureStore';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

const App = () => {
  return (
    // <SafeAreaView style={{flex: 1}}>
    <>
      <StatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
      />
      <Provider store={store}>
        <PersistGate loading={true} persistor={persistor}>
          {/* <NavigationContainer> */}
          <Root />
          {/* <DrawerNavigator /> */}
          {/* </NavigationContainer> */}
        </PersistGate>
      </Provider>
    </>
    // </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
