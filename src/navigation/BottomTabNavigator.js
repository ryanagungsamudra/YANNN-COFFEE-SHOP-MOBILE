import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Home from '../screens/home'
import Profile from '../screens/profile';
import DrawerNavigator from './DrawerNavigator';
import Chat from '../screens/communication/chat';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="HomeTab"
                component={DrawerNavigator}
                options={{
                    headerShown: false,
                    tabBarLabel: '',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                    tabBarActiveTintColor: 'brown',
                    tabBarIconStyle: { marginTop: 20 },
                    tabBarItemStyle: { paddingLeft: 5 },
                    tabBarStyle: { height: 55 },
                }} />
            {/* <Tab.Screen
                name="Cart"
                component={Profile}
                options={{
                    headerShown: false,
                    tabBarLabel: '',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="cart-arrow-down" color={color} size={size} />
                    ),
                    tabBarActiveTintColor: 'brown',
                    tabBarIconStyle: { marginTop: 20 },
                    tabBarStyle: { height: 55 },

                }} /> */}
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    headerShown: false,
                    tabBarLabel: '',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account" color={color} size={size} />
                    ),
                    tabBarActiveTintColor: 'brown',
                    tabBarIconStyle: { marginTop: 20, marginLeft: 80 },
                    tabBarStyle: { height: 55 },

                }}
            />
            <Tab.Screen
                name="Chat"
                component={Chat}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="chat-processing" color={color} size={size} />
                    ),
                    tabBarActiveTintColor: 'brown',
                    tabBarIconStyle: { marginTop: 20 },
                    tabBarHideOnKeyboard: true,
                    tabBarItemStyle: { paddingRight: 5 },
                    tabBarStyle: { height: 55 },
                }}
            />
        </Tab.Navigator>
    );
}

