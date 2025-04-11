import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import InputText from "../components/InputText";
import DevButton from "../components/DevButton";

const SignUpScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerViewContainer}>
        <Image source={require(`../assets/favicon.png`)} />
        <Text style={styles.text}>Sign up with valid details</Text>

        <InputText
          iconName="person-outline"
          value=""
          placeholder="Enter user name"
        />
        <InputText
          label="Email"
          value=""
          placeholder="Enter valid email id"
          iconName="mail-outline"
        />
        <InputText
          label="Password"
          value=""
          iconName="lock-closed-outline"
          placeholder="Enter password"
          secureTextEntry={true}
          showToggle={true}
        />
        <InputText
          label="Number"
          value=""
          placeholder="Enter phone number"
          iconName="call-outline"
        />
        <InputText
          value=""
          placeholder="Enter city name"
          iconName="home-outline"
        />
        <DevButton title={"Submit"} />
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
  text: {
    padding: 8,
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default SignUpScreen;
