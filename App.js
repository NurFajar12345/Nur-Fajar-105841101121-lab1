import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUpPages from './pages/SignUpPages';
import HalamanLogin from './pages/HalamanLogin';
import ForgotPassword from './pages/ForgotPassword';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignUp">
        <Stack.Screen name="SignUp" component={SignUpPages} options={{ title: 'Sign Up' }} />
        <Stack.Screen name="Login" component={HalamanLogin} options={{ title: 'Login' }} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ title: 'Forgot Password' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
