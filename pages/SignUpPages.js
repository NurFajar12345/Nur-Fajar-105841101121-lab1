import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image, SafeAreaView } from 'react-native';

const SignUpComponent = () => {
  return (
    <View style={styles.signUpContainer}>
      <Text style={styles.title}>Sign up</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        placeholderTextColor="#999"
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#999"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#999"
        secureTextEntry
      />
      <Text style={styles.alreadyAccount}>Already have an account?</Text>
      <TouchableOpacity style={styles.signUpButton}>
        <Text style={styles.signUpButtonText}>SIGN UP</Text>
      </TouchableOpacity>
      <Text style={styles.orSignUpWith}>Or sign up with social account</Text>
      <View style={styles.socialLoginContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Image
            style={styles.socialIcon}
            source={require('../assets/google.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image
            style={styles.socialIcon}
            source={require('../assets/facebook.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  signUpContainer: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    alignSelf: 'flex-start', // Align text to the left
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  signUpButton: {
    backgroundColor: 'red',
    width: '100%',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 15,
  },
  signUpButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  alreadyAccount: {
    color: '#333',
    alignSelf: 'flex-end', // Align text to the right
    marginBottom: 10,
  },
  orSignUpWith: {
    color: '#333',
    marginBottom: 15,
  },
  socialLoginContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
  },
  socialButton: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    width: '40%',
    alignItems: 'center',
  },
  socialIcon: {
    width: 24,
    height: 24,
  },
});

export default SignUpComponent;
