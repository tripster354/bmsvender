// // import { Image, StyleSheet, Text, View } from 'react-native';
// // import React from 'react';
// // import images from '../../assets/images';
// // import styles from './styles';
// // import Swiper from 'react-native-swiper';
// // import { MockData } from './MockData';
// // import GradientButton from '../../constants/GradiantButton';

// // const Intro = () => {
// //   return (
// //     <View style={styles.container}>
// //       <Image style={styles.imagestyle} source={images.Intro.StaticImage} />
// //       <View style={styles.playViewStyle}>
// //         <Image resizeMode='contain' style={styles.playIconStyle} source={images.Intro.Play} />
// //       </View>
// //       <View style={styles.contentViewStyle}>
// //         <Swiper showsPagination={false}
// //          dot={<View style={styles.dot} />}
// //          activeDot={<View style={styles.activeDot} />}
// //          paginationStyle={styles.pagination}
// //          loop={false}
// //          >
// //           {MockData.map((ele, index) => (
// //             <View key={ele.id} style={styles.swiperView}>
// //               <Text style={styles.pageindexTextStyle}>{ele.id}</Text>
// //               <Text style={styles.titleTextStyle}>{ele.title}</Text>
// //               <Text style={styles.DiscTextStyle}>{ele.Discription}</Text>
// //               <GradientButton text={ele.ButtonText} />
// //             </View>
// //           ))}
// //         </Swiper>
// //       </View>
// //     </View>
// //   );
// // };

// // export default Intro;

// import React, { useState } from 'react';
// import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import images from '../../assets/images';
// import styles from './styles';
// import Swiper from 'react-native-swiper';
// import { MockData } from './MockData';
// import GradientButton from '../../constants/GradiantButton';
// import { dH, dW } from '../../utils/dynamicHeightWidth';
// import Colors from '../../utils/theme/colors';

// // Custom dot component for inactive dots
// const CustomDot = () => (
//   <View style={[styles.dot, { width: 8, height: 8, borderRadius: 4, backgroundColor: Colors.inActive }]} />
// );

// // Custom dot component for active dots
// const CustomActiveDot = () => (
//   <View style={[styles.activeDot, { width: dW(70), height: 12, borderRadius: 6, backgroundColor: Colors.black }]} />
// );
// const onNextScreen = (index)=>{
//   console.log('Book',index)
// }

// const Intro = () => {
//   return (
//     <View style={styles.container}>
//       <Image style={styles.imagestyle} source={images.Intro.StaticImage} />
//       <View style={styles.playViewStyle}>
//         <Image resizeMode='contain' style={styles.playIconStyle} source={images.Intro.Play} />
//       </View>
//       <View style={styles.contentViewStyle}>
//         <Swiper
//           showsPagination={true}
//           dot={<CustomDot />}
//           activeDot={<CustomActiveDot />}
//           paginationStyle={styles.pagination}
//           loop={false}
//         >
//           {MockData.map((ele, index:number) => (
//             <View key={index} style={styles.swiperView}>
//               <Text style={styles.pageindexTextStyle}>{ele.id}</Text>
//               <Text style={styles.titleTextStyle}>{ele.title}</Text>
//               <Text style={styles.DiscTextStyle}>{ele.Discription}</Text>
//               <View style={{marginTop:dH(100)}}>
//               <GradientButton text={ele} onNext={{onNextScreen}} />
//               </View>
//             </View>
//           ))}
//         </Swiper>
//         <TouchableOpacity style={styles.skipViewStyle}>
//           <Text style={styles.skipTextStyle}>SKIP</Text>
//           </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// export default Intro;

import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import images from '../../assets/images';
import styles from './styles';
import Swiper from 'react-native-swiper';
import {MockData} from './MockData';
import GradientButton from '../../constants/GradiantButton';
import Colors from '../../utils/theme/colors';
import {useNavigation} from '@react-navigation/native'; // Assuming you're using React Navigation
import {dH, dW} from '../../utils/dynamicHeigthWidth';

// Custom dot component for inactive dots
const CustomDot = () => (
  <View
    style={[
      styles.dot,
      {width: 8, height: 8, borderRadius: 4, backgroundColor: Colors.inActive},
    ]}
  />
);

// Custom dot component for active dots
const CustomActiveDot = () => (
  <View
    style={[
      styles.activeDot,
      {
        width: dW(70),
        height: dH(15),
        borderRadius: 6,
        backgroundColor: Colors.black,
      },
    ]}
  />
);

const Intro = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigation = useNavigation();

  const onNextScreen = () => {
    if (currentIndex === MockData.length - 1) {
      navigation.navigate('Login'); // Navigate to the Login screen
    } else {
      setCurrentIndex(currentIndex + 1);
      swiperRef.current.scrollBy(1); // Advance to the next slide
    }
  };

  let swiperRef = React.useRef(null);

  return (
    <View style={styles.container}>
      <Image style={styles.imagestyle} source={images.Intro.StaticImage} />
      <View style={styles.playViewStyle}>
        <Image
          resizeMode="contain"
          style={styles.playIconStyle}
          source={images.Intro.Play}
        />
      </View>
      <View style={styles.contentViewStyle}>
        <Swiper
          ref={swiperRef}
          showsPagination={true}
          dot={<CustomDot />}
          activeDot={<CustomActiveDot />}
          paginationStyle={styles.pagination}
          loop={false}
          onIndexChanged={index => setCurrentIndex(index)}>
          {MockData.map((ele, index: number) => (
            <View key={index} style={styles.swiperView}>
              <Text style={styles.pageindexTextStyle}>{ele.id}</Text>
              <Text style={styles.titleTextStyle}>{ele.title}</Text>
              <Text style={styles.DiscTextStyle}>{ele.Discription}</Text>
              <View style={{marginTop: dH(100)}}>
                <GradientButton
                  text={ele.ButtonText}
                  onNext={onNextScreen}
                  Icon={true}
                />
              </View>
            </View>
          ))}
        </Swiper>
        <TouchableOpacity
          style={styles.skipViewStyle}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.skipTextStyle}>SKIP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Intro;
