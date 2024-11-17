import { Fbutton } from "@/components/Button";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";
import { SafeAreaView, Text, Image, View, StyleSheet } from "react-native";

export function Welcome1({ navigation }) {
    const Stack = createNativeStackNavigator();
   function Next() {
    navigation.replace("Vitamins");
   }
    return (
      <View style={{flex:1}}>
      <View style={{
        paddingTop:150,
        flexDirection:"row",
        justifyContent:"center",
        paddingBottom:40
        }}>
  
      <Image source={require("../assets/images/Tablet.png")}/>
      </View>
      <View style={{
        alignItems:'center'      
        }}>
      <Text style={{fontSize:30, color:"#6767EB"}}>Don't Worry About</Text>
      <Text style={{fontSize:30, color:"#6767EB"}}>Forgetting Your</Text>
      <Text style={{fontSize:30, color:"#6767EB"}}>Medication Times</Text>
      </View>
      <View style={{flex:1}}></View>
      <View style={{
         flex:1,
        justifyContent:"space-around", 
        alignItems:"center"
        }}>
      <View style={styles.footer}>
        <View style={styles.dotContainer}>
          <View style={styles.activeDot} />
          <View style={styles.inactiveDot} />
          <View style={styles.inactiveDot} />
        </View>

      <Fbutton buttontext='Next' func={() => Next()}/>
          </View>
      </View>
  </View>
  );
  };
  const styles = StyleSheet.create({
  footer: {
    alignItems: 'center',
    paddingBottom: 44,
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
});
export default Welcome1;