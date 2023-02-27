import { Text, View, ScrollView, Image, Pressable, FlatList, TextInput, SafeAreaView } from 'react-native';
import global from '../../../styles/global'
import styles from './style'
import { useState } from 'react';

export default function ForgotPassword({ navigation }) {
    const [email, onChangeEmail] = useState('');

    return (
        <View style={[global.bg, global.px_container]}>
            <Text style={styles.title}>Don’t {'\n'}Worry!</Text>
            <Text style={styles.desc}>Enter your email adress to get {'\n'}reset password link</Text>
            <Image source={require('../../../images/forgot_bg.png')} style={{ marginLeft: 30, marginTop: 10 }} />

            <SafeAreaView style={{ width: '100%', marginTop: 40 }}>
                <TextInput
                    onChangeText={onChangeEmail}
                    value={email}
                    placeholder='Enter your email adress'
                    keyboardType='email-address'
                />
                <View style={{ borderBottomWidth: 0.8, borderBottomColor: '#9F9F9F', marginTop: 10 }} />
            </SafeAreaView>

            <Text style={styles.desc}>Haven’t received any link?</Text>
            <Pressable>
                <Text style={[global.btn_primary, styles.resend]}>Resend Link</Text>
            </Pressable>
        </View>
    );
}

