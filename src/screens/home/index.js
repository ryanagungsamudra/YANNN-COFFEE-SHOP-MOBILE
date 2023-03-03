import { Text, View, ScrollView, Image, Pressable, FlatList, TextInput } from 'react-native';
import global from '../../styles/global'
import styles from './style'
import { useEffect, useState } from 'react';
import { API_URL } from '@env'
import { useNavigation } from '@react-navigation/native';
import Navbar from '../../components/Navbar';
import { getProducts } from '../../utils/https/products';
import { getUserData } from '../../utils/https/auth';

export default function Home() {
    const navigation = useNavigation()
    const [dataProducts, setDataProducts] = useState([])
    const [keyword, setKeyword] = useState('')
    const [filter, setFilter] = useState('')
    const [refetch, setRefetch] = useState(false)

    const [userData, setUserData] = useState([])

    const url = (keyword) => {
        const limitPage = '10'
        if (keyword != "") {
            return getProducts(`search=${keyword}&limit=${limitPage}&sortBy=desc`)
        }
        else {
            return getProducts(`category=${filter}&limit=${limitPage}&sortBy=desc`)
        }
    }

    const loadProducts = () => {
        // getProducts(`search=${keyword}&limit=5&sortBy=desc&category=${filter}`)
        url(keyword)
            .then((res) => {
                setDataProducts(res.data.data)
                setTimeout(() => {
                    setRefetch(!refetch)
                }, 2500);
            })
            .catch((err) => alert(err.message))
    }

    useEffect(() => {
        loadProducts()
        getUserData(setUserData)
    }, [refetch, keyword, filter])

    return (
        <View style={global.bg} >
            <Navbar />

            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.title}>A good coffee is {'\n'}a good day</Text>

                <View style={{ position: 'relative' }}>
                    <Image
                        source={require('../../images/search.png')}
                        style={styles.searchIcon} />
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search anything you want"
                        onChangeText={(search) => setKeyword(search)} />
                </View>
                {/* Product Card Start */}
                <View>
                    <ScrollView style={{ marginTop: 30, marginBottom: 20 }} horizontal showsHorizontalScrollIndicator={false}>
                        <Text style={[styles.breadcumb, { marginBottom: 20, marginTop: 15 }]} onPress={() => setFilter('')}>Favorite & Promo</Text>
                        <Text style={[styles.breadcumb, { marginBottom: 20, marginTop: 15 }]} onPress={() => setFilter('coffee')}>Coffee</Text>
                        <Text style={[styles.breadcumb, { marginBottom: 20, marginTop: 15 }]} onPress={() => setFilter('non coffee')}>Non Coffee</Text>
                        <Text style={[styles.breadcumb, { marginBottom: 20, marginTop: 15 }]} onPress={() => setFilter('foods')}>Foods</Text>
                        <Text style={[styles.breadcumb, { marginBottom: 20, marginTop: 15, marginRight: 40 }]} onPress={() => setFilter('add-on')}>Add-on</Text>
                    </ScrollView>
                    <Text style={styles.seeMore} onPress={() => { navigation.navigate('Products') }}>View all</Text>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={dataProducts}
                        renderItem={({ item, index }) => {
                            return (
                                <Pressable
                                    key={index}
                                    style={styles.cardWrap}
                                    onPress={() => {
                                        navigation.navigate('ProductDetail', item)
                                    }}
                                    android_ripple={{
                                        color: "#6A4029",
                                        foreground: true,
                                        borderless: true,
                                        radius: 60
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
                                            borderWidth: 1,
                                            borderColor: 'white',
                                            borderRadius: 100
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
            </ScrollView>

        </View>
    );
}

