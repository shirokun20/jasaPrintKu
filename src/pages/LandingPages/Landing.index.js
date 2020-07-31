import React, {  useState, useCallback } from 'react';
import { Text, View, SafeAreaView, BackHandler, ToastAndroid, Vibration, Platform } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
//
import { Constant } from '~/constants/index.constants';
import { APP_DEVELOPMENT, APP_PEMBUAT } from '~/config/app.config';
import { LcContainer, LcBarStyle } from '~/components/LandingComponents/lcData';
import { SsLogo } from '~/components/SplashScreenComponents/ssLogo';
import { LStyle } from '~/components/LandingComponents/lcStyle';
import SsAppName from '~/components/SplashScreenComponents/ssAppName';
import SsModeDevelopment from '~/components/SplashScreenComponents/ssModeDevelop';
import LcButton from '~/components/LandingComponents/lcButton';

const LandingPages = ({ navigation }) => {
    // Agar tau udah klik berapa kali (backhardware)
    const [isRoute, setIsRoute] = useState(true);
    //
    const TIME_MS = 1000;
    // console.log(props);
    useFocusEffect(useCallback(() => {
        // Ketika sudah klik 2x maka akan exit
        const backAction = () => {
            BackHandler.exitApp();
            return true;
        };
        // Check Udah klik berapa kali!
        const routeSet = () => {
            if (isRoute === false) {
                backAction();
            } else {
                // Vibration, baru bisa di android, ios next time
                if (Platform.OS == 'android') Vibration.vibrate(TIME_MS * 0.5);
                // Muncul Toast ketika sudah 1xs\
                ToastAndroid.show('Tekan lagi untuk keluar', ToastAndroid.SHORT);
                setIsRoute(!isRoute);
            }
            return true;
        }
        // ini yang menyusahkan umat :D
        const back = BackHandler.addEventListener(
            "hardwareBackPress",
            routeSet 
        );
        // Remove listener di hooks
        return () => back.remove();
    }), [isRoute]);
    // Content
    const Content = (
        <LcContainer style={LStyle.contentContainer}>
            <View style={{
                marginBottom: 15
            }}>
                <Text style={LStyle.textContent}>SELAMAT DATANG</Text>
            </View>
            <SsLogo ukuran={150} />
            <SsAppName />
        </LcContainer>
    );
    //
    const Pembuat = (
        <Text style={[LStyle.textContent, {
            color: Constant.warnaSemiRed,
        }]}>{APP_PEMBUAT}</Text>
    )
    // Footer
    const Footer = (
        <SafeAreaView style={{
            height: '50%',
        }}>
            <LcContainer style={LStyle.footerContainer}>
                {/* Button Login */}
                <LcButton
                    text="MASUK!"
                    callback={(e) => {
                        setIsRoute(true);
                        navigation.navigate('LoginScreen', {
                            toLanding: true,
                        });
                    }}
                />
                {/* Button Daftar */}
                <LcButton
                    text="DAFTAR"
                    callback={(e) => {

                    }}
                    bgColor={Constant.warnaShadow}
                />
                {/* Footer Text */}
                <Text style={LStyle.textContent}>Dibuat Oleh {Pembuat}</Text>
            </LcContainer>
        </SafeAreaView>
    )

    return (
        <LcContainer>
            {/* Bar Style */}
            <LcBarStyle bStyle={APP_DEVELOPMENT ? 'light-content' : 'dark-content'} />
            {/* Jika Dalam Mode Development */}
            {APP_DEVELOPMENT ? <SsModeDevelopment /> : null}
            {/* Container */}
            {Content}
            {/* Container */}
            {Footer}
        </LcContainer>
    )
};

export default LandingPages;