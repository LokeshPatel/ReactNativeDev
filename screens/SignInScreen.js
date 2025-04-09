import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

export default SignInScreen = () => {
  return (
    <View style={styles.container}>
      <TextInput value="" style={styles.input} placeholder="User Name" />
      <TextInput
        value=""
        style={styles.input}
        placeholder="Password"
        secureTextEntry
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 24,
    textAlign: "center",
    color: "#333",
  },
  input: {
    height: 48,
    borderColor: "#888",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
    fontSize: 16,
  },
});
