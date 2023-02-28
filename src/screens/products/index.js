import { Text, View, FlatList, Image, Pressable } from 'react-native';
import global from '../../styles/global'
import styles from './style'
import { useEffect, useState } from 'react';
import { API_URL } from '@env'
import { getProducts } from '../../utils/https/products';
import { useNavigation } from '@react-navigation/native';

export default function Products() {
    const navigation = useNavigation()
    const [dataProductsLeft, setDataProductsLeft] = useState([])
    const [dataProductsRight, setDataProductsRight] = useState([])
    useEffect(() => {
        const limitPage = '15'
        getProducts(`page=1&limit=${limitPage}`)
            .then((res) => {
                // console.log(Math.floor(res.data.data.length / 2));
                setDataProductsLeft(res.data.data)
            })
            .catch((err) => console.log(err.message))
        getProducts(`page=2&limit=${limitPage}`)
            .then((res) => {
                // console.log(Math.floor(res.data.data.length / 2));
                setDataProductsRight(res.data.data)
            })
            .catch((err) => console.log(err.message))
    }, [])
    return (
        <View style={global.bg}>
            <Text style={styles.title}>Choose your favorite</Text>

            {/* View all product start */}

            {/* Left content start */}
            <FlatList
                style={{ marginLeft: 10, marginBottom: -290 }}
                showsVerticalScrollIndicator={false}
                data={dataProductsLeft}
                renderItem={({ item, index }) => {
                    return (
                        <Pressable
                            key={index}
                            style={styles.cardWrap}
                            onPress={() => { navigation.navigate('ProductDetail', item) }}
                            android_ripple={{
                                color: "#6A4029",
                                foreground: true,
                                borderless: true,
                                radius: 40
                            }}>
                            <Image
                                source={{
                                    uri: `${API_URL}/uploads/images/${item.images[0].filename}`,
                                }}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    position: 'absolute',
                                    marginTop: 10,
                                    zIndex: 2,
                                    resizeMode: 'cover'
                                }}
                            />
                            <View style={styles.card}>
                                <Text style={styles.productTitle}>{item.title}</Text>
                                <Text style={styles.productPrice}>{`IDR ${item.price}`}</Text>
                            </View>
                        </Pressable>
                    )
                }}>
            </FlatList>
            {/* left content end */}
            {/* right content start */}
            <FlatList
                style={{ marginLeft: 190, marginTop: -315, marginBottom: 15 }}
                showsVerticalScrollIndicator={false}
                data={dataProductsRight}
                renderItem={({ item, index }) => {
                    return (
                        <Pressable
                            key={index}
                            style={styles.cardWrap}
                            onPress={() => { navigation.navigate('ProductDetail', item) }}
                            android_ripple={{
                                color: "#6A4029",
                                foreground: true,
                                borderless: true,
                                radius: 40
                            }}>
                            <Image
                                source={{
                                    uri: `${API_URL}/uploads/images/${item.images[0].filename}`,
                                }}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    position: 'absolute',
                                    marginTop: 10,
                                    zIndex: 2,
                                    resizeMode: 'cover'
                                }}
                            />
                            <View style={styles.card}>
                                <Text style={styles.productTitle}>{item.title}</Text>
                                <Text style={styles.productPrice}>{`IDR ${item.price}`}</Text>
                            </View>
                        </Pressable>
                    )
                }}>
            </FlatList>
            {/* right content end */}

            {/* View all product end */}

        </View>
    );
}

