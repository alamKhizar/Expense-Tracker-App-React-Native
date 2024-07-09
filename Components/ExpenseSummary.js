import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import { GlobalStylesForApp } from "../Styles/GlobalStyles";

const { width } = Dimensions.get('window'); // Get the screen width

export default function ExpenseSummary({ expenses, periodTime }) {
  
    const total = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{periodTime}</Text>
      <Text style={styles.text}>${total.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    text: {
        color: GlobalStylesForApp.color.subTextColor,
        fontSize: 17,
      },

      container:{
        flexDirection:'row',
        borderColor:GlobalStylesForApp.color.accentColor,
        borderWidth:1,
        width: width - 40, // Adjust the width to fit the screen, with some padding
        justifyContent:'space-between',
        paddingLeft:10,
        paddingRight:10,
        marginTop:10,
        height:40,
        alignItems:'center',
        borderRadius:8,
        marginBottom:20
      }

});
