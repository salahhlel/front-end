import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image,FlatList } from 'react-native';
import DeleteIcon from '../../../assets/delete.png';

const MyWordrobes = () => {

    const images = [
        { id: '1', source: 'https://media.voguebusiness.com/photos/65e762aa2a09a98387402ce6/2:3/w_2560%2Cc_limit/pfw-wrap-vogue-business-story.jpg' },
        { id: '2', source: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaP-Rji0gsGL_IgIk2a1hpevSaH1wBJtkCiw&s' },
        { id: '3', source: 'https://t4.ftcdn.net/jpg/04/84/87/61/360_F_484876187_u6HIlCgA2iZdfkoOamuQa43OJH2zaDVR.jpg' },
        { id: '4', source: 'https://media.voguebusiness.com/photos/65e762aa2a09a98387402ce6/2:3/w_2560%2Cc_limit/pfw-wrap-vogue-business-story.jpg' },
        { id: '5', source: 'https://media.voguebusiness.com/photos/65e762aa2a09a98387402ce6/2:3/w_2560%2Cc_limit/pfw-wrap-vogue-business-story.jpg' },
        { id: '6', source: 'https://media.voguebusiness.com/photos/65e762aa2a09a98387402ce6/2:3/w_2560%2Cc_limit/pfw-wrap-vogue-business-story.jpg' },
        { id: '7', source: 'https://media.voguebusiness.com/photos/65e762aa2a09a98387402ce6/2:3/w_2560%2Cc_limit/pfw-wrap-vogue-business-story.jpg' },
        { id: '8', source: 'https://media.voguebusiness.com/photos/65e762aa2a09a98387402ce6/2:3/w_2560%2Cc_limit/pfw-wrap-vogue-business-story.jpg' },
        // Add more images as needed
      ];
      // Animated styles based on the active button
      const buttonStyle = (button) => ({
        backgroundColor: activeButton === button ? "#AD669E" : "#FFFFFF8F",
        borderColor: '#FFB6C8',
      });
      const renderImageItem = ({ item }) => (
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: item.source }}
            style={styles.image}
            resizeMode="cover" // Ensure the image covers the container
          />
        </View>
      );
  return (
    <View style={styles.container}>
      <View style={styles.view2}>
        <TouchableOpacity
          style={[styles.button]} // Apply styles based on active button
          onPress={() => {}}
        >
          <Text style={[styles.text]}>
            Select
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button2]} // Apply styles based on active button
          onPress={() => {}}
        >
          <Image
            source={DeleteIcon}
            style={{ width: 24, height: 24, }}
          />
        </TouchableOpacity>
      </View>
      <View style={{margin:5}}>
      <FlatList
        data={images}
        renderItem={renderImageItem}
        keyExtractor={(item) => item.id}
        numColumns={2} // Display items in two columns
        scrollEnabled={true} // Enable scrolling
        contentContainerStyle={styles.imageGrid} // Style for the container
      />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view2: {
    flexDirection: 'row',
    margin: 15,
    justifyContent: 'flex-end', // Align both buttons to the right
    alignItems: 'center', // Ensure vertical alignment of items
  },
  button: {
    borderRadius: 15,
    marginRight: 5,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: "#fcecec",
    maxWidth: "30%",
    minWidth: '10%',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
    paddingTop: 10,
  },
  button2: {
    borderRadius: 15,
    marginRight: 5,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: "#fcecec",
    maxWidth: "12%",
    minWidth: '10%',
    alignItems: 'center',
    // paddingLeft: 20,
    // paddingRight: 20,
    // paddingBottom: 10,
    // paddingTop: 10,
    padding:10,

  },
  text: {
    fontSize: 16,
    color: '#AD669E',
    fontWeight: 'bold',
  },
  imageContainer: {
    width: '50%', // Each image will take half the width
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10, // Add space between rows
    margin:2
  },
  image: {
    width: '100%', // Full width of the container
    height: 300, // Set a fixed height or adjust as needed
    borderRadius: 10, // Optional: to round the corners of the images
  },
});

export default MyWordrobes;
