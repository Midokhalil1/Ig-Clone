import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import Feed from './scenes/Feed';


const Stack= createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Feed' component={Feed} />
      </Stack.Navigator>
      
      <StatusBar style="auto" />
      </NavigationContainer>

    
  );
}
