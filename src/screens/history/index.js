import { Text, View, ScrollView, Image, Pressable, FlatList, TextInput } from 'react-native';
import global from '../../styles/global'
import styles from './style'
import { useState } from 'react';

export default function History({ navigation }) {
    const [dataHistory, setDataHistory] = useState([0])
    return (
        <View style={[global.px_container, { display: 'flex', alignItems: 'flex-start', backgroundColor: '#F2F2F2', flex: 1, marginTop: 40 }]}>
            <Text style={styles.header}>Order History</Text>
            {/* {[1, 2, 3, 4, 5].map(() => {
                return (
                    <View style={styles.card}>
                        <Image source={require('../../images/coldBrew.png')} style={styles.hero} />
                        <View style={{ marginRight: 35 }}>
                            <Text style={styles.title}>Veggie tomato mix</Text>
                            <Text style={styles.price}>IDR 34.000</Text>
                            <Text style={styles.status}>Waiting for delivery [will arrive at 3 PM]</Text>
                        </View>
                    </View>
                )
            })} */}
            <FlatList
                showsVerticalScrollIndicator={false}
                data={dataHistory}
                renderItem={({ item, index }) => {
                    return (
                        <View style={styles.card}>
                            <Image source={require('../../images/coldBrew.png')} style={styles.hero} />
                            <View style={{ marginRight: 35 }}>
                                <Text style={styles.title}>Veggie tomato mix</Text>
                                <Text style={styles.price}>IDR 34.000</Text>
                                <Text style={styles.status}>Waiting for delivery [will arrive at 3 PM]</Text>
                            </View>
                        </View>
                    )
                }}>
            </FlatList>
            <Pressable style={{ position: 'absolute', bottom: 40, right: 45 }}>
                <Text style={[global.btn_primary, styles.backToHome]} onPress={() => {
                    navigation.navigate('Home')
                }} >Back to home</Text>
            </Pressable>
        </View>
    )
}
