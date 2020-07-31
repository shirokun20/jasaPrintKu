import { StyleSheet, Platform } from 'react-native';

export const SsStyle = StyleSheet.create({
    footerContainer: {
        height: '10%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    footerText: {
        marginBottom: Platform.select({
            ios: 0,
            android: 5,
        }),
        fontSize: 15
    }
})