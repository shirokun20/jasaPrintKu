import React, { useEffect } from 'react';
import { Text, View, SafeAreaView, StatusBar, Platform } from 'react-native';
// Components dan Style
import { APP_VERSION, APP_DEVELOPMENT } from '~/config/app.config';
import { SsContainer } from '~/components/SplashScreenComponents/ssContainer';
import { SsStyle } from '~/components/SplashScreenComponents/ssStyle';
import { SsLogo } from '~/components/SplashScreenComponents/ssLogo';
import SsAppName from '~/components/SplashScreenComponents/ssAppName';
import SsModeDevelopment from '~/components/SplashScreenComponents/ssModeDevelop';

const SplashScreenPages = (props) => {
    //
    useEffect(() => {
        setTimeout(() => {
            const { reset } = props.navigation;
            reset({
                routes: [{
                    name: 'LandingScreen'
                }]
            })
        }, 2000);
    }, [])
    // Logo
    const Logo = (
        <SsLogo />
    );
    // Content
    const Content = (
        <SsContainer style={{
            alignItems: 'center',
            justifyContent: 'center',
        }} height="90%">
            { Logo }
            <SsAppName />
        </SsContainer>
    );
    // Footer
    const Footer = (
        <View style={SsStyle.footerContainer}>
            <Text style={SsStyle.footerText}>Versi {APP_VERSION}</Text>
        </View>
    );

    return (
        <SsContainer>
            {/* Status Bar agar sedikit rapih untuk di android nya */}
            <StatusBar 
                barStyle={ APP_DEVELOPMENT ? 'light-content' : 'dark-content' } 
                translucent={true} 
                backgroundColor="transparent" 
            />
            {/* Safe Area Agar Terlihat Rapih (Untuk Ios karena kadang terlalu bawah) */}
            { APP_DEVELOPMENT ? <SsModeDevelopment /> : null }
            <SafeAreaView>
                { Content }
                { Footer }
            </SafeAreaView>
            {/* Penutup Safe Area */}
        </SsContainer>
    );
};

export default SplashScreenPages;
