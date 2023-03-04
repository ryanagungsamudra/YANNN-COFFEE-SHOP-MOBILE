import { React, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { getUserById } from '../../utils/https/auth'
import { API_URL } from '@env'
import { Text, View, ScrollView, Image, Pressable, FlatList, TextInput } from 'react-native';
import global from '../../styles/global'
import styles from './style'
import { useNavigation } from '@react-navigation/native';

export default function Profile() {
  const navigation = useNavigation()
  const [userData, setUserData] = useState([])
  const [refetch, setRefetch] = useState(false)

  useEffect(() => {
    getUserData()
  }, [refetch])

  const getUserData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@userData')
      if (jsonValue != null) {
        const idUser = ((JSON.parse(jsonValue)).user.id);
        getUserById(idUser)
          .then(res => {
            setUserData(res.data.data);
            setTimeout(() => {
              setRefetch(!refetch)
            }, 2500);
          })
      }
    } catch (e) {
      console.log(e)
    }
  }

  const isImg = () => {
    if (userData.profile_image != null) {
      return (
        <Image
          source={{
            uri: `${API_URL}/uploads/images/${userData.profile_image}`,
          }}
          style={styles.hero} />
      )
    } else {
      return (
        <Image source={require('../../images/man.png')} style={styles.hero} />
      )
    }
  }
  return (
    <View style={[global.px_container, { display: 'flex', alignItems: 'flex-start', backgroundColor: '#F2F2F2', flex: 1 }]}>
      <Text style={[styles.header, { marginBottom: 27 }]}>My profile</Text>

      {/* Bio start */}
      <View style={{ flexDirection: 'row', justifyContent: 'center', width: '100%', marginTop: 20, marginBottom: 20, position: 'relative' }}>
        {/* <Image source={require('../../images/ava.png')} style={styles.hero} /> */}
        {isImg()}
        <Pressable onPress={() => {
          navigation.navigate('EditProfile')
        }}>
          <Image source={require('../../images/edit.png')} style={styles.edit} />
        </Pressable>
      </View>
      <View style={{ flexDirection: 'column', alignItems: 'center', width: '100%', marginBottom: 20 }}>
        <Text style={{ fontSize: 18, fontWeight: '800' }}>{userData.name}</Text>
        <Text style={{ fontSize: 15, fontWeight: '400', opacity: 0.65 }}>{userData.email}</Text>
        <Text style={{ fontSize: 15, fontWeight: '400', opacity: 0.65 }}>{userData.mobile_number}</Text>
        <Text style={{ fontSize: 15, fontWeight: '400', opacity: 0.65 }}>{userData.birthdate}</Text>
        <Text style={{ fontSize: 15, fontWeight: '400', opacity: 0.65 }}>{userData.address}</Text>
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

      {/* <Pressable>
        <Text style={[global.btn_primary, styles.saveChange]}>Save Change</Text>
      </Pressable> */}
    </View>
  )
}
