import { Text, View, ScrollView, Image, Pressable, FlatList, TextInput } from 'react-native';
import global from '../../styles/global'
import styles from './style'
import { useEffect, useState } from 'react';
import { API_URL } from '@env'
import { getProducts } from '../../utils/https/products';

export default function Home({ navigation }) {
    const [dataProducts, setDataProducts] = useState([])
    const [keyword, setKeyword] = useState('')
    const [filter, setFilter] = useState('')
    const [refetch, setRefetch] = useState(false)

    const url = (keyword) => {
        const limitPage = '7'
        if (keyword != "") {
            return getProducts(`search=${keyword}&limit=${limitPage}&sortBy=desc`)
        }
        else {
            return getProducts(`category=${filter}&limit=${limitPage}&sortBy=desc`)
        }
    }
    useEffect(() => {
        // getProducts(`search=${keyword}&limit=5&sortBy=desc&category=${filter}`)
        url(keyword)
            .then((res) => setDataProducts(res.data.data))
            .catch((err) => console.log(err.message))
    }, [refetch, keyword, filter])

    return (
        <View style={global.bg}>
            <Text style={styles.title}>A good coffee is {'\n'}a good day</Text>

            <TextInput
                style={styles.searchInput}
                placeholder="Search anything you want"
                onChangeText={(search) => setKeyword(search)} />
            {/* Product Card Start */}
            <View>
                <ScrollView style={{ marginTop: 30, marginBottom: 20 }} horizontal showsHorizontalScrollIndicator={false}>
                    <Text style={[styles.breadcumb, { marginBottom: 20, marginTop: 15 }]} onPress={() => setFilter('')}>Favorite & Promo</Text>
                    <Text style={[styles.breadcumb, { marginBottom: 20, marginTop: 15 }]} onPress={() => setFilter('coffee')}>Coffee</Text>
                    <Text style={[styles.breadcumb, { marginBottom: 20, marginTop: 15 }]} onPress={() => setFilter('non coffee')}>Non Coffee</Text>
                    <Text style={[styles.breadcumb, { marginBottom: 20, marginTop: 15 }]} onPress={() => setFilter('foods')}>Foods</Text>
                    <Text style={[styles.breadcumb, { marginBottom: 20, marginTop: 15, marginRight: 40 }]} onPress={() => setFilter('add-on')}>Add-on</Text>
                </ScrollView>
                <Text style={styles.seeMore} onPress={() => { navigation.navigate('Products') }}>See more</Text>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={dataProducts}
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
                                        width: "110%",
                                        height: "110%",
                                        position: "absolute",
                                        top: 15,
                                        zIndex: 2,
                                        resizeMode: "cover",
                                    }}
                                />
                                <View style={styles.card}>
                                    <Text style={styles.productTitle}>{item.title}</Text>
                                    <Text style={[styles.productPrice, { marginBottom: 25 }]}>{`IDR ${item.price}`}</Text>
                                </View>
                            </Pressable>
                        )
                    }}>
                </FlatList>
                {/* Jangan gunakan scrolllview ketika berhubungan dengan data apalagi mapping data, gunakan flatlist */}
            </View>
            {/* Product Card End */}
        </View>
    );
}

