import { Text, View, ScrollView, Image, Pressable, FlatList, TextInput, ImageBackground } from 'react-native';
import global from '../../../styles/global'
import styles from './style'
import { useRef, useState } from 'react';
import { FormItem } from 'react-native-form-component';

export default function Signup({ navigation }) {
    const [email, onChangeEmail] = useState('');
    const [password, onChangePassword] = useState('');
    const [phone, onChangePhone] = useState('');

    const emailInput = useRef();
    const passwordInput = useRef();
    const phoneInput = useRef();
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={require('../../../images/signup_bg.png')} resizeMode="cover" style={styles.image} />
            <Text style={styles.title}>Sign Up</Text>

            {/* Form start */}
            <View style={styles.signupForm}>
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
                <FormItem
                    style={{ borderRadius: 10, opacity: 0.85 }}
                    placeholder='Enter your phone number'
                    isRequired
                    value={phone}
                    onChangeText={(phone) => onChangePhone(phone)}
                    asterik
                    keyboardType='phone-pad'
                    ref={phoneInput}
                />
            </View>
            {/* Form end */}

            <Pressable>
                <Text style={[global.btn_primary, styles.login]} onPress={() => {
                    navigation.navigate('Login')
                }} >Create Account</Text>
            </Pressable>
            <Pressable>
                <View style={{ position: 'absolute', bottom: 45, left: 20 }}>
                    <Image source={require('../../../images/google_logo.png')} style={styles.google} />
                    <Text style={[global.btn_primary, styles.loginGoogle]}>Create with Google</Text>
                </View>
            </Pressable>
        </View>
    );
}

