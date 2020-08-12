import React from 'react';
import { Text, View, Image, Platform } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
//
import { Constant } from '~/constants/index.constants';
import { SsShadow } from '~/components/SplashScreenComponents/ssShadow';
import { BcStyle, BcContainer } from '~/components/BerandaComponents/bcData';
import { SHIRO_ICON } from '~/assets/index.assets';
import { APP_PEMBUAT, APP_MOTTO } from '../../../config/app.config';
//
const Avatar = (
    <View style={[BcStyle.avatarCard, SsShadow]}>
        <Image
            style={{
                width: 40,
                height: 40,
                resizeMode: 'center',
            }}
            source={SHIRO_ICON}
        />
    </View>
);
//
const WelcomeText = (
    <View style={[BcStyle.cardWelNama, SsShadow]}>
        <Text style={[{
            fontSize: 25,
        }, BcStyle.textWelcome]}>Selamat Datang</Text>
        <Text style={[{
            fontSize: 20,
        }, BcStyle.textName]}>{APP_PEMBUAT}</Text>
    </View>
);
// 
const ComponentAtas = (
    <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    }}>
        <View>
            {WelcomeText}
        </View>
        <View>
            {Avatar}
        </View>
    </View>
);
const ComponentBawah = (
    <View style={{
        marginTop: 15,
        alignItems: 'center',
    }}>
        <Text style={[{
            fontSize: 20,
            fontWeight: Platform.select({
                ios: '600',
                android: 'bold',
            }),
            color: Constant.warnaPutih,
        }]}>{APP_MOTTO}</Text>
    </View>
)
//
const Bwc = (props) => (
    <LinearGradient
        start={{x: 0, y: 0}} 
        end={{x: 3, y: 0}}
        colors={[Constant.warnaSemiRed, Constant.warnaPutih]}
        style={[BcStyle.bgTop]}
    >
        <BcContainer
            bgColor="transparent"
            style={BcStyle.containerWelAv}
        >
            { ComponentAtas }
            { ComponentBawah}
        </BcContainer>
    </LinearGradient>
);

export default Bwc;
