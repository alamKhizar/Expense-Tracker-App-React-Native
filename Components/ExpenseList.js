import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { GlobalStylesForApp } from "../Styles/GlobalStyles";
import ExpenseListItem from "./ExpenseListItem";

const { width } = Dimensions.get('window');

export default function ExpenseList({ expenses }) {
  function renderExpenseItem(itemData) {
    return (
      // <View style={styles.container}>
      //   <Text style={styles.text}>{itemData.item.description}</Text>
      // </View>
      <ExpenseListItem {...itemData.item}/>
    );
  }

  return (
    <View style={styles.listContainer}>
    <FlatList 
      data={expenses} 
      renderItem={renderExpenseItem} 
      keyExtractor={(item) => item.id.toString()}
      showsVerticalScrollIndicator={false} 
    />
  </View>
  );
}

const styles = StyleSheet.create({

  listContainer: {
    flex: 1, // Ensure the parent container can expand to fill the screen
  },

  text: {
    color: GlobalStylesForApp.color.subTextColor,
    fontSize: 18,
  },

  container: {
    flexDirection: 'row',
    backgroundColor: GlobalStylesForApp.color.cardColor,
    width: width - 40, // Adjust the width to fit the screen, with some padding
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 10,
    height: 60,
    alignItems: 'center', // Center content vertically
    borderRadius: 12,
    paddingLeft:15
    
  },
});

