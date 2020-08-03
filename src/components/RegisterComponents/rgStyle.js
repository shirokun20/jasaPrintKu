import { StyleSheet, Platform, Dimensions } from 'react-native';
//
const { width, height } = Dimensions.get('window');
//
export const RgStyle = StyleSheet.create({
    containerRadio: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    textRadio: {
        fontSize: 13,
        fontWeight: Platform.select({
            ios: '600',
            android: 'bold'
        })
    },
    fontIos: {
        fontSize: Platform.select({
            ios: width > 405 ? 15 : 12
        })
    }
});