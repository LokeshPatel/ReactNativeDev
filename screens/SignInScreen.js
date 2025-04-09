import React from "react";
import { View, Text, StyleSheet, TextInput, Image } from "react-native";
import CustomButton from "../styles/CustomButton";

export default SignInScreen = () => {
  const buttonOnPressEventForSignIn = () => {
    console.log("SignIn");
  };

  const buttonOnPressEventForSignUp = () => {
    console.log("SignUp");
  };

  return (
    <View style={styles.container}>
      <Image source={require(`../assets/favicon.png`)} />
      <Text style={styles.text}>Sign in with active login details</Text>
      <TextInput value="" style={styles.input} placeholder="User Name" />
      <TextInput
        value=""
        style={styles.input}
        placeholder="Password"
        secureTextEntry
      />
      <CustomButton title="Sign-In" onPress={buttonOnPressEventForSignIn} />
      <CustomButton title="Sign-Up" onPress={buttonOnPressEventForSignUp} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    backgroundColor: "#fff",
    alignItems: "center",
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
    marginTop: 8,
    marginBottom: 8,
    fontSize: 16,
    width: 300,
  },
  text: {
    padding: 8,
    fontSize: 14,
    fontStyle: "bold",
  },
});
