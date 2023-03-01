import React from 'react'
import { Text, View, ScrollView, Image, Pressable, FlatList, TextInput } from 'react-native';
import global from '../../styles/global'
import styles from './style'
import { useNavigation } from '@react-navigation/native';

function Navbar() {
    const navigation = useNavigation()
    return (
        <View style={styles.navbar}>
            <Pressable onPress={() => navigation.openDrawer()}>
                <Image source={require('../../images/hamburgerButton.png')} style={styles.hamburger} />
            </Pressable>
            <Pressable onPress={() => navigation.navigate('Home')}>
                <Image source={require('../../images/shopping-cart.png')} style={styles.cart} />
            </Pressable>
        </View>
    )
}

export default Navbar