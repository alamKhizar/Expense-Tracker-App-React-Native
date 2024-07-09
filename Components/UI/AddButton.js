import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

export default function AddButton({ onPress }) {
  return (
    <Pressable 
      onPress={onPress}
      style={({ pressed }) => [
        styles.container, 
        pressed && styles.pressed
      ]}
    >
      <View style={styles.innerContainer}>
        <MaterialIcons name="add-box" size={30} color="#FFD700" />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    marginRight: 20,
  },
  innerContainer: {
    // If you have other styles for the inner container, you can add them here
  },
  pressed: {
    opacity: 0.5,
  },
});
