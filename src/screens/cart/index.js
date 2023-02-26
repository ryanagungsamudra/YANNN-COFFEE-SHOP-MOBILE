import { Text, View, ScrollView, Image, Pressable, FlatList, TextInput } from 'react-native';
import global from '../../styles/global'
import styles from './style'
import SelectDropdown from 'react-native-select-dropdown'

export default function Cart({ navigation }) {
    const countries = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
    return (
        <View style={[global.px_container, { display: 'flex', alignItems: 'center', backgroundColor: '#F2F2F2', flex: 1 }]}>
            <View style={styles.cardWrap}>
                {[1, 2, 3].map(() => {
                    return (
                        <View style={styles.card}>
                            <Image source={require('../../images/coldBrew.png')} style={styles.hero} />
                            <View style={{ marginRight: 0 }}>
                                <Text style={styles.title}>Veggie tomato mix</Text>
                                <Text style={styles.price}>IDR 34.000</Text>
                            </View>
                            <SelectDropdown
                                data={countries}
                                onSelect={(selectedItem, index) => {
                                    // console.log(selectedItem, index)
                                }}
                                buttonTextAfterSelection={(selectedItem, index) => {
                                    // text represented after item is selected
                                    // if data array is an array of objects then return selectedItem.property to render after item is selected
                                    return selectedItem
                                }}
                                rowTextForSelection={(item, index) => {
                                    // text represented for each item in dropdown
                                    // if data array is an array of objects then return item.property to represent item in dropdown
                                    return item
                                }}
                                dropdownStyle={{ borderRadius: 20 }}
                                buttonStyle={{ width: 60, backgroundColor: '#fff', borderWidth: 0.2, borderRadius: 10, marginHorizontal: 10 }}
                                defaultValue={1}
                            />
                        </View>
                    )
                })}
            </View>

            <Pressable onPress={() => {
                navigation.navigate('DeliveryMethod')
            }} >
                <Text style={[global.btn_primary, styles.confirmAndCheckout]}>Confirm and Checkout</Text>
            </Pressable>
        </View>
    )
}
