import React from 'react';
import { Image } from 'react-native';
//
import { SsShadow } from '~/components/SplashScreenComponents/ssShadow';
import { SsBulat } from '~/components/SplashScreenComponents/ssBulat';
import { PRINT_DUA_ICON } from '~/assets/index.assets';
//
export const SsLogo = ({ ukuran = 105 }) => (
    <SsBulat style={[SsShadow, {
        alignItems: 'center',
        justifyContent: 'center',
    }]}>
        <Image source={PRINT_DUA_ICON} style={{
            width: ukuran,
            height: ukuran,
        }} />
    </SsBulat>
);