import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, ScrollView } from 'react-native';

const InvoiceItem = ({ description, quantity, price }) => {
  const total = quantity * price;
  return (
    <View style={styles.invoiceItem}>
      <Text style={styles.itemText}>{description}</Text>
      <Text style={styles.itemText}>{quantity} x {price} Dt</Text>
      <Text style={styles.itemText}>{total} Dt</Text>
    </View>
  );
};

const Invoice = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabPress = (tab) => {
    setActiveTab(tab);
  };

  const items = [
    { id: '1', description: 'Product 1', quantity: 2, price: 25 },
    { id: '2', description: 'Product 2', quantity: 1, price: 50 },
    { id: '3', description: 'Product 3', quantity: 3, price: 10 },
  ];

  const totalAmount = items.reduce((total, item) => total + item.quantity * item.price, 0);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Facture</Text>
      </View>

      <ScrollView style={styles.scrollContainer}>
        <View style={styles.details}>
          <Text style={styles.text}>Date: {new Date().toLocaleDateString()}</Text>
          <Text style={styles.text}>Numéro de facture: #001</Text>
          <Text style={styles.text}>Client: John Doe</Text>
        </View>

        <View style={styles.invoiceItems}>
          <Text style={styles.invoiceTitle}>Détails de la Facture</Text>
          <View style={styles.invoiceHeader}>
            <Text style={styles.headerText}>Description</Text>
            <Text style={styles.headerText}>Quantité x Prix</Text>
            <Text style={styles.headerText}>Total</Text>
          </View>
          {items.map(item => (
            <InvoiceItem
              key={item.id}
              description={item.description}
              quantity={item.quantity}
              price={item.price}
            />
          ))}
        </View>

        <View style={styles.totalAmount}>
          <Text style={styles.totalText}>Montant total: {totalAmount} Dt</Text>
        </View>

        <View style={styles.buttons}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleTabPress(0)}
          >
            <Text style={styles.buttonText}>Télécharger PDF</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleTabPress(1)}
          >
            <Text style={styles.buttonText}>Envoyer Email</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  scrollContainer: {
    flex: 1,
  },
  details: {
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  invoiceItems: {
    marginBottom: 20,
  },
  invoiceTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  invoiceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 5,
  },
  invoiceItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  itemText: {
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
  totalAmount: {
    alignItems: 'flex-end',
    marginTop: 20,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30,
  },
  button: {
    backgroundColor: '#AD669E',
    padding: 10,
    borderRadius: 5,
    width: 150,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Invoice;
