import React, { useState } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text, TextInput } from "react-native";
import { Select, Box, CheckIcon, Center, NativeBaseProvider, Spinner, HStack, Heading ,Actionsheet, useDisclose} from "native-base";
import { LinearGradient } from 'expo-linear-gradient';
import { useRoute, useNavigation } from '@react-navigation/native';
import BackIcon from '../assets/flecheIcon.png';
import CameraIcon from '../assets/cameraIcon.png';
import LogoWarpeed from '../assets/logo2.png';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios'
import Port from '../Port'


const AcountDet = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { genre, email, password } = route.params;

    const today = new Date();
    const minDateOfBirth = new Date(today.getFullYear() - 16, today.getMonth(), today.getDate());
    const [birthDate, setBirthDate] = useState(minDateOfBirth);

    const [genreA, setGenreA] = useState(genre);
    const [fullname, setFullName] = useState('');
    const [emailA, setEmailA] = useState(email);
    const [passwordA, setPasswordA] = useState(password);
    const [phonenbr, setPhonenbr] = useState(null);
    const [selectedRegion, setSelectedRegion] = useState('');

    const [showDatePicker, setShowDatePicker] = useState(false);
    const [showSpiner,setShowSpiner]=useState(false)

    const [selectedImage, setSelectedImage] = useState(null);
    const { isOpen, onOpen, onClose } = useDisclose();
////////////////////////////////////////////////////////////////

console.log(selectedImage);


const AddNewUser = async () => {
    if (!fullname || fullname.trim().length < 3) {
        alert('Please enter a valid full name.');
        return;
    }
    
    // Validation du numéro de téléphone
    const phonePattern = /^[0-9]{8}$/; // Ajuste selon le format de ton pays
    if (!phonenbr || !phonePattern.test(phonenbr)) {
        alert('Please enter a valid 10-digit phone number.');
        return;
    }
    
    if (!selectedRegion) {
        alert('Please select your region.');
        return;
    }
    
    if (!birthDate) {
        alert('Please select your birth date.');
        return;
    }

    // Calcul de l'âge
    const today = new Date();
    const birthDateObj = new Date(birthDate);
    let age = today.getFullYear() - birthDateObj.getFullYear();
    const monthDifference = today.getMonth() - birthDateObj.getMonth();
    const dayDifference = today.getDate() - birthDateObj.getDate();
    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        age--;
    }

    if (age < 16) {
        alert('You must be at least 16 years old.');
        return;
    }

    // Début de l'animation du spinner
    setShowSpiner(true);

    // Préparer les informations de l'utilisateur en nettoyant les entrées
    const sanitizedEmail = email.trim();
    const sanitizedFullname = fullname.trim();
    const sanitizedPhone = phonenbr.replace(/[^0-9]/g, '');

    let infoUser = {
        email: sanitizedEmail,
        password: password, // Idéalement, assure-toi de hacher le mot de passe côté serveur
        full_name: sanitizedFullname,
        phone_number: sanitizedPhone,
        sexe: genreA === 'man' ? 'men' : 'female',
        profile_picture_url: selectedImage.toString(),
        grade: 0,
        region: selectedRegion,
        birthdate: birthDate,
    };

    try {
        const response = await axios.post(`${Port}/users`, infoUser, {
            timeout: 5000, // Ajoute un timeout pour éviter les longs délais d'attente
        });
        
        if (response.status === 201) {
            setShowSpiner(false); // Arrêter le spinner
            navigation.navigate("LoginWEmail", { genre });
        } else {
            throw new Error('Failed to add user'); // Gère les autres statuts
        }
    } catch (error) {
        setShowSpiner(false); // Arrêter le spinner en cas d'erreur
        console.error('Error adding user:', error); // Log l'erreur pour débogage
        alert('Error adding user: ' + error.message);
    }
};

 const pickImageFromGallery = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      alert('Permission d\'accès à la galerie refusée !');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
    onClose();
  };

  const takePhotoWithCamera = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    if (!permissionResult.granted) {
      alert('Permission d\'accès à la caméra refusée !');
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
    onClose();
  };


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
                        bg: "pink.200", // Couleur de fond de l'élément sélectionné
                        endIcon: <CheckIcon size="5" />,
                        borderRadius: 5, // Ajouter des bordures arrondies aux éléments sélectionnés
                      }}
                      _input={{
                          borderWidth: 0, // Supprime la bordure par défaut
                        }}
                        _light={{
                          borderWidth: 0, // Supprime la bordure par défaut
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
                <TouchableOpacity 
                onPress={onOpen}
                style={styles.cameraButton}>
                    {selectedImage?  
                    <Image
                        source={{uri:selectedImage}}
                        style={styles.cameraIcon}
                    />:
                    <Image
                        source={CameraIcon}
                        style={styles.cameraIcon}
                    />
                }
                </TouchableOpacity>
                     <Actionsheet isOpen={isOpen} onClose={onClose}>
                        <Actionsheet.Content>
                        <Actionsheet.Item onPress={takePhotoWithCamera}>
                            Prendre une photo
                        </Actionsheet.Item>
                        <Actionsheet.Item onPress={pickImageFromGallery}>
                            Choisir depuis la galerie
                        </Actionsheet.Item>
                        <Actionsheet.Item onPress={onClose} color="red.500">
                            Annuler
                        </Actionsheet.Item>
                        </Actionsheet.Content>
                    </Actionsheet>

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
                        value={birthDate.toLocaleDateString()} // Affiche la date sélectionnée
                        editable={false} // Empêche l'édition manuelle pour forcer l'utilisation du DateTimePicker
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
                onPress={()=>{AddNewUser()}}
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
