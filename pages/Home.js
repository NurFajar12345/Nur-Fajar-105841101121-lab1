import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

// Import local images
import newCollection from '../assets/fashion1.jpg';
import summerSale from '../assets/fashion2.jpg';
import black from '../assets/fashion3.jpg';
import mensHoodies from '../assets/fashion4.jpg';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.section}>
          <Image 
            source={newCollection}
            style={styles.image}
          />
          <Text style={styles.text}>New collection</Text>
        </View>
        <View style={styles.section}>
          <Image 
            source={newCollection}
            style={styles.image}
          />
          <Text style={styles.text}>new Collection</Text>
        </View>
        <View style={styles.section}>
          <Image 
            source={black}
            style={styles.image}
          />
          <Text style={styles.text}>new Collection</Text>
        </View>
        <View style={styles.section}>
          <Image 
            source={newCollection}
            style={styles.image}
          />
          <Text style={styles.text}>new Collection</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  section: {
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  text: {
    position: 'absolute',
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    bottom: 10,
    left: 10,
  },
});

export default Home;
