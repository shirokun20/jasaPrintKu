import React from 'react';
import styled from 'styled-components/native';
import { StatusBar, StyleSheet, Dimensions, Platform } from 'react-native';
//
import { Constant } from '~/constants/index.constants';
//
//
const { height, width } = Dimensions.get('screen');
const heightTampilanBesar = (height * (23 / 100));
const heightSisaPart1 = height - heightTampilanBesar;
//
const BcContainer = styled.View`
    width: 100%;
    height: 100%;
    background-color: ${ props => props.bgColor || Constant.warnaUtama};
`;

const BcBarStyle = ({ bStyle = 'dark-content', bColor = 'transparent' }) => (
    <StatusBar barStyle={bStyle} translucent backgroundColor={bColor} />
);

const BcStyle = StyleSheet.create({
    cardTengah: {
        alignSelf: 'center',
        width: '80%',
        height: 85,
        backgroundColor: Constant.warnaPutih,
        position: 'absolute',
        top: heightTampilanBesar - (heightTampilanBesar * (21 / 100)),
        zIndex: 2,
        borderRadius: 3,
    },
    bgTop: {
        width: '100%',
        height: heightTampilanBesar,
        zIndex: 0,
    },
    containerWelAv: {
        top: 40,
        paddingVertical: 10,
        // paddingHorizontal: 10,
        zIndex: 1,
    },
    textWelcome: {
        color: Constant.warnaHitam,
        fontWeight: Platform.select({
            ios: '600',
            android: 'bold',
        }),
    },
    textName: {
        color: Constant.warnaSemiRed,
        fontWeight: Platform.select({
            ios: '600',
            android: 'bold',
        }),
    },
    cardWelNama: {
        backgroundColor: Constant.warnaPutih,
        paddingRight: 25,
        paddingLeft: 10,
        paddingVertical: 3,
        borderTopRightRadius: 150,
        borderBottomRightRadius: 150,
    },
    avatarCard: {
        padding: 8,
        backgroundColor: Constant.warnaPutih,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: width,
        marginRight: 10,
    }
})

export {
    BcContainer,
    BcBarStyle,
    BcStyle
}