import React from 'react';
import { View, ScrollView, TouchableOpacity, Keyboard } from 'react-native';

import { StylePsn } from '../../components/PesanComponents/psnStyle';
import { CardMetodeBayar } from '../../components/PesanComponents/CardMetodeBayar';
import { CardFile } from '../../components/PesanComponents/CardFile';
import { CardSendMethod } from '../../components/PesanComponents/CardSendMethod';
import { CardInfoBayar } from '../../components/PesanComponents/CardInfoBayar';
import { HeaderBg } from '../../components/GlobalComponents/HeaderCustom';
import LcButton from '../../components/LandingComponents/lcButton';

// const FormAlamat = (
//     <View style={[{
//         backgroundColor: Constant.warnaPutih,
//         padding: 10,
//         borderRadius: 10,
//         marginBottom: 5,
//     }, SsShadow]}>
//         <Text style={{
//             fontSize: 18,
//             fontWeight: 'bold',
//         }}>Alamat Penerima</Text>
//         <View
//             style={{
//                 backgroundColor: Constant.warnaSemiGrey,
//                 paddingHorizontal: 5,
//                 borderRadius: 5,
//                 marginTop: 5,
//             }}
//         >
//             <TextInput
//                 placeholder={'Masukan Alamat Penerima'}
//                 placeholderTextColor={Constant.warnaHitam}
//                 style={{
//                     paddingHorizontal: 0,
//                     margin: 0,
//                     paddingVertical: 5,
//                     fontSize: 18,
//                     color: Constant.warnaHitam,
//                 }}
//                 multiline={true}
//             />
//         </View>
//     </View>
// );



const PesanJasaScreen = (props) => {

    const {
        navigation,
    } = props;

    return (
        <View style={StylePsn.containerParent} activeOpacity={1} onPress={() => Keyboard.dismiss()}>
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
                    }} activeOpacity={1}>
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