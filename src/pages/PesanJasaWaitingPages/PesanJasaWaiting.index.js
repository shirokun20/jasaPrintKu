import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { SsLogo } from '../../components/SplashScreenComponents/ssLogo'
import { Constant } from '../../constants/index.constants'
import { Waktu } from '../../Libs/waktu.lib'

const PesanJasaWaitingScreen = (props) => {

    React.useEffect(() => {
        Waktu.tunggu(2000).then(() => {
            props.navigation.reset({
                index: 1,
                routes: [{
                    name: 'HalamanUtamaScreen',
                }, {
                    name: 'DetailPesanJasaPages',
                    params: {
                        user: 'Test',
                    }
                }]
            })
        });
    }, [])
    return (
        <View>
            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 3.5, y: 0 }}
                colors={[Constant.warnaSemiRed, Constant.warnaPutih]}
                style={[{
                    height: '100%',
                    justifyContent: 'center',
                }]}
            >
                <View style={{
                    alignItems: 'center',
                    marginBottom: 20,
                }}>
                    <SsLogo />
                    <Text style={[Style.text, {
                        marginTop: 10,
                        fontSize: 20,
                        fontWeight: 'bold',
                    }]}>Tunggu Sebentar</Text>
                </View>
            </LinearGradient>
        </View>
    )
}

const Style = StyleSheet.create({
    text: {
        color: Constant.warnaPutih,
    }
})

export default PesanJasaWaitingScreen
