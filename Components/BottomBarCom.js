import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import {
  BottomTabBar,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import ManageExpenses from "../Screens/ManageExpenses";
import RecentExpenses from "../Screens/RecentExpenses";
import AllExpenses from "../Screens/AllExpenses";
import { GlobalStylesForApp } from "../Styles/GlobalStyles";
import { Ionicons } from "@expo/vector-icons";
import AddButton from "./UI/AddButton";
import { useNavigation } from "@react-navigation/native";
// import IconButton from "./UI/IconButton";

export default function BottomBarCom() {
  const Stack = createNativeStackNavigator();
  const BottomTab = createBottomTabNavigator();

  //use navigation hook

  const navigation = useNavigation();

  function onPressAddButtonHandler()
  {
      navigation.navigate("ManageExpenses");  
  }
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: GlobalStylesForApp.color.backgroundColor,
          elevation:0,
        
        },

        headerTintColor: GlobalStylesForApp.color.textColor,

        tabBarStyle: {
          backgroundColor: GlobalStylesForApp.color.backgroundColor,
          borderTopWidth:0, //remove that top line from tab
          elevation:0,
          shadowOpacity:0
        },

        tabBarActiveTintColor: GlobalStylesForApp.color.accentColor,

        tabBarItemStyle: {
            marginBottom: 20, // Add bottom margin to the tab bar items
          },


          tabBarLabelStyle:
          {
            marginBottom:-10
          },

          tabBarIconStyle:
          {
            marginTop:-5
          }

          ,

          headerRight:()=><AddButton onPress={onPressAddButtonHandler} />
      }}
    >
      {/* SCREEN */}

      <BottomTab.Screen
        name="RecentExpenses"
        component={RecentExpenses}
        options={{
          title: "Recent Expenses",
          tabBarLabel: "Recent Expenses",
          tabBarIcon: ({color, size}) => (
            <Ionicons name="time-outline" size={size} color={color} />
          ),
          tabBarButton: (props) => (
            <TouchableOpacity {...props} activeOpacity={0.6} />
          ),
        }}
      />

      <BottomTab.Screen name="AllExpenses" component={AllExpenses} 
       options={{
        title: "All Expenses",
        tabBarLabel: "All Expenses",
        tabBarIcon: ({color, size}) => (
          <Ionicons name="list-circle-outline" size={size} color={color} />
        ),
        tabBarButton: (props) => (
            <TouchableOpacity {...props} activeOpacity={0.6} />
          ),
      }}/>
    </BottomTab.Navigator>
  );
}

const styles = StyleSheet.create({});
