import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/home'
import Profile from '../screens/Profile';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Notifications" component={Profile} />
        </Drawer.Navigator>
    );
}