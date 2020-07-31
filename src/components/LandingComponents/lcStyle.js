import { StyleSheet, Platform } from 'react-native';
//
import { Constant } from '~/constants/index.constants';
//
export const LStyle = StyleSheet.create({
    textContent: {
        fontSize: 18,
        fontWeight: Platform.select({
            ios: '600',
            android: 'bold'
        })
    },
    textButton: {
        color: Constant.warnaUtama,
        fontSize: Platform.select({
            android: 20,
            ios: 18
        }),
    },
    footerContainer: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        height: '100%',
        paddingBottom: 5,
    },
    contentContainer: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        height: '50%',
        paddingBottom: 20,
    }
})