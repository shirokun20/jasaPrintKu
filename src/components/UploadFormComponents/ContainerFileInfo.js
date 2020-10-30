import React from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
//
import { ContentDetailFile } from '../PesanComponents/CardFile'
import { StylePsn } from '../PesanComponents/psnStyle'
import { Constant } from '../../constants/index.constants'
import { BtnPesanJasa } from '../PesanComponents/BtnPesanJasa'
//
const ContainerFile = ({
    filename = '',
    filesize = '',
    totalPages = '',
    onUbahClick,
}) => {
    return (
        <>
            <Text style={StylePsn.textHeaderInfo}>Info File</Text>
            <View style={[StylePsn.containerInfo]}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                }}>
                    <View style={{
                        marginRight: 5,
                    }}>
                        <Icon
                            name="file-pdf-o"
                            size={50}
                            style={{
                                color: Constant.warnaSemiRed,
                            }}
                        />
                    </View>
                    <View style={{
                        flex: 1,
                    }}>
                        <ContentDetailFile
                            field="Nama file"
                            value={filename}
                        />
                        <ContentDetailFile
                            field="Ukuran file"
                            value={filesize}
                        />
                        <ContentDetailFile
                            field="Total Pages"
                            value={totalPages}
                        />
                    </View>
                </View>
            </View>
            <BtnPesanJasa 
                    text="Ubah file"
                    onPress={() => onUbahClick()}
                />
        </>
    )
}

ContainerFile.defaultProps = {
    onUbahClick: () => { }
}

export {
    ContainerFile
}