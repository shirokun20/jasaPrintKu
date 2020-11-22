import React from 'react'
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import { Constant } from '../../constants/index.constants';
import { PesanJasaSample } from '../../sample_models/pesanJasa.sample'
import { SsShadow } from '../SplashScreenComponents/ssShadow';

const StatusRiwayatOrder = () => {

    const [selectedId, setSelectedId] = React.useState(0);

    const data = new Array();

    data.push({
        text: 'Semua',
        id: 0,
    });

    PesanJasaSample.statusPesananData.map((e) => {
        data.push({
            text: e.text,
            id: e.id,
        });
    });

    const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity style={[{
                borderWidth: selectedId === index ? 1.5 : 0,
                borderColor: Constant.warnaPutih,
                backgroundColor: selectedId === index ? Constant.warnaSemiRed2 : Constant.warnaPutih,
                marginLeft: index == 0 ? 15 : 0,
                marginRight: (index + 1) == data.length ? 15 : 5,
            }, Style.card, SsShadow]} onPress={() => setSelectedId(index)} activeOpacity={0.9}>
                <Text style={{
                    color: selectedId === index ? Constant.warnaPutih : Constant.warnaSemiRed,
                    fontWeight: selectedId === index ? 'bold' : 'normal',
                }}>{item.text}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <View>
            <FlatList
                horizontal
                pagingEnabled={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ alignSelf: 'flex-start' }}
                data={data}
                keyExtractor={(item) => item.id.toString()  }
                renderItem={renderItem}
                extraData={selectedId}
            />
        </View>
    )
}

const Style = StyleSheet.create({
    card: {
        marginVertical: 5,
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default StatusRiwayatOrder
