import React, { useState } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text, TextInput } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { useRoute, useNavigation } from '@react-navigation/native';
import BackIcon from '../assets/flecheIcon.png';
import GoogleLogoW from "../assets/googleLogoW.png";
import FbLogoW from "../assets/fbLogoW.png";
import LogoWarpeed from '../assets/logo2.png';

const SignIn = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { genre } = route.params; // Make sure 'genre' is defined here

    // State variables
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');

    // Email validation
    const validateEmail = (email) => {
        // Simple email validation regex
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    // Password validation
const validatePassword = (password) => {
    // Regex updated to check for at least one uppercase letter, one digit, and allowing special characters, with length 1-12 characters
    const regex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&+_]{1,8}$/;
    return regex.test(password);
};


    // Handle form submission
    const handleSubmit = () => {
        let valid = true;

        // Validate email
        if (!validateEmail(email)) {
            setEmailError('Please enter a valid email address.');
            valid = false;
        } else {
            setEmailError('');
        }

        // Validate password
        if (!validatePassword(password)) {
            console.log(password);
            
            setPasswordError('Password must contain at least one uppercase letter, one digit, and be 12 characters or less.');
            valid = false;
        } else {
            setPasswordError('');
        }

        // Validate confirm password
        if (password !== confirmPassword) {
            setConfirmPasswordError('Passwords do not match.');
            valid = false;
        } else {
            setConfirmPasswordError('');
        }

        // Proceed if all validations pass
        if (valid) {
            navigation.navigate("AcountDet", { genre });
        }
    };

    // Check if there is any error
    const hasErrors = emailError || passwordError || confirmPasswordError;

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
                    <Text style={styles.textstyle}>Sign In</Text>
                </TouchableOpacity>
                <Image 
                    source={LogoWarpeed}
                    style={styles.logo1}
                />
                <View style={styles.inputContainer}>
                    <TextInput
                        value={email}
                        onChangeText={setEmail}
                        style={[styles.input, { borderColor: genre === 'man' ? '#1870B3' : '#AD669E', color: genre === 'man' ? '#1870B3' : '#AD669E' }]}
                        placeholder="Email"
                        placeholderTextColor={genre === 'man' ? '#1870B3' : '#AD669E'}
                    />
                    {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

                    <TextInput
                        value={password}
                        onChangeText={setPassword}
                        style={[styles.input, { borderColor: genre === 'man' ? '#1870B3' : '#AD669E', color: genre === 'man' ? '#1870B3' : '#AD669E' }]}
                        placeholder="Password"
                        placeholderTextColor={genre === 'man' ? '#1870B3' : '#AD669E'}
                        secureTextEntry
                    />
                    {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}

                    <TextInput
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                        style={[styles.input, { borderColor: genre === 'man' ? '#1870B3' : '#AD669E', color: genre === 'man' ? '#1870B3' : '#AD669E' }]}
                        placeholder="Confirm Password"
                        placeholderTextColor={genre === 'man' ? '#1870B3' : '#AD669E'}
                        secureTextEntry
                    />
                    {confirmPasswordError ? <Text style={styles.errorText}>{confirmPasswordError}</Text> : null}
                </View>

                <TouchableOpacity
                    style={[styles.proceedButton, { backgroundColor: genre === 'man' ? '#2C9AEE' : '#AD669E' }]}
                    onPress={handleSubmit}
                >
                    <Text style={styles.proceedText}>Next</Text>
                </TouchableOpacity>
                
                {!hasErrors && (
                    <>
                        <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: '700' }}>Or</Text>
                        <View style={styles.view1}>
                            <View style={styles.view2}>
                                <TouchableOpacity style={styles.button}>
                                    <Image
                                        source={GoogleLogoW}
                                        style={styles.logo2}
                                    />
                                    <Text style={styles.textstyle1}>Login with Google</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.button}>
                                    <Image
                                        source={FbLogoW}
                                        style={styles.logo2}
                                    />
                                    <Text style={styles.textstyle1}>Login with Facebook</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </>
                )}
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
        height: 35,
        marginRight: "8%",
    },
    logo1: {
        width: "45%",
        height: "25%",
    },
    textstyle: {
        fontSize: 24,
        color: "#FFFFFF",
        fontWeight: '600',
    },
    inputContainer: {
        marginTop: '-12%',
        width: '100%',
        marginBottom: "10%",
    },
    input: {
        backgroundColor: '#FFFFFFEC',
        borderRadius: 10,
        height: 50,
        marginBottom: 20,
        paddingHorizontal: 20,
        fontSize: 16,
        borderWidth: 2,
    },
    errorText: {
        color: 'white',
        fontSize: 14,
        marginBottom: 10,
    },
    view1: {
        flex: 3,
        padding: "8%",
        width: "90%",
        height: "50%",
        borderRadius: 25,
        justifyContent: 'center',
    },
    view2: {
        width: "110%",
        marginLeft: '-5%',
        justifyContent: 'center',
    },
    button: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 35,
        width: "100%",
        alignItems: 'center',
        marginBottom: "5%",
    },
    logo2: {
        width: "25%",
        height: 70,
        borderRadius: 0,
        marginHorizontal: 10,
    },
    textstyle1: {
        fontSize: 20,
        color: "#AD669E",
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
});

export default SignIn;
