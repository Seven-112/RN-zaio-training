import React from "react";

import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { Colors } from "../contants";

const ZaioView = (props) => {

    const myStyle = [
        styles.default,
        props.m && { margin:  props.m },
        props.p && { padding:  props.p},
        props.mh && { marginHorizontal:  props.mh},
        props.mv && { marginVertical:  props.mv},
        props.ph && { paddingHorizontal:  props.ph},
        props.pv && { paddingVertical:  props.pv},
        props.justify && { justifyContent: `space-${props.justify}` },
        props.row && styles.row,
        props.col && styles.col,
        props.center && styles.center,
        props.middle && styles.middle,
        props.color && styles[props.color]

    ];
    return (
        <View style={myStyle} {...props}>
            { props.children }
        </View>
    )
};

const styles = StyleSheet.create({
    default:{
        backgroundColor: Colors.white,
        flexDirection: 'column'
    },
    row : {
        flexDirection: 'row'
    },
    col : {
        flexDirection: 'column'
    },
    primary: {
        backgroundColor: Colors.primary
    },
    success: {
        backgroundColor: Colors.success
    },
    center: {
        alignItems: 'center'
    },
    middle : {
        justifyContent: 'center',
        
    }
 });

ZaioView.propTypes = {
    m : PropTypes.number,
    mv : PropTypes.number,
    mh : PropTypes.number,
    p : PropTypes.number,
    pv : PropTypes.number,
    ph : PropTypes.number,
    flex : PropTypes.any,
    row : PropTypes.bool,
    col : PropTypes.bool,
    color: PropTypes.any,
    justify: PropTypes.oneOf(['between', 'around']),
    // shadow
    // wrap
    // right
    center: PropTypes.bool,
    middle: PropTypes.bool,
    style: PropTypes.any,
    children: PropTypes.any,
};


export default ZaioView;
