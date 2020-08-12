import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
//
import BerandaScreen from '../BerandaPages/Beranda.index';

const Tab = createBottomTabNavigator();

const HalamanUtamaPages = (props) => {
    return (
        <Tab.Navigator
            initialRouteName="BerandaScreen"
            tabBarOptions={{
                activeTintColor: '#e91e63',
            }}
        >
            <Tab.Screen
                name="BerandaScreen"
                component={BerandaScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                }}
            />
             <Tab.Screen
                name="Profile"
                component={BerandaScreen}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default HalamanUtamaPages;
