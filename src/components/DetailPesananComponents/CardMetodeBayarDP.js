import React from 'react'
import { View, Text, Image } from 'react-native'
import { PesanJasaSample } from '../../sample_models/pesanJasa.sample'
//
import { StyleCmb } from '../PesanComponents/CardMetodeBayar'
import { StylePsn } from '../PesanComponents/psnStyle'
import { SsShadow } from '../SplashScreenComponents/ssShadow'

const CardMetodeBayarDP = () => {
    // 
    const selectedIndex = 0;
    // 
    var hasil = PesanJasaSample.paymentMethod.filter((e, index) => index == selectedIndex) || [];
    // 
    return (
        <View style={[StylePsn.cardFile]}>
            <View style={[StylePsn.cardBasic, SsShadow]}>
                <Text style={StylePsn.textHeaderInfo}>Metode Pembayaran:</Text>
                <View>
                    {
                        hasil.map((e, index) => {
                            return (
                                <View style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                }} key={index}>
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
                                        <Text style={{
                                            textAlign: 'justify'
                                        }}>{e.keterangan.slice(0, 100)}</Text>
                                    </View>
                                </View>
                            )
                        })
                    }
                </View>
            </View>
        </View>
    )
}

export default CardMetodeBayarDP
