import { Image, StyleSheet, FlatList, Platform, SafeAreaViewBase, SafeAreaView, View, Text } from 'react-native';
import { Gbutton, Mbutton } from '@/components/Button';
import { useState } from 'react';
import { useData } from '@/components/Datactext';


export function Home({ navigation }) {  
    const {Data, setData} = useData();  // Initialize as an empty array to show the empty state

    const { medicineName, setMedicineName} = useData();
    const {pillsPerDay, setPillsPerDay} = useData();
    const {alarmTime1, setAlarmTime1} = useData(); 
    const {alarmTime2, setAlarmTime2 } = useData();
    type medicineType = {name: string};
    function add(name:string) {
        if (name!=='add') {
            Data.map(item => {
                if (item.name ===name) {
                    setMedicineName(name);
                    setPillsPerDay(item.pillsPerDay);
                    setAlarmTime1(item.alarmTime1);
                    setAlarmTime2(item.alarmTime2);
                }
            }
        )
        }
        if (name==='add') {
            setMedicineName('');
            setPillsPerDay('');
            setAlarmTime1('');
            setAlarmTime2('');
        }
        navigation.navigate("Add Medicine")
    }
    const Item = ({name}: medicineType) => (
        <View style={{paddingBottom:8, paddingLeft:8}}>
            <Mbutton buttontext={name} func={()=>add(name)}/>
        </View>
    );

return (
  <View style={{flex: 1,backgroundColor:"#FFF4EF"}}>
   <View style={{height: 80}}>
     <View style={styles.Settings}> 
      <Text style={{fontSize: 30,paddingLeft:8}}>Medicins</Text>
        <View style={{paddingRight: 20}}>
    <Gbutton buttontext='Add' func={()=>add('add')}/>
        </View>
        </View>
            </View>
    <FlatList 
      data={Data}
        ListEmptyComponent={() => (
    <View style={styles.empty}>
      <Text style={{fontSize: 25, color: '#6767EB'}}>Empty</Text>
       </View>
        )}
        renderItem={({item}) => <Item name={item.name}/>}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={Data.length === 0 ? styles.flatListContainer : null} // applies full screen only when empty
        />
    
    
    <Image source={require("../assets/images/Tablet_List.png")}
    style={styles.image} />

</View>
);
}

const styles = StyleSheet.create({
  image:{
    width:150,
    height:150,
    justifyContent:"flex-end",
    marginTop:20
  },
  Settings: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 8,
    justifyContent: 'space-between',
    paddingTop:8
  },
  empty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatListContainer: {
    flex: 1, // makes FlatList take up the full available space when empty
    justifyContent: 'center', 
  }
  
});
