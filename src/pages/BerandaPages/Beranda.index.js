import React from 'react';
import { Text, View, Dimensions, Platform, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
//
import { BcContainer, BcBarStyle, BcStyle } from '../../components/BerandaComponents/bcData';
import { Constant } from '../../constants/index.constants';
import { SsShadow } from '../../components/SplashScreenComponents/ssShadow';
import Bwc from './ChildComponents/Beranda.welcome.cc';
//
const { height, width } = Dimensions.get('screen');
//
const heightTampilanBesar = (height * (29 / 100));
const heightSisaPart1 = height - heightTampilanBesar;
// const heightSisaPart2 = height - 200;
const BerandaScreen = (props) => {
    //
    const dataContent = [{
        name: 'Pesan',
        icon: 'shopping-cart',
    }, {
        name: 'Riwayat',
        icon: 'history'
    }, {
        name: 'Produk',
        icon: 'print'
    }];
    //
    const PanelTengahContent = dataContent.map((e, index) => (
        <TouchableOpacity key={index} style={{
            alignItems: 'center',
            flex: 1,
        }} activeOpacity={0.5}>
            <View style={{
                marginBottom: 5,
            }}>
                <Icon
                    name={e.icon}
                    size={30}
                    color={Constant.warnaHitam}
                />
            </View>
            <Text style={{
                color: Constant.warnaHitam,
            }}>{e.name.toUpperCase()}</Text>
        </TouchableOpacity>
    ));
    //
    const PanelTengah = (
        <BcContainer style={[BcStyle.cardTengah, SsShadow, {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        }]}>
            {PanelTengahContent}
        </BcContainer>
    );
    //
    const ContentAtas = (
        <View style={{
            zIndex: 1,
        }}>
            <Bwc />
            {PanelTengah}
        </View>
    );
    //
    const ContentBawah = (
        <BcContainer
            style={[{
                width: '100%',
                height: Platform.select({
                    ios: heightSisaPart1,
                    android: heightSisaPart1,
                }),
                zIndex: 0,
            }]}
        >
        </BcContainer>
    );
    // Content 
    const Content = (
        <BcContainer style={{
            // justifyContent: 'space-between',
        }}>
            {ContentAtas}
            {ContentBawah}
        </BcContainer>
    );

    return (
        <BcContainer>
            {/* Status Bar Custom :D */}
            <BcBarStyle bStyle="light-content" />
            {/* Content */}
            {Content}
        </BcContainer>
    );
};

export default BerandaScreen;
