import React from 'react';
import { Text, View, Platform, StyleSheet, Dimensions } from 'react-native';
//
import { Constant } from '~/constants/index.constants';
//
import { SsShadow } from './ssShadow';
//
const { width } = Dimensions.get('window'); 
//
const SsModeDevelopment = (props) => {
    //
    return (
        <View style={[style.containerView, SsShadow]}>
            <Text style={{
                color: Constant.warnaUtama,
                fontSize: 17,
                fontWeight: Platform.select({
                    ios: '700',
                    android: 'bold'
                })
            }}>{Constant.textModeDevelopment}</Text>
        </View>
    )
};

const style = StyleSheet.create({
    containerView: {
        position: 'absolute',
        width: '100%',
        backgroundColor: Constant.warnaSemiRed,
        paddingTop: Platform.select({
            android: 45,
            ios: width > 405 ? 45 : 25,
        }),
        paddingBottom: 10,
        top: 0,
        zIndex: 1,
        alignItems: 'center',
    }
})

export default SsModeDevelopment;
