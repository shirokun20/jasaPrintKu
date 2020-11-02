import React from 'react'
import { View, Text, ScrollView, TouchableOpacity, Keyboard, Animated } from 'react-native'
//
import { HeaderBg } from '../../components/GlobalComponents/HeaderCustom'
import { ModalLoading } from '../../components/GlobalComponents/ModalLoading'
import LcButton from '../../components/LandingComponents/lcButton'
import { StylePsn } from '../../components/PesanComponents/psnStyle'
import { CarAturHalamanPrint } from '../../components/UploadFormComponents/CardAturHalamanPrint'
import { CardJenisPrint } from '../../components/UploadFormComponents/CardJenisPrint'
import { CardKeteranganPrint } from '../../components/UploadFormComponents/CardKeteranganPrint'
import { CardUpload } from '../../components/UploadFormComponents/CardUpload'
import { Waktu } from '../../Libs/waktu.lib'

export default function UploadFormScreen(props) {
    const [isFile, setIsFile] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);

    const {
        navigation
    } = props;
    return (
        <View style={StylePsn.containerParent}>
            {HeaderBg}
            <View
                style={[StylePsn.containerContent]}>
                <ScrollView showsVerticalScrollIndicator={false} style={{
                    height: '100%',
                    width: '100%',
                }}>
                    <TouchableOpacity style={{
                        marginHorizontal: 10,
                        marginVertical: 10,
                    }} activeOpacity={1} onPress={() => Keyboard.dismiss()}>
                        <CardUpload
                            onSetIsFile={(value) => setIsFile(value)}
                            isFile={isFile}
                        />
                        <CardJenisPrint />
                        <CarAturHalamanPrint />
                        <CardKeteranganPrint />
                        <LcButton
                            text="Selesai"
                            callback={(e) => {
                                setIsLoading(true);
                                Waktu.tunggu(998).then(() => {
                                    setIsLoading(false);
                                });
                                Waktu.tunggu(1000).then(() => {
                                    navigation.goBack();
                                });
                            }}
                            width="100%"
                        />
                    </TouchableOpacity>
                </ScrollView>
            </View>
            <ModalLoading 
                isLoading={isLoading}
                loadingText="Tunggu Sebentar!"
            />
        </View>
    )
}
