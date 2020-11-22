import React, { Component } from 'react'
import { Keyboard, Text, TouchableOpacity, View } from 'react-native'
import SearchRiwayatOrder from '../../components/RiwayatOrderComponents/SearchRiwayatOrder';
import StatusRiwayatOrder from '../../components/RiwayatOrderComponents/StatusRiwayatOrder';
import { Constant } from '../../constants/index.constants';

export class RiwayatOrderScreen extends Component {
    render() {
        return (
            <TouchableOpacity style={{
                backgroundColor: Constant.warnaSemiRed,
                height: '100%',
                width: '100%',
            }} activeOpacity={1} onPress={() => Keyboard.dismiss()}>
                {/* <Text> textInComponent </Text> */}
                <SearchRiwayatOrder /> 
                <StatusRiwayatOrder />
            </TouchableOpacity>
        )
    }
}

export default RiwayatOrderScreen
