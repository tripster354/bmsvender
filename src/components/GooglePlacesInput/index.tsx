import React, {useRef, useState, useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {resizeUI} from '../../../Helper/Constants';
import {useDispatch} from 'react-redux';
import Colors from '../../utils/theme/colors';
import { getLoacationData } from '../../store/actions/SessionActions';

const GOOGLE_PLACES_API_KEY = 'AIzaSyAiBhJGYZIQjl3BWi8kpfJK2ntRHNHP9xI';

type Props = {
  navigation: any;
  name: string;
};

const GooglePlacesInput = (props: Props) => {
  const {navigation, name} = props;
  console.log('name',name)
  const dispatch = useDispatch();
  const [listViewDisplayed, setListViewDisplayed] = useState(false);
  const searchText = useRef(null);

  const goToInitialLocation =  initialRegion => {
    // Additional navigation logic here
    dispatch(getLoacationData(initialRegion));
    navigation.navigate(name,{
      initialRegion: initialRegion,
    });
  };

  useEffect(() => {
    return () => {
      // Clear the search input when the component is unmounted
      if (searchText.current) {
        searchText.current.setAddressText('');
      }
    };
  }, []);

  useEffect(() => {
    // Clear the search input when the component is mounted
    if (searchText.current) {
      searchText.current.setAddressText('');
    }
  }, []);

  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder="Search for a location"
        minLength={2}
        autoFocus={true}
        returnKeyType="search"
        listViewDisplayed={listViewDisplayed}
        fetchDetails={true}
        ref={searchText}
        renderDescription={row => row.description}
        enablePoweredByContainer={false}
        onPress={(data, details = null) => {
          const {lat, lng} = details.geometry.location;
          setListViewDisplayed(false);
          goToInitialLocation({
            locationdata: {
              latitude: lat,
              longitude: lng,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            },
            locationname: data.description,
          });
          // Clear the search input after selecting a location
          if (searchText.current) {
            searchText.current.setAddressText('');
          }
        }}
        textInputProps={{
          autoFocus: true,
          onChangeText: text => {
            setListViewDisplayed(true);
          },
        }}
        query={{
          key: GOOGLE_PLACES_API_KEY,
          language: 'en',
        }}
        styles={{
          textInput: {
            color: 'black',
            backgroundColor: Colors.white,
            borderWidth: resizeUI(1),
            borderColor: Colors.grey,
            height: resizeUI(70),
          },
          description: {
            fontFamily: 'Calibri',
            color: 'black',
            fontSize: resizeUI(15),
          },
          predefinedPlacesDescription: {
            color: 'black',
          },
          listView: {
            position: 'absolute',
            marginTop: resizeUI(70),
            backgroundColor: 'white',
            borderBottomEndRadius: 15,
            elevation: 2,
          },
        }}
        nearbyPlacesAPI="GooglePlacesSearch"
        GooglePlacesSearchQuery={{
          rankby: 'distance',
        }}
        filterReverseGeocodingByTypes={[
          'locality',
          'administrative_area_level_3',
        ]}
        debounce={200}
      />
    </View>
  );
};

export default GooglePlacesInput;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: resizeUI(10),
  },
  textInputContainer: {
    backgroundColor: 'grey',
  },
  textInput: {
    height: 38,
    color: '#5d5d5d',
    fontSize: 16,
  },
  searchInputStyle: {
    resizeMode: 'contain',
    height: resizeUI(16),
    width: resizeUI(16),
    alignSelf: 'center',
    margin: resizeUI(3),
  },
});
