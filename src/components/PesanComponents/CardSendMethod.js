import React from 'react';
import { View, Text, TouchableOpacity, TextInput, Animated } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Easing } from 'react-native-reanimated';
//
import { Constant } from '../../constants/index.constants';
import { Waktu } from '../../Libs/waktu.lib';
import { PesanJasaSample } from '../../sample_models/pesanJasa.sample';
//
import { SsShadow } from '../SplashScreenComponents/ssShadow'
import { StylePsn } from './psnStyle'

export const CardSendMethod = (props) => {

    const animatedOpacity = React.useRef(new Animated.Value(0)).current;
    const transformYAnimated = React.useRef(new Animated.Value(0)).current;
    const animatedOpacitySelected = React.useRef(new Animated.Value(0)).current;
    //
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const data = PesanJasaSample.sendMethod;
    // ojol Kliked

    React.useEffect(() => {
        AlamatOpen(0);
    }, [])

    const AlamatOpen = (index) => {
        var toValue = 0;
        var toValueSlider = 100;
        if (index == 1) {
            toValue = 1;
            toValueSlider = 0;
        }
        animatedOpacitySelected.setValue(0);
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
            }),
            Animated.timing(animatedOpacitySelected, {
                toValue: 1,
                duration: 250,
                useNativeDriver: true,
                easing: Easing.linear,
            }),
        ]).start();
        Waktu.tunggu(100).then(() => {
            setSelectedIndex(index);
        })
    }

    return (
        <View style={[StylePsn.cardFile, SsShadow, {
            paddingRight: 4,
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
                                <View key={index} style={[StylePsn.parentContainerCheckbox, {
                                    marginBottom: index == data.length - 1 ? 0 : 5,
                                }]}>
                                    <TouchableOpacity activeOpacity={1} onPress={() => AlamatOpen(index)}>
                                        <View
                                            style={StylePsn.containerCheckbox}
                                        >
                                            <Text style={[StylePsn.textField, {
                                                width: '90%',
                                                fontSize: 16,
                                            }]}>{e.text}</Text>
                                            <View style={[StylePsn.checkboxBackground, SsShadow]}>
                                                <Animated.View
                                                    style={[{
                                                        opacity: animatedOpacitySelected.interpolate({
                                                            inputRange: [0, 1],
                                                            outputRange: [0.8, 1]
                                                        }),
                                                        backgroundColor: selectedIndex == index ? Constant.warnaSemiRed : Constant.warnaTransparant,
                                                    }, StylePsn.checkboxCustom]}
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
                            <LinearGradient style={{
                                paddingVertical: 10,
                                paddingHorizontal: 8,
                                borderRadius: 10,
                            }}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 3.5, y: 0 }}
                                colors={[Constant.warnaSemiRed, Constant.warnaPutih]}>
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
                            </LinearGradient>
                        ) : null
                    }
                </Animated.View>
            </View>
        </View>
    )
}

