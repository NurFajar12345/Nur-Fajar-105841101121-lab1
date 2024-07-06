import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

const ProfileScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>My profile</Text>
        <TouchableOpacity>
          
        </TouchableOpacity>
      </View>
      <View style={styles.profileInfo}>
        <Image source={require('../assets/fajar.png')} style={styles.profileImage} />
        <View style={styles.profileText}>
          <Text style={styles.profileName}>Nur Fajar</Text>
          <Text style={styles.profileEmail}>nurfajarselayar07@mail.com</Text>
        </View>
      </View>
      <View style={styles.menuItem}>
        <Text style={styles.menuItemText}>My orders</Text>
        <Text style={styles.menuItemSubText}>Already have 12 orders</Text>
      </View>
      <View style={styles.menuItem}>
        <Text style={styles.menuItemText}>Shipping addresses</Text>
        <Text style={styles.menuItemSubText}>3 addresses</Text>
      </View>
      <View style={styles.menuItem}>
        <Text style={styles.menuItemText}>Payment methods</Text>
        <Text style={styles.menuItemSubText}>Visa **34</Text>
      </View>
      <View style={styles.menuItem}>
        <Text style={styles.menuItemText}>Promocodes</Text>
        <Text style={styles.menuItemSubText}>You have special promocodes</Text>
      </View>
      <View style={styles.menuItem}>
        <Text style={styles.menuItemText}>My reviews</Text>
        <Text style={styles.menuItemSubText}>Reviews for 4 items</Text>
      </View>
      <View style={styles.menuItem}>
        <Text style={styles.menuItemText}>Settings</Text>
        <Text style={styles.menuItemSubText}>Notifications, password</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  searchIcon: {
    width: 24,
    height: 24,
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  profileText: {
    marginLeft: 20,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileEmail: {
    fontSize: 14,
    color: 'gray',
  },
  menuItem: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
  },
  menuItemText: {
    fontSize: 16,
  },
  menuItemSubText: {
    fontSize: 12,
    color: 'gray',
  },
});

export default ProfileScreen;
