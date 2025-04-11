import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

// Dev Button for complete project
const DevButton = ({ title, onPress, style, iconName }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
        <View style={styles.texticoncontainer}>
          <Text style={styles.buttonText}>{title}</Text>
          {iconName && (
            <Ionicons
              name={iconName}
              size={25}
              color="#fff"
              style={styles.icon}
            />
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 10,
  },
  texticoncontainer: {
    flexDirection: "row", // side by side
    alignItems: "center", // vertical center
    justifyContent: "center", // horizontal center
  },
  button: {
    backgroundColor: "#4CAF50", // Green background
    paddingVertical: 12,
    paddingHorizontal: 20,
    width: 200,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff", // White text
    fontSize: 16,
    fontWeight: "bold",
    marginHorizontal: 2,
  },
  icon: {
    marginRight: 8,
  },
});

export default DevButton;
