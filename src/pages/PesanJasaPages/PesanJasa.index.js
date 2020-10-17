import React from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, Keyboard } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { SsShadow } from '../../components/SplashScreenComponents/ssShadow';
import { Constant } from '../../constants/index.constants';

const PesanJasaScreen = (props) => {

    const FormAlamat = (
        <View style={[{
            backgroundColor: Constant.warnaPutih,
            padding: 10,
            borderRadius: 10,
            marginBottom: 5,
        }, SsShadow]}>
            <Text style={{
                fontSize: 18,
                fontWeight: 'bold',
            }}>Alamat Penerima</Text>
            <View
                style={{
                    backgroundColor: Constant.warnaSemiGrey,
                    paddingHorizontal: 5,
                    borderRadius: 5,
                    marginTop: 5,
                }}
            >
                <TextInput
                    placeholder={'Masukan Alamat Penerima'}
                    placeholderTextColor={Constant.warnaHitam}
                    style={{
                        paddingHorizontal: 0,
                        margin: 0,
                        paddingVertical: 5,
                        fontSize: 18,
                        color: Constant.warnaHitam,
                    }}
                    multiline={true}
                />
            </View>
        </View>
    )

    return (
        <TouchableOpacity style={{
            height: '100%',
        }} activeOpacity={1} onPress={() => Keyboard.dismiss()}>
            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 3.5, y: 0 }}
                colors={[Constant.warnaSemiRed, Constant.warnaPutih]}
                style={[{
                    height: 90,
                }]}
            />
            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 3.5, y: 0 }}
                colors={[Constant.warnaSemiRed, Constant.warnaPutih]}
                style={[{
                    flex: 1,
                }]}
            >
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{
                        marginVertical: 5,
                        marginHorizontal: 10,
                    }}>
                        {/* {FormAlamat} */}
                    </View>
                </ScrollView>
            </LinearGradient>
        </TouchableOpacity>
    )
}


export default PesanJasaScreen;
