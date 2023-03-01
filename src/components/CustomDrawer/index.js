import React from 'react'
import { Image, Text, View, Pressable } from 'react-native'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import styles from './style'
import { useNavigation } from '@react-navigation/native'

export default function CustomDrawer(props) {
    const navigation = useNavigation()
    return (
        // <DrawerContentScrollView {...props}>
        //     <DrawerItemList {...props} />
        // </DrawerContentScrollView>
        <DrawerContentScrollView style={styles.container}>
            {/* Bio start */}
            <View style={styles.containerHero}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', width: '100%', marginTop: 55, marginBottom: 20, position: 'relative' }}>
                    <Image source={require('../../images/ava.png')} style={styles.hero} />
                </View>
                <View style={{ flexDirection: 'column', alignItems: 'center', width: '100%', marginTop: -10 }}>
                    <Text style={styles.name}>Ryan Agung Samudra</Text>
                    <Text style={styles.email}>ryansamudra67@gmail.com</Text>
                    <Text style={styles.phone}>082284798890</Text>
                </View>
            </View >
            {/* Bio end */}

            {/* Navigation start */}
            <View style={{ flexDirection: 'column', alignItems: 'flex-start', marginTop: 30 }}>
                <Pressable style={{ flexDirection: 'row', paddingLeft: 30 }} onPress={() => navigation.navigate('EditProfile')}>
                    <Image source={require('../../images/editProfile.png')} />
                    <Text style={styles.itemList}>Edit Profile</Text>
                </Pressable>
                <View style={styles.lineBottom} />

                <Pressable style={{ flexDirection: 'row', paddingLeft: 30 }} onPress={() => navigation.navigate('Home')}>
                    <Image source={require('../../images/orders.png')} />
                    <Text style={styles.itemList}>Orders</Text>
                </Pressable>
                <View style={styles.lineBottom} />

                <Pressable style={{ flexDirection: 'row', paddingLeft: 30 }} onPress={() => navigation.navigate('Products')}>
                    <Image source={require('../../images/allMenu.png')} />
                    <Text style={styles.itemList}>All Menu</Text>
                </Pressable>
                <View style={styles.lineBottom} />

                <Pressable style={{ flexDirection: 'row', paddingLeft: 30 }} onPress={() => navigation.navigate('Home')}>
                    <Image source={require('../../images/privacy_policy.png')} />
                    <Text style={styles.itemList}>Privacy policy</Text>
                </Pressable>
                <View style={styles.lineBottom} />

                <Pressable style={{ flexDirection: 'row', paddingLeft: 30 }} onPress={() => navigation.navigate('Home')}>
                    <Image source={require('../../images/security.png')} />
                    <Text style={styles.itemList}>Security</Text>
                </Pressable>
                <View style={styles.lineBottom} />

                <Pressable style={{ flexDirection: 'row', paddingLeft: 20, paddingTop: 55 }} onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.itemList}>Sign Out</Text>
                    <Image source={require('../../images/brown_right_arrow.png')} style={{ marginTop: 5, marginLeft: 8 }} />
                </Pressable>
            </View>
            {/* Navigation end */}
        </DrawerContentScrollView >
    )
}
