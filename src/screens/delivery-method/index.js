import { Text, View, ScrollView, Image, Pressable, FlatList, TextInput } from 'react-native';
import global from '../../styles/global'
import styles from './style'

export default function DeliveryMethod({ navigation }) {
    return (
        <View style={[global.px_container, { display: 'flex', alignItems: 'center', backgroundColor: '#F2F2F2', flex: 1 }]}>
            <Text>Delivery Method</Text>
            <Pressable onPress={() => {
                navigation.navigate('Payment')
            }} >
                <Text style={[global.btn_primary, styles.confirmAndCheckout]}>Confirm and Checkout</Text>
            </Pressable>
        </View>
    )
}
