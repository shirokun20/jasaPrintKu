import React from 'react'
import { View, Text, ScrollView } from 'react-native';
import CardMetodeBayarDP from '../../components/DetailPesananComponents/CardMetodeBayarDP';
//
import { HeaderBg } from '../../components/GlobalComponents/HeaderCustom';
import { CardFile } from '../../components/PesanComponents/CardFile';

const DetailPesanJasaScreen = (props) => {
    return (
        <View style={{
            height: '100%',
        }}>
            {HeaderBg}
            <View style={{
                flex: 1,
            }}>
                <ScrollView>
                    <View style={{
                        marginHorizontal: 10,
                        marginVertical: 10,
                    }}>
                        <CardFile
                            onBtnFilePress={() => {
                                navigation.navigate('UploadFormScreen');
                            }}
                            deleteHide={true}
                            btnFileVisible={false}
                            peringatanHide={true}
                            keteranganFull={true}
                        />
                        <CardMetodeBayarDP />
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

export default DetailPesanJasaScreen;
