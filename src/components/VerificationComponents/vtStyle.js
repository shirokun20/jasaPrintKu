import { StyleSheet, Platform, Dimensions } from 'react-native';
//
const { width, height } = Dimensions.get('window');
//
const VtStyle = StyleSheet.create({
    containerTextCode: {
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        width: Platform.select({
            ios: width > 405 ? '70%' : '85%',
            android: '70%'
        }),
        height: Platform.select({
            android: 135,
            ios: 156,
        }),
        borderRadius: 10,
      }
});

export {
    VtStyle,
}