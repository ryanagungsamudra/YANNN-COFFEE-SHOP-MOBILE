import React from 'react'
import { Text, View, ScrollView, Image, Pressable, FlatList, TextInput } from 'react-native';
import global from '../../styles/global'
import styles from './style'

export default function Profile({ navigation }) {
  return (
    <View style={[global.px_container, { display: 'flex', alignItems: 'flex-start', backgroundColor: '#F2F2F2', flex: 1 }]}>
      <Text style={styles.header}>My profile</Text>

      {/* Bio start */}
      <View style={{ flexDirection: 'row', justifyContent: 'center', width: '100%', marginTop: 20, marginBottom: 20, position: 'relative' }}>
        <Image source={require('../../images/ava.png')} style={styles.hero} />
        <Pressable onPress={() => {
          navigation.navigate('EditProfile')
        }}>
          <Image source={require('../../images/edit.png')} style={styles.edit} />
        </Pressable>
      </View>
      <View style={{ flexDirection: 'column', alignItems: 'center', width: '100%', marginBottom: 20 }}>
        <Text style={{ fontSize: 18, fontWeight: '800' }}>Ryan Agung Samudra</Text>
        <Text style={{ fontSize: 15, fontWeight: '400', opacity: 0.65 }}>ryansamudra67@gmail.com</Text>
        <Text style={{ fontSize: 15, fontWeight: '400', opacity: 0.65 }}>082284798890</Text>
        <Text style={{ fontSize: 15, fontWeight: '400', opacity: 0.65 }}>Iskandar Street Block A Number 102</Text>
      </View>
      {/* Bio end */}

      <Pressable style={styles.card} onPress={() => { navigation.navigate('History') }}>
        <Text style={{ fontWeight: '700', fontSize: 18, paddingRight: 80 }}>Order History</Text>
        <Image source={require('../../images/rightArrow.png')} />
      </Pressable>
      <View style={styles.card}>
        <Text style={{ fontWeight: '700', fontSize: 18, paddingRight: 75 }}>Edit Password</Text>
        <Image source={require('../../images/rightArrow.png')} />
      </View>
      <View style={styles.card}>
        <Text style={{ fontWeight: '700', fontSize: 18, paddingRight: 155 }}>FAQ</Text>
        <Image source={require('../../images/rightArrow.png')} />
      </View>
      <View style={styles.card}>
        <Text style={{ fontWeight: '700', fontSize: 18, paddingRight: 155 }}>Help</Text>
        <Image source={require('../../images/rightArrow.png')} />
      </View>

      <Pressable>
        <Text style={[global.btn_primary, styles.saveChange]}>Save Change</Text>
      </Pressable>
    </View>
  )
}
