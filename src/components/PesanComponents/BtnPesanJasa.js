import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { Constant } from '../../constants/index.constants'

const BtnPesanJasa = ({
    text = '',
    onPress,
}) => {
    return (
        <TouchableOpacity activeOpacity={0.8} style={[{
            width: '100%',
            marginBottom: 5,
        }]} onPress={() => onPress()}>
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
                }}>{text}</Text>
            </LinearGradient>
        </TouchableOpacity>
    )
}

BtnPesanJasa.defaultProps = {
    onPress: () => {}
}

export {
    BtnPesanJasa
}