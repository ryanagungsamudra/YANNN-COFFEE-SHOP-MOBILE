import { Text, View, ScrollView, Image, Pressable, FlatList, TextInput, ImageBackground, ToastAndroid } from 'react-native';
import global from '../../../styles/global'
import styles from './style'
import { useRef, useState } from 'react';
import { FormItem } from 'react-native-form-component';
import { postRegist } from '../../../utils/https/auth';
import { useNavigation } from '@react-navigation/native';

export default function Signup({ }) {
    const navigation = useNavigation()
    const [formSignup, setFormSignup] = useState({
        email: '',
        password: '',
        mobile_number: '',
        name: '',
    })
    const { nameInput, emailInput, passwordInput, phoneInput } = useRef();


    const handleSignup = () => {
        postRegist(formSignup)
            .then((res) => {
                ToastAndroid.show('Successfully Signup.', ToastAndroid.SHORT)
                setTimeout(() => {
                    navigation.navigate('Login')
                }, 500);
            }).catch((err) => {
                ToastAndroid.show(err.response.data.errors, ToastAndroid.SHORT)
            })
    }
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={require('../../../images/signup_bg.png')} resizeMode="cover" style={styles.image} >
                <Text style={styles.title}>Sign Up</Text>

                {/* Form start */}
                <ScrollView style={styles.signupForm}>
                    <FormItem
                        style={{ borderRadius: 10, opacity: 0.85 }}
                        placeholder='Enter your full name'
                        isRequired
                        value={formSignup.name}
                        onChangeText={(text) => setFormSignup({ ...formSignup, name: text })}
                        asterik
                        ref={nameInput}
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
                    {/* Form end */}

                    <View style={{ marginTop: 5 }}>
                        <Pressable>
                            <Text style={[global.btn_primary, styles.login]} onPress={handleSignup} >Create Account</Text>
                        </Pressable>
                        <Pressable style={{ marginTop: 20 }}>
                            <View style={{ position: 'relative' }}>
                                <Image source={require('../../../images/google_logo.png')} style={styles.google} />
                                <Text style={[global.btn_primary, styles.loginGoogle]}>Create with Google</Text>
                            </View>
                        </Pressable>
                    </View>
                </ScrollView>
            </ImageBackground>
        </View>
    );
}

