import React from 'react';
import { Text, View, Animated, Platform, TouchableOpacity, TextInput } from 'react-native';
import { Constant } from '../../constants/index.constants';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { SsShadow } from '../../components/SplashScreenComponents/ssShadow';
import { BcBarStyle } from '../../components/BerandaComponents/bcData';

const ProdukScreen = ({
    params,
}) => (
        <View>
            <BcBarStyle bStyle="dark-content" />
            <View style={{
                backgroundColor: Constant.warnaPutih,
                width: '100%',
                paddingTop: Platform.select({
                    ios: '12%',
                    android: 40,
                }),
                paddingBottom: 10,
            }}>
                <View style={{
                    flexDirection: 'row',
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
                    }, SsShadow]} activeOpacity={0.6}>
                        <Icon
                            name="keyboard-arrow-left"
                            size={30}
                            style={{
                                left: -1.5,
                                alignSelf: 'center',
                            }}
                        />
                    </TouchableOpacity>
                    {/* <Text style={{
                        fontSize: 20,
                    }}>Kembali</Text> */}
                </View>
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
            </View>
        </View>
    );

export default ProdukScreen;
