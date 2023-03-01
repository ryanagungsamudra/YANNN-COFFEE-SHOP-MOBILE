import { Text, View, ScrollView, Image, Pressable, FlatList, TextInput } from 'react-native';
import global from '../../../styles/global'
import styles from './style'
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { API_URL } from '@env'

export default function Chat({ route }) {
    const navigation = useNavigation()

    return (
        <View style={[global.px_container, { display: 'flex', alignItems: 'center', backgroundColor: '#F2F2F2', flex: 1 }]}>
            <View style={styles.cardWrap}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={[0]}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={styles.card}>
                                {/* <Image
                                    source={{
                                        uri: `${API_URL}/uploads/images/${productImage}`,
                                    }}
                                    style={styles.hero} />
                                <View style={{ marginRight: 0 }}>
                                    <Text style={styles.title}>{title}</Text>
                                    <Text style={styles.price}>{`IDR ${totalPrice}`}</Text>
                                </View> */}
                            </View>
                        )
                    }}>
                </FlatList>
            </View>
        </View>
    )
}
