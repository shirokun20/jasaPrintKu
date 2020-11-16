import React from 'react'
import { View, Text, Image } from 'react-native'
import { Constant } from '../../constants/index.constants'
import { PesanJasaSample } from '../../sample_models/pesanJasa.sample'
import { StyleCmb } from '../PesanComponents/CardMetodeBayar'
//
import { StylePsn } from '../PesanComponents/psnStyle'
import { SsShadow } from '../SplashScreenComponents/ssShadow'

const CardStatusOrderDP = () => {
    return (
        <>
            <View style={[StylePsn.backDropRight, StylePsn.cardFile, SsShadow]}>
                <View style={[StylePsn.cardBasic]}>
                    <Text style={StylePsn.textHeaderInfo}>Status Pesanan:</Text>
                    <View style={[StylePsn.parentContainerCheckbox, {
                        backgroundColor: Constant.warnaAlertSuccess,
                    }]}>
                        <View
                            style={StylePsn.containerCheckbox}
                        >
                            <Text style={[StylePsn.textField, {
                                width: '100%',
                                fontSize: 16,
                                color: Constant.warnaPutih
                            }]}>Sedang diproses!</Text>
                        </View>
                    </View>
                </View>
            </View>
        </>
    )
}

export default CardStatusOrderDP
