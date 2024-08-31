import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { useRoute, useNavigation } from '@react-navigation/native';
import CameraIcon from '../assets/cameraIcon.png';
import BackIcon from '../assets/flecheIcon.png';

const AcountDet = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { genre } = route.params;

    return(
        <View style={styles.container}>
            <LinearGradient
                colors={genre === 'man' ? ['#2C9AEE', '#ABC0FF'] : ['#FFB6C8', '#AD669E']}
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
                    <Text style={styles.textstyle}>Account Details</Text>
                </TouchableOpacity>
                
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
    },
    backButton: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        top: 50,
        left: 50,
    },
    logo: {
        width: 10,
        height: 20,
        marginRight: 40,
    },
    textstyle: {
        fontSize: 24,
        color: "#FFFFFF",
        fontWeight: '500',
    },
});

export default AcountDet;
