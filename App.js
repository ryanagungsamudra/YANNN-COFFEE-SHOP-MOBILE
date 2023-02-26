import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens start
import Home from './src/screens/home'
import Profile from './src/screens/profile';
import Products from './src/screens/products';
import ProductDetails from './src/screens/product-detail';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import Cart from './src/screens/cart';
import DeliveryMethod from './src/screens/delivery-method';
import Payment from './src/screens/payment';
import History from './src/screens/history';
// Screens end

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={BottomTabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="Products" component={Products} options={{ title: 'Products' }} />
        <Stack.Screen name="ProductDetail" component={ProductDetails} options={{ title: 'Product Detail' }} />
        <Stack.Screen name="Cart" component={Cart} options={{ title: 'Cart' }} />
        <Stack.Screen name="DeliveryMethod" component={DeliveryMethod} options={{ title: 'DeliveryMethod' }} />
        <Stack.Screen name="Payment" component={Payment} options={{ title: 'Payment' }} />
        <Stack.Screen name="History" component={History} options={{ title: 'History' }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
