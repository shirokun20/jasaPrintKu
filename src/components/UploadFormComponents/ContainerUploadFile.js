import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
//
import { Constant } from '../../constants/index.constants'
import { StylePsn } from '../PesanComponents/psnStyle'

const ContainerUpload = ({
    onPress,
}) => {
    return (
        <>
            <Text style={StylePsn.textHeaderInfo}>Upload File</Text>
            <View style={[StylePsn.containerInfo, {
                marginBottom: 5,
                alignItems: 'center',
                justifyContent: 'center',
                paddingVertical: 20,
            }]}>
                <TouchableOpacity activeOpacity={0.8} style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                }} onPress={() => onPress(true)}>
                    <Icon
                        name="file-pdf-o"
                        size={50}
                        style={{
                            color: Constant.warnaSemiRed,
                        }}
                    />
                    <Text style={[StylePsn.textHeaderInfo, {
                        color: Constant.warnaSemiRed,
                        marginBottom: 0,
                        marginTop: 5,
                    }]}>Klik disini!</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

ContainerUpload.defaultProps = {
    onPress: () => { }
}

export {
    ContainerUpload,
}