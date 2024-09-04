import React, { useState } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text, TextInput } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { useRoute, useNavigation } from '@react-navigation/native';
import BackIcon from '../assets/flecheIcon.png';
import CameraIcon from '../assets/cameraIcon.png';

const AcountDet = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { genre } = route.params; // Make sure 'genre' is defined here

    const [genreA, setGenreA] = useState(genre); // Set the initial state using 'genre'

    return (
        <View style={styles.container}>
            <LinearGradient
                colors={genreA === 'man' ? ['#2C9AEE', '#ABC0FF'] : ['#AD669E','#FFB6C8']}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
                style={styles.background}
            >
                <TouchableOpacity 
                    style={styles.backButton}
                    onPress={() => navigation.navigate("Splash2", { genreA })}
                >
                    <Image
                        source={BackIcon}
                        style={styles.logo}
                    />
                    <Text style={styles.textstyle}>Account Details</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.cameraButton}>
                    <Image
                        source={CameraIcon}
                        style={styles.cameraIcon}
                    />
                </TouchableOpacity>

                <View style={styles.inputContainer}>
                    <TextInput
                        style={[styles.input,{borderColor: genreA === 'man' ? '#1870B3' : '#AD669E', color:genreA === 'man' ? '#1870B3' : '#AD669E'}]}
                        placeholder="Name"
                        placeholderTextColor={genreA==='man'? '#1870B3':'#AD669E'}
                    />
                    <TextInput
                        style={[styles.input,{borderColor: genreA === 'man' ? '#1870B3' : '#AD669E',color:genreA === 'man' ? '#1870B3' : '#AD669E' }]}
                        placeholder="Username"
                        placeholderTextColor={genreA==='man'? '#1870B3':'#AD669E'}
                    />
                    <TextInput
                        style={[styles.input,{borderColor: genreA === 'man' ? '#1870B3' : '#AD669E',color:genreA === 'man' ? '#1870B3' : '#AD669E' }]}
                        placeholder="Country"
                        placeholderTextColor={genreA==='man'? '#1870B3':'#AD669E'}
                    />
                    <TextInput
                        style={[styles.input,{borderColor: genreA === 'man' ? '#1870B3' : '#AD669E', color:genreA === 'man' ? '#1870B3' : '#AD669E'}]}
                        placeholder="Birth Year"
                        placeholderTextColor={genreA==='man'? '#1870B3':'#AD669E'}
                    />
                </View>

                <View style={styles.genderContainer}>
                    <TouchableOpacity onPress={() => setGenreA("man")} style={[styles.genderButton, genreA === 'man' && styles.selectedGender]}>
                        <Text style={styles.genderText}>Man</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setGenreA("woman")} style={[styles.genderButton, genreA === 'woman' && styles.selectedGender]}>
                        <Text style={styles.genderText}>Woman</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={[styles.proceedButton,{backgroundColor: genreA === 'man' ? '#2C9AEE' : '#AD669E',}]}>
                    <Text style={styles.proceedText}>Proceed</Text>
                </TouchableOpacity>

                <Text style={styles.termsText}>By proceeding, you are accepting all our <Text style={styles.linkText}>terms & conditions</Text>.</Text>
            </LinearGradient>
        </View>
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
    backButton: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-start',
        marginBottom: 20,
    },
    logo: {
        width: 20,
        height: 20,
        marginRight: 10,
    },
    textstyle: {
        fontSize: 24,
        color: "#FFFFFF",
        fontWeight: '600',
    },
    cameraButton: {
        backgroundColor: '#FFFFFF6C',
        width: 100,
        height: 100,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
        borderWidth:2,
        borderColor:'#FFFFFF'
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
