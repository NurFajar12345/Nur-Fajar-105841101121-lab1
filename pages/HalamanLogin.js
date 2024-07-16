import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image, KeyboardAvoidingView, Platform, ScrollView, Alert } from 'react-native';

const HalamanLogin = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Perform login validation here
    if (!email || !password) {
      Alert.alert('Error', 'Please enter both email and password.');
      return;
    }

    // Simulate login process (e.g., wait for a few seconds before showing notification)
    setTimeout(() => {
      // Show success message after successful login
      showSuccessMessage();
    }, 1000); // Simulate process delay
  };

  const showSuccessMessage = () => {
    Alert.alert(
      'Login Successful',
      'You have successfully logged in.',
      [
        {
          text: 'OK',
          onPress: () => {
            // Navigate to the Main screen after user presses OK
            navigation.replace('Main');
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          autoCompleteType="email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          autoCompleteType="password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <View style={styles.forgotPasswordContainer}>
          <Text style={styles.forgotPasswordText}>Forgot your password?</Text>
          <TouchableOpacity style={styles.forgotPasswordButton} onPress={() => navigation.navigate('ForgotPassword')}>
            <Image
              style={[styles.forgotPasswordIcon, { tintColor: 'red' }]}
              source={require('../assets/right.png')} // Update with the correct path to your icon
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>LOGIN</Text>
        </TouchableOpacity>

        <View style={styles.bottomContainer}>
          <Text style={styles.orText}>Or login with social account</Text>

          <View style={styles.socialButtonsContainer}>
            <TouchableOpacity style={styles.socialButton}>
              <Image
                source={require('../assets/google.png')} // Update with the correct path to your Google icon
                style={styles.socialIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <Image
                source={require('../assets/facebook.png')} // Update with the correct path to your Facebook icon
                style={styles.socialIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollViewContainer: {
    paddingHorizontal: 20,
    paddingTop: 40,
    flexGrow: 1,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    fontSize: 18,
    marginBottom: 15,
  },
  forgotPasswordContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 20,
  },
  forgotPasswordText: {
    color: 'black',
    marginRight: 5,
  },
  forgotPasswordButton: {
    padding: 5,
  },
  forgotPasswordIcon: {
    width: 20,
    height: 20,
  },
  loginButton: {
    backgroundColor: 'red',
    borderRadius: 25,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  bottomContainer: {
    marginTop: 'auto',
    marginBottom: 40,
  },
  orText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  socialButton: {
    marginHorizontal: 30,
  },
  socialIcon: {
    width: 40,
    height: 40,
  },
});

export default HalamanLogin;
