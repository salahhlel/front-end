import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import AddImage from './widgets/AddImage.jsx';
import InputsAsk from './widgets/InputsAsk.jsx';
import plusIcon from '../../assets/plus.png';

const AddPost = ({route}) => {
  const { brands } = route?.params || {}; 

  const [images, setImages] = useState([]);
  const [addImageComponents, setAddImageComponents] = useState([<AddImage setImages={setImages} key={0} index={0} />]);

  const [description, setDescription] = useState('');
  const [compositions, setCompositions] = useState('');
  const [occasion, setOccasion] = useState('');

  const handleAddImage = () => {
    const newIndex = addImageComponents.length;
    setAddImageComponents([
      ...addImageComponents,
      <AddImage setImages={setImages} key={newIndex} index={newIndex} />
    ]);
  };
// console.log(brands);

  const handleNext = () => {
    const postData = {
      description,
      compositions,
      occasion,
      images,
      brands
    };
    console.log(postData);
    // Vous pouvez envoyer postData à un serveur ou à une autre fonction selon vos besoins
  };

  return (
    <View style={styles.view1}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.imagesContainer}>
          {addImageComponents}
          <TouchableOpacity style={styles.addButton} onPress={handleAddImage}>
            <Image source={plusIcon} style={styles.plusIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.view3}>
          <InputsAsk 
            description={description} 
            setDescription={setDescription}
            compositions={compositions}
            setCompositions={setCompositions}
            occasion={occasion}
            setOccasion={setOccasion}
          />
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={{ color: "#fff", fontSize: 16, fontWeight: "bold" }}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  view1: {
    flex: 1,
    padding: "5%",
    backgroundColor: "#fff",
  },
  scrollView: {
    flexGrow: 1,
  },
  imagesContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    height: "40%",
  },
  addButton: {
    marginLeft: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  plusIcon: {
    width: 30,
    height: 30,
  },
  view3: {
    marginTop: 20,
  },
  button: {
    backgroundColor: "#F08DB7",
    alignSelf: "flex-end",
    width: "25%",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
});

export default AddPost;
