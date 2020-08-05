import React from 'react';
import { Text, View, Modal, StyleSheet, Image, Platform, TouchableOpacity } from 'react-native';
//
import { Constant } from '~/constants/index.constants';
import { CHECKED_ICON, UNCHECKED_ICON } from '~/assets/index.assets';
import { SsShadow } from '~/components/SplashScreenComponents/ssShadow';

const ModalAlert = ({ isVisible, alertText, callback, alertSuccess }) => {

    return (
        <Modal transparent={true} visible={isVisible}>
            <TouchableOpacity
                style={Style.Tb}
                activeOpacity={0.3}
                onPress={(e) => {
                    callback(e);
                }}
            />
            <View style={Style.Container}>
                <View style={Style.ContainerImg}>
                    <View style={Style.viewParentImg}>
                        <Image
                            style={Style.Img}
                            source={alertSuccess ? CHECKED_ICON : UNCHECKED_ICON}
                        />

                    </View>
                </View>
                <View style={{
                    marginBottom: 10,
                }}>
                    <Text style={Style.Text}>{alertText}</Text>
                </View>
                <View style={{
                    width: '60%',
                }}>
                    <TouchableOpacity style={[{
                        backgroundColor: alertSuccess ? Constant.warnaAlertSuccess : Constant.warnaAlertError,
                    }, Style.BtnAlert, SsShadow]} activeOpacity={0.8} onPress={(e) => callback(e)}>
                        <Text style={Style.BtnText}>OK!</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

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
        width: '70%',
        paddingVertical: 10,
    },
    ContainerImg: {
        marginBottom: 30,
        alignItems: 'center',
    },
    Img: {
        width: 70,
        height: 70,
    },
    Text: {
        textAlign: 'center',
        fontSize: 15,
        fontWeight: Platform.select({
            ios: '600',
            android: 'bold'
        }),
        color: Constant.warnaShadow
    },
    BtnAlert: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        width: '100%',
        alignItems: 'center',
        borderRadius: 5,
    },
    BtnText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Constant.warnaPutih,
    },
    viewParentImg: {
        width: 70,
        position: 'absolute',
        top: -45,
        backgroundColor: Constant.warnaPutih,
        borderRadius: 150 / 2,
    }
});

ModalAlert.defaultProps = {
    isVisible: false,
    alertText: '',
    callback: () => { },
    alertSuccess: true,
}

export {
    ModalAlert
}