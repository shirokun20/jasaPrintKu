import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
//
import { StylePsn } from './psnStyle';
import { Constant } from '../../constants/index.constants';
import { SsShadow } from '../../components/SplashScreenComponents/ssShadow';
import { BtnPesanJasa } from './BtnPesanJasa';
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


const CardUploadFile = (props) => {
    return (
        <View style={[StylePsn.containerInfo]}>
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
                        value={props.filename}
                    />
                    <ContentDetailFile
                        field="Ukuran file"
                        value={props.filesize}
                    />
                    <ContentDetailFile
                        field="Jenis Print"
                        value={props.printType}
                    />
                    <ContentDetailFile
                        field="Pages"
                        value={props.pagesPrint}
                    />
                    <ContentDetailFile
                        field="Total Pages"
                        value={props.totalPages}
                    />
                    <ContentDetailFile
                        field="Keterangan"
                        value={props.fileketerangan}
                        line={1}
                    />
                </View>
                <TouchableOpacity activeOpacity={0.5} onPress={() => props.onDeleted(props.filename)}>
                    <Icon
                        name="trash"
                        size={25}
                        style={{
                            color: Constant.warnaSemiRed,
                        }}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const CardFile = ({
    btnFileVisible,
    onBtnFilePress,
}) => {
    return (
        <View style={[Style.container, StylePsn.cardFile, SsShadow]}>
            <View style={[StylePsn.cardBasic]}>
                <Text style={StylePsn.textHeaderInfo}>File yang akan di print (Max 3):</Text>
                <CardUploadFile
                    filename="tolong-print.pdf"
                    filesize="1 MB"
                    pagesPrint="1 s/d 10"
                    printType="Warna"
                    totalPages="20"
                    fileketerangan="Lorem Ipsum adalah contoh teks atau dummy dalam industri percetakan dan penataan huruf atau typesetting. Lorem Ipsum telah menjadi standar contoh teks sejak tahun 1500an, saat seorang tukang cetak yang tidak dikenal mengambil sebuah kumpulan teks dan mengacaknya untuk menjadi sebuah buku contoh huruf. Ia tidak hanya bertahan selama 5 abad, tapi juga telah beralih ke penataan huruf elektronik, tanpa ada perubahan apapun. Ia mulai dipopulerkan pada tahun 1960 dengan diluncurkannya lembaran-lembaran Letraset yang menggunakan kalimat-kalimat dari Lorem Ipsum, dan seiring munculnya perangkat lunak Desktop Publishing seperti Aldus PageMaker juga memiliki versi Lorem Ipsum."
                    onDeleted={(e) => console.log(e)}
                />
                {
                    btnFileVisible ? (
                        <BtnPesanJasa onPress={() => onBtnFilePress()}
                            text="Tambahkan File"
                        />
                    ) : null
                }
                <Text style={[StylePsn.textHeaderInfo, {
                    fontSize: 14,
                    color: Constant.warnaSecondaryButton,
                }]}>* Pastikan isi dengan benar</Text>
            </View>
        </View>
    );
};

CardFile.defaultProps = {
    onBtnFilePress: () => { },
    btnFileVisible: true,
}

const Style = StyleSheet.create({
    container: {
        paddingRight: 4,
        borderTopEndRadius: 15,
        borderBottomEndRadius: 15,
        borderTopStartRadius: 11,
        borderBottomStartRadius: 11,
    }
})

export {
    CardFile,
    ContentDetailFile
}