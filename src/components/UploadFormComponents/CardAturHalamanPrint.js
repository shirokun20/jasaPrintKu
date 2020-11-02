import React from 'react'
import { View, Text, TouchableOpacity, Animated, TextInput } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { Easing } from 'react-native-reanimated'
//
import { Constant } from '../../constants/index.constants'
import { PesanJasaSample } from '../../sample_models/pesanJasa.sample'
import { StylePsn } from '../PesanComponents/psnStyle'
import { SsShadow } from '../SplashScreenComponents/ssShadow'

const CarAturHalamanPrint = () => {
    // Ref
    const animatedOpacity = React.useRef(new Animated.Value(0)).current;
    const transformYAnimated = React.useRef(new Animated.Value(0)).current;
    // State
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const [valueTest, setValueTest] = React.useState('');
    const [valueToData, setValueToData] = React.useState('');
    const [totalPages] = React.useState(10);
    //
    const data = PesanJasaSample.printHalamanData;

    const onSelectedIndex = (index) => {
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

    onSetChangeData = (value = '') => {
        var check = value.toString();
        var toData = '';
        var obj = new Object();
        if (check.match(',') != null) {
            const hasil = check.split(',') || new Array();
            var setArray = new Array();
            hasil.map((e) => {
                var angka = Number(e) || 0;
                if (angka > 0) {
                    setArray.push(angka);
                }
            });
            obj.data = setArray;
            obj.text = setArray.toString();
        } else if (check.match(' sampai ') != null) {
            const hasil = check.split(' sampai ') || new Array();
            var setArray = new Array();
            if (hasil.length > 1) {
                var angka1 = Number(hasil[0]) || 0;
                var angka2 = Number(hasil[1]) || 0;
                if (angka2 <= totalPages) {
                    for (let index = angka1; index <= angka2; index++) {
                        setArray.push(index);
                    }
                    obj.data = setArray;
                    obj.text = value;
                }
            }
        }
        toData = JSON.stringify(obj);
        // console.log(toData.toString());
        setValueToData(toData.toString());
        setValueTest(value);
    }

    return (
        <View style={[StylePsn.cardFile, {
            paddingRight: 4,
            borderTopEndRadius: 15,
            borderBottomEndRadius: 15,
            borderTopStartRadius: 11,
            borderBottomStartRadius: 11,
        }, SsShadow]}>
            <View style={[StylePsn.cardBasic]}>
                <Text style={[StylePsn.textHeaderInfo]}>Atur Page/Halaman:</Text>
                <View style={{
                    marginBottom: 5,
                }}>
                    {
                        data.map((e, index) => {
                            return (
                                <View key={index} style={[StylePsn.parentContainerCheckbox, {
                                    marginBottom: index == data.length - 1 ? 0 : 5,
                                }]}>
                                    <TouchableOpacity activeOpacity={0.9} onPress={() => onSelectedIndex(index)}>
                                        <View
                                            style={StylePsn.containerCheckbox}
                                        >
                                            <Text style={[StylePsn.textField, {
                                                width: '90%',
                                                fontSize: 16,
                                            }]}>{e.text}</Text>
                                            <View style={[StylePsn.checkboxBackground, SsShadow]}>
                                                <View
                                                    style={[{
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
                                    placeholder="Isi seperti ini: '1,2,3,4 atau 1 sampai 10' agar mudah"
                                    placeholderTextColor={Constant.warnaPutih}
                                    style={{
                                        padding: 0,
                                        fontSize: 17,
                                        color: Constant.warnaSemiPutih
                                    }}
                                    value={valueTest}
                                    onChangeText={(value) => {
                                        onSetChangeData(value);
                                    }}
                                />
                            </LinearGradient>
                        ) : null
                    }
                </Animated.View>
                <Text style={[StylePsn.textHeaderInfo, {
                    fontSize: 14,
                    color: Constant.warnaSecondaryButton,
                }]}>* Pastikan pilih dengan benar, karena mempengaruhi harga {'\n'}* Jangan Menggabungkan koma (,) dan (sampai)</Text>
            </View>
        </View>
    )
}

export {
    CarAturHalamanPrint,
}
