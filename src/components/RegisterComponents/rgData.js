import React from 'react';
import styled from 'styled-components/native';
import { View } from 'react-native';
//
import { Constant } from '~/constants/index.constants';

const RgContainer = styled.View`
    width: 100%;
    height: 100%;
    background-color: ${ props => props.bgColor || Constant.warnaUtama};
`;

const RgRadioBtn = styled.TouchableOpacity`
    border-color: ${ props => props.bgColor || Constant.warnaSemiRed};
    border-width: 1px;
`;

const RgRadioCheck = ({ 
        bgColor = Constant.warnaSemiRed, 
        isActive = false, 
        size = 10, 
        isChechBok = false,
        callback,
}) => {
    return (
        <RgRadioBtn bgColor={bgColor} style={{
            padding: isActive ? 2 : size,
            borderRadius: isChechBok ? size/2 : size * 2,
        }} padding={isActive ? '1px' : '10px'} activeOpacity={0.8} onPress={(e) => callback(e)}>
            { isActive ? <View 
                style={{
                    padding: isActive ? size - 2 : size,
                    backgroundColor: bgColor,
                    borderRadius: isChechBok ? ((size/2) - 2) : size * 2,
                }}
            /> : null}
        </RgRadioBtn>
    )
}

RgRadioCheck.defaultProps = {
    callback: () => {},
}

export {
    RgContainer,
    RgRadioCheck,
}