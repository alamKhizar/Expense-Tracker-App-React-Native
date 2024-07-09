import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import ManageExpenses from "./Screens/ManageExpenses";
import BottomBarCom from "./Components/BottomBarCom";
import GlobalStyles, { GlobalStylesForApp } from "./Styles/GlobalStyles";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MainOverView"
          component={BottomBarCom}
          options=
          {{ 
            headerShown: false,
          }
          }
        />
        <Stack.Screen name="ManageExpenses" component={ManageExpenses}
        
        options=
        {
          {
            headerStyle: {
              backgroundColor: GlobalStylesForApp.color.backgroundColor,
              elevation:1,
            
            },
    
            headerTintColor: GlobalStylesForApp.color.textColor,
          }
        }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
