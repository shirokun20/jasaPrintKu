import React from 'react'
import { View, Text, TextInput } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
//
import { StylePsn } from '../PesanComponents/psnStyle'
import { SsShadow } from '../SplashScreenComponents/ssShadow'
import { Constant } from '../../constants/index.constants'
//
const CardKeteranganPrint = (props) => {
    return (
        <View style={[StylePsn.cardFile, {
            paddingLeft: 4,
            borderTopEndRadius: 11,
            borderBottomEndRadius: 11,
            borderTopStartRadius: 15,
            borderBottomStartRadius: 15,
        }, SsShadow]}>
            <View style={[StylePsn.cardBasic]}>
                <Text style={[StylePsn.textHeaderInfo]}>Keterangan:</Text>
                <View style={{
                    marginBottom: 5,
                }}>
                    <LinearGradient style={{
                        paddingVertical: 10,
                        paddingHorizontal: 8,
                        borderRadius: 10,
                    }}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 3.5, y: 0 }}
                        colors={[Constant.warnaSemiRed, Constant.warnaPutih]}>
                        <TextInput
                            placeholder="Isi keterangan agar memudahkan toko"
                            placeholderTextColor={Constant.warnaPutih}
                            style={{
                                padding: 0,
                                fontSize: 17,
                                color: Constant.warnaSemiPutih
                            }}
                            multiline={true}
                        />
                    </LinearGradient>
                </View>
            </View>
        </View>
    )
}

export {
    CardKeteranganPrint,
};
