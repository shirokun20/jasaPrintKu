import React from 'react';
import { Text, View, StyleSheet, Platform } from 'react-native';
//
import { APP_FIRST_NAME, APP_SECONDARY_NAME } from '~/config/app.config';
import { Constant } from '~/constants/index.constants';
//
import { SsShadow } from './ssShadow';

const SsAppName = (props) => (
    <View style={style.containerView}>
       <Text style={style.ukuranText}>{APP_FIRST_NAME}</Text>
       <View style={[style.cardView, SsShadow]}>
            <Text style={[{
                color: Constant.warnaSemiRed,
            }, style.ukuranText]}>{APP_SECONDARY_NAME}</Text>
       </View>
    </View>
);

const style = StyleSheet.create({
    containerView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15,
    },
    ukuranText: {
        fontSize: 20,
        fontWeight: Platform.select({
            ios: '600',
            android: 'bold'
        })
    },
    cardView: {
        marginLeft: 5,
        backgroundColor: Constant.warnaUtama,
        paddingHorizontal: 5,
        paddingVertical: 1.5,
        borderRadius: 10,
        borderWidth: 0.9,
        borderColor: Constant.warnaSemiRed
    }
});

export {
    style,
}

export default SsAppName;
