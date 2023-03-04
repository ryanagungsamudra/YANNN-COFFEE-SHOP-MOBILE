import { Text, View, ScrollView, Image, Pressable, FlatList, TextInput, ToastAndroid } from 'react-native';
import global from '../../styles/global'
import styles from './style'
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { API_URL } from '@env'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, decrementQuantity, incrementQuantity, removeFromCart } from '../../redux/cartReducer';
import { MaterialCommunityIcons } from '@expo/vector-icons'

export default function Cart() {
    const navigation = useNavigation()

    // REDUX
    var totalPrice = 0
    const [totalPriceState, setTotalPriceState] = useState('')

    const cart = useSelector((state) => state.cart.cart);
    // console.log(cart);
    const dispatch = useDispatch();

    const increaseQuantity = (item) => {
        dispatch(incrementQuantity(item))
    }
    const decreaseQuantity = (item) => {
        if (item.quantity == 1) {
            dispatch(removeFromCart(item))
            setTotalPriceState(null)
        } else {
            dispatch(decrementQuantity(item))
        }
    }

    return (
        <View style={[global.px_container, { display: 'flex', alignItems: 'center', backgroundColor: '#F2F2F2', flex: 1 }]}>
            <View style={styles.cardWrap}>
                <FlatList
                    style={{ height: '65%' }}
                    showsVerticalScrollIndicator={false}
                    data={cart}
                    renderItem={({ item, index }) => {
                        totalPrice += parseInt(item.price) * item.quantity
                        setTotalPriceState(totalPrice.toFixed(3))

                        const price = (parseInt(item.price) * item.quantity).toFixed(3)
                        return (
                            <View key={index} style={styles.card}>
                                <View style={{ width: '30%' }}>
                                    <Image
                                        source={{
                                            uri: `${API_URL}/uploads/images/${item.images[0].filename}`,
                                        }}
                                        style={styles.hero} />
                                </View>

                                <View style={{ width: '40%' }}>
                                    <Text style={styles.title}>{item.title}</Text>
                                    <Text style={styles.price}>{`IDR ${price}`}</Text>
                                </View>

                                {/* Quantity prodcut */}
                                <View style={{ width: '30%', flexDirection: 'row', backgroundColor: '#FFBA33', borderRadius: 10, borderColor: '#895537', borderWidth: 1, justifyContent: 'center', paddingVertical: 6 }}>
                                    <Pressable onPress={() => decreaseQuantity(item)}>
                                        <Text style={{ fontSize: 20, color: "#000", paddingHorizontal: 10 }}>
                                            -
                                        </Text>
                                    </Pressable>
                                    <Pressable>
                                        <Text style={{ fontSize: 20, color: "#000", paddingHorizontal: 10 }}>
                                            {item.quantity}
                                        </Text>
                                    </Pressable>
                                    <Pressable onPress={() => increaseQuantity(item)}>
                                        <Text style={{ fontSize: 20, color: "#000", paddingHorizontal: 10 }}>
                                            +
                                        </Text>
                                    </Pressable>
                                </View>
                            </View>
                        )
                    }}>
                </FlatList>
            </View>

            {totalPriceState ? (
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                    <Text style={{ fontWeight: '500', fontSize: 18 }}>Total price:</Text>
                    <Text style={{ fontWeight: '500', fontSize: 15 }}>{totalPriceState}</Text>
                </View>
            ) : (
                <></>
            )}

            {/* Scroll down if data length > 4 */}
            {(cart.length > 4) ? (
                <>
                    <Text style={{ fontSize: 14 }}>Swipe Up</Text>
                    <MaterialCommunityIcons name='gesture-swipe-up' size={30} color='#895537' />
                </>
            ) : (
                <></>
            )}

            <Pressable style={{ position: 'absolute', bottom: 100, right: 45 }}>
                <Text style={[global.btn_primary, styles.addItem]} onPress={() => {
                    navigation.navigate('Products')
                }} >Add more item</Text>
            </Pressable>
            <Pressable style={{ position: 'absolute', bottom: 25, right: 45 }}>
                <Text style={[global.btn_primary, styles.confirmAndCheckout]} onPress={() => {
                    if (cart.length > 0) {
                        navigation.navigate('DeliveryMethod')
                    } else {
                        ToastAndroid.show('Please add product first', ToastAndroid.SHORT)
                    }
                }} >Confirm and Checkout</Text>
            </Pressable>
        </View>
    )
}
