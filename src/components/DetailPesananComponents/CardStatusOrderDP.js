import React from 'react'
import { View, Text, Image } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'
import { Constant } from '../../constants/index.constants'
import { PesanJasaSample } from '../../sample_models/pesanJasa.sample'
import { StyleCmb } from '../PesanComponents/CardMetodeBayar'
//
import { StylePsn } from '../PesanComponents/psnStyle'
import { SsShadow } from '../SplashScreenComponents/ssShadow'

const CardStatusOrderDP = () => {
    const [selectedIndex, setSelectedIndex] = React.useState(3);
    const data = PesanJasaSample.statusPesananData.filter((e) => e.id <= selectedIndex);
    return (
        <>
            <View style={[StylePsn.cardFile]}>
                <View style={[StylePsn.cardBasic, SsShadow]}>
                    <Text style={StylePsn.textHeaderInfo}>Status Pesanan:</Text>
                    <View style={{
                        paddingVertical: 5,
                    }}>
                    {
                        data.slice(0).reverse().map((e, index) => {
                            return (
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'flex-start',
                                }} key={index}>
                                    <View style={{
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginRight: 5,
                                    }}>
                                        <View style={{
                                            width: 20,
                                            height: 20,
                                            borderRadius: 150,
                                            backgroundColor: index == 0 ? Constant.warnaSemiRed : Constant.warnaGreyLight,
                                        }} />
                                        <View 
                                            style={{
                                                width: 2,
                                                height: index == data.length -1 ? 0 : 50,
                                                backgroundColor: index == 0 ? Constant.warnaSemiRed : Constant.warnaGreyLight,
                                                alignSelf: 'center',
                                            }}
                                        />
                                    </View>
                                    <View style={{
                                        flex: 1,
                                    }}>
                                        <Text style={{
                                            fontSize: 17,
                                            fontWeight: 'bold',
                                            color: index == 0 ? Constant.warnaSemiRed : Constant.warnaGreyLight,
                                        }}>{e.text} - Senin, 20 Sep 2020</Text>
                                        <Text numberOfLines={2} style={{
                                            color: Constant.warnaGreyLight,
                                        }}>{e.keterangan}</Text>
                                    </View>
                                    <Text style={{
                                            fontSize: 15,
                                            color: Constant.warnaGreyLight,
                                        }}>20:20</Text>
                                </View>
                            )
                        })
                    }
                    </View>
                </View>
            </View>
        </>
    )
}

export default CardStatusOrderDP
