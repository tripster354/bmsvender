import React, {useCallback} from 'react';
import {useFocusEffect, useRoute} from '@react-navigation/native';
import {useAppDispatch} from '../../Redux/reducers/hook';
import {resizeUI} from '../../../Helper/Constants';
import {SelectedLocationDataGetClearAction} from '../../Redux/actions/CreateAction';
import CommonHeader from '../../components/CommonHeader';
import MainContainer from '../../components/MainContainer';
import GooglePlacesInput from '../../components/GooglePlacesInput';
import View from '../../components/view';

type Props = {
  navigation: any;
};

const AddLocation = (props: Props) => {
  const {navigation} = props;
  const route = useRoute();
  const dispatch = useAppDispatch();

  useFocusEffect(
    useCallback(() => {
      dispatch(SelectedLocationDataGetClearAction());
    }, []),
  );

  const header = () => {
    return (
      <View style={{marginHorizontal: resizeUI(10)}}>
        <CommonHeader
          leftIcon={null}
          title={'Add Location'}
          RigthIcon={null}
          SubTitle={''}
          rigthType={''}
          RigthIconProps={''}
        />
      </View>
    );
  };
  return (
    <MainContainer>
      {header()}
      <View style={{marginVertical: resizeUI(20)}}>
        <GooglePlacesInput {...props} name={route?.params?.name} />
      </View>
    </MainContainer>
  );
};

export default AddLocation;
