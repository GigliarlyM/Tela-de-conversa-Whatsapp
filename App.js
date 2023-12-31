import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/routes';

const App = () => (
  <NavigationContainer>
    <StatusBar style="auto" />
    <Routes/>
  </NavigationContainer>
);

export default App;