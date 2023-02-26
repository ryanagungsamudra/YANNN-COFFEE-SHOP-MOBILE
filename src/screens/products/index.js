import { Text, View, FlatList, Image, Pressable } from 'react-native';
import global from '../../styles/global'
import styles from './style'

export default function Products() {
    return (
        <View style={global.bg}>
            <Text style={styles.title}>Choose your favorite</Text>
            {/* View all product start */}
            <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                {[1, 2, 3, 4, 5, 6].map(() => {
                    return (
                        <View style={styles.cardWrap}>
                            <Image source={require('../../images/p1.png')} style={{
                                width: '60%',
                                position: 'absolute',
                                marginTop: -15,
                                zIndex: 2,
                                resizeMode: 'contain'
                            }} />
                            <View style={styles.card}>
                                <Text style={styles.productTitle}>Hazelnut Latte</Text>
                                <Text style={styles.productPrice}>IDR 25.000</Text>
                            </View>
                        </View>
                    )
                })}
            </View>
            {/* View all product end */}
        </View>
    );
}

