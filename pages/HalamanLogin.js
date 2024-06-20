import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

const HalamanLogin = ({ navigation }) => {
  return (
    <View style={styles.container}>
      
      <TextInput
        style={styles.input}
        placeholder="Email"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
      />
      <View style={styles.forgotPasswordContainer}>
        <Text style={styles.forgotPasswordText}>Forgot your password?</Text>
        <TouchableOpacity style={styles.forgotPasswordButton} onPress={() => navigation.navigate('ForgotPassword')}>
          <Image
            style={[styles.forgotPasswordIcon, { tintColor: 'red' }]} // Menggunakan tintColor untuk mengubah warna ikon
            source={require('../assets/right.png')} // Ganti dengan path ikon right Anda
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>LOGIN</Text>
      </TouchableOpacity>
      <View style={styles.bottomContainer}>
        <Text style={styles.orText}>Or login with social account</Text>
        <View style={styles.socialButtonsContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <Image
              style={styles.socialIcon}
              source={require('../assets/google.png')} // Ganti dengan path ikon Google Anda
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Image
              style={styles.socialIcon}
              source={require('../assets/facebook.png')} // Ganti dengan path ikon Facebook Anda
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    paddingTop: 60, // Menambahkan jarak dari atas layar
  },
  
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  forgotPasswordContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end', // Meratakan teks ke kanan
    alignItems: 'center', // Menyamakan tinggi teks dan ikon
    marginBottom: 20,
  },
  forgotPasswordText: {
    color: 'black',
    marginRight: 5, // Jarak antara teks dan ikon
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
    marginTop: 'auto', // Membawa container ini ke bagian bawah
  },
  orText: {
    textAlign: 'center',
    marginBottom: 20,
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center', // Menyatukan tombol sosial di tengah
  },
  socialButton: {
    marginHorizontal: 30, // Menambahkan jarak horizontal antara tombol
  },
  socialIcon: {
    width: 40,
    height: 40,
  },
});

export default HalamanLogin;
