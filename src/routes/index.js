import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import Register from "../screens/Register";
import Quiz from "../screens/Quiz";
import FirstQuiz from "../screens/FirstQuiz";
import SecondQuiz from "../screens/SecondQuiz";
import ThirdQuiz from "../screens/ThirdQuiz";
import FourthQuiz from "../screens/FourthQuiz";
import Choose from "../screens/Choose";
import Course from "../screens/Course";
import Home from "../screens/Home";

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Quiz"
        component={Quiz}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="FirstQuiz"
        component={FirstQuiz}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SecondQuiz"
        component={SecondQuiz}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ThirdQuiz"
        component={ThirdQuiz}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="FourthQuiz"
        component={FourthQuiz}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Choose"
        component={Choose}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Course"
        component={Course}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
