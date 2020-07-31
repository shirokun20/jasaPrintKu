import styled from 'styled-components/native';
//
import { Constant } from '~/constants/index.constants';
//
export const LgViewTextInput = styled.View`
    padding-vertical: 1.5px;
    border-radius: ${ props => props.borderRadius || '8px'};
    background-color: ${ props => props.bgColor || Constant.warnaPrimaryButton };
`;