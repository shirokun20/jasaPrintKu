import styled from 'styled-components/native';
//
import { Constant } from '~/constants/index.constants';
//
export const SsContainer = styled.View`
    background-color: ${ Constant.warnaUtama };
    width: 100%;
    height: ${ props => props.height || '100%'};
`;