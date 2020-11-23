import React from 'react'
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Animated } from 'react-native'
import { Constant } from '../../constants/index.constants';
import { PesanJasaSample } from '../../sample_models/pesanJasa.sample'
import { SsShadow } from '../SplashScreenComponents/ssShadow';


const Card = ({ item, index, setSelectedId, selectedId, dataLenght }) => {

    const animasi = React.useRef(new Animated.Value(0.3)).current;

    const [defaultPress] = React.useState(0.8);

    React.useEffect(() => {
        clickAnimate()
    }, [])

    const clickAnimate = () => {
        animasi.setValue(defaultPress);
        Animated.spring(animasi, {
            toValue: 1,
            friction: 3,
            useNativeDriver: true,
        }).start();
    };

    return (
        <Animated.View style={[{
            marginLeft: index == 0 ? 15 : 0,
            marginRight: (index + 1) == dataLenght ? 15 : 5,
            justifyContent: 'center',
        }, {
            transform: [{ scaleX: selectedId == index ? animasi : 1 }],
        }]}>
            <TouchableOpacity style={[{
                borderWidth: selectedId === index ? 1.5 : 0,
                borderColor: Constant.warnaPutih,
                backgroundColor: selectedId === index ? Constant.warnaSemiRed2 : Constant.warnaPutih,
            }, Style.card, SsShadow]} onPress={() => {
                setSelectedId(index);
                clickAnimate();
            }} activeOpacity={0.9}>
                <Text style={{
                    fontSize: 18,
                    color: selectedId === index ? Constant.warnaPutih : Constant.warnaSemiRed,
                    fontWeight: selectedId === index ? 'bold' : 'normal',
                }}>{item.text}</Text>
            </TouchableOpacity>
        </Animated.View>
    )
}

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
            <Card
                item={item}
                index={index}
                selectedId={selectedId}
                setSelectedId={(value) => setSelectedId(value)}
                dataLenght={data.length}
            />
        )
    }

    return (
        <View>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ alignSelf: 'flex-start' }}
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
                extraData={selectedId}
            />
        </View>
    )
}

const Style = StyleSheet.create({
    card: {
        marginTop: 5,
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default StatusRiwayatOrder
