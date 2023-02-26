import { Text, View, ScrollView, Image, Pressable, FlatList, TextInput } from 'react-native';
import global from '../../styles/global'
import styles from './style'

export default function Payment({ navigation }) {
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
                    <Text style={{ fontSize: 20, fontWeight: '700' }}>IDR 132.000</Text>
                </View>
            </View>
            {/* Total end */}

            <Pressable>
                <Text style={[global.btn_primary, styles.confirmAndCheckout]} onPress={() => {
                    navigation.navigate('History')
                }} >Pay Now</Text>
            </Pressable>
        </View>
    )
}
