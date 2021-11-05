import React from "react";
import { Image, StyleSheet } from "react-native";

import Onboarding from 'react-native-onboarding-swiper';
import { Size } from "../contants";

const MyOnboarding = ({ navigation }) => {

    const Simple = () => (
        <Onboarding
            pages={[
                {
                    backgroundColor: '#fff',
                    image: <Image resizeMode="contain" style={styles.img} source={require('../assets/onbord1.png')} />,
                    title: 'Onboarding',
                    subtitle: 'Done with React Native Onboarding Swiper',
                },
                {
                    backgroundColor: '#fff',
                    image: <Image resizeMode="contain" style={styles.img} source={require('../assets/onbord2.png')} />,
                    title: 'The Title',
                    subtitle: 'This is the subtitle that sumplements the title.',
                },
                {
                    backgroundColor: '#fff',
                    image:  <Image resizeMode="contain" style={styles.img} source={require('../assets/onbord3.png')} />,
                    title: 'Triangle',
                    subtitle: "Beautiful, isn't it?",
                },
            ]}
            onDone={()=> navigation.navigate('Home')}
        />
  );

  
    return(
        <Simple />
    )
};

const styles = StyleSheet.create({
    img: {
        width: Size.width,
        height: "80%",
        overflow: "visible"
    }
});
    
export default MyOnboarding;
