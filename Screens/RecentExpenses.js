import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { GlobalStylesForApp } from "../Styles/GlobalStyles";
import ExpenseOutput from "../Components/ExpenseOutput";

export default function RecentExpenses() {
  return (
    <View style={styles.container}>
      <ExpenseOutput periodTime={"7 Days Records"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: GlobalStylesForApp.color.backgroundColor,
  },
  text: {
    color: GlobalStylesForApp.color.subTextColor,
    fontSize: 20,
  },
});
