import React from 'react';
import { Text, View, Animated, Platform, TouchableOpacity, TextInput } from 'react-native';
import { Constant } from '../../constants/index.constants';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { SsShadow } from '../../components/SplashScreenComponents/ssShadow';
import { BcBarStyle } from '../../components/BerandaComponents/bcData';

const ProdukScreen = ({
    params,
}) => {

    const BackAndCartHeader = (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginHorizontal: 5,
        }}>
            <TouchableOpacity style={[{
                borderRadius: 25,
                backgroundColor: Constant.warnaSemiGrey,
                alignItems: 'center',
                justifyContent: 'center',
                width: 40,
                height: 40,
            }]} activeOpacity={0.6}>
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
                            left: -1.5,
                            alignSelf: 'center',
                        }}
                    />
                </View>
                <View style={[{
                    backgroundColor: 'red',
                    width: 15,
                    height: 15,
                    position: 'absolute',
                    right: 0,
                    borderRadius: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                }, SsShadow]}>
                    <Text style={{
                        color: Constant.warnaPutih,
                        fontSize: 10,
                        fontWeight: 'bold',
                    }}>
                        1
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );

    const HeaderSearch = (
        <View style={[{
            marginTop: 10,
            marginHorizontal: 5,
            backgroundColor: Constant.warnaSemiGrey,
            paddingHorizontal: 8,
            height: 40,
            borderRadius: 40,
            justifyContent: 'flex-start',
            alignItems: 'center',
            flexDirection: 'row',
        }, SsShadow]}>
            <Icon
                name="search"
                size={28}
                style={{
                    padding: 0,
                    marginRight: 5,
                }}
            />
            <TextInput
                placeholder="Cari produk"
                placeholderTextColor={Constant.warnaGreyLight}
                style={{
                    width: '90%',
                    height: 40,
                    padding: 0,
                    fontSize: 20,
                }}
            />
        </View>
    )

    const Header = (
        <View style={[{
            backgroundColor: Constant.warnaPutih,
            width: '100%',
            paddingTop: Platform.select({
                ios: '12%',
                android: 40,
            }),
            paddingBottom: 15,
        }, SsShadow]}>
            { BackAndCartHeader }
            { HeaderSearch }
        </View>
    );

    const ContentData = (
        <View style={[{
            width: '48%',
            height: 170,
            backgroundColor: Constant.warnaPutih,
            marginBottom: 10,
            borderRadius: 10,
        }, SsShadow]}>
            <View style={{
                borderTopStartRadius: 10,
                borderTopEndRadius: 10,
                width: '100%',
                height: 100,
                backgroundColor: Constant.warnaGreyLight
            }} />
            <View style={{
                paddingHorizontal: 5,
                paddingVertical: 5,
                flex: 1,
            }}>
                <Text numberOfLines={2}>Judul barang</Text>
                <Text numberOfLines={1} style={{
                    fontWeight: Platform.select({
                        ios: '600',
                        android: 'bold',
                    }),
                    marginTop: 5,
                }}>Rp. 0</Text>
            </View>
        </View>
    )

    //
    const Content = (
        <View>
            <View style={{
            paddingVertical: 10,
            paddingHorizontal: 8,
        }}>
                <Text style={{
                    fontSize: 15,
                    color: Constant.warnaHitam,
                }}>Produk Kami</Text>
            </View>
            <View style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                paddingHorizontal: 8,
            }}>
                {ContentData}
                {ContentData}
            </View>
        </View>
    )

    return (
        <View style={{
            backgroundColor: Constant.warnaPutih,
            flex: 1,
        }}>
            <BcBarStyle bStyle="dark-content" />
            { Header }
            { Content }
        </View>
    );
};

export default ProdukScreen;
