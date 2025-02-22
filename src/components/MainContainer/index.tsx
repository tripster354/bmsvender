import React, {FC, ReactNode, useMemo} from 'react';
import {
  SafeAreaView,
  View,
  ViewStyle,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Loader from '../loader';
import Colors from '../../utils/theme/colors';

type MainContainerProps = {
  children: ReactNode;
  style?: ViewStyle;
  scrollable?: boolean;
  statusBarColor?: string;
  barStyle?: string;
  translucent?: boolean;
  onScroll?:
    | ((event: NativeSyntheticEvent<NativeScrollEvent>) => void)
    | undefined;
  contentStyle?: ViewStyle;
  refreshControl?: any;
  marginBottom?: number;
  backgroundColor?: string;
};

const MainContainer: FC<MainContainerProps> = React.memo(
  ({
    children,
    style,
    scrollable = false,
    statusBarColor = Colors.white,
    barStyle = 'dark-content',
    translucent = false,
    onScroll = undefined,
    contentStyle = {
      flex: 1,
      // paddingHorizontal: props?.paddingHorizontal ?? 0,
      // paddingVertical: props?.paddingVertical ?? 0,
      // marginBottom: props?.marginBottom ?? 0,
      // marginTop: props?.marginBottom ?? 0,
    },
    refreshControl = undefined,
    marginBottom = 0,
    backgroundColor = Colors.white,
  }) => {
    // Determine the content component based on the scrollable prop
    const ContentComponent = useMemo(
      () => (scrollable ? ScrollView : View),
      [scrollable],
    );

    const renderKeyBoardAvoidingView = () => {
      return (
        <ScrollView
          keyboardShouldPersistTaps={'always'}
          refreshControl={refreshControl}
          contentContainerStyle={{flexGrow: 1}}
          showsVerticalScrollIndicator={false}
          style={{marginBottom}}
          onScroll={onScroll}
          scrollEventThrottle={16}>
          {children}
        </ScrollView>
      );
    };

    const baseStyle = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: backgroundColor,
      },
      content: {
        flex: 1,
      },
    });

    // Determine keyboard avoiding behavior based on platform
    const keyboardBehavior = Platform.OS === 'ios' ? 'padding' : 'height';

    return (
      <>
        <SafeAreaView style={[baseStyle.container, style]}>
          <StatusBar
            barStyle={barStyle} // or 'light-content' depending on your needs
            backgroundColor={statusBarColor} // Background color for Android
            translucent={translucent}
          />
          <KeyboardAvoidingView
            style={{flex: 1}}
            behavior={keyboardBehavior}
            // keyboardVerticalOffset={Platform.select({ios: 0, android: 20})} // Adjust based on your needs
          >
            {/* <ContentComponent
              style={[baseStyle.content, scrollable && {flexGrow: 1}]}>
              {children}
            </ContentComponent> */}
            {/* {scrollable ? (
              <>{renderKeyBoardAvoidingView()}</>
            ) : ( */}
            <View style={contentStyle}>{children}</View>
            {/* )} */}
          </KeyboardAvoidingView>
        </SafeAreaView>
      </>
    );
  },
);

export default Loader(MainContainer);
