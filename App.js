import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';

const App = () => {
    const [fontsLoaded] = useFonts({
      'Metro-Bold' : require('./assets/Fonts/Metropolis-Bold.otf'),
      'Metro-Black' : require('./assets/Fonts/Metropolis-Black.otf'),
      'Metro-SemiBold' : require('./assets/Fonts/Metropolis-SemiBold.otf'),
      'Metro-Thin' : require('./assets/Fonts/Metropolis-Thin.otf'),
      'Metro-Medium' : require('./assets/Fonts/Metropolis-Medium.otf'),
    });

    if (!fontsLoaded) {
      return (
        <View style={styles.container}>
          <Text>Font tidak ditemukan!</Text>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <Text style={styles.defaultText}>Hello There</Text>
        <Text style={[styles.fontText, { fontFamily: 'Metro-Bold' }]}>Metro Bold</Text>
        <Text style={[styles.fontText, { fontFamily: 'Metro-Black' }]}>Metro Black</Text>
        <Text style={[styles.fontText, { fontFamily: 'Metro-SemiBold' }]}>Metro SemiBold</Text>
        <Text style={[styles.fontText, { fontFamily: 'Metro-Thin' }]}>Metro Thin</Text>
        <Text style={[styles.fontText, { fontFamily: 'Metro-Medium' }]}>Metro Medium</Text>
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  defaultText: {
    fontSize: 30,
  },
  fontText: {
    fontSize: 30,
  },
});

export default App;
