import React from 'react';
import styled from 'styled-components/native';
import { StatusBar } from 'react-native';
//
import { Constant } from '~/constants/index.constants';

const LcContainer = styled.View`
    width: 100%;
    height: 100%;
    background-color: ${ props => props.bgColor || Constant.warnaUtama};
`;

const LcBarStyle = ({ bStyle = 'dark-content', bColor = 'transparent'}) => (
    <StatusBar barStyle={bStyle} translucent backgroundColor={bColor} />
);

const LcButtonComponent = styled.TouchableOpacity`
    width: ${ props => props.width || '80%'};
    padding-vertical: 10px;
    padding-horizontal: 10px;
    background-color: ${ props => props.bgColor || Constant.warnaSemiRed};
    border-radius: ${ props => props.borderRadius || '8px'};
`;


export {
    LcContainer,
    LcBarStyle,
    LcButtonComponent
}