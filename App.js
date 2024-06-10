import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';

const App = () => {
    const [fontsLoaded] = useFonts({
      'Metro-Bold': require('./assets/assets/assets/Fonts/Metropolis-Bold.otf'),
      'Metro-Black': require('./assets/assets/assets/Fonts/Metropolis-Black.otf'),
      'Metro-SemiBold': require('./assets/assets/assets/Fonts/Metropolis-SemiBold.otf'),
      'Metro-Thin': require('./assets/assets/assets/Fonts/Metropolis-Thin.otf'),
      'Metro-Medium': require('./assets/assets/assets/Fonts/Metropolis-Medium.otf'),
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
        <Text style={styles.defaultText}>Font Biasa</Text>
        <Text style={[styles.fontText, { fontFamily: 'Metro-Bold' }]}>Metro Bold</Text>
        <Text style={[styles.fontText, { fontFamily: 'Metro-Medium' }]}>Metro Medium</Text>
        <Text style={[styles.fontText, { fontFamily: 'Metro-SemiBold' }]}>Metro SemiBold</Text>
        <Text style={[styles.fontText, { fontFamily: 'Metro-Black' }]}>Metro Black</Text>
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
    marginVertical: 5,
  },
});

export default App;
