import React from "react";

import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { Colors } from "../contants";

const ZaioView = (props) => {

    const myStyle = [
        styles.default,
        props.m && { margin:  props.m },
        props.mt && { marginTop:  props.mt },
        props.ml && { marginLeft:  props.ml },
        props.mr && { marginRight:  props.mr },
        props.mb && { marginBottom:  props.mb },
        props.p && { padding:  props.p},
        props.pt && { paddingTop:  props.pt},
        props.pb && { paddingBottom:  props.pb},
        props.pr && { paddingRight:  props.pr},
        props.pl && { paddingLeft:  props.pl},
        props.mh && { marginHorizontal:  props.mh},
        props.mv && { marginVertical:  props.mv},
        props.ph && { paddingHorizontal:  props.ph},
        props.pv && { paddingVertical:  props.pv},
        props.justify && { justifyContent: `space-${props.justify}` },
        props.row && styles.row,
        props.col && styles.col,
        props.center && styles.center,
        props.middle && styles.middle,
        props.elevation && { elevation: props.elevation },
        props.color && styles[props.color]

    ];
    return (
        <View style={myStyle} {...props.style}>
            { props.children }
        </View>
    )
};

const styles = StyleSheet.create({
    default:{
        //backgroundColor: Colors.white,
        flexDirection: 'column',
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
        flex: 1,
        justifyContent: 'center',
    }
 });

ZaioView.propTypes = {
    m : PropTypes.number,
    mt : PropTypes.number,
    mb : PropTypes.number,
    mr : PropTypes.number,
    ml : PropTypes.number,
    mv : PropTypes.number,
    mh : PropTypes.number,
    p : PropTypes.number,
    pt : PropTypes.number,
    pb : PropTypes.number,
    pr : PropTypes.number,
    pl : PropTypes.number,
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
    // radius
    elevation: PropTypes.number,
    center: PropTypes.bool,
    middle: PropTypes.bool,
    style: PropTypes.any,
    children: PropTypes.any,
};


export default ZaioView;
