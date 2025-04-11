import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import DevButton from "../components/DevButton";
import InputText from "../components/InputText";

export default SignInScreen = ({ navigation }) => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const buttonOnPressEventForSignIn = ({ title }) => {
    navigation.navigate("Dashboard");
  };

  const buttonOnPressEventForSignUp = ({ title }) => {
    navigation.navigate("SignUp");
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerViewContainer}>
        <Image source={require(`../assets/favicon.png`)} />
        <Text style={styles.text}>Sign in with active login details</Text>

        <InputText
          value={username}
          placeholder="Email"
          onChangeText={setUserName}
          iconName="mail-outline"
        />

        <InputText
          value={password}
          placeholder="Password"
          secureTextEntry
          onChangeText={setPassword}
          iconName="lock-closed-outline"
          showToggle={true}
        />

        <DevButton title="Sign In" onPress={buttonOnPressEventForSignIn} />
        <DevButton title="Sign Up" onPress={buttonOnPressEventForSignUp} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    backgroundColor: "#E9EAEC",
    alignItems: "center",
  },
  innerViewContainer: {
    alignItems: "center",
    paddingVertical: 20,
    backgroundColor: "#E0E0E0",
    margin: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#E0E0E0",
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
    fontWeight: "bold",
  },
});
