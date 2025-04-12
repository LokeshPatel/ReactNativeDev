import React, { useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Dashboard = ({ navigation, route }) => {
  useEffect(() => {
    navigation.setOptions({
      headerBackVisible: false,
      headerRight: () => (
        <TouchableOpacity onPress={handleLogout} style={{ marginRight: 15 }}>
          {/* <Text style={{ color: "#007AFF", fontSize: 16 }}>Logout</Text> */}
          <AntDesign name="poweroff" size={24} color="black" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  // Logout event and rediect on Welcome Screen
  const handleLogout = () => {
    Alert.alert("Confirm Logout", "Are you sure?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Logout",
        style: "destructive",
        onPress: () => {
          navigation.reset({
            index: 0,
            routes: [{ name: "Home" }],
          });
        },
      },
    ]);
  };

  return (
    <View>
      <Text>Dashboard - {route.params.emailid}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Dashboard;
