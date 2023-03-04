import { Text, View, ScrollView, Image, Pressable, FlatList, TextInput } from 'react-native';
import global from '../../styles/global'
import styles from './style'
import { useState } from 'react';

export default function History({ navigation }) {
    const [dataHistory, setDataHistory] = useState([])
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
