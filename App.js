import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { NativeBaseProvider } from "native-base";
import Routes from "./src/routes";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins: require("./src/fonts/Poppins-Regular.ttf"),
    "Poppins-Bold": require("./src/fonts/Poppins-Bold.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }

  const firebaseConfig = {
    apiKey: "AIzaSyBYVwv-a4zswyPTH82WPkkWfko3chdVI9Q",
    authDomain: "reread-app-5c8e0.firebaseapp.com",
    projectId: "reread-app-5c8e0",
    storageBucket: "reread-app-5c8e0.appspot.com",
    messagingSenderId: "964294410968",
    appId: "1:964294410968:web:633cab085a30a3ff9d8dad",
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Routes />
        <StatusBar style="light" />
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
