import React from 'react';
import styled from 'styled-components/native';
import { StatusBar } from 'react-native';
//
import { Constant } from '~/constants/index.constants';

const VtContainer = styled.View`
    width: 100%;
    height: 100%;
    background-color: ${ props => props.bgColor || Constant.warnaUtama};
`;

const VtBarStyle = ({ bStyle = 'dark-content', bColor = 'transparent'}) => (
    <StatusBar barStyle={bStyle} translucent backgroundColor={bColor} />
);

export {
    VtContainer,
    VtBarStyle,
}