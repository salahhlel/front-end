import React, { useRef } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text, TextInput } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { useRoute, useNavigation } from '@react-navigation/native';
import BackIcon from '../assets/flecheIcon.png';
import LogoWarpeed from '../assets/logo2.png'

const ForgetPassword = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { genre } = route.params;

    // Create refs for each TextInput
    const inputRefs = useRef([]);

    // Function to handle input change and focus on the next TextInput
    const handleInputChange = (text, index) => {
        if (text.length === 1 && index < inputRefs.current.length - 1) {
            inputRefs.current[index + 1].focus();  // Move to the next input
        }
    };

    return (
        <View style={styles.container}>
            <LinearGradient
                colors={genre === 'man' ? ['#2C9AEE', '#ABC0FF'] : ['#AD669E', '#FFB6C8']}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
                style={styles.background}
            >
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => navigation.navigate("Splash2", { genre })}
                >
                    <Image
                        source={BackIcon}
                        style={styles.logo}
                    />
                    <Text style={styles.textstyle}>Forget Password</Text>
                </TouchableOpacity>

                <Image 
                    source={LogoWarpeed}
                    style={styles.logo1}
                />
                <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 700 }}>Please enter your recovery code</Text>

                <View style={styles.inputContainer}>
                    {[...Array(4)].map((_, index) => (
                        <TextInput
                            key={index}
                            ref={(el) => (inputRefs.current[index] = el)}  // Assign ref to each input
                            style={[styles.input, { borderColor: genre === 'man' ? '#1870B3' : '#AD669E', color: genre === 'man' ? '#1870B3' : '#AD669E' }]}
                            keyboardType="numeric"  // Display numeric keyboard
                            maxLength={1}  // Restrict input to a single character
                            onChangeText={(text) => handleInputChange(text, index)}  // Handle input change
                        />
                    ))}
                </View>

                <TouchableOpacity style={[styles.proceedButton, { backgroundColor: genre === 'man' ? '#2C9AEE' : '#AD669E' }]}>
                    <Text style={styles.proceedText}>Verif</Text>
                </TouchableOpacity>
            </LinearGradient>
        </View>
    );
};

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
    textstyle: {
        fontSize: 24,
        color: "#FFFFFF",
        fontWeight: '600',
        marginLeft: "8%",
    },
    logo1: {
        width: "45%",
        height: "25%",
        marginTop: "10%",
    },
    inputContainer: {
        marginTop: '12%',
        width: '100%',
        marginBottom: "10%",
        flexDirection: "row",
        justifyContent: "center",
    },
    input: {
        backgroundColor: '#FFFFFFEC',
        borderRadius: 10,
        height: 50,
        paddingHorizontal: 20,
        fontSize: 16,
        borderWidth: 2,
        width: "15%",
        textAlign: 'center',
        margin: "5%",
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
});

export default ForgetPassword;
