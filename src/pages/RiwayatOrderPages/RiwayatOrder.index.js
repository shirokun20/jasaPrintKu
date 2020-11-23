import React, { Component } from 'react'
import { Keyboard, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import SearchRiwayatOrder from '../../components/RiwayatOrderComponents/SearchRiwayatOrder';
import StatusRiwayatOrder from '../../components/RiwayatOrderComponents/StatusRiwayatOrder';
import { SsShadow } from '../../components/SplashScreenComponents/ssShadow';
import { Constant } from '../../constants/index.constants';

export class RiwayatOrderScreen extends Component {
    
    render() {

        const {
            navigation
        } = this.props;

        const Card = ({
            onPress,
        }) => {
            return (
                <View style={{
                    marginHorizontal: 15,
                    marginVertical: 5,
                }}>
                    <TouchableOpacity style={[{
                        width: '100%',
                        backgroundColor: Constant.warnaPutih,
                        borderRadius: 5,
                    }, SsShadow]} activeOpacity={0.9} onPress={() => onPress()}>
                        <View style={{
                            borderTopStartRadius: 5,
                            borderTopEndRadius: 5,
                            backgroundColor: Constant.warnaSemiGrey,
                            paddingVertical: 10,
                            alignItems: 'center',
                        }}>
                            <Text style={{
                                color: Constant.warnaHitam,
                            }}>Selesai!</Text>
                        </View>
                        <View style={{
                            paddingHorizontal: 10,
                            paddingTop: 10,
                            paddingBottom: 5,
                        }}>
                            <Text>20 Sep 2020</Text>
                            <Text style={{
                                fontSize: 20,
                                fontWeight: 'bold',
                            }}>INVOICE-20/9/20</Text>
                        </View>
                        <View style={{
                            height: 1,
                            backgroundColor: Constant.warnaSemiGrey,
                            marginVertical: 5,
                        }} />
                        <View style={{
                            paddingHorizontal: 10,
                            paddingTop: 5,
                            paddingBottom: 5,
                        }}>
                            <Text>Keterangan</Text>
                            <Text style={{
                                fontSize: 15,
                                fontWeight: 'bold',
                            }}>Tolong printkan yah!</Text>
                        </View>
                        <View style={{
                            height: 1,
                            backgroundColor: Constant.warnaSemiGrey,
                            marginVertical: 5,
                        }} />
                        <View style={{
                            paddingHorizontal: 10,
                            paddingTop: 5,
                            paddingBottom: 10,
                        }}>
                            <Text>Total pembayaran</Text>
                            <Text style={{
                                fontSize: 20,
                                fontWeight: 'bold',
                                color: Constant.warnaSemiRed,
                            }}>Rp. 20.000</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            )
        }

        return (
            <TouchableOpacity style={{
                backgroundColor: Constant.warnaSemiRed,
                height: '100%',
                width: '100%',
            }} activeOpacity={1} onPress={() => Keyboard.dismiss()}>
                {/* <Text> textInComponent </Text> */}
                <SearchRiwayatOrder />
                <StatusRiwayatOrder />
                <View style={{
                    marginTop: 5,
                    flex: 1,
                }}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <Card 
                            onPress={() => {
                                navigation.navigate('DetailPesanJasaScreen', {
                                    user: 'test',
                                });
                            }}
                        />
                        <View 
                            style={{
                                height: 30,
                            }}
                        />
                    </ScrollView>
                </View>
            </TouchableOpacity>
        )
    }
}

export default RiwayatOrderScreen
