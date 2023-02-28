import { Text, View, ScrollView, Image, Pressable, FlatList, TextInput } from 'react-native';
import global from '../../styles/global'
import styles from './style'
import { useNavigation } from '@react-navigation/native';
import { API_URL } from '@env'

export default function ProductDetails({ route }) {
    const navigation = useNavigation()
    const { id, title, price, category } = route.params
    const productImage = route.params.images[0].filename
    return (
        <View style={[global.px_container, { display: 'flex', alignItems: 'center', backgroundColor: '#F2F2F2', flex: 1 }]}>
            {/* <ScrollView horizontal>
                <Text>Choose a size</Text>
            </ScrollView> */}
            <Image
                source={{
                    uri: `${API_URL}/uploads/images/${productImage}`,
                }}
                style={styles.hero} />
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.price}>{`IDR ${price}`}</Text>
            <Text style={styles.deliveryInfo}>Delivery info</Text>
            <Text style={styles.deliveryText}>Delivered only on monday until friday from 1 pm to 7 pm</Text>
            <Text style={styles.description}>Description</Text>
            <Text style={styles.descriptionText}>Cold brewing is a method of brewing that combines ground coffee and cool water and uses time instead of heat to extract the flavor. It is brewed in small batches and steeped for as long as 48 hours.</Text>
            <Pressable onPress={() => {
                navigation.navigate('Cart')
            }} >
                <Text style={[global.btn_primary, styles.addToCart]}>Add to cart</Text>
            </Pressable>
        </View>
    )
}
