import React from 'react';
import {Image, ImageBackground, StyleSheet, View} from 'react-native';
import { useNavigation } from 'expo-router';

const image = {uri: '../assets/images/splash.png'};

const Splash = () => (
  
  <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
 
    </ImageBackground>
  </View>
);


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
});

export default Splash;