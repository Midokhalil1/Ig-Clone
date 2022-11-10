import { NavigationContainer } from '@react-navigation/native';

import { StatusBar } from 'expo-status-bar';

import Feed from './scenes/Feed';

export default function App() {
  return (
    <NavigationContainer>
      <Feed />
      <StatusBar style="auto" />
      </NavigationContainer>

    
  );
}
