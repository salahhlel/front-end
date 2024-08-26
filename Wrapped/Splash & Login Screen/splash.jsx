import React, { useEffect, useRef, useState } from 'react';
import { View, StyleSheet, Image, Animated, Easing, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Logo from '../assets/Logo.png'; 
import NextP from '../assets/nextP.png'; 

const Splash = () => {
  const [genre, setGenre] = useState('women'); 

  const translateYLogo = useRef(new Animated.Value(600)).current; 
  const translateXButton = useRef(new Animated.Value(-300)).current; 

  useEffect(() => {
    Animated.sequence([
      Animated.timing(translateYLogo, {
        toValue: 0,
        duration: 1000,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }),
      Animated.timing(translateXButton, {
        toValue: 0,
        duration: 1000,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      })
    ]).start();
  }, [translateYLogo, translateXButton]);

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={genre === 'man' ? ['#2C9AEE', '#ABC0FF'] : ['#FFB6C8', '#AD669E']}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={styles.background}
      >
        <View style={styles.logoContainer}>
          <Animated.Image
            source={Logo}
            style={[styles.logo, { transform: [{ translateY: translateYLogo }] }]}
            resizeMode="contain"
          />
        </View>
        <TouchableOpacity style={styles.buttonContainer}>
          <Animated.Image
            source={NextP}
            style={[styles.button, { transform: [{ translateX: translateXButton }] }]}
            resizeMode="contain"
          />
        </TouchableOpacity>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 300,
    height: 300,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:'30%'
  },
  button: {
    width: 50,
    height: 50,
  },
});

export default Splash;
