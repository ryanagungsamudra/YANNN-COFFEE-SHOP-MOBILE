import { Text, View, ScrollView, Image, Pressable, FlatList, TextInput } from 'react-native';
import global from '../../styles/global'
import styles from './style'

export default function ProductDetails({ navigation }) {
    return (
        <View style={[global.px_container, { display: 'flex', alignItems: 'center', backgroundColor: '#F2F2F2', flex: 1 }]}>
            {/* <ScrollView horizontal>
                <Text>Choose a size</Text>
            </ScrollView> */}
            <Image source={require('../../images/coldBrew.png')} style={styles.hero} />
            <Text style={styles.title}>Cold Brew</Text>
            <Text style={styles.price}>IDR 30.000</Text>
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
