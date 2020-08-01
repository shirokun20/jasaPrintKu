import React, { useState } from 'react';
import { TextInput, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
//
import { SsShadow } from '~/components/SplashScreenComponents/ssShadow';
import { Constant } from '~/constants/index.constants';
//
import { LgViewTextInput } from './lgViewTextInput';
import { LgStyle } from './lgStyle';

const LgTextInput = ({ 
    setFocus, 
    setData, 
    placeholder, 
    data, 
    secure, 
    keyboardType,
    isPassword
}) => {

    const [secureData, setSecureData] = useState(secure);

    return (
        <LgViewTextInput
            style={[LgStyle.ViewtextInputStyle, SsShadow, {
                justifyContent: isPassword ? 'space-between' : 'center',
                alignItems: 'center',
            }]}
        >
            <TextInput
                autoCapitalize="none"
                keyboardType={keyboardType}
                secureTextEntry={secureData}
                style={[LgStyle.textInputStyle, {
                    width: isPassword ? '90%' : '100%',
                }]}
                placeholder={placeholder}
                placeholderTextColor={Constant.warnaShadow}
                value={data}
                onFocus={(e) => setFocus(true)}
                onBlur={(e) => setFocus(false)}
                onChangeText={(text) => setData(text.toLowerCase())}
            />
            {isPassword ? <TouchableOpacity style={{
                width: '10%',
                alignItems: 'flex-end',
                justifyContent: 'flex-end'
            }} activeOpacity={0.5} onPress={() => setSecureData(!secureData)}>
                <Icon
                    name={ !secureData ? 'eye-slash' : 'eye'} size={20} color={Constant.warnaShadow} 
                />
            </TouchableOpacity> : null}
        </LgViewTextInput>
    )
}

LgTextInput.defaultProps = {
    setData: () => {},
    setFocus: () => {},
    placeholder: '',
    data: '',
    secure: false,
    keyboardType: 'default',
    isPassword: false,
}

export default LgTextInput;