import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const PostCard = () => {
  return (
    <View style={styles.card}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={{ uri: "https://media.voguebusiness.com/photos/65e762aa2a09a98387402ce6/2:3/w_2560%2Cc_limit/pfw-wrap-vogue-business-story.jpg" }}
          style={styles.profileImage}
        />
        <View>
          <Text style={styles.username}>Anant R.</Text>
          <Text style={styles.date}>5 days ago</Text>
        </View>
        <Text style={styles.menu}>⋮</Text>
      </View>

      {/* Image */}
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: "https://media.voguebusiness.com/photos/65e762aa2a09a98387402ce6/2:3/w_2560%2Cc_limit/pfw-wrap-vogue-business-story.jpg" }}
          style={styles.postImage}
        />
        <View style={styles.tag}>
          <Text style={styles.brand}>Gucci</Text>
          <Text style={styles.price}>18$</Text>
        </View>
      </View>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>view post</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>make as out of stock</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    margin: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  username: {
    fontSize: 16,
    fontWeight: "bold",
  },
  date: {
    fontSize: 12,
    color: "#777",
  },
  menu: {
    marginLeft: "auto",
    fontSize: 18,
  },
  imageContainer: {
    position: "relative",
    marginBottom: 15,
  },
  postImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  tag: {
    position: "absolute",
    bottom: 10,
    left: 10,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    padding: 5,
    borderRadius: 5,
  },
  brand: {
    fontWeight: "bold",
  },
  price: {
    color: "#777",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    flex: 1,
    marginHorizontal: 5,
    paddingVertical: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#555",
  },
});

export default PostCard;