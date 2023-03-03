import { Text, View, ScrollView, Image, Pressable, FlatList, TextInput } from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';
import global from '../../styles/global'
import styles from './style'
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function DeliveryMethod() {
    const navigation = useNavigation()
    // const { id, title, price, category, productImage, productQuantity, totalPrice } = route.params

    const [radioButtons, setRadioButtons] = useState([
        {
            id: '1',
            label: 'Door delivery',
            value: 'Door delivery'
        },
        {
            id: '2',
            label: 'Pick up at store',
            value: 'Pick up at store'
        },
        {
            id: '3',
            label: 'Dine in',
            value: 'Dine in'
        }
    ]);
    function onPressRadioButton(radioButtonsArray) {
        setRadioButtons(radioButtonsArray);
    }
    return (
        <View style={[global.px_container, { display: 'flex', alignItems: 'flex-start', backgroundColor: '#F2F2F2', flex: 1 }]}>
            <Text style={styles.title}>Delivery</Text>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 30 }}>
                <Text style={styles.address}>Address details</Text>
                <Text style={styles.change}>change</Text>
            </View>
            <View style={[styles.card]}>
                <Text style={{ fontSize: 17, fontWeight: '500' }}>Iskandar Street</Text>
                <Text style={{ fontSize: 15, fontWeight: '400' }}>Km 5 refinery road oppsite republic road, effurun, Jakarta</Text>
                <Text style={{ fontSize: 15, fontWeight: '400' }}>+62 81348287878</Text>
            </View>

            <Text style={[styles.delivery, { marginTop: 30 }]}>Delivery methods</Text>
            <View style={[styles.card, { height: 135 }]}>
                <RadioGroup
                    radioButtons={radioButtons}
                    onPress={onPressRadioButton}
                    containerStyle={styles.radioButtons}
                />
                {/* <Text style={{ fontSize: 17, fontWeight: '400' }}>Door delivery</Text>
                <Text style={{ fontSize: 17, fontWeight: '400' }}>Pick up at store</Text>
                <Text style={{ fontSize: 17, fontWeight: '400' }}>Dine in</Text> */}
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 35 }}>
                <Text style={styles.total}>Total</Text>
                <Text style={styles.price}>{`IDR 120.000`}</Text>
            </View>

            <Pressable>
                <Text style={[global.btn_primary, styles.confirmAndCheckout]} onPress={() => {
                    navigation.navigate('Payment')
                }} >Confirm and Checkout</Text>
            </Pressable>
        </View>
    )
}
