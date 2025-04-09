import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import CustomButton from "../styles/CustomButton";

const HomeScreen = ({ navigation }) => {
  const buttonOnPressEvent = () => {
    navigation.navigate("SignIn");
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/favicon.png")} />
      <Text style={styles.title}>Welcome To React Native Dev</Text>
      <CustomButton title="Next ->" onPress={buttonOnPressEvent} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 100,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#000",
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 20,
  },
});

export default HomeScreen;
