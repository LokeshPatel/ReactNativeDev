import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import DevButton from "../components/DevButton";
import InputText from "../components/InputText";

export default SignInScreen = ({ navigation }) => {
  // Varaible handle values and error message
  const [signInText, setSignInText] = useState({
    emailid: "",
    password: "",
    errors: {},
  });

  // Handle Input Text Field values and error message
  const handleTextInput = (field, value) => {
    setSignInText((preValue) => ({
      ...preValue,
      [field]: value,
      errors: { ...preValue.errors, [field]: "" }, // clear error on change
    }));
  };

  // Validation Input text field handle
  const validateInputText = () => {
    const errorMsg = {};
    if (!signInText.emailid.includes("@"))
      errorMsg.emailid = "Enter a valid email";
    if (signInText.password.length < 6)
      errorMsg.password = "Minimum 6 characters";
    if (Object.keys(errorMsg).length > 0) {
      setSignInText((preValue) => ({
        ...preValue,
        errors: errorMsg,
      }));
      return false;
    }
    return true;
  };

  // Button events for Button OnPres sEvent and
  const buttonOnPressEvent = (action) => {
    if (action == "signIn" && validateInputText()) {
      navigation.navigate("Dashboard", { emailid: signInText.emailid });
    } else if (action == "signUp") {
      navigation.navigate("SignUp");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerViewContainer}>
        <Image source={require(`../assets/favicon.png`)} />
        <Text style={styles.text}>Sign in with active login details</Text>

        <InputText
          value={signInText.emailid}
          placeholder="Email"
          onChangeText={(text) => handleTextInput("emailid", text)}
          iconName="mail-outline"
          error={signInText.errors?.emailid}
        />

        <InputText
          value={signInText.password}
          placeholder="Password"
          secureTextEntry
          onChangeText={(text) => handleTextInput("password", text)}
          iconName="lock-closed-outline"
          showToggle={true}
          error={signInText.errors?.password}
        />

        <DevButton
          title="Sign In"
          onPress={() => {
            buttonOnPressEvent("signIn");
          }}
        />
        <DevButton
          title="Sign Up"
          onPress={() => {
            buttonOnPressEvent("signUp");
          }}
        />
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
