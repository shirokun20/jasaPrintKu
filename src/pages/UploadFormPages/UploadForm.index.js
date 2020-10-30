import React from 'react'
import { View, Text, ScrollView, TouchableOpacity, Keyboard, Animated } from 'react-native'
//
import { HeaderBg } from '../../components/GlobalComponents/HeaderCustom'
import { StylePsn } from '../../components/PesanComponents/psnStyle'
import { CarAturHalamanPrint } from '../../components/UploadFormComponents/CardAturHalamanPrint'
import { CardJenisPrint } from '../../components/UploadFormComponents/CardJenisPrint'
import { CardUpload } from '../../components/UploadFormComponents/CardUpload'

export default function UploadFormScreen() {
    const [isFile, setIsFile] = React.useState(false)
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
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </View>
    )
}
