import React, { useState, useEffect } from 'react';
import { SafeAreaView, KeyboardAvoidingView, Platform, TouchableOpacity, Keyboard, Text, View } from 'react-native';
//
import { APP_DEVELOPMENT } from '~/config/app.config';
import { LgContainer, LgBarStyle } from '~/components/LoginComponents/lgData';
import { SsLogo } from '~/components/SplashScreenComponents/ssLogo';
import { LStyle } from '~/components/LandingComponents/lcStyle';
import { Constant } from '~/constants/index.constants';
import { LgStyle } from '~/components/LoginComponents/lgStyle';
import { SsShadow } from '~/components/SplashScreenComponents/ssShadow';
import SsAppName, { style } from '~/components/SplashScreenComponents/ssAppName';
import SsModeDevelopment from '~/components/SplashScreenComponents/ssModeDevelop';
import LgTextInput from '~/components/LoginComponents/lgTextInput';
import LcButton from '~/components/LandingComponents/lcButton';

const LoginScreen = (props) => {
    // set ketika keyboard muncul
    const [inputFocus, setInputFocus] = useState(false);
    // sengaja dipisah biar yang awam faham
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // Props 
    const { navigation, route } = props;
    const { backRegister = false } = route.params;
    // ComponendDidMount versi hooks
    useEffect(() => {
        // Check Keyboard Focus
        const setKeyboardFalse = () => {
            setInputFocus(false);
            return true;
        }
        // ini yang menyusahkan umat :D
        const back = Keyboard.addListener(
            "keyboardDidHide",
            setKeyboardFalse 
        );
        // Remove listener di hooks
        return () => back.remove();
    }, [inputFocus]);
    // Content
    const Content = (
        <LgContainer style={[LgStyle.contentContainer, {
            flex: inputFocus ? Platform.select({
                ios: 2,
                android: 3
            }) : 1,
        }]}>
            <SsLogo ukuran={150} />
            <SsAppName />
        </LgContainer>
    );
    //
    const DaftarKlik = (
        <TouchableOpacity activeOpacity={0.2} style={[style.cardView, SsShadow]} onPress={() => {
            if (backRegister) {
                navigation.goBack();
            } else {
                navigation.navigate('RegisterScreen', {
                    backLogin: true,
                });
            }
        }}>
            <Text style={[LStyle.textContent, {
            color: Constant.warnaSemiRed,
        }]}>DAFTAR</Text>
        </TouchableOpacity>
    );
    //
    const Footer = (
        <SafeAreaView style={{
            flex: 1,
        }}>
            <LgContainer style={LgStyle.footerContainer}>
                {/* Form Email */}
                <LgTextInput
                    keyboardType="email-address"
                    placeholder="Email"
                    data={email}
                    setData={(text) => {
                        setEmail(text);
                    }}
                    setFocus={(output) => setInputFocus(output)}
                />
                {/* Form Password */}
                <LgTextInput
                    isPassword={true} 
                    secure={true}
                    placeholder="Password"
                    data={password}
                    setData={(text) => {
                        setPassword(text);
                    }}
                    setFocus={(output) => setInputFocus(output)}
                />
                {/* Button MASUK */}
                { !inputFocus ? <LcButton 
                    text="MASUK!"
                    callback={(e) => {
                        navigation.reset({
                            index: 0,
                            routes: [{
                                name: 'HalamanUtamaScreen',
                            }]
                        });
                    }}
                /> : null }
                {/* Daftar Klik */}
                 { !inputFocus ? <View style={[{
                    alignItems: 'center',
                    flexDirection: 'row',
                    marginTop: 10,
                    marginBottom: 10
                }]}>
                    <Text style={LStyle.textContent}>Belum punya akun ? </Text>
                    {DaftarKlik}
                </View> : null }
            </LgContainer>
        </SafeAreaView>
    )
    //
    return (
        <LgContainer>
            {/* Bar Style */}
            <LgBarStyle bStyle={Platform.select({
                android: APP_DEVELOPMENT && !inputFocus ? 'light-content' : 'dark-content',
                ios: APP_DEVELOPMENT ? 'light-content' : 'dark-content'
            })} />
            {/* Jika Dalam Mode Development */}
            {APP_DEVELOPMENT ? <SsModeDevelopment /> : null}
            {/* Khusus ios kayanya :D masih ujicoba */}
            <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : null }
                style={{
                    width: '100%',
                    height: '100%',
                }}
                enabled={Platform.select({
                    android: true,
                    ios: true,
                })}
            >
                {/* Ketika klik sembarang di layar */}
                <TouchableOpacity onPress={() => {
                    setInputFocus(false);
                    Keyboard.dismiss();
                }} style={{
                    width: '100%',
                    height: '100%',
                }} activeOpacity={1}>
                    { Content }
                    { Footer }
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </LgContainer>
    )
};

export default LoginScreen;
