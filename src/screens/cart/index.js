import { Text, View, ScrollView, Image, Pressable, FlatList, TextInput } from 'react-native';
import global from '../../styles/global'
import styles from './style'
import SelectDropdown from 'react-native-select-dropdown'
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { API_URL } from '@env'

export default function Cart({ route }) {
    const navigation = useNavigation()
    const { id, title, price, category, productImage } = route.params
    const [dataCart, setDataCart] = useState([0])

    const quantity = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    const [dataPrice, setDataPrice] = useState()
    const totalPrice = (parseInt(price) * (dataPrice || 1)) * 1000
    return (
        <View style={[global.px_container, { display: 'flex', alignItems: 'center', backgroundColor: '#F2F2F2', flex: 1 }]}>
            <View style={styles.cardWrap}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={dataCart}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={styles.card}>
                                <Image
                                    source={{
                                        uri: `${API_URL}/uploads/images/${productImage}`,
                                    }}
                                    style={styles.hero} />
                                <View style={{ marginRight: 0 }}>
                                    <Text style={styles.title}>{title}</Text>
                                    <Text style={styles.price}>{`IDR ${totalPrice}`}</Text>
                                </View>
                                <SelectDropdown
                                    data={quantity}
                                    onSelect={(selectedItem, index) => {
                                        // console.log(selectedItem, index)
                                        setDataPrice(selectedItem)
                                    }}
                                    buttonTextAfterSelection={(selectedItem, index) => {
                                        // text represented after item is selected
                                        // if data array is an array of objects then return selectedItem.property to render after item is selected
                                        return selectedItem
                                    }}
                                    rowTextForSelection={(item, index) => {
                                        // text represented for each item in dropdown
                                        // if data array is an array of objects then return item.property to represent item in dropdown
                                        return item
                                    }}
                                    dropdownStyle={{ borderRadius: 10, marginTop: -25 }}
                                    buttonStyle={{ width: 60, backgroundColor: '#fff', borderWidth: 0.15, borderRadius: 5, marginHorizontal: 10 }}
                                    defaultValue={1}
                                />
                            </View>
                        )
                    }}>
                </FlatList>
            </View>

            <Pressable style={{ position: 'absolute', bottom: 40, right: 45 }}>
                <Text style={[global.btn_primary, styles.confirmAndCheckout]} onPress={() => {
                    navigation.navigate('DeliveryMethod', { id, title, price, category, productImage, totalPrice })
                }} >Confirm and Checkout</Text>
            </Pressable>
        </View>
    )
}
