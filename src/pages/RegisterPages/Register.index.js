import React, { useState, useEffect } from 'react';
import {
    KeyboardAvoidingView,
    Platform,
    TouchableOpacity,
    Keyboard,
    SafeAreaView,
    View,
    Text,
    Dimensions,
} from 'react-native';
//
import { APP_DEVELOPMENT } from '~/config/app.config';
import { RgContainer, RgRadioCheck } from '~/components/RegisterComponents/rgData';
import { LgBarStyle } from '~/components/LoginComponents/lgData';
import { RgStyle } from '~/components/RegisterComponents/rgStyle';
import { LgStyle } from '~/components/LoginComponents/lgStyle';
import { LStyle } from '~/components/LandingComponents/lcStyle';
import { SsLogo } from '~/components/SplashScreenComponents/ssLogo';
import { SsShadow } from '~/components/SplashScreenComponents/ssShadow';
import { Constant } from '~/constants/index.constants';
import { ModalLoading } from '~/components/GlobalComponents/ModalLoading';
import SsAppName, { style } from '~/components/SplashScreenComponents/ssAppName';
import SsModeDevelopment from '~/components/SplashScreenComponents/ssModeDevelop';
import LgTextInput from '~/components/LoginComponents/lgTextInput';
import LcButton from '~/components/LandingComponents/lcButton';
//
const { width, height } = Dimensions.get('window');
//
const RegisterScreen = (props) => {
    // state
    const [inputFocus, setInputFocus] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nama, setNama] = useState('');
    const [noTelp, setNoTelp] = useState('');
    const [jk, setJk] = useState('lk');
    const [loading, setLoading] = useState(false);
    //
    const { navigation, route } = props;
    const { backLogin = false, } = route.params;
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
    //
    const Content = (
        <RgContainer style={[LgStyle.contentContainer, {
            flex: inputFocus ? Platform.select({
                ios: width > 405 ? 1 : 0.7,
                android: 1.8
            }) : width > 405 ? 0.8 : 0.7,
        }]}>
            <SsLogo ukuran={width > 405 ? 150 : 120} />
            <SsAppName />
        </RgContainer>
    );
    //
    const LoginKlik = (
        <TouchableOpacity activeOpacity={0.2} style={[style.cardView, SsShadow]} onPress={() => {
            if (backLogin) {
                navigation.goBack();
            } else {
                navigation.navigate('LoginScreen', {
                    backRegister: true,
                });
            }
        }}>
            <Text style={[LStyle.textContent, {
                color: Constant.warnaSemiRed,
            }]}>MASUK</Text>
        </TouchableOpacity>
    );
    // Radio Button
    const JkRadio = (value, text, jk) => (
        <View style={RgStyle.containerRadio}>
            <View>
                <RgRadioCheck 
                    isActive={jk == value ? true : false}
                    callback={() => {
                        if (jk !== value) {
                            setJk(value);
                        }
                    }}
                />
            </View>
            <View style={{
                marginLeft: 5
            }}>
                <Text style={RgStyle.textRadio}>{ text }</Text>
            </View>
        </View>
    );
    // Container Jenis Kelamin
    const JkContainer = (
        <View style={{
            alignSelf: 'center',
            width: '50%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 15,
        }}>
            { JkRadio('lk', 'Laki-laki', jk) }
            { JkRadio('pr', 'Perempuan', jk) }
        </View>
    );
    //
    const TextBtn = (text = '', callback) => {
        return (
            <TouchableOpacity onPress={(e) => callback(e)} activeOpacity={0.6}>
                <Text style={[{
                    fontWeight: Platform.select({
                        ios: '600',
                        android: 'bold',
                    }),
                }, RgStyle.fontIos]}>{ text }</Text>
            </TouchableOpacity>
        )
    }
    //
    const ContentAturan = (
        <View style={{
            alignItems: 'center',
            marginVertical: Platform.select({
                ios: width > 405 ? 10 : 5,
                android: 10,
            }),
        }}>
            <Text style={RgStyle.fontIos}>Dengan membuat akun, anda telah menyetujui</Text>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                {TextBtn('Ketentuan layanan', () => {})}
                <Text style={RgStyle.fontIos}> dan </Text>
                {TextBtn('Kebijakan privasi', () => {})}
                <Text style={RgStyle.fontIos}> kami</Text>
            </View>
        </View>
    );
    //
    const Footer = (
        <SafeAreaView style={{
            flex: 1,
        }}>
            <RgContainer style={LgStyle.footerContainer}>
                {/* Form Nama */}
                <LgTextInput
                    placeholder="Nama Lengkap"
                    data={nama}
                    setData={(text) => setNama(text)}
                    setFocus={(output) => setInputFocus(output)}
                />
                {/* Form Email */}
                <LgTextInput
                    keyboardType="email-address"
                    placeholder="Email"
                    data={email}
                    setData={(text) => setEmail(text)}
                    setFocus={(output) => setInputFocus(output)}
                />
                 {/* No Telp*/}
                 <LgTextInput
                    keyboardType="phone-pad"
                    placeholder="No Handphone"
                    data={noTelp}
                    setData={(text) => setNoTelp(text)}
                    setFocus={(output) => setInputFocus(output)}
                />
                {/* Form Password */}
                <LgTextInput
                    isPassword={true}
                    secure={true}
                    placeholder="Password"
                    data={password}
                    setData={(text) => setPassword(text)}
                    setFocus={(output) => setInputFocus(output)}
                />
                {/* Jenis Kelamin */}
                {!inputFocus ? JkContainer : null}
                {/* Button MASUK */}
                {!inputFocus ? <LcButton
                    text="DAFTAR"
                    callback={(e) => {
                        setLoading(true);
                        setTimeout(() => {
                            setLoading(false);
                            navigation.navigate('VerificationScreen');
                        }, 2000);
                    }}
                /> : null}
                { !inputFocus ? ContentAturan : null}
                {/* Daftar Klik */}
                {!inputFocus ? <View style={[{
                    alignItems: 'center',
                    flexDirection: 'row',
                    marginTop: Platform.select({
                        ios: width > 405 ? 10 : 5,
                    }),
                    marginBottom: Platform.select({
                        ios: width > 405 ? 10 : 10,
                    })
                }]}>
                    <Text style={LStyle.textContent}>Sudah punya akun ? </Text>
                    {LoginKlik}
                </View> : null}
            </RgContainer>
        </SafeAreaView>
    );
    //
    const modalComponent = (
        <View>
            <ModalLoading 
                isLoading={loading}
            />
        </View>
    )
    //
    return (
        <RgContainer>
            <LgBarStyle bStyle={Platform.select({
                android: APP_DEVELOPMENT && !inputFocus ? 'light-content' : 'dark-content',
                ios: APP_DEVELOPMENT ? 'light-content' : 'dark-content'
            })} />
            {APP_DEVELOPMENT ? <SsModeDevelopment /> : null}
            <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : null}
                style={{
                    width: '100%',
                    height: '100%',
                }}
                enabled={Platform.select({
                    android: true,
                    ios: true,
                })}
            >
                <TouchableOpacity onPress={() => {
                    setInputFocus(false);
                    Keyboard.dismiss();
                }} style={{
                    width: '100%',
                    height: '100%',
                }} activeOpacity={1}>
                    {Content}
                    {Footer}
                </TouchableOpacity>
            </KeyboardAvoidingView>
            {modalComponent}
        </RgContainer>
    );
}

export default RegisterScreen;
