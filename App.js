import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import Routes from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Poppins': require('./src/fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('./src/fonts/Poppins-Bold.ttf'),
  });
  if (!fontsLoaded) {
    return null;
  }
  
  return (
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>    
  );
}
