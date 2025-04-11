import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import DevButton from "../components/DevButton";

const HomeScreen = ({ navigation }) => {
  const buttonOnPressEvent = () => {
    navigation.navigate("SignIn");
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/favicon.png")} />
      <Text style={styles.title}>Welcome To React Native Dev</Text>
      <DevButton
        style={styles.button}
        title="Next"
        onPress={buttonOnPressEvent}
        iconName="arrow-forward-circle-outline"
      />
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
  button: {
    marginTop: 100,
  },
});

export default HomeScreen;
