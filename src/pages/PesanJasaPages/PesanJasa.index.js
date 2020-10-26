import React from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, Keyboard, StyleSheet, Animated, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
//
import { SsShadow } from '../../components/SplashScreenComponents/ssShadow';
import { Constant } from '../../constants/index.constants';
import { StylePsn } from '../../components/PesanComponents/psnStyle';
import { Easing } from 'react-native-reanimated';
import { PesanJasaSample } from '../../sample_models/pesanJasa.sample';
// const FormAlamat = (
//     <View style={[{
//         backgroundColor: Constant.warnaPutih,
//         padding: 10,
//         borderRadius: 10,
//         marginBottom: 5,
//     }, SsShadow]}>
//         <Text style={{
//             fontSize: 18,
//             fontWeight: 'bold',
//         }}>Alamat Penerima</Text>
//         <View
//             style={{
//                 backgroundColor: Constant.warnaSemiGrey,
//                 paddingHorizontal: 5,
//                 borderRadius: 5,
//                 marginTop: 5,
//             }}
//         >
//             <TextInput
//                 placeholder={'Masukan Alamat Penerima'}
//                 placeholderTextColor={Constant.warnaHitam}
//                 style={{
//                     paddingHorizontal: 0,
//                     margin: 0,
//                     paddingVertical: 5,
//                     fontSize: 18,
//                     color: Constant.warnaHitam,
//                 }}
//                 multiline={true}
//             />
//         </View>
//     </View>
// );

const ContentDetailFile = ({
    field,
    value,
    line = 1,
}) => {
    return (
        <View style={{
            flexDirection: 'row',
            width: '100%',
        }}>
            <Text style={StylePsn.textField}>{field}</Text>
            <Text style={{
                flex: 1,
                fontWeight: 'bold'
            }} numberOfLines={line}>: {value}</Text>
        </View>
    )
}

const ButtonTambahKanFile = () => {
    return (
        <TouchableOpacity activeOpacity={0.8} style={[{
            width: '100%',
            marginBottom: 5,
        }]}>
            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 3.5, y: 0 }}
                colors={[Constant.warnaSemiRed, Constant.warnaPutih]}
                style={[{
                    width: '100%',
                    padding: 10,
                    alignItems: 'center',
                    borderRadius: 10,
                }]}
            >
                <Text style={{
                    color: Constant.warnaPutih,
                    fontSize: 20,
                }}>Tambahkan File</Text>
            </LinearGradient>
        </TouchableOpacity>
    )
}

const HeaderBg = (
    <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 3.5, y: 0 }}
        colors={[Constant.warnaSemiRed, Constant.warnaPutih]}
        style={[{
            height: 85,
        }]}
    />
);

const CardUploadFile = (
    <TouchableOpacity style={[StylePsn.containerInfo]} activeOpacity={0.9}>
        <View style={{
            flexDirection: 'row',
            alignItems: 'flex-start',
        }}>
            <View style={{
                marginRight: 5,
            }}>
                <Icon
                    name="file-pdf-o"
                    size={50}
                    style={{
                        color: Constant.warnaSemiRed,
                    }}
                />
            </View>
            <View style={{
                flex: 1,
            }}>
                <ContentDetailFile
                    field="Nama file"
                    value="tolong-printkan.pdf"
                />
                <ContentDetailFile
                    field="Ukuran file"
                    value="1 Mb"
                />
                <ContentDetailFile
                    field="Pages"
                    value="1 s/d 10"
                />
                <ContentDetailFile
                    field="Keterangan"
                    value="Lorem Ipsum adalah contoh teks atau dummy dalam industri percetakan dan penataan huruf atau typesetting. Lorem Ipsum telah menjadi standar contoh teks sejak tahun 1500an, saat seorang tukang cetak yang tidak dikenal mengambil sebuah kumpulan teks dan mengacaknya untuk menjadi sebuah buku contoh huruf. Ia tidak hanya bertahan selama 5 abad, tapi juga telah beralih ke penataan huruf elektronik, tanpa ada perubahan apapun. Ia mulai dipopulerkan pada tahun 1960 dengan diluncurkannya lembaran-lembaran Letraset yang menggunakan kalimat-kalimat dari Lorem Ipsum, dan seiring munculnya perangkat lunak Desktop Publishing seperti Aldus PageMaker juga memiliki versi Lorem Ipsum."
                    line={1}
                />
            </View>
            <TouchableOpacity activeOpacity={0.5}>
                <Icon
                    name="trash"
                    size={20}
                    style={{
                        color: Constant.warnaSemiRed,
                    }}
                />
            </TouchableOpacity>
        </View>
    </TouchableOpacity>
);

