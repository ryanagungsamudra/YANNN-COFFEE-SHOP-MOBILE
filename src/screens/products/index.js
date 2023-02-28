import { Text, View, FlatList, Image, Pressable } from 'react-native';
import global from '../../styles/global'
import styles from './style'
import { useEffect, useState } from 'react';
import { API_URL } from '@env'
import { getProducts } from '../../utils/https/products';

export default function Products({ navigation }) {
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
            <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                {/* {dataProducts.map(({ item, index }) => {
                    return (
                        <Pressable key={index} style={styles.cardWrap} onPress={() => {
                            navigation.navigate('ProductDetail')
                        }}>
                            <Image source={require('../../images/p1.png')} style={{
                                width: '60%',
                                position: 'absolute',
                                marginTop: -10,
                                zIndex: 2,
                                resizeMode: 'contain'
                            }} />
                            <View style={styles.card}>
                                <Text style={styles.productTitle}>Hazelnut Latte</Text>
                                <Text style={styles.productPrice}>IDR 25.000</Text>
                            </View>
                        </Pressable>
                    )
                })} */}
            </View>

            <FlatList
                style={{ marginLeft: 10, marginBottom: -290 }}
                showsVerticalScrollIndicator={false}
                data={dataProductsLeft}
                renderItem={({ item, index }) => {
                    return (
                        <Pressable key={index} style={styles.cardWrap} onPress={() => {
                            navigation.navigate('ProductDetail')
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

            <FlatList
                style={{ marginLeft: 190, marginTop: -315, marginBottom: 15 }}
                showsVerticalScrollIndicator={false}
                data={dataProductsRight}
                renderItem={({ item, index }) => {
                    return (
                        <Pressable key={index} style={styles.cardWrap} onPress={() => {
                            navigation.navigate('ProductDetail')
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

            {/* View all product end */}
        </View>
    );
}

