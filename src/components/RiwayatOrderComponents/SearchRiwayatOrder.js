import React from 'react'
import { View, Text, TextInput, Keyboard } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/AntDesign'
import { Constant } from '../../constants/index.constants'
import { SsShadow } from '../SplashScreenComponents/ssShadow'

const SearchRiwayatOrder = (props) => {
    const [focus, onFocus] = React.useState(false);
    const [value, setValue] = React.useState('');
    return (
        <View style={[{
            marginTop: 5,
            marginBottom: 5,
            marginHorizontal: 15,
            backgroundColor: Constant.warnaPutih,
            paddingHorizontal: 10,
            paddingVertical: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderRadius: 5,    
        }, SsShadow]}>
            <Icon
                name="search1"
                size={20}
                color={focus ? Constant.warnaHitam : Constant.warnaSemiGrey}
            />
            <TextInput
                placeholder="Test"
                placeholderTextColor={Constant.warnaSemiGrey}
                style={{
                    marginLeft: 10,
                    marginRight: focus ? 10 : 0,
                    flex: 1,
                    padding: 0,
                    color: focus ? Constant.warnaHitam : Constant.warnaSemiGrey,
                    fontSize: 18,
                }}
                onFocus={() => onFocus(true)}
                onBlur={() => onFocus(false)}
                value={value}
                onChangeText={(value) => setValue(value)}
            />
            {
                focus ? (
                    <TouchableOpacity activeOpacity={1} onPress={() => {
                        Keyboard.dismiss();
                        setValue('');
                    }}>
                        <Icon
                            name="close"
                            size={20}
                            color={focus ? Constant.warnaHitam : Constant.warnaSemiGrey}
                        />
                    </TouchableOpacity>
                ) : null
            }
        </View>
    )
}

export default SearchRiwayatOrder
