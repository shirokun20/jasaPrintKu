import React from 'react';
import { Text, View, Modal, StyleSheet, Image, Platform } from 'react-native';
import { Constant } from '~/constants/index.constants';
import { PRINT_DUA_ICON } from '~/assets/index.assets';

const ModalLoading = ({ isLoading, loadingText }) => (
    <Modal transparent={true} visible={isLoading}>
        <View
            style={Style.Tb}
        />
        <View style={Style.Container}>
            <Image
                style={Style.Img}
                source={PRINT_DUA_ICON}
            />
            <View>
                <Text style={Style.Text}>{loadingText}</Text>
            </View>
        </View>
    </Modal>
);

const Style = StyleSheet.create({
    Tb: {
        width: '100%',
        height: '100%',
        backgroundColor: Constant.warnaHitam,
        opacity: 0.3,
        zIndex: 0,
    },
    Container: {
        backgroundColor: Constant.warnaPutih,
        position: 'absolute',
        alignSelf: 'center',
        alignItems: 'center',
        top: '40%',
        borderRadius: 10,
        width: 150,
        paddingVertical: 10,
    },
    Img: {
        width: '100%',
        height: 100,
        resizeMode: 'contain'
    },
    Text: {
        fontSize: 15,
        fontWeight: Platform.select({
            ios: '600',
            android: 'bold'
        }),
        color: Constant.warnaShadow
    }
});

ModalLoading.defaultProps = {
    isLoading: false,
    loadingText: 'Tunggu sebentar!'
}

export {
    ModalLoading,
};
