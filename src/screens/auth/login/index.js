import { Text, View, ScrollView, Image, Pressable, FlatList, TextInput, ImageBackground, SafeAreaView, ToastAndroid } from 'react-native';
import global from '../../../styles/global'
import styles from './style'
import { useRef, useState } from 'react';
import { FormItem } from 'react-native-form-component';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { postLogin } from '../../../utils/https/auth';
import { useNavigation } from '@react-navigation/native';

export default function Login({ }) {
    const navigation = useNavigation()
    const [formLogin, setFormLogin] = useState({
        email: '',
        password: '',
    })
    const { emailInput, passwordInput } = useRef();

    const handleLogin = () => {
        postLogin(formLogin)
            .then((res) => {
                AsyncStorage.setItem('@userData', JSON.stringify(res.data.data))
                ToastAndroid.show('Successfully login.', ToastAndroid.SHORT)
                // setTimeout(() => {
                //     navigation.navigate('Welcome')
                // }, 2500);
            }).catch((err) => {
                ToastAndroid.show(err.response.data.message, ToastAndroid.SHORT)
                console.log(err.response)
            })
    }
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={require('../../../images/login_bg.png')} resizeMode="cover" style={styles.image} />
            <Text style={styles.title}>Login</Text>

            <View style={styles.loginForm}>
                <FormItem
                    style={{ borderRadius: 10, opacity: 0.85 }}
                    placeholder='Enter your email adress'
                    isRequired
                    keyboardType='email-address'
                    onChangeText={(text) => setFormLogin({ ...formLogin, email: text })}
                    asterik
                    value={formLogin.email}
                    ref={emailInput}
                    autoCapitalize='none'
                />
                <FormItem
                    style={{ borderRadius: 10, opacity: 0.85 }}
                    placeholder='Enter your password'
                    isRequired
                    onChangeText={(text) => setFormLogin({ ...formLogin, password: text })}
                    asterik
                    value={formLogin.password}
                    ref={passwordInput}
                    secureTextEntry={true}
                    autoCapitalize='none'
                />
                <Text
                    style={{ color: '#fff', fontWeight: '700', textDecorationLine: "underline" }}
                    onPress={() => { navigation.navigate('ForgotPassword') }}
                >
                    Forgot password?
                </Text>
            </View>

            <Pressable onPress={handleLogin} >
                <Text style={[global.btn_primary, styles.login]}>Login</Text>
            </Pressable>
            <Pressable>
                <View style={{ position: 'absolute', bottom: 45, left: 20 }}>
                    <Image source={require('../../../images/google_logo.png')} style={styles.google} />
                    <Text style={[global.btn_primary, styles.loginGoogle]}>Login with Google</Text>
                </View>
            </Pressable>
        </View>
    );
}

