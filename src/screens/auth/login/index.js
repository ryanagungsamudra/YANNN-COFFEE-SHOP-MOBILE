import { Text, View, ScrollView, Image, Pressable, FlatList, TextInput, ImageBackground, SafeAreaView } from 'react-native';
import global from '../../../styles/global'
import styles from './style'
import { useRef, useState } from 'react';
import { FormItem } from 'react-native-form-component';

export default function Login({ navigation }) {
    const [email, onChangeEmail] = useState('');
    const [password, onChangePassword] = useState('');

    const emailInput = useRef();
    const passwordInput = useRef();
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={require('../../../images/login_bg.png')} resizeMode="cover" style={styles.image} />
            <Text style={styles.title}>Login</Text>

            <View style={styles.loginForm}>
                <FormItem
                    style={{ borderRadius: 10, opacity: 0.85 }}
                    placeholder='Enter your email adress'
                    isRequired
                    value={email}
                    onChangeText={(email) => onChangeEmail(email)}
                    asterik
                    ref={emailInput}
                />
                <FormItem
                    style={{ borderRadius: 10, opacity: 0.85 }}
                    placeholder='Enter your password'
                    isRequired
                    value={password}
                    onChangeText={(password) => onChangePassword(password)}
                    asterik
                    ref={passwordInput}
                    secureTextEntry={true}
                />
                <Text
                    style={{ color: '#fff', fontWeight: '700', textDecorationLine: "underline" }}
                    onPress={() => { navigation.navigate('ForgotPassword') }}
                >
                    Forgot password?
                </Text>
            </View>

            <Pressable onPress={() => {
                navigation.navigate('Home')
            }} >
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

