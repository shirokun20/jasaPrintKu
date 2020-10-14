import React from 'react';
import { Text, View, Dimensions, Platform, TouchableOpacity, TouchableHighlight, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
//
import { BcContainer, BcBarStyle, BcStyle } from '../../components/BerandaComponents/bcData';
import { Constant } from '../../constants/index.constants';
import { SsShadow } from '../../components/SplashScreenComponents/ssShadow';
import Bwc from './ChildComponents/Beranda.welcome.cc';
//
const { height, width } = Dimensions.get('screen');
//
const heightTampilanBesar = parseInt(height * (29 / 100));
// const heightSisaPart1 = height - heightTampilanBesar;
const BerandaScreen = (props) => {
    //
    const { navigate } = props.navigation;
    //
    const dataContent = [{
        name: 'Pesan Jasa',
        icon: 'shopping-cart',
        routeKe: null,
        pager: 0,
    }, {
        name: 'Riwayat Order',
        icon: 'history',
        routeKe: null,
        pager: 0,
    }, {
        name: 'Notifikasi',
        icon: 'envelope-o',
        routeKe: null,
        pager: 10,
    }, 
    // {
    //     name: 'Produk',
    //     icon: 'print',
    //     routeKe: 'ProdukScreen',
    // }
];
    //
    const PanelTengahContent = dataContent.map((e, index) => (
        <TouchableOpacity key={index} style={{
            alignItems: 'center',
            flex: 1,
        }} onPress={() => {
            if (e.routeKe !== null) {
                navigate(e.routeKe);
            }
        }} activeOpacity={0.8}>
            <View style={{
                marginBottom: 5,
            }}>
                <Icon
                    name={e.icon}
                    size={30}
                    color={Constant.warnaHitam}
                />
                {
                    e.pager > 0 ? (
                        <View style={{
                            position: 'absolute',
                            right: -5,
                            top: -3,
                            width: 18,
                            height: 18,
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: Constant.warnaSemiRed,
                            borderRadius: 18,
                        }}>
                            <Text style={{
                                color: Constant.warnaPutih,
                                fontWeight: 'bold',
                                fontSize: 12,
                            }}>{e.pager}</Text>
                        </View>
                    ) : null
                }
            </View>
            <Text style={{
                color: Constant.warnaHitam,
                fontSize: 12,
                textAlign: 'center',
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
            <Text>8 ORDER AKTIF</Text>
        </View>
    );
    // Sample Content = 
    const sampleContent = (
        <TouchableHighlight style={[{
            marginTop: 1,
            marginBottom: 10,
            width: '99%',
            borderRadius: 5,
            backgroundColor: Constant.warnaPutih,
        }, SsShadow]} underlayColor={Constant.warnaSemiPutih} onPress={() => { }}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 5,
                paddingVertical: 5,
            }}>
                <View>
                    <View style={{
                        marginBottom: 20,
                    }}>
                        <Text style={{
                            fontSize: 20,
                            color: Constant.warnaAlertError,
                            fontWeight: Platform.select({
                                android: 'bold',
                                ios: '600',
                            })
                        }}>#INV0001</Text>
                    </View>
                    <View style={{
                        marginTop: 5,
                    }}>
                        <View>
                            <Text style={{
                                fontSize: 15
                            }}>Rp. 10.000</Text>
                        </View>
                        <View>
                            <Text style={{
                                fontSize: 15,
                                color: Constant.warnaAlertSuccess,
                                fontWeight: 'bold',
                            }}>On Process</Text>
                        </View>
                    </View>
                </View>
                <View style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <View style={[{
                        backgroundColor: Constant.warnaSemiRed,
                        paddingVertical: 10,
                        paddingHorizontal: 15,
                        alignItems: 'center',
                        borderRadius: 5,
                        marginBottom: 2,
                    }, SsShadow]}>
                        <Text style={{
                            color: Constant.warnaPutih,
                            fontSize: 20,
                            fontWeight: Platform.select({
                                android: 'bold',
                                ios: '600',
                            })
                        }}>27</Text>
                        <Text style={{
                            color: Constant.warnaPutih,
                            fontWeight: Platform.select({
                                android: 'bold',
                                ios: '600',
                            })
                        }}>Sep</Text>
                    </View>
                    <View style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <Text style={{
                            fontWeight: Platform.select({
                                android: 'bold',
                                ios: '600',
                            }),
                            fontSize: 18,
                        }}>2020</Text>
                    </View>
                </View>
            </View>
        </TouchableHighlight>
    );
    //
    const ContentBawahView = (
        <View style={{
            width: '95%',
            height: '100%',
            alignSelf: 'center',
        }}>
            <ScrollView style={{
                width: '100%',
                height: '100%',
            }} contentContainerStyle={{
                alignItems: 'center',
            }} showsVerticalScrollIndicator={false}>
                {sampleContent}
                {sampleContent}
                {sampleContent}
                {sampleContent}
                {sampleContent}
                {sampleContent}
                {sampleContent}
                {sampleContent}
                <View 
                    style={{
                        height: 100,
                    }}
                />
            </ScrollView>
        </View>
    );
    //
    const ContentBawah = (
        <BcContainer
            style={[BcStyle.containerBawah]}
        >
            {HeaderContentBawah}
            {ContentBawahView}
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
