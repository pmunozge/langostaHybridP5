import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Text, Button } from 'react-native';
import { Home} from './app/views/Home.js'
import { Evolucion} from './app/views/Evolucion.js'
import { NuevoReto} from './app/views/NuevoReto.js'
import { Perfil} from './app/views/Perfil.js'
import { Contactar} from './app/views/Contactar.js'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({navigation}) {
  return (
    <Home/>
  );
}

function EvolucionScreen({ navigation }) {
  return (
   <Evolucion/>
  );
}

function NuevoRetoScreen({ navigation }) {
  return (
    <NuevoReto/>
  );
}
function PerfilScreen({ navigation }) {
  return (
    <Perfil/>
  );
}
function ContactarScreen({ navigation }) {
  return (
    <Contactar/>
  );
}

const Stack = createNativeStackNavigator();


export default function App() {
  return ( 
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{title: 'Langosta Home'}} />
        <Stack.Screen name="Evolucion" component={Evolucion} options={{title: 'Langosta Evolucion'}}/>
        <Stack.Screen name="NuevoReto" component={NuevoReto} options={{title: 'Langosta Reto'}}/>
        <Stack.Screen name="Perfil" component={Perfil} options={{title: 'Langosta Perfil'}}/>
        <Stack.Screen name="Contactar" component={Contactar} options={{title: 'Langosta Contactar'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
