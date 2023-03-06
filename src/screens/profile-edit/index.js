import { React, useEffect, useState } from 'react'
import { Text, View, ScrollView, Image, Pressable, FlatList, TextInput, SafeAreaView, ToastAndroid, Button } from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';
import global from '../../styles/global'
import styles from './style'
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { getUserById, patchUserProfile } from '../../utils/https/auth'
import { API_IMG } from '@env'
import { useNavigation } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Fontisto } from '@expo/vector-icons'

export default function EditProfile() {
    const navigation = useNavigation()
    // User Profile Data
    const [userData, setUserData] = useState([])
    const [refetch, setRefetch] = useState(false)
    const id = userData.id

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
                        }, 2000);
                    })
            }
        } catch (e) {
            console.log(e)
        }
    }
    const isImg = () => {
        if (userData.profile_image != null) {
            return (
                <>
                    {imagePreview ? <Image source={{ uri: imagePreview }} style={styles.hero} /> : <Image source={{ uri: `${API_IMG}/${userData.profile_image}` }} style={styles.hero} />}
                </>
            )
        } else {
            return (
                <>
                    {imagePreview ? <Image source={{ uri: imagePreview }} style={styles.hero} /> : <Image source={require('../../images/man.png')} style={styles.hero} />}
                </>
            )
        }
    }

    // User profile form update start
    const [editProfileForm, setEditProfilForm] = useState({
        name: '',
        email: '',
        mobile_number: '',
        birthdate: '',
        address: '',
        profile_image: '',
    })
    // radio button 
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
    // date picker
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShow(false);
        setDate(currentDate);
    };
    const showMode = (currentMode) => {
        if (Platform.OS === 'android') {
            setShow(false);
            // for iOS, add a button that closes the picker
        }
        setShow(true)
        setMode(currentMode);
    };
    const showDatepicker = () => {
        showMode('date');
    };

    // Handle submit
    const handleSubmit = () => {
        const body = new FormData();
        body.append('name', editProfileForm.name);
        body.append('email', editProfileForm.email);
        body.append('mobile_number', editProfileForm.mobile_number);
        body.append('birthdate', date.toDateString());
        body.append('address', editProfileForm.address);
        body.append("profile_image", {
            uri: editProfileForm.profile_image,
            type: `image/jpeg`,
            name: `profile.jpg`,
        });
        patchUserProfile(body, id)
            .then(res => {
                ToastAndroid.show('Update success!', ToastAndroid.SHORT)
                setTimeout(() => {
                    navigation.navigate("Profile")
                }, 500);
            })
            .catch(err => console.log(err))
    }
    // User profile form update end 

    // Image picker
    const [imagePreview, setImagePreview] = useState(null);
    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 0.5,
            selectionLimit: 1
        });
        // console.log(result);
        if (!result.canceled) {
            setImagePreview(result.assets[0].uri);
            setEditProfilForm({ ...editProfileForm, profile_image: result.assets[0].uri });
        }
    };
    const TakeImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 0.5,
            selectionLimit: 1
        });
        // console.log(result);
        if (!result.canceled) {
            setImagePreview(result.assets[0].uri);
            setEditProfilForm({ ...editProfileForm, profile_image: result.assets[0].uri });
        }
    };

    return (
        <View style={[global.px_container, { display: 'flex', alignItems: 'flex-start', backgroundColor: '#F2F2F2', flex: 1 }]}>
            {/* Bio start */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%', marginTop: 20, marginBottom: 10, position: 'relative' }}>
                {isImg()}
                <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around' }}>
                    <Pressable onPress={pickImage}>
                        <Text style={[global.btn_primary, styles.choosePhoto]}>Choose Photo</Text>
                    </Pressable>
                    <Pressable onPress={TakeImage}>
                        <Text style={[global.btn_primary, styles.takePhoto]}>Take Photo</Text>
                    </Pressable>
                </View>
            </View>
            {/* Bio end */}

            {/* Edit profile start */}
            <ScrollView style={{ width: '100%' }}>
                <Text style={styles.input}>Name :</Text>
                <TextInput
                    onChangeText={(text) => setEditProfilForm({ ...editProfileForm, name: text })}
                    placeholder="Enter your name"
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
                    onChangeText={(text) => setEditProfilForm({ ...editProfileForm, email: text })}
                    placeholder="Enter your email"
                    keyboardType='email-address'
                    autoCapitalize='none'
                />
                <View style={{ borderBottomWidth: 0.8, borderBottomColor: '#9F9F9F', marginTop: 10 }} />

                <Text style={styles.input}>Phone Number :</Text>
                <TextInput
                    onChangeText={(text) => setEditProfilForm({ ...editProfileForm, mobile_number: text })}
                    placeholder="Enter your phone number"
                    keyboardType="phone-pad"
                />
                <View style={{ borderBottomWidth: 0.8, borderBottomColor: '#9F9F9F', marginTop: 10 }} />

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View>
                        <Text style={styles.input}>Date of Birth</Text>
                        <TextInput
                            value={date.toDateString()}
                            // onChangeText={(text) => setEditProfilForm({ ...editProfileForm, birthdate: text })}
                            placeholder="Pick your birthdate by clicking the icon"
                        />
                    </View>
                    <Pressable onPress={showDatepicker}>
                        <Fontisto name="date" color={'#6A4029'} size={24} />
                    </Pressable>
                    {show && (
                        <DateTimePicker
                            testID="dateTimePicker"
                            value={date}
                            mode={mode}
                            is24Hour={true}
                            onChange={onChange}
                        />
                    )}
                </View>

                <View style={{ borderBottomWidth: 0.8, borderBottomColor: '#9F9F9F', marginTop: 10 }} />

                <Text style={styles.input}>Delivery Adress :</Text>
                <TextInput
                    onChangeText={(text) => setEditProfilForm({ ...editProfileForm, address: text })}
                    placeholder="Enter your address"
                />
                <View style={{ borderBottomWidth: 0.8, borderBottomColor: '#9F9F9F', marginTop: 10 }} />
                <Pressable onPress={handleSubmit}>
                    <Text style={[global.btn_primary, styles.saveChange]}>Save and Update</Text>
                </Pressable>
            </ScrollView>
            {/* Edit profile end */}

        </View>
    )
}
