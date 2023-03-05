import { Text, View, ScrollView, Image, Pressable, FlatList, TextInput, Button } from 'react-native';
import global from '../../../styles/global'
import styles from './style'
import Modal from "react-native-modal";
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons, Fontisto, AntDesign, FontAwesome5 } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../../../redux/cartReducer';

export default function PaymentStatus({ route }) {
    const navigation = useNavigation()
    const { totalPayment, tax, total, time } = route.params

    // REDUX
    const cart = useSelector((state) => state.cart.cart);
    // console.log(cart);
    const dispatch = useDispatch();

    const [isModalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    return (
        <ScrollView style={{ paddingHorizontal: 40 }}>
            <View style={[{ display: 'flex', alignItems: 'flex-start', backgroundColor: '#F2F2F2', flex: 1 }]}>
                <Text style={styles.title}>Transaction Status</Text>
                <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'center', marginTop: 35 }}>
                    <Fontisto name='coffeescript' size={50} color={'#6A4029'} />
                    <View style={{ justifyContent: 'center' }}>
                        <Text style={{ paddingLeft: 20, fontSize: 25, fontWeight: '700' }}>YANNN COFFEE</Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 50 }}>
                    <Text style={{ paddingLeft: 10 }}>{time}</Text>
                </View>
                <View style={styles.lineBottom} />
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <AntDesign name='checkcircle' color={'green'} size={30} />
                    <Text style={{ paddingLeft: 10 }}>Transaction succes!</Text>
                </View>

                {/* Detail list start */}
                <View style={{ marginTop: 15 }}>
                    {cart.map((item, index) => {
                        const priceTimesQuantity = (item.price * item.quantity).toFixed(3);
                        return (
                            <View key={index}>
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
                    })}
                </View>

                <View style={[styles.lineBottom, { marginTop: 20, marginBottom: 0 }]} />
                <View style={{ marginTop: 20, marginBottom: 40 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', paddingHorizontal: 10 }}>
                        <Text style={{ fontSize: 16, fontWeight: '400' }}>Sub total</Text>
                        <Text>{`IDR ${total.toFixed(3)}`}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', paddingHorizontal: 10, marginVertical: 5 }}>
                        <Text style={{ fontSize: 16, fontWeight: '400' }}>Tax & Fee</Text>
                        <Text>{`IDR ${tax.toFixed(3)}`}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', paddingHorizontal: 10 }}>
                        <Text style={{ fontSize: 16, fontWeight: '400' }}>Payment Method</Text>
                        <Text style={{ fontSize: 16, fontWeight: '400' }}>Bank Transfer</Text>
                    </View>
                    <View style={styles.totalPayment}>
                        <Text style={{ fontSize: 16, fontWeight: '700' }}>Total Payment</Text>
                        <Text style={{ fontSize: 16, fontWeight: '700' }}>{`IDR ${totalPayment.toFixed(3)}`}</Text>
                    </View>
                </View>

                <Pressable style={[global.btn_primary, styles.confirmAndCheckout]} onPress={toggleModal}>
                    <Text style={{ color: 'white', fontSize: 18, fontWeight: '700' }}>Order more coffee</Text>
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
                            <Text style={{ fontSize: 28, fontWeight: '600', paddingBottom: 10 }}>THANK YOU</Text>
                            <FontAwesome5 name="handshake" color={'green'} size={100} style={styles.cart} />
                            <Text style={{ fontSize: 16.5, textAlign: 'center' }}>Please wait, we'll deliver your order soon, enjoy!</Text>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingTop: 20 }}>
                            <Pressable onPress={() => {
                                cart.forEach(item => {
                                    dispatch(removeFromCart(item))
                                })
                                navigation.navigate('Home')
                            }} style={{ backgroundColor: '#04AA6D', paddingHorizontal: 40, paddingVertical: 15, borderRadius: 20, marginLeft: 10, elevation: 3 }}>
                                <Text style={{ color: 'white' }}>OKAY!</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>
                {/* Modal end */}
            </View>
        </ScrollView>
    )
}
