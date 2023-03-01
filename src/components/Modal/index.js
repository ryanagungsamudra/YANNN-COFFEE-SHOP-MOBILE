import React, { useEffect, useState } from "react";
import {
    Alert,
    Dimensions,
    FlatList,
    Image,
    Modal,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    ToastAndroid,
    View,
} from "react-native";

const [showModal, setShowModal] = useState({
    show: false,
    idProduct: '',
})

export default function Modal() {
    return (
        <Modal
            visible={modalDelete.show}
            transparent={true}
            animationType='fade'
        >
            <View style={{ flex: 1, backgroundColor: '#00000055', padding: '15%', paddingTop: '50%' }}>
                <View style={{
                    backgroundColor: '#fff', alignItems: 'center', paddingTop: 25, borderRadius: 25, overflow: 'hidden', elevation: 50,
                    //SUPPORT DI ANDROID 9 (PIE)
                    shadowColor: '#fe3f56'
                }}>
                    <Icon size={32} color={'#fe3f56'} style={{
                        borderRadius: 100,
                        padding: 10,
                        backgroundColor: '#fef4f5'
                    }} name="trash-can-outline" />
                    <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#333', marginBottom: 10 }}>Delete Product</Text>
                    <Text>Kamu Yakin mau delete product ini?</Text>
                    <View style={[commonStyle.row, { marginTop: 25 }]}>
                        <Pressable style={{ backgroundColor: '#f4f4f6', flex: 1, padding: 15 }}
                            onPress={() => setShowModal({ show: false, idProduct: '' })}
                        >
                            <Text style={{ textAlign: 'center' }}>No</Text>
                        </Pressable>
                        <Pressable style={{ backgroundColor: '#fe3f56', flex: 1, padding: 15 }}
                            // onPress={() => handleDelete(modalDelete.idProduct)}
                            onPress={() => console.log(showModal.idProduct)}
                        >
                            <Text style={{ textAlign: 'center', color: 'white' }}>Yes</Text>
                        </Pressable>

                    </View>
                </View>
            </View>
        </Modal>
    )
}
