import * as React from 'react';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';

import CustomDrawer from '../components/CustomDrawer';
import Home from '../screens/home'
import EditProfile from '../screens/profile-edit';
// import Cart from '../screens/cart'
import Products from '../screens/products';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    return (
        <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />} initialRouteName="Home">
            <Drawer.Screen name="HomeDrawer" component={Home} options={{
                headerShown: false,
                headerTitle: '',
                drawerStyle: {
                    borderTopRightRadius: 30,
                },
            }} />
            {/* <Drawer.Screen name="EditProfile" component={EditProfile} options={{
                headerTitle: '',
                title: 'Edit Profile',
            }} /> */}
            {/* <Drawer.Screen name="Cart" component={Cart} options={{
                headerTitle: ''
            }} /> */}
            {/* <Drawer.Screen name="Products" component={Products} options={{
                headerTitle: '',
                title: 'All Menu'
            }} /> */}
        </Drawer.Navigator>
    );
}