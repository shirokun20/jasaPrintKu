import React, { useRef, useState } from 'react';
import { Text, View, TouchableOpacity, Platform, Dimensions, StyleSheet, Animated } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
//
import BerandaScreen from '../BerandaPages/Beranda.index';
import AccountScreen from '../AccountPages/Account.index';
//
import { Constant } from '../../constants/index.constants';
import LinearGradient from 'react-native-linear-gradient';
import { SsShadow } from '../../components/SplashScreenComponents/ssShadow';
//
const { width } = Dimensions.get('window');
//
const Tab = createBottomTabNavigator();

function MyTabBar({ state, descriptors, navigation }) {

    const animasi = useRef(new Animated.Value(1)).current;
    const [defaultPress] = useState(0.5);
    // Animasinya
    const clickAnimate = () => {
        animasi.setValue(defaultPress);
        Animated.spring(animasi, {
            toValue: 1,
            friction: 3,
            useNativeDriver: true,
        }).start();
    };

    return (
        <View style={[Styles.container, Styles.shadow]}>
            {state.routes.map((route, index) => {
                //
                const { options } = descriptors[route.key];
                //
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;
                //
                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                    });
                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                    clickAnimate();
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                    clickAnimate();
                };

                const ActiveTab = (
                    <Animated.View style={{
                        alignItems: 'center',
                        transform: [{ scale: animasi }],
                    }}>
                        <LinearGradient style={[{
                            borderRadius: 150 / 2,
                        }, SsShadow, Styles.containerIcon]}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 3, y: 0 }}
                            colors={[Constant.warnaSemiRed, Constant.warnaPutih]}
                        >
                            {options.tabBarIcon({
                                color: Constant.warnaPutih,
                                size: 25,
                            })}
                        </LinearGradient>
                        <Text style={[{
                            color: Constant.warnaSemiRed,
                        }, Styles.textTab]}>{label}</Text>
                    </Animated.View>
                );

                const InActive = (
                    <View style={{
                        alignItems: 'center',
                    }}>
                        <View style={Styles.containerIcon}>
                            {options.tabBarIcon({
                                color: Constant.warnaHitam,
                                size: 25,
                            })}
                        </View>
                        <Text style={[{
                            color: Constant.warnaHitam,
                        }, Styles.textTab]}>{label}</Text>
                    </View>
                );

                return (
                    <TouchableOpacity
                        accessibilityRole="button"
                        accessibilityStates={isFocused ? ['selected'] : []}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={{
                            flex: 1,
                            alignItems: 'center',
                        }}
                        key={index}
                        activeOpacity={0.8}
                    >
                        {
                            isFocused ? ActiveTab : InActive
                        }
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

const HalamanUtamaPages = (props) => {
    return (
        <Tab.Navigator
            initialRouteName="BerandaScreen"
            tabBar={props => <MyTabBar {...props} />}
        >
            <Tab.Screen
                name="BerandaScreen"
                component={BerandaScreen}
                options={{
                    tabBarLabel: 'Beranda',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="printer" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={AccountScreen}
                options={{
                    tabBarLabel: 'Profil',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

const Styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: Platform.select({
            ios: width < 405 ? 10 : 22,
            android: 5
        }),
        paddingTop: 8,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        position: 'absolute',
        bottom: 0,
        width: '100%',
        borderWidth: 0.5,
        borderColor: '#e0e0e0'
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 1.5,
    },
    containerIcon: {
        width: 45,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textTab: {
        fontSize: 15,
        fontWeight: Platform.select({
            ios: '600',
            android: 'bold',
        })
    }
})

export default HalamanUtamaPages;
