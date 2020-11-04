import React from 'react';
import { View, ScrollView, TouchableOpacity, Keyboard } from 'react-native';
// 
import { StylePsn } from '../../components/PesanComponents/psnStyle';
import { CardMetodeBayar } from '../../components/PesanComponents/CardMetodeBayar';
import { CardFile } from '../../components/PesanComponents/CardFile';
import { CardSendMethod } from '../../components/PesanComponents/CardSendMethod';
import { CardInfoBayar } from '../../components/PesanComponents/CardInfoBayar';
import { HeaderBg } from '../../components/GlobalComponents/HeaderCustom';
import LcButton from '../../components/LandingComponents/lcButton';

const PesanJasaScreen = (props) => {

    const {
        navigation,
    } = props;

    return (
        <View style={StylePsn.containerParent}>
            {HeaderBg}
            <View
                style={[StylePsn.containerContent]}
            >
                <ScrollView showsVerticalScrollIndicator={false} style={{
                    height: '100%',
                    width: '100%',
                }}>
                    <TouchableOpacity style={{
                        marginHorizontal: 10,
                        marginVertical: 10,
                    }} activeOpacity={1} onPress={() => Keyboard.dismiss()}>
                        {/* {FormAlamat} */}
                        <CardFile
                            onBtnFilePress={() => {
                                navigation.navigate('UploadFormScreen');
                            }}
                        />
                        <CardMetodeBayar
                            onChange={(e) => console.log(e)}
                        />
                        <CardSendMethod />
                        <CardInfoBayar />
                        <LcButton
                            text="Pesan Sekarang!"
                            callback={(e) => {
                                navigation.navigate('PesanJasaWaitingScreen');
                            }}
                            width="100%"
                        />
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </View>
    )
}

export default PesanJasaScreen;