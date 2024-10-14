import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, Button, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const UserForm = () => {
  const [fullName, setFullName] = useState('');
  const [birthDay, setBirthDay] = useState('');
  const [location, setLocation] = useState('');
  const [gender, setGender] = useState('');

  const handleSubmit = () => {
    if (!fullName || !birthDay || !location || !gender) {
      Alert.alert('Erreur', 'Tous les champs sont requis.');
    } else {
      Alert.alert('Succès', `Nom: ${fullName}\nDate de naissance: ${birthDay}\nLocalisation: ${location}\nGenre: ${gender}`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nom complet</Text>
      <TextInput
        style={styles.input}
        placeholder="Entrer votre nom complet"
        value={fullName}
        onChangeText={setFullName}
      />

      <Text style={styles.label}>Date de naissance</Text>
      <TextInput
        style={styles.input}
        placeholder="JJ/MM/AAAA"
        value={birthDay}
        onChangeText={setBirthDay}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Localisation</Text>
      <TextInput
        style={styles.input}
        placeholder="Entrer votre localisation"
        value={location}
        onChangeText={setLocation}
      />

      <Text style={styles.label}>Genre</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={gender}
          style={styles.picker}
          onValueChange={(itemValue) => setGender(itemValue)}
        >
          <Picker.Item label="Sélectionner le genre" value="" />
          <Picker.Item label="Homme" value="Homme" />
          <Picker.Item label="Femme" value="Femme" />
          <Picker.Item label="Autre" value="Autre" />
        </Picker>
      </View>

      <Button title="Soumettre" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginVertical: 10,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  pickerContainer: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
  },
  picker: {
    height: 40,
    width: '100%',
  },
});

export default UserForm;
