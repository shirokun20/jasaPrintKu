import React from 'react';
import { Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
//
import { Constant } from '../../constants/index.constants';
import { SsShadow } from '../SplashScreenComponents/ssShadow';

export const HeaderBg = (
    <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 3.5, y: 0 }}
        colors={[Constant.warnaSemiRed, Constant.warnaPutih]}
        style={[{
            height: Dimensions.get('screen').height*0.088,
        }]}
    />
);