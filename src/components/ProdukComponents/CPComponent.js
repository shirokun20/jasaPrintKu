import React from 'react';
import { StyleSheet, Text, View, Platform, TouchableOpacity } from 'react-native';
//
import { Constant } from '../../constants/index.constants';
import { SsShadow } from '../SplashScreenComponents/ssShadow';

const CPComponent = ({
    judul_barang = 'Lorem',
    dilihat = 1,
    onPress,
}) => {
    return  (
        <TouchableOpacity style={[Style.container, SsShadow]} activeOpacity={0.8} onPress={() => onPress()}>
            <View style={Style.img} />
            <View style={Style.content}>
                <Text numberOfLines={2}>{judul_barang}</Text>
                <View style={{
                    marginTop: 5,
                }}>
                    <Text numberOfLines={1} style={Style.textRupiah}>Rp. 0</Text>
                    <Text numberOfLines={1}>Dilihat {dilihat} kali</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
};

const Style = StyleSheet.create({
    container: {
        width: '48.5%',
        height: 205,
        backgroundColor: Constant.warnaPutih,
        marginBottom: 15,
        borderRadius: 10,
    },
    img: {
        borderTopStartRadius: 10,
        borderTopEndRadius: 10,
        width: '100%',
        height: 125,
        backgroundColor: Constant.warnaGreyLight
    },
    content: {
        paddingHorizontal: 5,
        paddingVertical: 5,
        flex: 1,
        justifyContent: 'space-between'
    },
    textRupiah: {
        fontWeight: Platform.select({
            ios: '600',
            android: 'bold',
        }),
        marginBottom: 5,
    }
})

CPComponent.defaultProps = {
    onPress: () => {},
}

export default CPComponent;
