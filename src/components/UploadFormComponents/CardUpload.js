import React from 'react'
import { Animated, View } from 'react-native';
//
import { StylePsn } from '../PesanComponents/psnStyle';
import { SsShadow } from '../SplashScreenComponents/ssShadow';
import { ContainerFile } from './ContainerFileInfo';
import { ContainerUpload } from './ContainerUploadFile';

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
        <View style={[StylePsn.cardFile]}>
            <View style={[StylePsn.cardBasic, SsShadow]}>
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

export {
    CardUpload
}