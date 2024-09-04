import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text, Animated } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { useRoute,useNavigation} from '@react-navigation/native';
import EmailLogoW from "../assets/EmailLogo.png"
import GoogleLogoW from "../assets/googleLogoW.png"
import FbLogoW from "../assets/fbLogoW.png"


const LoginP1 = () => {
    const route = useRoute();
    const navigation = useNavigation();

    const { genre } = route.params;

    const text='Join Our Community to access all features'
    const [displayedText, setDisplayedText] = useState('');
    const [displayedText2, setDisplayedText2] = useState('');
    const [displayedText3, setDisplayedText3] = useState('');

    const [annimation,setAnimation]=useState(true)
    const text1="Don't have an account?"
    const text2='Sign Up'

    const animatedOpacity3 = useRef(new Animated.Value(0)).current;
    useEffect(() => {
        let currentIndex = 0;
    
        const intervalId = setInterval(() => {
          if (currentIndex < text.length && annimation) {
            setDisplayedText((prev) => prev + text[currentIndex]);
            currentIndex++;
          } else {
            clearInterval(intervalId);
            setAnimation(false)
          }
        }, 20);
    
        return () => clearInterval(intervalId);
      }, [text]);
      useEffect(() => {
        let currentIndex = 0;
    
        const intervalId = setInterval(() => {
          if (currentIndex < text1.length && annimation) {
            setDisplayedText2((prev) => prev + text1[currentIndex]);
            currentIndex++;
            setAnimation(false)
          } else {
            clearInterval(intervalId);
          }
        }, 30);
    
        return () => clearInterval(intervalId);
      }, [text1]);
      useEffect(() => {
        let currentIndex = 0;
    
        const intervalId = setInterval(() => {
          if (currentIndex < text2.length && annimation) {
            setDisplayedText3((prev) => prev + text2[currentIndex]);
            currentIndex++;
            setAnimation(false)
          } else {
            clearInterval(intervalId);
          }
        }, 90);
    
        return () => clearInterval(intervalId);
      }, [text2]);


      useEffect(() => {
        Animated.timing(animatedOpacity3, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: true,
        }).start();
      }, []);


    return(
        <View style={styles.container}>
      <LinearGradient
        colors={genre === 'man' ? ['#2C9AEE', '#ABC0FF'] : ['#FFB6C8', '#AD669E']}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={styles.background}
      >
        <View style={styles.logoContainer}>
        <Animated.Text style={styles.textstyle2}>
            {displayedText}
          </Animated.Text>
        </View>
        <View style={styles.view1}>
            <View style={styles.view2}>
                <TouchableOpacity style={styles.button}
                  onPress={() => navigation.navigate("LoginWEmail",{genre})}
                >
                    <Image
                        source={EmailLogoW}
                        style={styles.logo}

                    />
                    <Text style={styles.textstyle1}>Login with Email</Text>
                </TouchableOpacity>
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
        </View>
        <Animated.View style={{ opacity: animatedOpacity3 , marginBottom:"10%"}}>
          <TouchableOpacity 
          style={{flexDirection:"row"}}
          onPress={() => navigation.navigate("AcountDet",{genre})}
          >
            <Text style={styles.textstyle3}>{displayedText2 }</Text>
            <Text style={styles.textstyle4}>{displayedText3}</Text>
          </TouchableOpacity>
        </Animated.View>
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
        justifyContent: 'center',
        alignItems: 'center',
      },
      logoContainer: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        width: "85%",
      },
      textstyle2: {
        fontSize: 34,
        color: "#FFFFFF",
        marginBottom: '10%',
        fontWeight: '500',
        textAlign: "center",
      },
      view1:{
        // flex:3,
        backgroundColor:"rgba(255, 255, 255, 0.4)",
        padding:"8%",
        width:"90%",
        height:"50%",
        borderRadius:25,
        justifyContent: 'center',
        marginBottom:"20%"
      },
      logo: {
        width: "25%",
        height: 70,
        borderRadius: 0,
        marginHorizontal: 10,
      },
      button:{
        flexDirection: 'row',
        backgroundColor:'white',
        borderRadius:35,
        width:"100%",
        alignItems: 'center',
        marginBottom:"5%"
      },
      textstyle1:{
        fontSize: 20,
        color:"#AD669E",
        fontWeight: '500',

      },
      textstyle3: {
        fontSize: 18,
        color: "#FFFFFF",
        marginBottom: '10%',
      },
      textstyle4: {
        fontSize: 18,
        color: "#FFFFFF",
        marginBottom: '10%',
        fontWeight: '700',
        marginLeft:'2%'
      },
      view2:{
        width:"110%",
        marginLeft:'-5%',
        justifyContent: 'center',
      },
})

export default LoginP1;

