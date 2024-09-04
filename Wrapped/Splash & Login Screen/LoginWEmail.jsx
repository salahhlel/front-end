import React, { useState } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text, TextInput } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { useRoute, useNavigation } from '@react-navigation/native';
import BackIcon from '../assets/flecheIcon.png';
import GoogleLogoW from "../assets/googleLogoW.png"
import FbLogoW from "../assets/fbLogoW.png"
const LoginWEmail = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { genre } = route.params; // Make sure 'genre' is defined here


    return (
        <View style={styles.container}>
            <LinearGradient
                colors={genreA === 'man' ? ['#2C9AEE', '#ABC0FF'] : ['#AD669E', '#FFB6C8']}
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
                    <Text style={styles.textstyle}>Log In</Text>
                </TouchableOpacity>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={[styles.input,{borderColor: genreA === 'man' ? '#1870B3' : '#AD669E', color:genreA === 'man' ? '#1870B3' : '#AD669E'}]}
                        placeholder="Email"
                        placeholderTextColor={genreA==='man'? '#1870B3':'#AD669E'}
                    />
                    <TextInput
                        style={[styles.input,{borderColor: genreA === 'man' ? '#1870B3' : '#AD669E',color:genreA === 'man' ? '#1870B3' : '#AD669E' }]}
                        placeholder="Password"
                        placeholderTextColor={genreA==='man'? '#1870B3':'#AD669E'}
                    />
                </View>
                    <TouchableOpacity>
                    <Text style={styles.forgetpass}>Forget Password !</Text>
                    </TouchableOpacity>
                    
                <TouchableOpacity style={[styles.proceedButton,{backgroundColor: genreA === 'man' ? '#2C9AEE' : '#AD669E',}]}>
                    <Text style={styles.proceedText}>Proceed</Text>
                </TouchableOpacity>
                <View>
                    <Text>Or</Text>
                </View>
                <View style={styles.view2}>
                <TouchableOpacity  style={styles.button}>
                    <Image
                        source={GoogleLogoW}
                        style={styles.logo}

                    />
                    <Text style={styles.textstyle1}>Login with Google</Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.button}>
                    <Image
                        source={FbLogoW}
                        style={styles.logo}

                    />
                    <Text style={styles.textstyle1}>Login with Facebook</Text>
                </TouchableOpacity>
            </View>
            </LinearGradient>
        </View>

    )
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
    forgetpass:{
        color: '#FFFFFFAD',
        fontSize: 14,
        textDecorationLine: 'underline',
    },
    view2:{
        width:"110%",
        marginLeft:'-5%',
        justifyContent: 'center',
      },
      button:{
        flexDirection: 'row',
        backgroundColor:'white',
        borderRadius:35,
        width:"100%",
        alignItems: 'center',
        marginBottom:"5%"
      },
      logo: {
        width: "25%",
        height: 70,
        borderRadius: 0,
        marginHorizontal: 10,
      },
      textstyle1:{
        fontSize: 20,
        color:"#AD669E",
        fontWeight: '500',

      },
});
export default LoginWEmail;
