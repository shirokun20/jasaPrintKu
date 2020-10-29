import React from 'react'
import { View, Text, ScrollView, TouchableOpacity, Keyboard, Animated } from 'react-native'
import { Easing } from 'react-native-reanimated'
import Icon from 'react-native-vector-icons/FontAwesome'
//
import { HeaderBg } from '../../components/GlobalComponents/HeaderCustom'
import { BtnPesanJasa } from '../../components/PesanComponents/BtnPesanJasa'
import { ContentDetailFile } from '../../components/PesanComponents/CardFile'
import { StylePsn } from '../../components/PesanComponents/psnStyle'
import { SsShadow } from '../../components/SplashScreenComponents/ssShadow'
import { Constant } from '../../constants/index.constants'

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


const CardUpload = ({
    isFile = false,
    onSetIsFile,
}) => {
    const animasi = React.useRef(new Animated.Value(0.3)).current;
    React.useEffect(() => {
        animasi.setValue(0.8);
        var hasil = Animated.spring(animasi, {
            toValue: 1,
            useNativeDriver: true,
            friction: 3,
        });
        hasil.start();
    }, [isFile]);

    return (
        <View style={[StylePsn.cardFile, {
            paddingRight: 4,
            borderTopEndRadius: 15,
            borderBottomEndRadius: 15,
            borderTopStartRadius: 11,
            borderBottomStartRadius: 11,
        }, SsShadow]}>
            <View style={[StylePsn.cardBasic]}>
                <Animated.View style={{
                    transform: [{
                        scale: animasi
                    }],
                }}>
                {
                    isFile ? <ContainerFile
                        filename="tolong-print.pdf"
                        filesize="1 MB"
                        totalPages="20"
                        onUbahClick={() => {
                            onSetIsFile(false);
                        }}
                    /> : 
                    <ContainerUpload onPress={(value) => onSetIsFile(value)} />
                }
                </Animated.View>
            </View>
        </View>
    )
}

CardUpload.defaultProps = {
    onSetIsFile: () => { },
    onSetAnimated: () => { },
}

export default function UploadFormScreen() {

    const [isFile, setIsFile] = React.useState(false)
    const [uploadFileAnimated, setUploadFileAnimated] = React.useState(true);
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
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </View>
    )
}
