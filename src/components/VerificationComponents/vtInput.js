import React from 'react';
import { Text, View, Platform, Keyboard, StyleSheet, TextInput } from 'react-native';
//
import { LgViewTextInput } from '~/components/LoginComponents/lgViewTextInput';
import { Constant } from '~/constants/index.constants';
import { SsShadow } from '~/components/SplashScreenComponents/ssShadow';

class VtInputCode extends React.Component {

    constructor(props) {
        super(props);
    }

    state = {
        text: [],
        textCode: '',
    };

    TextInputCode = [];
    componentDidMount = () => {
        const { setFocus } = this.props;
        //
        this.keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            () => setFocus(true),
        );
        this.keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            () => setFocus(false),
        );
    }

    componentWillUnmount = () => {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }

    focusNext = (index, value) => {
        const { maxInput } = this.props;
        //
        if (index < this.TextInputCode.length - 1 && value)
            this.TextInputCode[index + 1].focus();


        if (index === this.TextInputCode.length - 1)
            this.TextInputCode[index].blur();
        //
        const { text } = this.state;
        text[index] = value;
        this.setState({ text });
        //
        if (text.length >= maxInput)
            this.setKeCallback();

    }

    focusPrevious = (key, index) => {
        if (key === 'Backspace' && index !== 0) this.TextInputCode[index - 1].focus();
    }

    setKeCallback = () => {
        var { maxInput, callback } = this.props;
        var { text } = this.state;
        var textCode = '';
        text.map((value, index) => {
            if (value != '') {
                textCode += value;
            }
        });

        if (textCode.length >= maxInput) callback(textCode);
    }

    render() {

        const { maxInput, width } = this.props;
        //
        var elements = [];

        for (let index = 0; index < maxInput; index++) {
            elements.push(
                <LgViewTextInput key={index} style={[Style.container, SsShadow]}>
                    <TextInput
                        ref={ref => this.TextInputCode[index] = ref}
                        maxLength={1}
                        keyboardType="number-pad"
                        style={Style.textInput}
                        onChangeText={v => this.focusNext(index, v)}
                        onKeyPress={e => this.focusPrevious(e.nativeEvent.key, index)}
                    />
                </LgViewTextInput>
            );
        }
        //
        return (
            <View style={[{
                justifyContent: width <= '60%' || width < 300 ? 'space-evenly' : 'space-between',
                width: width,
            }, Style.conatinerParent]}>
                {elements}
            </View>
        )
    }
}

const Style = StyleSheet.create({
    container: {
        paddingHorizontal: 5,
        height: '100%',
    },
    textInput: {
        fontSize: Platform.select({
            android: 20,
            ios: 20
        }),
        color: Constant.warnaShadow,
        height: Platform.select({
            ios: '100%',
            android: '100%',
        }),
        width: Platform.select({
            ios: 35,
        }),
        textAlign: 'center'
    },
    conatinerParent: {
        height: 45,
        marginTop: 10,
        flexDirection: 'row',
    }
})

VtInputCode.defaultProps = {
    callback: () => { },
    width: '60%',
    maxInput: 5,
    setFocus: () => { }
}

export {
    VtInputCode
}