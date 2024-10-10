import React, { useState } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text, TextInput } from "react-native";
import { Select, Box, CheckIcon, Center, NativeBaseProvider, Spinner, HStack, Heading } from "native-base";
import { LinearGradient } from 'expo-linear-gradient';
import { useRoute, useNavigation } from '@react-navigation/native';
import BackIcon from '../assets/flecheIcon.png';
import CameraIcon from '../assets/cameraIcon.png';
import LogoWarpeed from '../assets/logo2.png';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';
import axios from 'axios'
import Port from '../Port'


const AcountDet = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { genre, email, password } = route.params;

    const [genreA, setGenreA] = useState(genre);
    const [birthDate, setBirthDate] = useState(new Date());
    const [fullname, setFullName] = useState('');
    const [emailA, setEmailA] = useState(email);
    const [passwordA, setPasswordA] = useState(password);
    const [phonenbr, setPhonenbr] = useState(null);
    const [selectedRegion, setSelectedRegion] = useState('');

    const [showDatePicker, setShowDatePicker] = useState(false);
    const [showSpiner,setShowSpiner]=useState(false)
////////////////////////////////////////////////////////////////

const AddNewUser=async()=>{
    setShowSpiner(true)
    let infoUser={
        email:email,
        password:password, 
        full_name:fullname,
        phone_number:phonenbr,
        sexe:genreA,
        profile_picture_url:'',
        grade:0,
        region:selectedRegion
    }
    try{
        const response = await axios.post(Port+'/users/'+infoUser)

    }catch(e){}
}

////////////////////////////////////////////////////////////////
    const regions = [
        'Ariana', 'Béja', 'Ben Arous', 'Bizerte', 'Gabès', 'Gafsa', 'Jendouba',
        'Kairouan', 'Kasserine', 'Kébili', 'Le Kef', 'Mahdia', 'La Manouba',
        'Médenine', 'Monastir', 'Nabeul', 'Sfax', 'Sidi Bouzid', 'Siliana',
        'Sousse', 'Tataouine', 'Tozeur', 'Tunis', 'Zaghouan'
    ];

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || birthDate;
        setShowDatePicker(false);
        setBirthDate(currentDate);
    };
///////////////////////////NATIVE BASE//////////////////////////////
    const Example = () => {
        return (
            <Box style={[styles.input, { borderColor: genreA === 'man' ? '#1870B3' : '#AD669E' }]}>
                <Select
                    selectedValue={selectedRegion}
                    minWidth="345"
                    accessibilityLabel="Choose Region"
                    placeholder="Choose Region"
                    _selectedItem={{
                        bg: genreA === 'man' ? "#1870B3" : "#AD669E",
                        endIcon: <CheckIcon size="5" />
                    }}
                    style={{ color: genreA === 'man' ? '#1870B3' : '#AD669E' }}
                    onValueChange={itemValue => setSelectedRegion(itemValue)}
                >
                    {regions.map((region, index) => (
                        <Select.Item label={region} value={region} key={index} />
                    ))}
                </Select>
            </Box>
        );
    };
    const ExampleSpiner = () => {
        return <HStack space={2} justifyContent="center" mb={10}>
            <Spinner color={genreA === 'man' ? "cyan.800" : "indigo.800"}  size="lg" />
          </HStack>;
      };
