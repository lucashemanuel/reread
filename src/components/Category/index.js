import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Category({ data }) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.8}>
      <Text>{data.name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    margin: 10,
    maxHeight: 150,
    width: 200,
    backgroundColor: "gold",
    borderRadius: 25,
  },
});
