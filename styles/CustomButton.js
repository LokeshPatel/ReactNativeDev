import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";

// Custom Button for complete project
const CustomButton = ({ title, onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 10,
  },
  button: {
    backgroundColor: "#4CAF50", // Green background
    paddingVertical: 12,
    paddingHorizontal: 12,
    width: 200,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff", // White text
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default CustomButton;
