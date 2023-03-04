import { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from './welcome';
import GetStarted from './get-started';
import Login from './login';
import Signup from './signup';
import ForgotPassword from './forgot-password';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

export default function Auth() {
    const navigation = useNavigation()
    const getUserData = async () => {
        try {
            const value = await AsyncStorage.getItem('@userData')
            if (value !== null) {
                navigation.replace("Home")
            }
        } catch (e) {
            // error reading value
        }
    }
    useEffect(() => {
        getUserData()
    })

    return (
        <Stack.Navigator id="Auth">
            <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
            <Stack.Screen name="GetStarted" component={GetStarted} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}
