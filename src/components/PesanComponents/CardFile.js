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
    keteranganFull = false,
}) => {
    return (
        <View style={{
            flexDirection: 'row',
            width: '100%',
        }}>
            <Text style={StylePsn.textField}>{field}</Text>
            {
                !keteranganFull ? (
                    <Text style={{
                        flex: 1,
                        fontWeight: 'bold'
                    }} numberOfLines={line}>: {value}</Text>
                ) : (
                        <Text style={{
                            flex: 1,
                            fontWeight: 'bold'
                        }}>: {value}</Text>
                    )
            }
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
                        line={0}
                        keteranganFull={props.keteranganFull}
                    />
                </View>
                {
                    !props.deleteHide ? (
                        <TouchableOpacity activeOpacity={0.5} onPress={() => props.onDeleted(props.filename)}>
                            <Icon
                                name="trash"
                                size={25}
                                style={{
                                    color: Constant.warnaSemiRed,
                                }}
                            />
                        </TouchableOpacity>
                    ) : null
                }
            </View>
        </View>
    );
};

const CardFile = ({
    btnFileVisible,
    onBtnFilePress,
    deleteHide = false,
    peringatanHide = false,
    keteranganFull = false,
}) => {
    return (
        <View style={[StylePsn.cardFile]}>
            <View style={[StylePsn.cardBasic, SsShadow]}>
                <Text style={StylePsn.textHeaderInfo}>File yang akan di print {btnFileVisible ? '(Max 3) ' : null}:</Text>
                <CardUploadFile
                    filename="tolong-print.pdf"
                    filesize="1 MB"
                    pagesPrint="1 s/d 10"
                    printType="Warna"
                    totalPages="20"
                    keteranganFull={keteranganFull}
                    fileketerangan="Lorem Ipsum adalah contoh teks atau dummy dalam industri percetakan dan penataan huruf atau typesetting."
                    onDeleted={(e) => console.log(e)}
                    deleteHide={deleteHide}
                />
                {
                    btnFileVisible ? (
                        <BtnPesanJasa onPress={() => onBtnFilePress()}
                            text="Tambahkan File"
                        />
                    ) : null
                }
                {
                    !peringatanHide ? (
                        <Text style={[StylePsn.textHeaderInfo, {
                            fontSize: 14,
                            color: Constant.warnaSecondaryButton,
                        }]}>* Pastikan isi dengan benar</Text>
                    ) : null
                }
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