///////////////////////////NATIVE BASE//////////////////////////////

    return (
        <NativeBaseProvider>
        <View style={styles.container}>
            <LinearGradient
                colors={genreA === 'man' ? ['#2C9AEE', '#ABC0FF'] : ['#AD669E', '#FFB6C8']}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
                style={styles.background}
            >
                <TouchableOpacity style={styles.cameraButton}>
                    <Image
                        source={CameraIcon}
                        style={styles.cameraIcon}
                    />
                </TouchableOpacity>

                <View style={styles.inputContainer}>
                    <TextInput
                        style={[styles.input, { borderColor: genreA === 'man' ? '#1870B3' : '#AD669E', color: genreA === 'man' ? '#1870B3' : '#AD669E' }]}
                        placeholder="Full Name"
                        placeholderTextColor={genreA === 'man' ? '#1870B3' : '#AD669E'}
                        onChangeText={(text) => { setFullName(text) }}
                    />
                    <TextInput
                        style={[styles.input, { borderColor: genreA === 'man' ? '#1870B3' : '#AD669E', color: genreA === 'man' ? '#1870B3' : '#AD669E' }]}
                        placeholder="Phone Number"
                        placeholderTextColor={genreA === 'man' ? '#1870B3' : '#AD669E'}
                        keyboardType="phone-pad"
                        onChangeText={(text) => { setPhonenbr(text) }}
                    />

                    {/* Picker for selecting region */}
                    <Example />

                    <TouchableOpacity onPress={() => setShowDatePicker(true)}>
                        <TextInput
                            style={[styles.input, { borderColor: genreA === 'man' ? '#1870B3' : '#AD669E', color: genreA === 'man' ? '#1870B3' : '#AD669E' }]}
                            placeholderTextColor={'#AD669E'}
                            value={birthDate.toLocaleDateString()}
                        />
                    </TouchableOpacity>

                    {showDatePicker && (
                        <DateTimePicker
                            value={birthDate}
                            mode="date"
                            display="default"
                            onChange={onChange}
                        />
                    )}
                </View>

                <View style={styles.genderContainer}>
                    <TouchableOpacity onPress={() => setGenreA("man")} style={[styles.genderButton, genreA === 'man' && styles.selectedGender]}>
                        <Text style={styles.genderText}>Man</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setGenreA("woman")} style={[styles.genderButton, genreA === 'woman' && styles.selectedGender]}>
                        <Text style={styles.genderText}>Woman</Text>
                    </TouchableOpacity>
                </View>
                    {!showSpiner?
                <TouchableOpacity style={[styles.proceedButton, { backgroundColor: genreA === 'man' ? '#2C9AEE' : '#AD669E' }]}
                onPress={()=>{}}
                >
                    <Text style={styles.proceedText}>Proceed</Text>
                </TouchableOpacity>
                    :
                    <ExampleSpiner/>
                    }

                <Text style={styles.termsText}>By proceeding, you are accepting all our <Text style={styles.linkText}>terms & conditions</Text>.</Text>
            </LinearGradient>
        </View>
        </NativeBaseProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingHorizontal: 20,
        paddingVertical: 50,
    },
    cameraButton: {
        backgroundColor: '#FFFFFF6C',
        width: 100,
        height: 100,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
        borderWidth: 2,
        borderColor: '#FFFFFF',
        marginTop: "20%"
    },
    cameraIcon: {
        width: 40,
        height: 40,
        tintColor: '#FFFFFF',
    },
    inputContainer: {
        width: '100%',
        marginBottom: 20,
    },
    input: {
        backgroundColor: '#FFFFFFEC',
        borderRadius: 10,
        height: 50,
        marginBottom: 25,
        paddingHorizontal: 20,
        fontSize: 16,
        borderWidth: 2,
    },
    pickerContainer: {
        backgroundColor: '#FFFFFFEC',
        borderRadius: 10,
        height: 50,
        justifyContent: 'center',
        marginBottom: 25,
        paddingHorizontal: 20,
        borderWidth: 2,
    },
    genderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 35,
    },
    genderButton: {
        flex: 1,
        paddingVertical: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: 10,
        alignItems: 'center',
        marginHorizontal: 5,
    },
    selectedGender: {
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
    },
    genderText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '500',
    },
    proceedButton: {
        borderRadius: 25,
        width: '100%',
        paddingVertical: 15,
        alignItems: 'center',
        marginBottom: 20,
    },
    proceedText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: '600',
    },
    termsText: {
        color: 'rgba(255, 255, 255, 0.7)',
        fontSize: 12,
        textAlign: 'center',
    },
    linkText: {
        textDecorationLine: 'underline',
    },
});

export default AcountDet;
