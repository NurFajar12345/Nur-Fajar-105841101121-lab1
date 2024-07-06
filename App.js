import * as React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './pages/HalamanLogin';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from './pages/Profile'; // Import the ProfileScreen

// Dummy components for new tabs
function BagScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Bag Screen</Text>
    </View>
  );
}

function FavoritesScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Favorites Screen</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? require('./assets/home.merah.png') : require('./assets/home.putih.png');
          } else if (route.name === 'Login') {
            iconName = focused ? require('./assets/shop.merah.png') : require('./assets/shop.putih.png');
          } else if (route.name === 'Bag') {
            iconName = focused ? require('./assets/bag.merah.png') : require('./assets/bag.putih.png');
          } else if (route.name === 'Favorites') {
            iconName = focused ? require('./assets/favorites.merah.png') : require('./assets/favorites.putih.png');
          } else if (route.name === 'Profile') {
            iconName = focused ? require('./assets/profile.merah.png') : require('./assets/profile.putih.png');
          }
          return <Image source={iconName} style={{ width: 25, height: 20 }} />;
        },
        tabBarLabel: ({ focused }) => {
          let label;
          if (route.name === 'Home') {
            label = 'Home';
          } else if (route.name === 'Login') {
            label = 'Shop';
          } else if (route.name === 'Bag') {
            label = 'Bag';
          } else if (route.name === 'Favorites') {
            label = 'Favorites';
          } else if (route.name === 'Profile') {
            label = 'Profile';
          }
          return (
            <Text style={{ color: focused ? 'red' : 'black', fontSize: 10 }}>
              {label}
            </Text>
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Login" component={LoginPage} />
      <Tab.Screen name="Bag" component={BagScreen} />
      <Tab.Screen name="Favorites" component={FavoritesScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          padding: 10,
          backgroundColor: '#DDDDDD',
          borderRadius: 5,
        }}
        onPress={() => navigation.navigate('Login')}
      >
        <Image
          source={require('./assets/shop.putih.png')}
          style={{ width: 20, height: 20, marginRight: 10 }}
        />
        <Text>Go to Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={MyTabs} />
        <Stack.Screen name="Login" component={LoginPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
