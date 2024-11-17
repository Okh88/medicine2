import React, { useState } from 'react';
import { View, Button, Text,Image, TextInput, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { Abutton } from '@/components/Button';
import { useData } from '@/components/Datactext';

function Addmedicine({ navigation }) {
  const { medicineName, setMedicineName } = useData();
  const { pillsPerDay, setPillsPerDay } = useData();
  const { alarmTime1, setAlarmTime1 } = useData();
  const { alarmTime2, setAlarmTime2 } = useData();
  const { Data, setData } = useData();

  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [isTimePickerForPill1, setIsTimePickerForPill1] = useState(true);

  // Show the time picker modal for Pill 1 or Pill 2
  const showTimePicker = (forPill1) => {
    setIsTimePickerForPill1(forPill1);
    setTimePickerVisibility(true);
  };

  // Hide the time picker modal
  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  // Handle the time picked by the user
  const handleConfirm = (time) => {
    const formattedTime = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    if (isTimePickerForPill1) {
      setAlarmTime1(formattedTime);
    } else {
      setAlarmTime2(formattedTime);
    }
    hideTimePicker();
  };

  function save() {
    // Check if the medicineName already exists in Data
    const existingIndex = Data.findIndex((item) => item.name === medicineName);
    if (existingIndex === -1) {
      // Medicine doesn't exist, so add it
      setData([
        ...Data,
        { name: medicineName, pillsPerDay, alarmTime1, alarmTime2 },
      ]);
    } else {
      // Medicine already exists, so update it
      const updatedData = Data.map((item, index) =>
        index === existingIndex
          ? { ...item, pillsPerDay, alarmTime1, alarmTime2 }
          : item
      );
      setData(updatedData);
    }
    // Navigate back to Home or any other screen
    navigation.navigate('Home');
  }

  return (
    <View style={{ flex: 1, backgroundColor:"#FFF4EF" }}>
      <View style={{ height: 10 }}>
        <View style={styles.Settings}>
          <View style={{ paddingRight: 8 }}>
          </View>
        </View>
      </View>
      <ScrollView>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Medicine Name</Text>
          <TextInput
            style={styles.input}
            value={medicineName}
            onChangeText={setMedicineName}
            placeholder="Alvadon"
          />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Pills Number Per Day</Text>
          <TextInput
            style={styles.input}
            value={pillsPerDay}
            onChangeText={setPillsPerDay}
            placeholder="2"
            keyboardType="numeric"
          />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Alarm Time For Pill 1</Text>
          <Button title={alarmTime1 || "Select Time"} onPress={() => showTimePicker(true)} color={"#131318"} />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Alarm Time For Pill 2</Text>
          <Button title={alarmTime2 || "Select Time"} onPress={() => showTimePicker(false)} color={"#131318"}/>
        </View>
        
        <DateTimePickerModal
          isVisible={isTimePickerVisible}
          mode="time"
          onConfirm={handleConfirm}
          onCancel={hideTimePicker}
          is24Hour={false} // Set to true for 24-hour format
        />
        <View style={{paddingTop:20,paddingStart:100}}>
      <Abutton  buttontext='Save' func={() => save()} />
      </View>
      </ScrollView>
      
      <View style={styles.container} >
      <Image source={require("../assets/images/Alarm_AddM.png")} style={styles.image} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'flex-end',
    alignItems:'center',  
  },
  image:{
    width:160,
    height:160,
    marginBottom: 20,
  },

  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  Settings: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 8,
    justifyContent: 'space-between',
    paddingTop: 8,
  },
  empty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    position: 'absolute',
    top: 16,
    right: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  scrollContainer: {
    paddingTop: 20,
    paddingHorizontal: 16,
    flexGrow: 1,
    justifyContent: 'center',
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    paddingLeft: 10,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    backgroundColor: '#fff',
  },
});

export default Addmedicine;
