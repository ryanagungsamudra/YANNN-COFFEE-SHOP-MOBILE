import { Text, View, ScrollView, Image, Pressable, FlatList, TextInput, ImageBackground } from 'react-native';
import global from '../../../styles/global'
import styles from './style'

export default function GetStarted({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={require('../../../images/getstarted_bg.png')} resizeMode="cover" style={styles.image} />
            <Text style={styles.title}>Welcome!</Text>
            <Text style={styles.desc}>Get a cup of coffee for free every {'\n'}sunday morning</Text>
            <Pressable>
                <Text style={[global.btn_primary, styles.signup]} onPress={() => {
                    navigation.navigate('Signup')
                }} >Create New Account</Text>
            </Pressable>
            <Pressable>
                <Text style={[global.btn_primary, styles.login]} onPress={() => {
                    navigation.navigate('Login')
                }} >Login</Text>
            </Pressable>
        </View>
    );
}

