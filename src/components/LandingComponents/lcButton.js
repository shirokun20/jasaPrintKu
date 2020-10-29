import React, { useRef, useState, useEffect } from 'react';
import { Animated, Text } from 'react-native';
//
import { Constant } from '~/constants/index.constants';
import { SsShadow } from '~/components/SplashScreenComponents/ssShadow';
//
import { LStyle } from './lcStyle';
import { LcButtonComponent } from './lcData';

const LcButton = ({ text, bgColor, callback, width = '80%'}) => {
    //
    const animasi = useRef(new Animated.Value(0.3)).current;
    const [defaultPress] = useState(0.8);
    // ComponentDidmount Versi Hooks
    useEffect(() => {
        clickAnimate();
    }, [])
    // Animasinya
    const clickAnimate = () => {
        animasi.setValue(defaultPress);
        Animated.spring(animasi, {
            toValue: 1,
            friction: 3,
            useNativeDriver: true,
        }).start();
    };
    return (
        <Animated.View style={[{
            transform: [{ scale: animasi }],
            width: '100%',
            alignItems: 'center',
            marginBottom: 15,
        }]}>
            <LcButtonComponent style={[{
                alignItems: 'center',
            }, SsShadow]} activeOpacity={0.8} bgColor={bgColor} onPress={(e) => {
                clickAnimate();
                callback('hasil');
            }} width={width}>
                <Text style={[LStyle.textContent, LStyle.textButton]}>{text}</Text>
            </LcButtonComponent>
        </Animated.View>
    )
};

LcButton.defaultProps = {
    text: '',
    bgColor: Constant.warnaSemiRed,
    callback: () => {},
}

export default LcButton;
