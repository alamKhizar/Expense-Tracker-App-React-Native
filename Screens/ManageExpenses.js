import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GlobalStylesForApp } from '../Styles/GlobalStyles'

export default function ManageExpenses() {
    return (
        <View style={styles.container}>
          <Text style={styles.text}>Manage Expenses</Text>
        </View>
      )
    }
    
    const styles = StyleSheet.create({
        container:{
                flex:1,
                alignItems:'center',
                justifyContent:'center',
                backgroundColor:GlobalStylesForApp.color.backgroundColor
        },
        text:{
            color:GlobalStylesForApp.color.subTextColor,
            fontSize:20
        }
    })