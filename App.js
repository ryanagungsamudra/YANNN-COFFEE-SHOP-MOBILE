// import * as React from 'react';
import 'react-native-gesture-handler';
import { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Screens start
// import Home from './src/screens/home'
// import Profile from './src/screens/profile';
import Products from './src/screens/products';
import ProductDetails from './src/screens/product-detail';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import Cart from './src/screens/cart';
import DeliveryMethod from './src/screens/checkout';
import Payment from './src/screens/payment';
import History from './src/screens/history';
import EditProfile from './src/screens/profile-edit';
import Auth from './src/screens/auth';
import Chat from './src/screens/communication/chat';
import { Provider } from 'react-redux';
import store from './src/redux/store';
// Screens end

const Stack = createNativeStackNavigator();

function App() {

  const [isLoggin, setIsLoggin] = useState({
    value: false, data: {}, routeName: ""
  })
  const getDataAuth = async () => {
    try {
      const value = await AsyncStorage.getItem('@userData')
      if (value !== null) {
        setIsLoggin({
          value: true,
          data: JSON.parse(value),
          routeName: "Home"
        })
      } else {
        setIsLoggin({
          value: false,
          data: {},
          routeName: "Auth"
        })
      }
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    getDataAuth()
  }, [isLoggin])

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          {/* {isLoggin.value ?
            (
              <>
                <Stack.Screen name="Home" component={() => <BottomTabNavigator setIsLoggin={setIsLoggin} isLoggin={isLoggin} />} options={{ headerShown: false }} />
                <Stack.Screen name="Products" component={Products} options={{ title: 'Products' }} />
                <Stack.Screen name="ProductDetail" component={ProductDetails} options={{ title: 'Product Detail' }} />
                <Stack.Screen name="Cart" component={Cart} options={{ title: 'Cart' }} />
                <Stack.Screen name="DeliveryMethod" component={DeliveryMethod} options={{ title: 'Checkout' }} />
                <Stack.Screen name="Payment" component={Payment} options={{ headerTitle: '' }} />
                <Stack.Screen name="History" component={History} options={{ headerTitle: '', headerShown: false }} />
                <Stack.Screen name="EditProfile" component={EditProfile} options={{ title: 'Edit Profile' }} />
                <Stack.Screen name="Chat" component={Chat} options={{ title: 'Chat' }} />
              </>
            )
            :
            (
              <>
                <Stack.Screen name="Auth" component={() => <Auth setIsLoggin={setIsLoggin} isLoggin={isLoggin} />} options={{ headerShown: false }} />
              </>
            )
          } */}
          <Stack.Screen name="Auth" component={Auth} options={{ headerShown: false }} />
          <Stack.Screen name="Home" component={BottomTabNavigator} options={{ headerShown: false }} />
          <Stack.Screen name="Products" component={Products} options={{ title: 'Products' }} />
          <Stack.Screen name="ProductDetail" component={ProductDetails} options={{ title: 'Product Detail' }} />
          <Stack.Screen name="Cart" component={Cart} options={{ title: 'Cart' }} />
          <Stack.Screen name="DeliveryMethod" component={DeliveryMethod} options={{ title: 'Checkout' }} />
          <Stack.Screen name="Payment" component={Payment} options={{ headerTitle: '' }} />
          <Stack.Screen name="History" component={History} options={{ headerTitle: '', headerShown: false }} />
          <Stack.Screen name="EditProfile" component={EditProfile} options={{ title: 'Edit Profile' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App;
