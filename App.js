import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import SignUpPage from './pages/SignUpPages';
import LoginPage from './pages/HalamanLogin';
import ForgotPasswordPage from './pages/ForgotPassword';
import HomeScreen from './pages/Home';
import ShopScreen from './pages/Shop';
import BagScreen from './pages/Bag';
import FavoritesScreen from './pages/Favorites';
import ProfileScreen from './pages/Profile';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignUp">
        <Stack.Screen
          name="SignUp"
          component={SignUpPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginPage}
          options={{ headerShown: true, title: 'Login' }}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPasswordPage}
          options={{ headerShown: true, title: 'Forgot Password' }}
        />
        <Stack.Screen
          name="Main"
          component={MainTabs}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function MainTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('./assets/home.merah.png')}
              
            />
          ),
        }} 
      />
      <Tab.Screen 
        name="Shop" 
        component={ShopScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('./assets/shop.merah.png')}
              
            />
          ),
        }} 
      />
      <Tab.Screen 
        name="Bag" 
        component={BagScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('./assets/bag.merah.png')}
              
            />
          ),
        }} 
      />
      <Tab.Screen 
        name="Favorites" 
        component={FavoritesScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('./assets/favorites.merah.png')}
              
            />
          ),
        }} 
      />
      <Tab.Screen 
        name="Profile" 
        component={ProfileScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('./assets/profile.merah.png')}
              
            />
          ),
        }} 
      />
    </Tab.Navigator>
  );
}

export default App;
