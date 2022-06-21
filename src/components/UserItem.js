import { View, Text, StyleSheet } from "react-native";
import React from "react";

const UserItem = ({ user }) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemTitle}>{user.name}</Text>
      <Text style={styles.itemTitle}>{user.email}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: "#333333",
    padding: 20,
    marginVertical: 8,
    borderRadius: 5,
  },
  itemTitle: {
    color: "#fff",
  },
  itemDescripcion: {},
});

export default UserItem;
