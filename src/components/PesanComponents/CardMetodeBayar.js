import React from 'react';
import { View, Text, TouchableOpacity, Animated, Image, StyleSheet } from 'react-native';
import { Easing } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/FontAwesome';
//
import { SsShadow } from '../../components/SplashScreenComponents/ssShadow';
import { PesanJasaSample } from '../../sample_models/pesanJasa.sample';
import { StylePsn } from './psnStyle';
//
export const CardMetodeBayar = (props) => {
    //
    const animatedOpacity = React.useRef(new Animated.Value(0)).current;
    //
    const [isKlik, setIsKlik] = React.useState(false);
    const [pmText, setPmText] = React.useState('');
    //
    const metodePembayaranKlik = () => {
        var toValue = 0;
        if (!isKlik) {
            toValue = 1;
        }
        Animated.timing(animatedOpacity, {
            toValue: toValue,
            duration: 500,
            useNativeDriver: true,
            easing: Easing.linear,
        }).start();
        setTimeout(() => {
            setIsKlik(!isKlik);
        }, 350);
    }

    const spin = animatedOpacity.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '90deg']
    })

    return (
        <View style={[StylePsn.cardFile]}>
            <View style={[StylePsn.cardBasic, SsShadow]}>
                <Text style={StylePsn.textHeaderInfo}>Metode Pembayaran</Text>
                <TouchableOpacity style={StylePsn.containerInfo} activeOpacity={0.9} onPress={() => metodePembayaranKlik()}>
                    <View style={StyleCmb.childContainer}>
                        <Text style={StyleCmb.textCmd} numberOfLines={1}>{pmText.length > 0 ? pmText : 'Pilih Metode Pembayaran'}</Text>
                        <Animated.View style={{
                            transform: [{ rotate: spin }],
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            <Icon
                                name="angle-right"
                                size={20}
                            />
                        </Animated.View>
                    </View>
                </TouchableOpacity>
                <Animated.View style={{
                    opacity: animatedOpacity.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, 1]
                    }),
                    transform: [{
                        translateY: animatedOpacity.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, 1]
                        }),
                    }]
                }}>
                    {isKlik ? PesanJasaSample.paymentMethod.map((e, index) => {
                        return (
                            <TouchableOpacity key={index} style={{
                                marginBottom: 10,
                            }} onPress={() => {
                                metodePembayaranKlik();
                                setPmText(e.text);
                                props.onChange(e);
                            }} activeOpacity={1}>
                                <View style={{
                                    flexDirection: 'row',
                                }}>
                                    <View style={{
                                        width: 60,
                                        marginRight: 10,
                                    }}>
                                        <Image
                                            source={{
                                                uri: e.imageLink,
                                            }}
                                            style={{
                                                width: '100%',
                                                height: 60,
                                                resizeMode: 'contain'
                                            }}
                                        />
                                    </View>
                                    <View style={{
                                        flex: 1,
                                    }}>
                                        <Text style={{
                                            fontSize: 18,
                                            fontWeight: 'bold',
                                        }}>{e.text}</Text>
                                        <Text numberOfLines={2} style={{
                                            textAlign: 'justify'
                                        }}>{e.keterangan}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )
                    }) : null}
                </Animated.View>
                {/* <Text style={[StylePsn.textHeaderInfo, {
                    fontSize: 15,
                    color: Constant.warnaSemiRed
                }]}>* Total yang harus dibayar setelah print selesai</Text> */}
            </View>

        </View>
    )
}

CardMetodeBayar.defaultProps = {
    onChange: () => { },
}

export const StyleCmb = StyleSheet.create({
    container: {
        paddingLeft: 4,
        borderTopEndRadius: 11,
        borderBottomEndRadius: 11,
        borderTopStartRadius: 15,
        borderBottomStartRadius: 15,
    },
    childContainer: {
        paddingVertical: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textCmd: {
        fontWeight: 'bold',
        fontSize: 18,
        width: '80%',
    }
})