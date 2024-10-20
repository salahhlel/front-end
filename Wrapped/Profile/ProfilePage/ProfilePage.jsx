import React, { useState, useRef } from 'react';
import { View, StyleSheet, Animated, TouchableOpacity, Text, Dimensions, ScrollView } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import ProfileCard from './widgets/ProfileCard';
import MyActivitie from './widgets/MyActivites';
import MyWordrobes from './widgets/MyWordrobes';
import MySales from './widgets/MySales';
import Footer from '../../widgets/Footer';

const screenWidth = Dimensions.get('window').width;

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const underlinePosition = useRef(new Animated.Value(0)).current; // This controls the underline position
  const tabWidth = screenWidth / 2.6; // Adjusted tab width to make them scrollable

  // Animate the underline
  const handleTabSwitch = (index) => {
    setActiveTab(index);
    Animated.timing(underlinePosition, {
      toValue: index * tabWidth, // Move underline to the selected tab
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={styles.container}>
      {/* Navigation Section */}
      <View style={styles.nav}>
        <LinearGradient
          colors={['rgba(173,102,158,1)', 'rgba(255,182,200,1)']}
          start={{ x: 0, y: 1 }}
          end={{ x: 0, y: 0 }}
          style={styles.gradient}
        />
        <View style={styles.Card}>
          <ProfileCard />
        </View>
      </View>

      {/* Tab Section */}
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scrollContainer}>
        <View style={styles.tabContainer}>
          <TouchableOpacity onPress={() => handleTabSwitch(0)} style={styles.tab}>
            <Text style={[styles.tabText, activeTab === 0 ? styles.activeText : null]}>My Activities</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleTabSwitch(1)} style={styles.tab}>
            <Text style={[styles.tabText, activeTab === 1 ? styles.activeText : null]}>My Wardrobes</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleTabSwitch(2)} style={styles.tab}>
            <Text style={[styles.tabText, activeTab === 2 ? styles.activeText : null]}>My Evolution</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleTabSwitch(3)} style={styles.tab}>
            <Text style={[styles.tabText, activeTab === 3 ? styles.activeText : null]}>My Sales</Text>
          </TouchableOpacity>

          <Animated.View
            style={[
              styles.underline,
              {
                transform: [
                  {
                    translateX: underlinePosition, // This will be a pixel value now
                  },
                ],
              },
            ]}
          />
        </View>
      </ScrollView>

      {/* Content Section */}
      <View style={styles.contentContainer}>
        {activeTab === 0 && <MyActivitie />}
        {activeTab === 1 && <MyWordrobes />}
        {activeTab === 2 && <Text>My Evolution</Text>}
        {activeTab === 3 && <MySales />}
      </View>

      {/* Fixed Footer */}
      <View style={styles.footerContainer}>
        <Footer />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  nav: {
    height: "25%", // Height of the nav section
  },
  Card: {
    position: 'absolute',
    top: '10%',
    shadowColor: 'black', // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow offset
    shadowOpacity: 0.25, // Shadow opacity (0 to 1)
    shadowRadius: 3.5,
  },
  gradient: {
    flex: 1, // Make the gradient fill the entire nav section
  },
  scrollContainer: {
    marginTop: '20%', // You can adjust the margin
  },
  tabContainer: {
    flexDirection: 'row',
    position: 'relative', // Ensure it's relative to allow underline to be positioned properly
    width: screenWidth * 1.5, // Increase the width for scrollable tabs
  },
  tab: {
    width: screenWidth / 2.6, // Adjust the width of each tab
    alignItems: 'center',
    paddingBottom: 10,
  },
  tabText: {
    fontSize: 16,
    color: 'black',
    fontWeight: '400',
  },
  activeText: {
    color: '#AD669E', // Active tab text color
  },
  underline: {
    position: 'absolute',
    bottom: 0,
    left: 10, // Start from the left of the tab container
    height: 3,
    width: screenWidth / 3, // Underline width based on number of tabs
    backgroundColor: '#ffb6c8', // Underline color
  },
  contentContainer: {
    flex: 100,
    paddingBottom: "50%", // Ensure content does not overlap with the footer
    
  },
  footerContainer: {
    
  },
});

export default ProfilePage;
