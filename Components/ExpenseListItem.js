import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { GlobalStylesForApp } from "../Styles/GlobalStyles";
import { getFormattedDateHelperFunction } from "./getFormattedDateHelper";
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

{/* <MaterialIcons name="add-box" size={24} color="black" /> */}

const { width } = Dimensions.get("window");

export default function ExpenseListItem({id,description, amount, date }) {

  const navigation = useNavigation();

  function onPressListItemHandler()
  {
    navigation.navigate("ManageExpenses");
  }

  return (
    <Pressable onPress={onPressListItemHandler} style={({pressed})=>pressed && styles.pressed}>
      <View style={styles.container}>
        <View style={styles.descriptionContainer}>
          <Text style={styles.text}>{description}</Text>
          <Text style={styles.dateText}>
            {getFormattedDateHelperFunction(date)}
          </Text>
        </View>
        <Text style={styles.amountText}>${amount}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({

  pressed:
  {
    opacity:0.7
  },

  text: {
    color: GlobalStylesForApp.color.textColor,
    fontSize: 18,
  },

  amountText: {
    color: GlobalStylesForApp.color.accentColor,
    fontSize: 18,
  },

  dateText: {
    color: GlobalStylesForApp.color.subTextColor,
    fontSize: 10,
    marginTop: 2,
  },

  container: {
    backgroundColor: GlobalStylesForApp.color.cardColor,
    width: width - 40, // Adjust the width to fit the screen, with some padding
    padding: 10,
    marginTop: 10,
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center", // Center content vertically
    borderRadius: 12,
  },

  descriptionContainer: {
    flexDirection: "column",
  },
});
