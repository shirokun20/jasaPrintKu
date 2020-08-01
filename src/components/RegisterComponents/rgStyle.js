import { StyleSheet } from 'react-native';

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
});