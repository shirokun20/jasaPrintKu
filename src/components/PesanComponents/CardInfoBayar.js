import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Constant } from '../../constants/index.constants'
import { SsShadow } from '../SplashScreenComponents/ssShadow'
import { StylePsn } from './psnStyle'

const InfoBayarField = ({
    field = '',
    value = '',
}) => {
    return (
        <View style={Style.containerInfo}>
            <View style={{
                justifyContent: 'space-between',
                width: '55%',
                flexDirection: 'row',
                alignItems: 'center',
                marginRight: 5,
            }}>
                <Text style={Style.textBasic}>{field}</Text>
                <Text style={Style.textBasic}>:</Text>
            </View>
            <View style={{
                flex: 1,
            }}>
                <Text style={[{
                    textAlign: 'right',
                }, Style.textBasic]}>{value}</Text>
            </View>
        </View>
    )
}

export const CardInfoBayar = ({

}) => {
    return (
        <View style={[StylePsn.cardFile, SsShadow, {
            paddingLeft: 4,
            borderTopEndRadius: 11,
            borderBottomEndRadius: 11,
            borderTopStartRadius: 15,
            borderBottomStartRadius: 15,
        }]}>
            <View style={[StylePsn.cardBasic]}>
                <Text style={StylePsn.textHeaderInfo}>Info Pembayaran:</Text>
                <View style={{
                    marginBottom: 5,
                }}>
                    <InfoBayarField
                        field={`Print Warna (10 x 1.000)`}
                        value={'Rp. 10.000'}
                    />
                    <InfoBayarField
                        field={`Print Non Warna (0 x 500)`}
                        value={'Rp. 0'}
                    />
                    <InfoBayarField
                        field={`Ongkir`}
                        value={'Rp. 0'}
                    />
                    <View style={{
                        backgroundColor: Constant.warnaSemiRed,
                        marginBottom: 2,
                        width: '100%',
                        height: 1,
                    }} />
                    <InfoBayarField
                        field={`Total Bayar`}
                        value={'Rp. 10.000'}
                    />
                </View>
            </View>
        </View>
    )
}

const Style = StyleSheet.create({
    textBasic: {
        fontWeight: 'bold',
        fontSize: 15
    },
    containerInfo: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 3.5,
    }
})
