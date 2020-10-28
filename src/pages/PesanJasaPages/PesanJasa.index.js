import React from 'react';
import { View, ScrollView, TouchableOpacity, Keyboard } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { Constant } from '../../constants/index.constants';
import { StylePsn } from '../../components/PesanComponents/psnStyle';
import { CardMetodeBayar } from '../../components/PesanComponents/CardMetodeBayar';
import { CardFile } from '../../components/PesanComponents/CardFile';
import { CardSendMethod } from '../../components/PesanComponents/CardSendMethod';
import { CardInfoBayar } from '../../components/PesanComponents/CardInfoBayar';

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


const HeaderBg = (
    <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 3.5, y: 0 }}
        colors={[Constant.warnaSemiRed, Constant.warnaPutih]}
        style={[{
            height: 85,
        }]}
    />
);

const PesanJasaScreen = (props) => {

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
                        <CardFile />
                        <CardMetodeBayar
                            onChange={(e) => console.log(e)}
                        />
                        <CardSendMethod />
                        <CardInfoBayar />
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </View>
    )
}

export default PesanJasaScreen;
