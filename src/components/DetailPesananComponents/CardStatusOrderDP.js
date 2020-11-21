import React from 'react'
import { View, Text, Image } from 'react-native'
import { Constant } from '../../constants/index.constants'
import { PesanJasaSample } from '../../sample_models/pesanJasa.sample'
import { StyleCmb } from '../PesanComponents/CardMetodeBayar'
//
import { StylePsn } from '../PesanComponents/psnStyle'
import { SsShadow } from '../SplashScreenComponents/ssShadow'

const CardStatusOrderDP = () => {
    const [selectedIndex, setSelectedIndex] = React.useState(6);
    const data = PesanJasaSample.statusPesananData.filter((e) => e.id === selectedIndex);
    return (
        <>
            <View style={[StyleCmb.container, StylePsn.cardFile, SsShadow]}>
                <View style={[StylePsn.cardBasic]}>
                    <Text style={StylePsn.textHeaderInfo}>Status Pesanan:</Text>
                    {
                        selectedIndex == 7 ? data.map((e, index) => {
                            return (
                                <View style={[StylePsn.parentContainerCheckbox, {
                                    backgroundColor: e.bgColor,
                                    marginBottom: 6,
                                }]} key={index}>
                                    <View
                                        style={StylePsn.containerCheckbox}
                                    >
                                        <Text style={[StylePsn.textField, {
                                            flex: 1,
                                            fontSize: 16,
                                            color: e.textColor
                                        }]}>{e.text}</Text>
                                        <View style={[StylePsn.checkboxBackground, SsShadow]}>
                                            <View
                                                style={[{
                                                    opacity: 1,
                                                    backgroundColor: selectedIndex >= e.id ? e.bgColor : Constant.warnaTransparant,
                                                }, StylePsn.checkboxCustom]}
                                            />
                                        </View>
                                    </View>
                                </View>
                            )
                        }) : PesanJasaSample.statusPesananData.map((e, index) => {
                            if (e.id < 7) {
                                return (
                                    <View style={[StylePsn.parentContainerCheckbox, {
                                        backgroundColor: e.bgColor,
                                        marginBottom: 6,
                                    }]} key={index}>
                                        <View
                                            style={StylePsn.containerCheckbox}
                                        >
                                            <Text style={[StylePsn.textField, {
                                                flex: 1,
                                                fontSize: 16,
                                                color: e.textColor
                                            }]}>{e.text}</Text>
                                            <View style={[StylePsn.checkboxBackground, SsShadow]}>
                                                <View
                                                    style={[{
                                                        opacity: 1,
                                                        backgroundColor: selectedIndex >= e.id ? e.bgColor : Constant.warnaTransparant,
                                                    }, StylePsn.checkboxCustom]}
                                                />
                                            </View>
                                        </View>
                                    </View>
                                )
                            } else {
                                return null;
                            }
                        })
                    }
                </View>
            </View>
        </>
    )
}

export default CardStatusOrderDP
