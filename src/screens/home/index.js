import { Text, View, ScrollView, Image, Pressable, FlatList, TextInput } from 'react-native';
import global from '../../styles/global'
import styles from './style'

export default function Home({ navigation }) {
    return (
        <View style={global.bg}>
            <Text style={styles.title}>A good coffee is {'\n'}a good day</Text>

            <TextInput style={styles.searchInput} placeholder="Search" />
            {/* Product Card Start */}
            <View>
                <ScrollView style={{ marginTop: 30, marginBottom: 20 }} horizontal showsHorizontalScrollIndicator={false}>
                    <Text style={[styles.breadcumb, { marginBottom: 20, marginTop: 15 }]}>Favorite & Promo</Text>
                    <Text style={[styles.breadcumb, { marginBottom: 20, marginTop: 15 }]}>Coffee</Text>
                    <Text style={[styles.breadcumb, { marginBottom: 20, marginTop: 15 }]}>Non Coffee</Text>
                    <Text style={[styles.breadcumb, { marginBottom: 20, marginTop: 15 }]}>Foods</Text>
                    <Text style={[styles.breadcumb, { marginBottom: 20, marginTop: 15, marginRight: 40 }]}>Add-on</Text>
                </ScrollView>
                <Text style={styles.seeMore} onPress={() => { navigation.navigate('Products') }}>See more</Text>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={[1, 2, 3, 4, 5]}
                    renderItem={() => {
                        return (
                            <Pressable style={styles.cardWrap} onPress={() => {
                                navigation.navigate('ProductDetail')
                            }}>
                                <Image source={require('../../images/p1.png')} style={{
                                    width: '100%',
                                    position: 'absolute',
                                    zIndex: 2,
                                    resizeMode: 'contain'
                                }} />
                                <View style={styles.card}>
                                    <Text style={styles.productTitle}>Hazelnut Latte</Text>
                                    <Text style={[styles.productPrice, { marginBottom: 25 }]}>IDR 25.000</Text>
                                </View>
                            </Pressable>
                        )
                    }}>
                </FlatList>
                {/* Jangan gunakan scrolllview ketika berhubungan dengan data apalagi mapping data, gunakan flatlist */}
                {/* <ScrollView horizontal>
                    {[1, 2, 3, 4, 5].map(() => {
                        return (
                            <Pressable style={styles.cardWrap} onPress={() => {
                                navigation.navigate('ProductDetail')
                            }}>
                                <Image source={require('../../images/p1.png')} style={{
                                    width: '100%',
                                    position: 'absolute',
                                    zIndex: 2,
                                    resizeMode: 'contain'
                                }} />
                                <View style={styles.card}>
                                    <Text style={styles.productTitle}>Hazelnut Latte</Text>
                                    <Text style={[styles.productPrice, { marginBottom: 25 }]}>IDR 25.000</Text>
                                </View>
                            </Pressable>
                        )
                    })}
                </ScrollView> */}
            </View>
            {/* Product Card End */}
        </View>
    );
}

