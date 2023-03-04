import { Text, View, ScrollView, Image, Pressable, FlatList, TextInput, Button } from 'react-native';
import global from '../../styles/global'
import styles from './style'
import Modal from "react-native-modal";
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Payment({ route }) {
    const navigation = useNavigation()
    // const { id, title, price, category, productImage, productQuantity, totalPrice } = route.params

    const [isModalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    const handlePayment = () => {
        navigation.navigate('History')
    }

    return (
        <View style={[global.px_container, { display: 'flex', alignItems: 'flex-start', backgroundColor: '#F2F2F2', flex: 1 }]}>
            <Text style={styles.title}>Payment Methods</Text>
            <Image source={require('../../images/card.png')} style={styles.hero} />

            {/* Detail list start */}
            <View style={{ marginTop: 20 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20, justifyContent: 'space-evenly', width: '100%' }}>
                    <View>
                        <Text style={styles.product}>1 Hazelnut Latte</Text>
                        <Text style={styles.size}>Regular</Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', width: '62%' }}>
                        <Text style={styles.price}>IDR 20.000</Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20, justifyContent: 'space-evenly', width: '100%' }}>
                    <View>
                        <Text style={styles.product}>2 Hazelnut Latte</Text>
                        <Text style={styles.size}>Regular</Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', width: '62%' }}>
                        <Text style={styles.price}>IDR 40.000</Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20, justifyContent: 'space-evenly', width: '100%' }}>
                    <View>
                        <Text style={styles.product}>3 Hazelnut Latte</Text>
                        <Text style={styles.size}>Regular</Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', width: '62%' }}>
                        <Text style={styles.price}>IDR 60.000</Text>
                    </View>
                </View>
            </View>
            {/* Detail list end */}

            {/* Summary start */}
            <View style={{ marginTop: 20 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20, justifyContent: 'space-evenly', width: '100%', paddingRight: 10, paddingLeft: 10 }}>
                    <Text style={{ fontSize: 16 }}>Subtotal</Text>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', width: '90%' }}>
                        <Text style={{ fontSize: 16 }}>IDR 120.000</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20, justifyContent: 'space-evenly', width: '100%' }}>
                    <Text style={{ fontSize: 16 }}>Tax</Text>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', width: '90%' }}>
                        <Text style={{ fontSize: 16 }}>IDR 12.000</Text>
                    </View>
                </View>
            </View>
            {/* Summary end */}

            {/* Total start */}
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 40, justifyContent: 'space-evenly', width: '100%' }}>
                <Text style={{ fontSize: 20, fontWeight: '700' }}>Total</Text>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', width: '90%' }}>
                    <Text style={{ fontSize: 20, fontWeight: '700' }}>{`IDR 132.000`}</Text>
                </View>
            </View>
            {/* Total end */}

            <Pressable>
                <Text style={[global.btn_primary, styles.confirmAndCheckout]}
                    // onPress={() => { navigation.navigate('History')}}
                    onPress={toggleModal}
                >Pay Now</Text>
            </Pressable>

            {/* Modal start */}
            {/* <Modal isVisible={isModalVisible} animationIn={'zoomIn'} animationOut={'zoomOut'}>
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
                        <Text style={{ fontSize: 16.5 }}>{`${title} : ${productQuantity}`}</Text>
                        <Text style={{ fontSize: 16.5 }}>{`Total transaction : IDR ${totalPrice}`}</Text>
                        <Text style={{ fontSize: 16.5 }}>Are you sure?</Text>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingTop: 20 }}>
                        <Pressable style={{ backgroundColor: '#ccc', paddingHorizontal: 40, paddingVertical: 15, borderRadius: 20, marginRight: 10, elevation: 3 }} onPress={toggleModal}><Text>NO</Text></Pressable>
                        <Pressable style={{ backgroundColor: '#04AA6D', paddingHorizontal: 40, paddingVertical: 15, borderRadius: 20, marginLeft: 10, elevation: 3 }} onPress={handlePayment}><Text style={{ color: 'white' }}>YES</Text></Pressable>
                    </View>
                </View>
            </Modal> */}
            {/* Modal end */}
        </View>
    )
}
