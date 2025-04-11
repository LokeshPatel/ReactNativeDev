import React, { useState } from "react";
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const InputText = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
  keyboardType = "default",
  iconName,
  error,
  showToggle = false,
  style,
  inputStyle,
  onEndEditing,
  autoCapitalize = "none",
  autoCorrect = false,
}) => {
  const [isPasswordVisible, setPasswordVisible] = useState(!secureTextEntry);

  return (
    <View style={[styles.wrapper, style]}>
      <View style={styles.inputContainer}>
        {iconName && (
          <Ionicons
            name={iconName}
            size={20}
            color="#666"
            style={styles.icon}
          />
        )}
        <TextInput
          value={value}
          style={[styles.input, style]}
          placeholder={placeholder}
          onChangeText={onChangeText}
          secureTextEntry={!isPasswordVisible}
          keyboardType={keyboardType}
          iconName={iconName}
          error={error}
          showToggle={showToggle}
          inputStyle={inputStyle}
          onEndEditing={onEndEditing}
          autoCapitalize={autoCapitalize}
          autoCorrect={autoCorrect}
        />
        {showToggle && secureTextEntry && (
          <TouchableOpacity
            onPress={() => setPasswordVisible(!isPasswordVisible)}
          >
            <Ionicons
              name={isPasswordVisible ? "eye-off" : "eye"}
              size={20}
              color="#666"
              style={styles.icon}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: 10,
    alignItems: "center",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#ccc",
    borderWidth: 2,
    borderRadius: 8,
    backgroundColor: "#f8f8f8",
    paddingHorizontal: 10,
    marginHorizontal: 10,
  },
  input: {
    flex: 1,
    height: 48,
    borderColor: "#888",
    paddingVertical: 10,
    fontSize: 16,
  },
  icon: {
    marginHorizontal: 5,
  },
});

export default InputText;
