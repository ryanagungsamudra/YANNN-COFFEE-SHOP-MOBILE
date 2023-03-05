import { Text, View, ScrollView, Image, Pressable, FlatList, TextInput, ToastAndroid } from 'react-native';
import global from '../../styles/global'
import styles from './style'
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { getUserData, getUserHistory } from '../../utils/https/auth';
import { API_URL } from '@env'

export default function History() {
    const navigation = useNavigation()
    const [dataHistory, setDataHistory] = useState([])
    const [refetch, setRefetch] = useState(false)

    useEffect(() => {
        getUserData()
    }, [refetch])

    const getUserData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('@userData')
            if (jsonValue != null) {
                const idUser = ((JSON.parse(jsonValue)).user.id);
                getUserHistory(idUser)
                    .then(res => {
                        setDataHistory(res.data.data.history)
                        setTimeout(() => {
                            setRefetch(!refetch)
                        }, 2500);
                    })
            }
        } catch (err) {
            ToastAndroid.show(err)
        }
    }

    return (
        <View style={[global.px_container, { display: 'flex', alignItems: 'center', backgroundColor: '#F2F2F2', flex: 1, marginTop: 40 }]}>
            <Text style={styles.header}>Order History</Text>

            {/* No history background */}
            {(dataHistory.length < 1) ? (
                <>
                    <Image
                        source={require('../../images/nohistory.png')}
                        style={{ marginTop: 200, marginRight: 20 }}
                    />
                    <Text style={{ marginTop: 25, textAlign: 'center', fontSize: 28, fontWeight: '900' }}>No history yet</Text>
                    <Text style={{ marginTop: 10, textAlign: 'center', fontSize: 17, fontWeight: '400', opacity: 0.57 }}>Hit the orange button down {'\n'}below to Create an order</Text>
                </>
            ) : (
                <></>
            )}
            {/* end */}

            <FlatList
                showsVerticalScrollIndicator={false}
                data={dataHistory}
                renderItem={({ item, index }) => {
                    return (
                        <View key={index} style={styles.card}>
                            <View style={{ width: '30%' }}>
                                <Image source={{
                                    uri: `${API_URL}/uploads/images/${item.product_image}`,
                                }} style={styles.hero} />
                            </View>
                            <View style={{ width: '70%' }}>
                                <Text style={styles.title}>{`${item.quantity} ${item.title}`}</Text>
                                <Text style={styles.price}>{`IDR ${item.price}`}</Text>
                                <Text style={styles.status}>{item.time}</Text>
                            </View>
                        </View>
                    )
                }}>
            </FlatList>
            <Pressable style={{ marginTop: 50, marginBottom: 40 }}>
                <Text style={[global.btn_primary, styles.backToHome]} onPress={() => {
                    navigation.navigate('Home')
                }} >Back to home</Text>
            </Pressable>
        </View>
    )
}
