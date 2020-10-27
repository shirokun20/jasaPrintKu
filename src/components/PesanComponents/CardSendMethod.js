import React from 'react';
import { View, Text, TouchableOpacity, TextInput, Animated } from 'react-native';
import { Easing } from 'react-native-reanimated';
//
import { Constant } from '../../constants/index.constants';
import { PesanJasaSample } from '../../sample_models/pesanJasa.sample';
//
import { SsShadow } from '../SplashScreenComponents/ssShadow'
import { StylePsn } from './psnStyle'

export const CardSendMethod = (props) => {

    const animatedOpacity = React.useRef(new Animated.Value(0)).current;
    const transformYAnimated = React.useRef(new Animated.Value(0)).current;
    //
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const data = PesanJasaSample.sendMethod;
    // ojol Kliked

    const AlamatOpen = (index) => {
        var toValue = 0;
        var toValueSlider = 100;
        if (index == 1) {
            toValue = 1;
            toValueSlider = 0;
        }
        Animated.parallel([
            Animated.timing(animatedOpacity, {
                toValue: toValue,
                duration: 500,
                useNativeDriver: true,
                easing: Easing.linear,
            }),
            Animated.spring(transformYAnimated, {
                toValue: toValueSlider,
                velocity: 3,
                tension: 2,
                friction: 8,
                useNativeDriver: true,
            })
        ]).start();
        setTimeout(() => setSelectedIndex(index), 150);
    }

    return (
        <View style={[StylePsn.cardFile, SsShadow, {
            paddingRight: 3,
            borderTopEndRadius: 15,
            borderTopStartRadius: 11,
            borderBottomEndRadius: 15,
            borderBottomStartRadius: 11,
        }]}>
            <View style={[StylePsn.cardBasic, {
            }]}>
                <Text style={StylePsn.textHeaderInfo}>Metode Pengiriman:</Text>
                <View style={{
                    marginBottom: 5,
                }}>
                {
                    data.map((e, index) => {
                        return (
                            <View key={index} style={[{
                                backgroundColor: Constant.warnaPrimaryButton,
                                marginBottom: index == data.length - 1 ? 0 : 5,
                                paddingVertical: 10,
                                paddingHorizontal: 8,
                                borderRadius: 10,
                            }]}>
                                <TouchableOpacity activeOpacity={0.9} onPress={() => AlamatOpen(index)}>
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <Text style={[StylePsn.textField, {
                                            width: '90%',
                                            fontSize: 16,
                                        }]}>{e.text}</Text>
                                        <View style={[{
                                            backgroundColor: Constant.warnaPutih,
                                            height: 25,
                                            width: 25,
                                            borderRadius: 100,
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }, SsShadow]}>
                                            <View
                                                style={{
                                                    backgroundColor: selectedIndex == index ? Constant.warnaSemiRed : Constant.warnaTransparant,
                                                    height: 15,
                                                    width: 15,
                                                    borderRadius: 15,
                                                }}
                                            />
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        )
                    })
                }
                </View>
                <Animated.View style={{
                    opacity: animatedOpacity,
                    transform: [{
                        translateY: transformYAnimated.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, -0.1]
                        }),
                    }],
                    marginBottom: 3,
                }}>
                    {
                        selectedIndex == 1 ? (
                            <View style={{
                                paddingVertical: 10,
                                paddingHorizontal: 8,
                                backgroundColor: Constant.warnaSemiRed,
                                borderRadius: 10,
                            }}>
                                <TextInput
                                    placeholder="Isi alamat Anda!"
                                    placeholderTextColor={Constant.warnaPutih}
                                    style={{
                                        padding: 0,
                                        fontSize: 17,
                                        color: Constant.warnaSemiPutih
                                    }}
                                    multiline={true}
                                />
                            </View>
                        ) : null
                    }
                </Animated.View>
            </View>
        </View>
    )
}
