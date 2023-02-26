import { Text, View, ScrollView, Image, Pressable, FlatList, TextInput } from 'react-native';
import global from '../../styles/global'
import styles from './style'

export default function Payment({ navigation }) {
    return (
        <View style={[global.px_container, { display: 'flex', alignItems: 'center', backgroundColor: '#F2F2F2', flex: 1 }]}>
            <Text>Payment</Text>
            <Pressable onPress={() => {
                navigation.navigate('History')
            }} >
                <Text style={[global.btn_primary, styles.confirmAndCheckout]}>Pay Now</Text>
            </Pressable>
        </View>
    )
}
