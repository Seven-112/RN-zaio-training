import React from "react";
import PropTypes from 'prop-types';
import { Text, StyleSheet } from 'react-native';
import { Colors, Size } from "../contants";

 const ZaioText = (props) => {

    const myStyles = [
        styles.defaultColor,
        props.h1 && styles.h1,
        props.h2 && styles.h2,
        props.normal && styles.normal,
        props.bold && styles.bold,
        props.center && styles.center,
        props.primary && styles.primary,
        props.black && styles.black,
        props.success && styles.success,
        props.grey && styles.grey,
        props.white && styles.white,
        props.size && { fontSize:  props.size },
        props.style // reecrire les styles predefinis
    ];
    return (
            <Text style={myStyles} {...props} >
                {props.children}
            </Text>
     )
 };

 const styles = StyleSheet.create({
    defaultColor: {
        color: Colors.dark
    },
    h1: Size.h1,
    h2: Size.h2,
    normal : Size.normal,
    bold: {
        fontWeight: 'bold'
    },
    center: {
        textAlign: 'center'
    },
    primary: {
        color: Colors.primary
    },
    black: {
        color: Colors.dark
    },
    success: {
        color: Colors.success
    },
    grey: {
        color: Colors.grey
    },
    white: {
        color: Colors.white
    }
 });

ZaioText.propTypes = {
    h1: PropTypes.bool,
    h2: PropTypes.bool,
    normal: PropTypes.bool,
    bold: PropTypes.bool,
    center: PropTypes.bool,
    primary: PropTypes.bool,
    black: PropTypes.bool,
    grey: PropTypes.bool,
    success: PropTypes.bool,
    white: PropTypes.bool,
    size: PropTypes.number,
    style: PropTypes.any,
    children: PropTypes.any,
}

 export default ZaioText;
