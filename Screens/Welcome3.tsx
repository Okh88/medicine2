import { Fbutton } from "@/components/Button"
import { useState } from "react"
import { SafeAreaView, View, Text, Image, StyleSheet } from "react-native"

export function Welcome3({navigation}) {
    const [number, setnumber] =useState(0)
    function numb() {
    navigation.replace("Home")
   }
  
return (
  <SafeAreaView style={{flex:1}}>
    <View style={{
        paddingTop:100,
        flexDirection:"row",
        justifyContent:"center",
        paddingBottom:40
        }}>
    <Image source={require("../assets/images/sec.png")}/>
      </View>
    <View style={{
        alignItems:'center'      
        }}>
      <Text style={{fontSize:30, color:"#6767EB"}}>Check Your</Text>
      <Text style={{fontSize:30, color:"#6767EB"}}>Medicine</Text>
      <Text style={{fontSize:30, color:"#6767EB"}}>History</Text>
      </View>
    <View style={{flex:1}}></View>
      <View style={{
         flex:1,
        justifyContent:"space-around", 
        alignItems:"center"
        }}>
    <View style={styles.footer}>
          <View style={styles.dotContainer}>
          <View style={styles.inactiveDot} />
          <View style={styles.inactiveDot} />
          <View style={styles.activeDot} />
          </View>
    <Fbutton buttontext='Get Started' func={numb}/>
          </View>
         </View>
  </SafeAreaView>
);
};

  const styles = StyleSheet.create({
    footer: {
      alignItems: 'center',
      paddingBottom: 12,
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
  
  export default Welcome3;
  