import { Text, View, ScrollView, Image, Pressable, FlatList, TextInput, ImageBackground } from 'react-native';
import global from '../../../styles/global'
import styles from './style'

export default function Welcome({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={require('../../../images/welcome_bg.png')} resizeMode="cover" style={styles.image} />
            <Text style={styles.text}>Coffee for Everyone</Text>
            <Pressable>
                <Text style={[global.btn_primary, styles.getStarted]} onPress={() => {
                    navigation.navigate('GetStarted')
                }} >Get started</Text>
            </Pressable>
        </View>
    );
}

