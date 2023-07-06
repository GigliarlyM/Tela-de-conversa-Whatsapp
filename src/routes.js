import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Inicio from './Inicio'

const Stack = createNativeStackNavigator();

const App = () => {
    
    return (
        <Stack.Navigator>
            <Stack.Screen name='inicio' component={Inicio} options={{ headerShown: false }}/>
        </Stack.Navigator>
    );
}

export default App;