import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
//
import { Constant } from '../../constants/index.constants'
import { PesanJasaSample } from '../../sample_models/pesanJasa.sample'
import { StylePsn } from '../PesanComponents/psnStyle'
import { SsShadow } from '../SplashScreenComponents/ssShadow'

const CardJenisPrint = () =>  {

    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const data = PesanJasaSample.jenisPrintData;

    return (
        <View style={[StylePsn.cardFile, {
            paddingLeft: 4,
            borderTopEndRadius: 11,
            borderBottomEndRadius: 11,
            borderTopStartRadius: 15,
            borderBottomStartRadius: 15,
        },SsShadow]}>
            <View style={[StylePsn.cardBasic]}>
                <Text style={[StylePsn.textHeaderInfo]}>Pilih Jenis Print:</Text>
                <View style={{
                    marginBottom: 5,
                }}>
                    {
                        data.map((e, index) => {
                            return (
                                <View key={index} style={[StylePsn.parentContainerCheckbox, {
                                    marginBottom: index == data.length - 1 ? 0 : 5,
                                }]}>
                                    <TouchableOpacity activeOpacity={0.9} onPress={() => setSelectedIndex(index)}>
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
                <Text style={[StylePsn.textHeaderInfo, {
                    fontSize: 14,
                    color: Constant.warnaSecondaryButton,
                }]}>* Pastikan pilih dengan benar, karena mempengaruhi harga</Text>
            </View>
        </View>
    )
}

export {
    CardJenisPrint,
}
