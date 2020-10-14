import React from 'react';
import { Text, View, Platform, TouchableOpacity, TextInput, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { Constant } from '../../constants/index.constants';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { SsShadow } from '../../components/SplashScreenComponents/ssShadow';
import { BcBarStyle } from '../../components/BerandaComponents/bcData';
import CPComponent from '../../components/ProdukComponents/CPComponent';

const ProdukScreen = ({
    navigation,
    route,
}) => {

    const BackAndCartHeader = (
        <View style={Style.containerParentHeader}>
            <TouchableOpacity style={Style.containerBackButton} activeOpacity={0.6} onPress={() => navigation.goBack()}>
                <Icon
                    name="keyboard-arrow-left"
                    size={30}
                    style={{
                        alignSelf: 'center',
                    }}
                />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.6}>
                <View>
                    <Icon
                        name="shopping-cart"
                        size={30}
                        style={{
                            alignSelf: 'center',
                        }}
                    />
                </View>
                <View style={[Style.containerBadge, SsShadow]}>
                    <Text style={Style.textBadge}>
                        1
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );

    const HeaderSearch = (
        <View style={[Style.containerHeaderSearch, SsShadow]}>
            <Icon
                name="search"
                size={28}
                style={Style.iconHeaderSearch}
            />
            <TextInput
                placeholder="Cari produk"
                placeholderTextColor={Constant.warnaGreyLight}
                style={Style.inputTextStyle}
            />
        </View>
    );  

    const Header = (
        <View style={[Style.containerHeader, SsShadow]}>
            {BackAndCartHeader}
            {HeaderSearch}
        </View>
    );
    //
    const Content = (
        <View>
            <View style={Style.containerContentHeader}>
                <Text style={Style.textHeaderContent}>Produk Kami</Text>
            </View>
            <SafeAreaView style={{
                height: '86.5%',
            }}>
                <ScrollView>
                    <View style={Style.containerContent}>
                        <CPComponent 
                            onPress={() => {
                                navigation.navigate('DetailProdukScreen');
                            }}
                        />
                        <CPComponent />
                        <CPComponent />
                        <CPComponent />
                        <CPComponent />
                        <CPComponent />
                        <CPComponent />
                        <CPComponent />
                        <CPComponent />
                        <CPComponent />
                        <CPComponent />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    );
    //
    const Footer = (
        <TouchableOpacity style={[Style.containerFooter, SsShadow]} activeOpacity={0.9}>
            <View style={Style.containerParentFooter}>
                <View style={{
                    flex: 1,
                }}>
                    <Text style={Style.textFooter1} numberOfLines={1}>1 Item</Text>
                    <Text style={{
                        color: Constant.warnaPutih,
                    }} numberOfLines={1}>Yang ditambahkan ke pembelian!</Text>
                </View>
                <View>
                    <View>
                        <Text style={Style.textFooter1}>10.000 IDR</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )

    return (
        <View style={{
            backgroundColor: Constant.warnaPutih,
            flex: 1,
        }}>
            <BcBarStyle bStyle="dark-content" />
            {Header}
            {Content}
            {Footer}
        </View>
    );
};

const Style = StyleSheet.create({
    containerContentHeader: {
        paddingVertical: 10,
        paddingHorizontal: 8,
    },
    textHeaderContent: {
        fontSize: 15,
        color: Constant.warnaHitam,
    },
    containerContent: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingHorizontal: 8,
    },
    containerHeader: {
        backgroundColor: Constant.warnaPutih,
        width: '100%',
        paddingTop: Platform.select({
            ios: '12%',
            android: 40,
        }),
        paddingBottom: 15,
    },
    containerHeaderSearch: {
        marginTop: 10,
        marginHorizontal: 5,
        backgroundColor: Constant.warnaSemiGrey,
        paddingHorizontal: 8,
        height: 40,
        borderRadius: 40,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
    },
    iconHeaderSearch: {
        padding: 0,
        marginRight: 5,
    },
    inputTextStyle: {
        width: '90%',
        height: 40,
        padding: 0,
        fontSize: 20,
    },
    containerParentHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 5,
    },
    containerBackButton: {
        borderRadius: 25,
        backgroundColor: Constant.warnaSemiGrey,
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
        height: 40,
    },
    containerBadge: {
        backgroundColor: 'red',
        width: 15,
        height: 15,
        position: 'absolute',
        right: 0,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textBadge: {
        color: Constant.warnaPutih,
        fontSize: 10,
        fontWeight: 'bold',
    },
    containerFooter: {
        position: 'absolute',
        bottom: 15,
        width: '95%',
        alignSelf: 'center',
        backgroundColor: Constant.warnaSemiRed,
        padding: 10,
        borderRadius: 10,
    },
    containerParentFooter: {
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textFooter1: {
        color: Constant.warnaPutih,
        fontWeight: 'bold',
    }
})

export default ProdukScreen;
