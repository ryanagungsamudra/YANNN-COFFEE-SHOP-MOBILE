import * as React from 'react';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/home'
import Profile from '../screens/profile';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={Home} options={{
                headerTitle: ''
            }} />
        </Drawer.Navigator>
    );
}