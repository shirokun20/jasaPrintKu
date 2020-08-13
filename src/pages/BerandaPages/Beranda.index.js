import React from 'react';
import { Text, View, Dimensions, Platform, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
//
import { BcContainer, BcBarStyle, BcStyle } from '../../components/BerandaComponents/bcData';
import { Constant } from '../../constants/index.constants';
import { SsShadow } from '../../components/SplashScreenComponents/ssShadow';
import { SAMPEL_IKLAN_JPEG } from '../../assets/index.assets';
import Bwc from './ChildComponents/Beranda.welcome.cc';
//
const { height, width } = Dimensions.get('screen');
//
const heightTampilanBesar = parseInt(height * (29 / 100));
const heightSisaPart1 = height - heightTampilanBesar;
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
    const HeaderContentBawah = (
        <View style={{
            width: '95%',
            alignSelf: 'center',
            marginBottom: 5,
        }}>
            <Text>8 TRANSAKSI TERAKHIR</Text>
        </View>
    );
    // Sample Content = 
    const sampleContent = (
        <View style={[{
            marginTop: 1,
            marginBottom: 10,
            width: '99%',
            height: 95,
            borderRadius: 3,
            backgroundColor: Constant.warnaPutih,
        }, SsShadow]} />
    );
    //
    const ContentBawahView = (
        <View style={{
            width: '95%',
            height: Platform.select({
                ios: '82%',
                android: '85%',
            }),
            alignSelf: 'center',
        }}>
            <ScrollView style={{
                width: '100%',
                height: '100%',
            }} contentContainerStyle={{
                alignItems: 'center',
            }} showsVerticalScrollIndicator={false}>
                { sampleContent }
                { sampleContent }
                { sampleContent }
                { sampleContent }
                { sampleContent }
                { sampleContent }
                { sampleContent }
                { sampleContent }
            </ScrollView>
        </View>
    );
    //
    const ContentBawah = (
        <BcContainer
            style={[BcStyle.containerBawah]}
        >
            { HeaderContentBawah }
            { ContentBawahView }
        </BcContainer>
    );
    // Content 
    const Content = (
        <BcContainer style={{
            height: height
        }}>
            {ContentAtas}
            {ContentBawah}
        </BcContainer>
    );

    return (
        <BcContainer style={{

        }}>
            {/* Status Bar Custom :D */}
            <BcBarStyle bStyle="light-content" />
            {/* Content */}
            {Content}
        </BcContainer>
    );
};

export default BerandaScreen;
