import { Text, View, ScrollView, Image, Pressable, FlatList, TextInput, Button, ToastAndroid } from 'react-native';
import global from '../../styles/global'
import styles from './style'
import Modal from "react-native-modal";
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useSelector } from 'react-redux';
import { postOrder } from '../../utils/https/products';
import { getUserData } from '../../utils/https/auth';

export default function Payment({ route }) {
    const navigation = useNavigation()
    const { totalPriceState } = route.params

    // REDUX
    const cart = useSelector((state) => state.cart.cart);

    // Summary start
    const subtotal = totalPriceState
    const tax = (totalPriceState * 0.1)
    const total = subtotal + tax
    // Summary end

    const [isModalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    // Handle post order
    const date = new Date()
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let day = date.getDate();
    let month = months[date.getMonth()];
    let year = date.getFullYear()
    let time = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    let currentDate = `${day} ${month} ${year} - ${time}`;

    // Get user data
    const [userData, setUserData] = useState([])
    useEffect(() => {
        getUserData(setUserData)
    }, [])

    const handlePayment = () => {
        cart.forEach(item => {
            const body = {
                id_user: userData.user.id,
                title: item.title,
                price: (item.price * item.quantity).toFixed(3),
                category: item.category,
                quantity: item.quantity,
                delivery: '',
                time: currentDate,
                product_image: item.images[0].filename,
            }
            postOrder(body)
                .then(res => {
                    navigation.navigate('PaymentStatus', { totalPayment: total, tax: tax, total: subtotal, time: currentDate })
                })
                .catch(err => {
                    ToastAndroid.show('Successfully login.', ToastAndroid.SHORT)
                })
        })
    }

    return (
        <View style={[global.px_container, { display: 'flex', alignItems: 'flex-start', backgroundColor: '#F2F2F2', flex: 1 }]}>
            <Text style={styles.title}>Payment Methods</Text>
            <Image source={require('../../images/card.png')} style={styles.hero} />

            {/* Detail list start */}
            <FlatList
                style={{ height: '45%' }}
                showsVerticalScrollIndicator={false}
                data={cart}
                renderItem={({ item, index }) => {
                    const priceTimesQuantity = (item.price * item.quantity).toFixed(3);
                    return (
                        <View key={index}>
                            <View style={styles.lineBottom} />
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, justifyContent: 'space-around', width: '100%' }}>
                                <View style={{ width: '35%' }}>
                                    <Text style={styles.product}>{`${item.quantity} ${item.title}`}</Text>
                                    <Text style={styles.size}>Regular</Text>
                                </View>
                                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', width: '62%' }}>
                                    <Text style={styles.price}>{`IDR ${priceTimesQuantity}`}</Text>
                                </View>
                            </View>
                        </View>
                    )
                }}
            />
            {/* Detail list end */}

            {/* Scroll down if data length > 4 */}
            {(cart.length > 3) ? (
                <View style={{ justifyContent: 'center', width: '100%', alignItems: 'center', marginBottom: -17 }}>
                    <Text style={{ fontSize: 14 }}>Swipe Up</Text>
                    <MaterialCommunityIcons name='gesture-swipe-up' size={30} color='#895537' />
                </View>
            ) : (
                <></>
            )}

            {/* Summary start */}
            <View style={{ marginBottom: 20 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20, justifyContent: 'space-between', width: '100%' }}>
                    <Text style={{ fontSize: 16 }}>Subtotal</Text>
                    <Text style={{ fontSize: 16 }}>{`IDR ${subtotal.toFixed(3)}`}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20, justifyContent: 'space-between', width: '100%' }}>
                    <Text style={{ fontSize: 16 }}>Tax</Text>
                    <Text style={{ fontSize: 16 }}>{`IDR ${tax.toFixed(3)}`}</Text>
                </View>
            </View>
            {/* Summary end */}

            {/* Total start */}
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%', marginBottom: 20 }}>
                <Text style={{ fontSize: 20, fontWeight: '700' }}>Total</Text>
                <Text style={{ fontSize: 20, fontWeight: '700' }}>{`IDR ${total.toFixed(3)}`}</Text>
            </View>
            {/* Total end */}

            <Pressable style={{ marginTop: -20, marginBottom: 25 }}>
                <Text style={[global.btn_primary, styles.confirmAndCheckout]}
                    // onPress={() => { navigation.navigate('History')}}
                    onPress={toggleModal}
                >Pay Now</Text>
            </Pressable>

            {/* Modal start */}
            <Modal isVisible={isModalVisible} animationIn={'zoomIn'} animationOut={'zoomOut'}>
                <View style={{
                    // flex: 1,
                    backgroundColor: '#fff',
                    paddingVertical: 20,
                    width: '95%',
                    borderRadius: 15,
                    marginLeft: 10,
                }}>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 28, fontWeight: '600', paddingBottom: 10 }}>Confirm your order</Text>
                        <MaterialCommunityIcons name="alert-circle-check" color={'green'} size={100} style={styles.cart} />
                        {/* <Text style={{ fontSize: 16.5 }}>{`${title} : ${productQuantity}`}</Text> */}
                        <Text style={{ fontSize: 16.5 }}>{`Total transaction : IDR ${total.toFixed(3)}`}</Text>
                        <Text style={{ fontSize: 16.5 }}>Are you sure?</Text>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingTop: 20 }}>
                        <Pressable style={{ backgroundColor: '#ccc', paddingHorizontal: 40, paddingVertical: 15, borderRadius: 20, marginRight: 10, elevation: 3 }} onPress={toggleModal}><Text>NO</Text></Pressable>
                        <Pressable style={{ backgroundColor: '#04AA6D', paddingHorizontal: 40, paddingVertical: 15, borderRadius: 20, marginLeft: 10, elevation: 3 }} onPress={handlePayment}><Text style={{ color: 'white' }}>YES</Text></Pressable>
                    </View>
                </View>
            </Modal>
            {/* Modal end */}
        </View>
    )
}
