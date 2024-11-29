import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import Oneproduct from '../widgets/OneProduct'
const OrderCard = ({ orderId, items, price, status, image }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.orderId}>#{orderId}</Text>
        <Text style={styles.details}>Items: {items}</Text>
        <Text style={styles.details}>Price: {price} Dt</Text>
        <Text style={styles.status}>Status: {status}</Text>
      </View>
      <TouchableOpacity style={styles.menuButton}>
        <Text style={styles.menuText}>⋮</Text>
      </TouchableOpacity>
    </View>
  );
};

const App = () => {
  const [activeButton, setActiveButton] = useState('favorites');
  const [activeTab, setActiveTab] = useState(0);

  const handlePress = (button) => {
    setActiveButton(button);
  };

  const data = [
    { id: '1', orderId: '123456', items: 2, price: 25, status: 'en cours', image: 'https://via.placeholder.com/150' },
    { id: '2', orderId: '123478', items: 3, price: 30, status: 'en cours', image: 'https://via.placeholder.com/150' },
  ];

  const buttonStyle = (button) => ({
    backgroundColor: activeButton === button ? '#AD669E' : '#fff',
    padding: 10,
    borderRadius: 25,
    margin: 5,
  });

  const AppContent = () => (
  
    <View style={styles.container}>
        <TouchableOpacity onPress={()=>{ChangeView (1)}}>
      <OrderCard
        orderId="123456"
        items={2}
        price={25}
        status="en cours"
        image="https://via.placeholder.com/150"
      /></TouchableOpacity>
      <OrderCard
        orderId="123478"
        items={2}
        price={25}
        status="en cours"
        image="https://via.placeholder.com/150"
      />
    </View>
  );

  const PubContent = () => (
    <View style={styles.container}>
      <Text>Other Content</Text>
    </View>

  );
  const ChangeView = (index) => {
setActiveTab(index)
      
  }

  return (
    <View>
      <View style={styles.view2}>
        <TouchableOpacity
          style={[styles.button, buttonStyle('favorites')]}
          onPress={() => handlePress('favorites')}
        >
          <Text style={[styles.text, { color: activeButton === 'favorites' ? 'white' : '#AD669E' }]}>
           Ordre
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button2, buttonStyle('likes')]}
          onPress={() => handlePress('likes')}
        >
          <Text style={[styles.text2, { color: activeButton === 'likes' ? 'white' : '#AD669E' }]}>
           Statistics
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button2, buttonStyle('like')]}
          onPress={() => handlePress('like')}
        >
          <Text style={[styles.text2, { color: activeButton === 'like' ? 'white' : '#AD669E' }]}>
            facturation
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{ margin: 2 }}>
        <FlatList
          data={data}
          renderItem={activeTab === 0 ? AppContent : Oneproduct}
          keyExtractor={(item) => item.id}
          numColumns={1}
          scrollEnabled={true}
          contentContainerStyle={styles.imageGrid}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 10,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 10,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 0,
    marginRight: 10,
  },
  content: {
    flex: 1,
  },
  orderId: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  details: {
    color: '#555',
    fontSize: 14,
  },
  status: {
    marginTop: 5,
    color: '#ff9900',
    fontWeight: 'bold',
    fontSize: 14,
  },
  menuButton: {
    padding: 5,
  },
  menuText: {
    fontSize: 18,
    color: '#888',
  },
  view2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
margin : 10 , 

  },
  button: {
    padding: 10,
    borderRadius: 5,
    margin: 5,
  },
  button2: {
    padding: 10,
    borderRadius: 5,
    margin: 5,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
  },
  text2: {
    fontSize: 16,
    textAlign: 'center',
  },
  imageGrid: {
    padding: 10,
  },
  
});

export default App;
