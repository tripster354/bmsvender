import {
  FlatList,
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {dH, dW} from '../utils/dynamicHeigthWidth';
import Colors from '../utils/theme/colors';
import fonts from '../assets/fonts';
import CreateIconImage from '../assets/images/CreateImageIcon';
import {useAppDispatch} from '../Redux/reducers/hook';

interface IData {
  [key: string]: any; // Allow any dynamic key for the data object
}

interface ICustomDropDown {
  LeftIcon: ImageSourcePropType;
  Placeholder: string;
  RigthIcon: ImageSourcePropType;
  data: IData[];
  onSelect: (item: IData) => void;
  select: IData;
  keyField: string; // Field name for ID (customizable)
  valueField: string; // Field name for title or value (customizable)
}

const CustomDropDown = (props: ICustomDropDown) => {
  const dispatch = useAppDispatch();
  const [modal, setModal] = useState(false);

  const OpenModal = () => {
    setModal(!modal);
  };

  const ActivityRender = ({item, index}) => {
    return (
      <TouchableOpacity
        style={styles.ListItemStyle}
        onPress={() => {
          props.onSelect(item);
        }}>
        <View style={styles.HorizontalLineStyle} />
        <View style={styles.ItevViewStyle}>
          <Text
            style={[
              styles.ItemTextStyle,
              {
                color:
                  props.select &&
                  props.select[props.keyField] == item[props.keyField]
                    ? Colors.lightBlue
                    : Colors.black,
              },
            ]}>
            {item[props.valueField]}
          </Text>
          {props.select &&
          props.select[props.keyField] === item[props.keyField] ? (
            <Image
              source={CreateIconImage.CheckMarkIcon}
              resizeMode={'contain'}
              style={styles.MarkIconStyle}
            />
          ) : null}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={[
        styles.MainDropdownViewStyle,
        {height: modal ? dH(500) : dH(117)},
      ]}>
      <View style={styles.InnerContainView}>
        <View style={styles.LeftViewStyle}>
          <Image
            source={props.LeftIcon}
            style={styles.LeftIconStyle}
            resizeMode={'contain'}
          />
          <View style={styles.VerticalLinestyle} />
        </View>
        <View style={styles.RightViewStyle}>
          <Text style={styles.PlaceholdeStyle}>
            {props.select?.[props.valueField]
              ? props.select?.[props.valueField]
              : props.Placeholder}
          </Text>
          <TouchableOpacity onPress={OpenModal}>
            <Image
              source={props.RigthIcon}
              style={styles.RigthIconStyle}
              resizeMode={'contain'}
              tintColor={Colors.black}
            />
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        nestedScrollEnabled={true}
        data={props.data}
        renderItem={ActivityRender}
        style={styles.FlatListStyle}
      />
    </View>
  );
};

export default CustomDropDown;

const styles = StyleSheet.create({
  MainDropdownViewStyle: {
    flex: 1,
    borderRadius: dW(10),
    borderWidth: 1,
    borderColor: Colors.inActive,
  },
  InnerContainView: {
    flexDirection: 'row',
    alignItems: 'center',
    height: dH(117),
  },
  LeftViewStyle: {
    flexDirection: 'row',
  },
  LeftIconStyle: {
    height: dH(48),
    width: dW(48),
    marginLeft: dW(24),
  },
  RightViewStyle: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  RigthIconStyle: {
    height: dH(30),
    width: dW(30),
  },
  PlaceholdeStyle: {
    fontFamily: fonts.NexaBold,
    color: Colors.black,
    fontSize: dW(32),
  },
  VerticalLinestyle: {
    marginLeft: dW(30),
    width: 1,
    height: dH(50),
    backgroundColor: Colors.inActive,
  },
  FlatListStyle: {
    flex: 1,
  },
  HorizontalLineStyle: {
    height: 1,
    backgroundColor: Colors.inActive,
    flex: 1,
  },
  ListItemStyle: {},
  ItemTextStyle: {
    paddingHorizontal: dW(47),
    paddingVertical: dH(30),
    fontFamily: fonts.NexaBold,
    fontSize: dW(32),
  },
  ItevViewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  MarkIconStyle: {
    height: dH(60),
    width: dW(60),
    alignSelf: 'center',
    right: dW(40),
  },
});
