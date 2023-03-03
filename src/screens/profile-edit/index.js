import React, { useState } from 'react'
import { Text, View, ScrollView, Image, Pressable, FlatList, TextInput, SafeAreaView } from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';
import global from '../../styles/global'
import styles from './style'

export default function EditProfile({ navigation }) {
    const [name, onChangeName] = useState('');
    const [email, onChangeEmail] = useState('');
    const [number, onChangeNumber] = useState('');
    const [birth, onChangeBirth] = useState('');
    const [address, onChangeAddress] = useState('');

    const [radioButtons, setRadioButtons] = useState([
        {
            id: '1',
            label: 'Male',
            value: 'Male'
        },
        {
            id: '2',
            label: 'Female',
            value: 'Female'
        },
    ]);
    function onPressRadioButton(radioButtonsArray) {
        setRadioButtons(radioButtonsArray);
    }
    return (
        <View style={[global.px_container, { display: 'flex', alignItems: 'flex-start', backgroundColor: '#F2F2F2', flex: 1 }]}>
            {/* Bio start */}
            <View style={{ flexDirection: 'row', justifyContent: 'center', width: '100%', marginTop: 20, marginBottom: 10, position: 'relative' }}>
                <Image source={require('../../images/ava.png')} style={styles.hero} />
                <Pressable onPress={() => {
                    navigation.navigate('EditProfile')
                }}>
                    <Image source={require('../../images/edit.png')} style={styles.edit} />
                </Pressable>
            </View>
            {/* Bio end */}

            {/* Edit profile start */}
            <ScrollView style={{ width: '100%' }}>
                <Text style={styles.input}>Name :</Text>
                <TextInput
                    onChangeText={onChangeName}
                    value={name}
                    placeholder='Ryan Agung Samudra'
                />
                <View style={{ borderBottomWidth: 0.8, borderBottomColor: '#9F9F9F', marginTop: 10 }} />

                <RadioGroup
                    radioButtons={radioButtons}
                    onPress={onPressRadioButton}
                    containerStyle={{ marginTop: 20 }}
                    layout='row'
                />

                <Text style={styles.input}>Email Adress :</Text>
                <TextInput
                    onChangeText={onChangeEmail}
                    value={email}
                    placeholder='ryansamudra67@gmail.com'
                    keyboardType='email-address'
                />
                <View style={{ borderBottomWidth: 0.8, borderBottomColor: '#9F9F9F', marginTop: 10 }} />

                <Text style={styles.input}>Phone Number :</Text>
                <TextInput
                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder="082284798890"
                    keyboardType="phone-pad"
                />
                <View style={{ borderBottomWidth: 0.8, borderBottomColor: '#9F9F9F', marginTop: 10 }} />

                <Text style={styles.input}>Date of Birth</Text>
                <TextInput
                    onChangeText={onChangeBirth}
                    value={birth}
                    placeholder="28 Juli 1999"
                />
                <View style={{ borderBottomWidth: 0.8, borderBottomColor: '#9F9F9F', marginTop: 10 }} />

                <Text style={styles.input}>Delivery Adress :</Text>
                <TextInput
                    onChangeText={onChangeAddress}
                    value={address}
                    placeholder="Iskandar Street Block A Number 102"
                />
                <View style={{ borderBottomWidth: 0.8, borderBottomColor: '#9F9F9F', marginTop: 10 }} />
            </ScrollView>
            {/* Edit profile end */}

            <Pressable>
                <Text style={[global.btn_primary, styles.saveChange]}>Save and Update</Text>
            </Pressable>
        </View>
    )
}
