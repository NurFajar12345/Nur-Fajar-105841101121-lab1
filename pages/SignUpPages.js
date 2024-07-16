import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image, KeyboardAvoidingView, Platform, ScrollView, Alert } from 'react-native';

const SignUpPages = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    // Validasi input sebelum proses sign up
    if (!name || !email || !password) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    // Simulasi proses sign up (contoh: tunggu beberapa detik sebelum menampilkan notifikasi)
    setTimeout(() => {
      // Tampilkan notifikasi setelah proses sign up berhasil
      showSuccessMessage();
    }, 1000); // contoh delay simulasi proses

    // Clear form setelah sign up berhasil
    setName('');
    setEmail('');
    setPassword('');
  };

  const showSuccessMessage = () => {
    Alert.alert(
      'Account Creation Successful',
      'Your account has been successfully created.',
      [
        {
          text: 'OK',
          onPress: () => {
            // Navigasi ke halaman login setelah pengguna menekan OK
            navigation.navigate('Login');
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
          placeholder="Name"
          autoCompleteType="name"
          value={name}
          onChangeText={text => setName(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Email"
          autoCompleteType="email"
          keyboardType="email-address"
          value={email}
          onChangeText={text => setEmail(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          autoCompleteType="password"
          secureTextEntry
          value={password}
          onChangeText={text => setPassword(text)}
        />

        <View style={styles.alreadyAccountContainer}>
          <Text style={styles.alreadyAccountText}>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
          <Text style={styles.signUpButtonText}>SIGN UP</Text>
        </TouchableOpacity>

        <View style={styles.socialSignUpContainer}>
          <Text style={styles.orText}>Or sign up with social account</Text>

          <View style={styles.socialButtonsContainer}>
            <TouchableOpacity style={styles.socialButton}>
              <Image source={require('../assets/google.png')} style={styles.socialIcon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <Image source={require('../assets/facebook.png')} style={styles.socialIcon} />
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
  signUpButton: {
    backgroundColor: 'red',
    borderRadius: 25,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  signUpButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  alreadyAccountContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  alreadyAccountText: {
    fontSize: 16,
    color: '#666',
  },
  loginText: {
    color: 'red',
    fontSize: 16,
  },
  socialSignUpContainer: {
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

export default SignUpPages;
