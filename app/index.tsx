import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash  from '@/Screens/Splash';
import { Welcome1 } from '@/Screens/Welcome1';
import  Welcome2  from '@/Screens/Welcome2';
import  Welcome3  from '@/Screens/Welcome3';
import { Home } from '@/Screens/Home'
import  Addmedicine from '@/Screens/Addmedicine';
import { DataProvider } from '@/components/Datactext'; // Import your DataProvider

const Stack = createNativeStackNavigator();

export default function Hometab() {  

  return (
    <DataProvider>
    <Stack.Navigator>
    <Stack.Screen name="Medicine Reminder" component={Welcome1} />
    <Stack.Screen name="Vitamins" component={Welcome2} />
    <Stack.Screen name="Medicine Plan" component={Welcome3} />
    <Stack.Screen name="Home" component={Home} />

    <Stack.Screen name="Add Medicine" component={Addmedicine} />
    <Stack.Screen name="7" component={Splash} />
    </Stack.Navigator>
    </DataProvider>
  );
}
