import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { Text, View, Image, Platform, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconAnt from 'react-native-vector-icons/AntDesign';
//
import { Constant } from '../../constants/index.constants';
import { BcStyle, BcContainer } from '~/components/BerandaComponents/bcData';
import { SsShadow } from '../../components/SplashScreenComponents/ssShadow';
import { SHIRO_ICON } from '~/assets/index.assets';
import { APP_VERSION, APP_PEMBUAT } from '../../config/app.config';
//
const AccountScreen = (props) => {
    //
    const HeaderAvatar = (
        <View style={[BcStyle.avatarCard, SsShadow, Style.headerAvatar]}>
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
    const HeaderText = (
        <View style={{
            justifyContent: 'flex-start',
            width: '70%'
        }}>
            <Text style={[{
                color: Constant.warnaPutih,
                fontWeight: Platform.select({
                    ios: '600',
                    android: 'bold'
                }),
                fontSize: 20,
            }]}>{APP_PEMBUAT}</Text>
            <Text style={{
                color: Constant.warnaPutih,
                fontSize: 15,
            }}>shirokun20</Text>
        </View>
    );
    //
    const HeaderIconSignOut = (
        <TouchableOpacity style={[Style.headerIcon, SsShadow]} activeOpacity={0.8}>
            <Icon
                size={20}
                name="sign-out"
            />
        </TouchableOpacity>
    );
    //
    const Header = (
        <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 3, y: 0 }}
            colors={[Constant.warnaSemiRed, Constant.warnaPutih]}
            style={[Style.headerCardParent, SsShadow]}>
            {HeaderAvatar}
            {HeaderText}
            {HeaderIconSignOut}
        </LinearGradient>
    );
    //
    const HeaderContent = (value) => (
        <View style={Style.headerCard}>
            <Text style={{
                fontSize: 11
            }}>{value}</Text>
        </View>
    );
    //
    const ContentKhusus = ({
        leftText = '',
        rightText = '',
        allowRight = true,
    }) => {
        return (
            <TouchableOpacity activeOpacity={0.8}>
                <View style={[Style.cardContent, {
                    paddingRight: allowRight ? 5 : 10,
                }]}>
                    <View style={Style.cardContentContainerLeft}>
                        <Text style={Style.cardText}>{leftText}</Text>
                    </View>
                    <View style={Style.cardContentContainerRight}>
                        <Text style={[{
                            marginRight: allowRight ? 5 : 0,
                            color: Constant.warnaBiru,
                        }, Style.cardText]}>{rightText}</Text>
                        {
                            allowRight ? (
                                <IconAnt
                                    name="right"
                                    size={20}
                                    color={Constant.warnaSemiGrey}
                                />
                            ) : null
                        }
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
    //
    const Content = (
        <View>
            <ContentKhusus
                leftText="Transaksi"
                rightText="10"
            />
            {HeaderContent('PENGATURAN APLIKASI')}
            <ContentKhusus
                leftText="Pengaturan Profil"
            />
            <ContentKhusus
                leftText="Versi App"
                rightText={APP_VERSION}
                allowRight={false}
            />
            <ContentKhusus
                leftText="Keluar"
                rightText=""
                allowRight={false}
            />
            {HeaderContent('INFORMASI UMUM')}
            <ContentKhusus
                leftText="Tutorial"
                rightText=""
                allowRight={true}
            />
            <ContentKhusus
                leftText="Pusat Bantuan"
                rightText=""
                allowRight={true}
            />
            <ContentKhusus
                leftText="Syarat & Ketentuan"
                rightText=""
                allowRight={true}
            />
            <ContentKhusus
                leftText="Kebijakan Privasi"
                rightText=""
                allowRight={true}
            />
            <View style={{
                padding: 5,
                alignItems: 'center',
            }}>
                <Text style={{
                    fontSize: 11,
                    color: Constant.warnaSemiRed,
                }}>Dibuat oleh {APP_PEMBUAT}</Text>
            </View>
        </View>
    );
    return (
        <View style={{
            width: '100%',
            height: '100%',
            backgroundColor: Constant.warnaPrimaryButton,
        }}>
            {Header}
            <ScrollView style={{
                width: '100%',
            }}>
                {Content}
            </ScrollView>
        </View>
    )
};

const Style = StyleSheet.create({
    cardContent: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: Constant.warnaPutih,
        paddingLeft: 10,
        paddingVertical: 10,
        borderBottomWidth: 1.5,
        borderBottomColor: Constant.warnaSemiGrey,
    },
    cardContentContainerLeft: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 30,
    },
    cardContentContainerRight: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        flexDirection: 'row',
        height: 30,
    },
    cardText: {
        fontSize: Platform.select({
            ios: 15,
            android: 18,
        }),
    },
    headerCard: {
        backgroundColor: Constant.warnaPrimaryButton,
        width: '100%',
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderBottomWidth: 1.5,
        borderBottomColor: Constant.warnaSemiGrey,
    },
    headerCardParent: {
        paddingTop: 40,
        paddingBottom: 10,
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerIcon: {
        width: 40,
        height: 40,
        backgroundColor: Constant.warnaPutih,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 40,
    },
    headerAvatar: {
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center'
    },
})

export default AccountScreen;
