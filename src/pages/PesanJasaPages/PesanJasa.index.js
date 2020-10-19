import React from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, Keyboard } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';

import { SsShadow } from '../../components/SplashScreenComponents/ssShadow';
import { Constant } from '../../constants/index.constants';

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
            <Text style={{
                width: 80,
                fontWeight: 'bold',
            }}>{field}</Text>
            <Text style={{
                flex: 1,
                fontWeight: 'bold'
            }} numberOfLines={line}>: {value}</Text>
        </View>
    )
}

const PesanJasaScreen = (props) => {

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
        <TouchableOpacity style={[{
            backgroundColor: Constant.warnaPrimaryButton,
            width: '100%',
            paddingHorizontal: 8,
            paddingVertical: 5,
            borderRadius: 10,
            marginBottom: 8,
        }]} activeOpacity={0.9}>
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
        <View style={[{
            paddingVertical: 5,
            paddingHorizontal: 10,
            borderRadius: 10,
            backgroundColor: Constant.warnaPutih,
            marginBottom: 5,
        }, SsShadow]}>
            <Text style={{
                marginBottom: 3,
                fontSize: 17,
                fontWeight: 'bold',
            }}>File yang akan di print (Max 2):</Text>
            {CardUploadFile}
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
        </View>
    )

    return (
        <View style={{
            height: '100%',
            backgroundColor: Constant.warnaPrimaryButton,
        }} activeOpacity={1} onPress={() => Keyboard.dismiss()}>
            {HeaderBg}
            <View
                style={[{
                    marginTop: 1,
                    flex: 1,
                    backgroundColor: Constant.warnaPrimaryButton,
                }]}
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
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </View>
    )
}


export default PesanJasaScreen;