const CardFile = (
    <>
        <View style={[{
            paddingRight: 4,
            borderTopEndRadius: 15,
            borderBottomEndRadius: 15,
            borderTopStartRadius: 11,
            borderBottomStartRadius: 11,
        }, StylePsn.cardFile, SsShadow]}>
            <View style={[StylePsn.cardBasic]}>
                <Text style={StylePsn.textHeaderInfo}>File yang akan di print (Max 2):</Text>
                {CardUploadFile}
                <ButtonTambahKanFile />
            </View>
        </View>
    </>
);


const CardMetodeBayar = (props) => {
    //
    const animatedOpacity = React.useRef(new Animated.Value(0)).current;
    const transformYAnimated = React.useRef(new Animated.Value(0)).current;
    //
    const [isKlik, setIsKlik] = React.useState(false);
    const [pmText, setPmText] = React.useState('');
    //
    const metodePembayaranKlik = () => {
        var toValue = 0;
        var toValueSlider = 100;
        if (!isKlik) {
            toValue = 1;
            toValueSlider = 0;
        }
        Animated.parallel([
            Animated.timing(animatedOpacity, {
                toValue: toValue,
                duration: 500,
                useNativeDriver: true,
                easing: Easing.linear
            }),
            Animated.spring(transformYAnimated, {
                toValue: toValueSlider,
                velocity: 3,
                tension: 2,
                friction: 8,
                useNativeDriver: true,
            })
        ]).start();
        setTimeout(() => {
            setIsKlik(!isKlik);
        }, 250);
    }

    const spin = animatedOpacity.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '90deg']
    })

    return (
        <View style={[{
            paddingLeft: 4,
            backgroundColor: Constant.warnaSemiRed,
            borderTopEndRadius: 11,
            borderBottomEndRadius: 11,
            borderTopStartRadius: 15,
            borderBottomStartRadius: 15,
        }, StylePsn, SsShadow]}>
            <View style={[StylePsn.cardBasic]}>
                <Text style={StylePsn.textHeaderInfo}>Metode Pembayaran</Text>
                <TouchableOpacity style={StylePsn.containerInfo} activeOpacity={0.9} onPress={() => metodePembayaranKlik()}>
                    <View style={{
                        paddingVertical: 5,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}>
                        <Text style={{
                            fontWeight: 'bold',
                            fontSize: 18,
                            width: '80%',
                        }} numberOfLines={1}>{pmText.length > 0 ? pmText : 'Pilih Metode Pembayaran'}</Text>
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
                    opacity: animatedOpacity,
                    transform: [{
                        translateY: transformYAnimated.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, -0.1]
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
            </View>

        </View>
    )
}

const PesanJasaScreen = (props) => {

    return (
        <View style={StylePsn.containerParent} activeOpacity={1} onPress={() => Keyboard.dismiss()}>
            {HeaderBg}
            <View
                style={[StylePsn.containerContent]}
            >
                <ScrollView showsVerticalScrollIndicator={false} style={{
                    height: '100%',
                    width: '100%',
                }}>
                    <TouchableOpacity style={{
                        marginHorizontal: 10,
                        marginVertical: 10,
                    }} activeOpacity={1}>
                        {/* {FormAlamat} */}
                        {CardFile}
                        <CardMetodeBayar />
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </View>
    )
}

export default PesanJasaScreen;
