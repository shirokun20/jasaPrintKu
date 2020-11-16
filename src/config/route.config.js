import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators  } from '@react-navigation/stack';
// ScreenPembuka
import {
    SplashScreenPages,
    LandingPages,
} from '~/pages';
// Screen Login And Friend
import {
    LoginPages,
    RegisterPages,
    VerificationPages,
} from '~/pages';
// Halaman Utama/beranda
import {
    HalamanUtamaPages,
    ProdukPages,
    DetailProdukPages,
    PesanJasaPages,
    UploadFormPages,
    PesanJasaWaitingPages,
    DetailPesanJasaPages,
} from '~/pages';
import { Constant } from '../constants/index.constants';
//
const Stack = createStackNavigator();
// Screen Anak Buah login dan register dan antek2 nay :D
const ScreenLoginAndFriend = (
    <>
        <Stack.Screen
            name="LoginScreen"
            component={LoginPages}
            options={{
                headerShown: false,
            }}
        />
        <Stack.Screen
            name="RegisterScreen"
            component={RegisterPages}
            options={{
                headerShown: false,
            }}
        />
        <Stack.Screen
            name="VerificationScreen"
            component={VerificationPages}
            options={{
                headerShown: false,
            }}
        />
    </>
);
// Screen Pembuka
const ScreenPembuka = (
    <>
        <Stack.Screen
            name="SplashScreen"
            component={SplashScreenPages}
            options={{
                headerShown: false,
            }}
        />
        <Stack.Screen
            name="LandingScreen"
            component={LandingPages}
            options={{
                headerShown: false,
            }}
        />
    </>
);
// screen Halaman Utama
const ScreenBerandaDll = (
    <>
        <Stack.Screen
            name="HalamanUtamaScreen"
            component={HalamanUtamaPages}
            options={{
                headerShown: false,
            }}
        />
        <Stack.Screen
            name="ProdukScreen"
            component={ProdukPages}
            options={{
                headerShown: false,
                headerBackTitle: false,
                headerBackTitleVisible: false,
            }}
        />
        <Stack.Screen
            name="DetailProdukScreen"
            component={DetailProdukPages}
            options={{
                headerBackTitle: false,
                headerBackTitleVisible: false,
            }}
        />
        <Stack.Screen
            name="PesanJasaScreen"
            component={PesanJasaPages}
            options={{
                headerBackTitle: false,
                headerBackTitleVisible: false,
                headerTitleAlign: 'center',
                headerTitle: 'Pesan Jasa Print',
                headerTintColor: Constant.warnaPutih,
                headerTransparent: true,
            }}
        />
        <Stack.Screen
            name="UploadFormScreen"
            component={UploadFormPages}
            options={{
                headerBackTitle: false,
                headerBackTitleVisible: false,
                headerTitleAlign: 'center',
                headerTitle: 'Upload File',
                headerTintColor: Constant.warnaPutih,
                headerTransparent: true,
            }}
        />
        <Stack.Screen
            name="PesanJasaWaitingScreen"
            component={PesanJasaWaitingPages}
            options={{
                headerLeft: null,
                headerBackTitle: false,
                headerBackTitleVisible: false,
                headerTitleAlign: 'center',
                headerTitle: '',
                headerTintColor: Constant.warnaPutih,
                headerTransparent: true,
                gestureEnabled: false,
                cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
            }}
        />
        <Stack.Screen
            name="DetailPesanJasaPages"
            component={DetailPesanJasaPages}
            options={{
                headerBackTitle: false,
                headerBackTitleVisible: false,
                headerTitleAlign: 'center',
                headerTitle: `Pesanan No. 20998`,
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
                headerTintColor: Constant.warnaPutih,
                headerTransparent: true,
            }}
        />
    </>
);
// 
const NavigatorStack = (
    <Stack.Navigator initialRouteName="SplashScreen">
        {ScreenPembuka}
        {ScreenLoginAndFriend}
        {ScreenBerandaDll}
    </Stack.Navigator>
)
//
const Route = () => {
    return (
        <NavigationContainer>
            { NavigatorStack}
        </NavigationContainer>
    )
}

export default Route;