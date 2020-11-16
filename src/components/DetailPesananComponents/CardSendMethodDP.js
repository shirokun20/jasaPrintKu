import React from 'react'
import { View, Text, Image } from 'react-native'
import { PesanJasaSample } from '../../sample_models/pesanJasa.sample'
import { StyleCmb } from '../PesanComponents/CardMetodeBayar'
//
import { StylePsn } from '../PesanComponents/psnStyle'
import { SsShadow } from '../SplashScreenComponents/ssShadow'

const CardSendMethodDP = () => {
    const e = PesanJasaSample.sendMethod[1];
    return (
        <>
            <View style={[StylePsn.backDropRight, StylePsn.cardFile, SsShadow]}>
                <View style={[StylePsn.cardBasic]}>
                    <Text style={StylePsn.textHeaderInfo}>Metode Pengiriman:</Text>
                    <View style={StylePsn.parentContainerCheckbox}>
                        <View
                            style={StylePsn.containerCheckbox}
                        >
                            <Text style={[StylePsn.textField, {
                                width: '90%',
                                fontSize: 16,
                            }]}>{e.text}</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={[StylePsn.backDropRight, StylePsn.cardFile, SsShadow]}>
                <View style={[StylePsn.cardBasic]}>
                    <Text style={StylePsn.textHeaderInfo}>Alamat:</Text>
                    <View style={StylePsn.parentContainerCheckbox}>
                        <View
                            style={StylePsn.containerCheckbox}
                        >
                            <Text style={[StylePsn.textField, {
                                width: '100%',
                                fontSize: 16,
                            }]}>Lorem Ipsum adalah contoh teks atau dummy dalam industri percetakan dan penataan huruf atau typesetting.</Text>
                        </View>
                    </View>
                </View>
            </View>
        </>
    )
}

export default CardSendMethodDP
