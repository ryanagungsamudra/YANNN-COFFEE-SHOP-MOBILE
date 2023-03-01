import { Text, View, ScrollView, Image, Pressable, FlatList, TextInput, ImageBackground, ToastAndroid } from 'react-native';
import global from '../../../styles/global'
import styles from './style'
import { useRef, useState } from 'react';
import { FormItem } from 'react-native-form-component';
import { postRegist } from '../../../utils/https/auth';
import { useNavigation } from '@react-navigation/native';

export default function Signup({ }) {
    const navigation = useNavigation()
    // const [email, onChangeEmail] = useState('');
    // const [password, onChangePassword] = useState('');
    // const [phone, onChangePhone] = useState('');

    // const emailInput = useRef();
    // const passwordInput = useRef();
    // const phoneInput = useRef();

    const [formSignup, setFormSignup] = useState({
        name: '',
        email: '',
        password: '',
        mobile_number: '',
    })
    const { name, emailInput, passwordInput, phoneInput } = useRef();


    const handleSignup = () => {
        postRegist(formSignup)
            .then((res) => {
                ToastAndroid.show('Successfully login.', ToastAndroid.SHORT)
                setTimeout(() => {
                    navigation.navigate('Login')
                }, 2500);
            }).catch((err) => {
                ToastAndroid.show(err.response.data.message, ToastAndroid.SHORT)
                console.log(err.response)
            })
    }
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={require('../../../images/signup_bg.png')} resizeMode="cover" style={styles.image} />
            <Text style={styles.title}>Sign Up</Text>

            {/* Form start */}
            <View style={styles.signupForm}>
                <FormItem
                    style={{ borderRadius: 10, opacity: 0.85 }}
                    placeholder='Enter your full name'
                    isRequired
                    value={formSignup.name}
                    onChangeText={(text) => setFormSignup({ ...formSignup, name: text })}
                    asterik
                    ref={name}
                />
                <FormItem
                    style={{ borderRadius: 10, opacity: 0.85 }}
                    placeholder='Enter your email adress'
                    isRequired
                    value={formSignup.email}
                    onChangeText={(text) => setFormSignup({ ...formSignup, email: text })}
                    asterik
                    keyboardType='email-address'
                    ref={emailInput}
                />
                <FormItem
                    style={{ borderRadius: 10, opacity: 0.85 }}
                    placeholder='Enter your password'
                    isRequired
                    value={formSignup.password}
                    onChangeText={(text) => setFormSignup({ ...formSignup, password: text })}
                    asterik
                    ref={passwordInput}
                    secureTextEntry={true}
                />
                <FormItem
                    style={{ borderRadius: 10, opacity: 0.85 }}
                    placeholder='Enter your phone number'
                    isRequired
                    value={formSignup.mobile_number}
                    onChangeText={(text) => setFormSignup({ ...formSignup, mobile_number: text })}
                    asterik
                    keyboardType='phone-pad'
                    ref={phoneInput}
                />
            </View>
            {/* Form end */}

            <Pressable>
                <Text style={[global.btn_primary, styles.login]} onPress={handleSignup} >Create Account</Text>
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

