import React, { useReducer } from "react";
import { View, Text, StyleSheet, Image, Alert } from "react-native";
import InputText from "../components/InputText";
import DevButton from "../components/DevButton";

const SignUpScreen = () => {
  // initial varaible set for registration process
  const initialState = {
    username: "",
    emailid: "",
    password: "",
    phonenumber: "",
    city: "",
    errors: {},
  };

  // Reducer function for handle input text field values and error
  const reducer = (state, action) => {
    switch (action.type) {
      case "UPDATE_FIELD": {
        return {
          ...state,
          [action.field]: action.value,
          errors: { ...state.errors, [action.field]: "" },
        };
      }
      case "SET_ERRORS": {
        console.log("Update Error");
        return { ...state, errors: action.errors };
      }
      default:
        return state;
    }
  };

  // varaible handle using reducer option for registration
  const [state, dispatch] = useReducer(reducer, initialState);
  const { username, emailid, password, phonenumber, city, errors } = state;

  // Handle value change events when enter value in textfield
  const handleChange = (field, value) => {
    dispatch({ type: "UPDATE_FIELD", field, value });
  };

  // Validation function for input text field
  const validateForm = () => {
    const newErrors = {};
    if (!username) newErrors.username = "Name is required";
    if (!emailid.includes("@")) newErrors.emailid = "Enter a valid email";
    if (password.length < 6) newErrors.password = "Minimum 6 characters";
    if (Object.keys(newErrors).length > 0) {
      dispatch({ type: "SET_ERRORS", errors: newErrors });
      return false;
    }
    return true;
  };

  // Handle registration submit button event
  const handleRegister = () => {
    if (validateForm()) {
      Alert.alert("✅ Success", "Registration Complete!");
      console.log({ username, emailid, password });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerViewContainer}>
        <Image source={require(`../assets/favicon.png`)} />
        <Text style={styles.text}>Sign up with valid details</Text>

        <InputText
          iconName="person-outline"
          value={username}
          placeholder="Enter user name"
          error={errors.username}
          onChangeText={(text) => handleChange("username", text)}
        />
        <InputText
          label="Email"
          value={emailid}
          placeholder="Enter valid email id"
          iconName="mail-outline"
          error={errors.emailid}
          onChangeText={(text) => handleChange("emailid", text)}
        />
        <InputText
          label="Password"
          value={password}
          iconName="lock-closed-outline"
          placeholder="Enter password"
          secureTextEntry={true}
          showToggle={true}
          error={errors.password}
          onChangeText={(text) => handleChange("password", text)}
        />
        <InputText
          label="Number"
          value={phonenumber}
          placeholder="Enter phone number"
          iconName="call-outline"
          onChangeText={(text) => handleChange("phonenumber", text)}
        />
        <InputText
          value={city}
          placeholder="Enter city name"
          iconName="home-outline"
          onChangeText={(text) => handleChange("city", text)}
        />
        <DevButton title={"Submit"} onPress={handleRegister} />
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
