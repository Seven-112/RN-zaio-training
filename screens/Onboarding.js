import React from "react";
import { ZaioText, ZaioView } from "../plugin";
import PropTypes from 'prop-types';
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { Colors } from "../contants";


const Onboarding = ({navigation}) => {

    // renderIllustration
    // renderSteps

    return(
        <ZaioView style={styles.container} justify="between" >
           <ZaioView style={styles.top} center justify="between">
               <Image style={styles.logo} source={require('../assets/onbord3.png')} />
               <Image style={styles.img} source={require('../assets/onbord1.png')} />
           </ZaioView>
           <ZaioView style={styles.bottom} justify="around">
               <ZaioView center>
                    <ZaioText h1 bold>Bottom</ZaioText>
                    <ZaioText  h2 grey>Sut Title</ZaioText>
               </ZaioView>
               <ZaioView row justify="between" p={50} center>
                   <ZaioView>
                        <ZaioText>dots</ZaioText>
                   </ZaioView>
                   <TouchableOpacity style={styles.button}
                     onPress={() => navigation.navigate('Home')}>
                       <ZaioText white size={20}>Next</ZaioText>
                   </TouchableOpacity>
               </ZaioView>
           </ZaioView>
        </ZaioView>
    )
};


Onboarding.defaultProps = {
    illustrations: [
        {
            id: 1,
            title: "Title 1",
            subTitle: "Sous titre 1",
            source: require('../assets/onbord1.png')
        },
        {
            id: 2,
            title: "Title 2",
            subTitle: "Sous titre 2",
            source: require('../assets/onbord2.png')
        },
        {
            id: 3,
            title: "Title 3",
            subTitle: "Sous titre 3",
            source: require('../assets/onbord3.png')
        }
    ]
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: Colors.white
    },
    top: {
        flex: 2
    },
    bottom: {
        flex: 1
    },
    logo: {
        marginTop: 50,
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 2,
        borderColor: Colors.success
    },
    img: {
        width: "90%",
        height: "50%"
    },
    button: {
        backgroundColor: Colors.primary,
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 20,
        elevation:5
    }
});


export default Onboarding;
