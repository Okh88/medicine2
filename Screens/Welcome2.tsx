import {  Fbutton } from '@/components/Button';
import React from 'react';
import { Image, View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
const medicineIcon = require('@/assets/images/medicine_icon.png');
const Welcome2 = ({ navigation }: { navigation: any }) => {
  function Next() {
    navigation.replace("Medicine Plan");
   }
   
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.replace('NextScreen')}>  
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <View style={styles.iconCircle}>
          <Image source={medicineIcon} style={styles.iconImage} />
        </View>
        <View style={{ alignItems:'center'}}
        >
        <Text style={styles.messageText}>Schedule Your</Text>
        <Text style={styles.messageText}>Medicine Timer</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.dotContainer}>
          <View style={styles.inactiveDot} />
          <View style={styles.activeDot} />
          <View style={styles.inactiveDot} />
        </View>
      <Fbutton buttontext='Next' func={() => Next()}/>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: 20,
    backgroundColor: '#fff',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  skipText: {
    fontSize: 16,
    color: '#6767EB',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -90,
  },
  iconCircle: {
    width: 280,
    height: 280,
    borderRadius: 150,
    backgroundColor: '#6767EB',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 80,
  },
  iconImage: {
    width: 350,
    height: 350,
    resizeMode: 'contain', 
  },
  messageText: {
    fontSize: 30,
    textAlign: 'center',
    color: '#6767EB',
    alignItems:"center",
  },
  footer: {
    alignItems: 'center',
    paddingBottom: 30,
  },
  dotContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  activeDot: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: '#6767EB',
    marginHorizontal: 5,
  },
  inactiveDot: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: '#D3D3D3',
    marginHorizontal: 5,
  },
  nextButton: {
    backgroundColor: '#6767EB',
    paddingHorizontal: 80,
    paddingVertical: 15,
    borderRadius: 30,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 20,
  },
});

export default Welcome2;