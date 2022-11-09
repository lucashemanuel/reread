import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { NativeBaseProvider } from "native-base";
import Routes from "./src/routes";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins: require("./src/fonts/Poppins-Regular.ttf"),
    "Poppins-Bold": require("./src/fonts/Poppins-Bold.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Routes />
        <StatusBar style="light" />
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
