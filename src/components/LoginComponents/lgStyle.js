import { StyleSheet, Platform } from 'react-native';
//
import { Constant } from "~/constants/index.constants";
//
export const LgStyle = StyleSheet.create({
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
        paddingBottom: Platform.select({
            android: 10,
            ios: 0,
        }),
    },
    contentContainer: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 20,
    },
    ViewtextInputStyle: {
        width: '80%',
        flexDirection: 'row',
        marginBottom: 15,
        paddingHorizontal: Platform.select({
            ios: 10,
            android: 10
        }),
    },
    textInputStyle: {
        fontSize: Platform.select({
            android: 20,
            ios: 15
        }),
        color: Constant.warnaShadow,
        height: Platform.select({
            ios: 45,
        }),
    }
})