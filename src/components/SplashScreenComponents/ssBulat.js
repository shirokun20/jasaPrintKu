import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
//
import { Constant } from '~/constants/index.constants';
//
const { width } = Dimensions.get('window');
//
export const SsBulat = styled.View`
    background-color: ${ Constant.warnaUtama };
    padding: 1px;
    border-radius: ${width/2}px;
`;