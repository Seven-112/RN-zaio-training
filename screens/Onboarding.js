import React from "react";
import { ZaioText, ZaioView } from "../plugin";
import PropTypes from 'prop-types';
import { Image, StyleSheet, TouchableOpacity, FlatList, Animated } from "react-native";
import { Colors, Size } from "../contants";


const Onboarding = ({navigation, illustrations}) => {
    const a = new Animated.Value(0);

    // renderIllustration
    const renderIllustration = () => {
        //console.log(illustrations);
        return (
            <ZaioView style={styles.list}>
                <FlatList
                    horizontal
                    pagingEnabled
                    scrollEnabled
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={15}
                    snapToAlignment="center"
                    //extraData={}
                    data={illustrations}
                    keyExtractor={(item)=> item.id}
                    renderItem={({item}) => (
                        <ZaioView center >
                            <Image  resizeMode='contain'  style={styles.img} source={item.source} />
                            <ZaioView center>
                                <ZaioText h1 bold>{item.title}</ZaioText>
                                <ZaioText  h2 grey>{item.subTitle}</ZaioText>
                            </ZaioView>
                        </ZaioView>
                    )}
                    onScroll={Animated.event([
                        {
                            nativeEvent: { contentOffset: { x: a} }
                        }
                    ], { useNativeDriver: false})}
                />
            </ZaioView>
        )
    };
    // renderSteps
    const renderSteps = () => {
        const stepPosition = Animated.divide(a, Size.width);

        return (
            <ZaioView style={styles.stepsContainer} row>
                {
                    illustrations.map((item, index) => {
                        const opacity = stepPosition.interpolate({
                            inputRange: [index - 1, index, index + 1],
                            outputRange: [0.2, 1, 0.2],
                            extrapolate: 'clamp'
                        });
                        return (
                            <ZaioView bg key={index}
                                flex={false}
                                style={[styles.steps, { opacity}]} 
                                //style={styles.steps} 
                                animated
                             />

                        )
                    })
                }
                
            </ZaioView>
        )
    };

    return(
        <ZaioView style={styles.container} justify="between" >
           <ZaioView style={styles.top} center justify="between">
               <Image style={styles.logo} source={require('../assets/onbord3.png')}/>
               <ZaioView>
               {
                    renderIllustration()
               }
               </ZaioView>
               
           </ZaioView>
           <ZaioView style={styles.bottom} justify="around">
               
               <ZaioView row justify="between" p={50} center>
                   <ZaioView>
                        {
                            renderSteps()
                        }
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
        flex: 3,
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
        width: Size.width,
        height: "50%",
        overflow: "visible"
    },
    button: {
        backgroundColor: Colors.primary,
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 20,
        elevation:5
    },
    list: {
        alignSelf: 'flex-end'
    },
    stepsContainer: {

    },
    steps: {
        width: 12,
        height: 12,
        borderRadius: 12,
        marginHorizontal: 3,
        backgroundColor: Colors.primary
    }
});


export default Onboarding;
