import * as React from 'react';
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
import { Companieros } from './app/views/Companieros.js';
import { Grupos } from './app/views/Grupos.js';
import { About } from './app/views/About.js';

const Stack = createNativeStackNavigator();


export default function App() {
  
  return ( 
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
          headerStyle: {
            backgroundColor: '#353000',
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            color: '#00ff00',
          },
        }} 
      >
        
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{title: 'Langosta Home',headerTitleAlign: 'center'} } />
        <Stack.Screen 
          name="Evolucion" 
          component={Evolucion} 
          options={({ navigation }) => ({
            title: 'Evolucion',
            headerTitleAlign: 'center',
              headerRight: () => (
                <Button title="Inicio" onPress={() =>
                  navigation.navigate('Home')} color="orange" />
              ),
              headerLeft: () =>(
                <Button title="About" onPress={() =>
                  navigation.navigate('About')} color="orange" />
  
              ),
            })}
        />
        <Stack.Screen 
          name="NuevoReto" 
          component={NuevoReto} 
          options={({ navigation }) => ({
            title: 'Nuevo Reto',
            headerTitleAlign: 'center',
              headerRight: () => (
                <Button title="Inicio" onPress={() =>
                  navigation.navigate('Home')} color="orange" />
              ),
              headerLeft: () =>(
                <Button title="About" onPress={() =>
                  navigation.navigate('About')} color="orange" />
  
              ),
            })}
        />
        <Stack.Screen 
          name="Perfil" 
          component={Perfil} 
          options={({ navigation }) => ({
            title: 'Perfil',
            headerTitleAlign: 'center',
            headerRight: () => (
              <Button title="Inicio" onPress={() =>
                navigation.navigate('Home')} color="orange" />
            ),
            headerLeft: () =>(
              <Button title="About" onPress={() =>
                navigation.navigate('About')} color="orange" />

            ),
          })}
        
        />
        <Stack.Screen 
          name="Contactar" 
          component={Contactar} 
          options={({ navigation }) => ({
            title: 'Contactar',
            headerTitleAlign: 'center',
            headerRight: () => (
                <Button title="Inicio" onPress={() =>
                  navigation.navigate('Home')} color="orange" />
                
              ),
            headerLeft: () =>(
              <Button title="About" onPress={() =>
                navigation.navigate('About')} color="orange" />

            ),
            })}
        />
         <Stack.Screen 
          name="Companieros" 
          component={Companieros} 
          options={({ navigation }) => ({
            title: 'Compañeros',
            headerTitleAlign: 'center',
            headerRight: () => (
              <Button title="Inicio" onPress={() =>
                navigation.navigate('Home')} color="orange" />
            ),
            headerLeft: () =>(
              <Button title="About" onPress={() =>
                navigation.navigate('About')} color="orange" />
  
            )
            })}
        />
         <Stack.Screen 
          name="Grupos" 
          component={Grupos} 
          options={({ navigation }) => ({
            title: 'Grupos',
            headerTitleAlign: 'center',
            headerRight: () => (
              <Button title="Inicio" onPress={() =>
                navigation.navigate('Home')} color="orange" />
            ),
            headerLeft: () =>(
              <Button title="About" onPress={() =>
                navigation.navigate('About')} color="orange" />
  
            ),
            })}
        />
         <Stack.Screen 
          name="About" 
          component={About} 
          options={({ navigation }) => ({
            title: 'About',
            headerTitleAlign: 'center',
            headerRight: () => (
              <Button title="Inicio" onPress={() =>
                navigation.navigate('Home')} color="orange" />
            ),
            headerLeft: () =>(
              <Button title="Back" onPress={() =>
                navigation.goBack()} color="orange" />
  
            ),
           
            })}
        />
         <Stack.Screen 
          name="DetalleReto" 
          component={Grupos} 
          options={({ navigation }) => ({
            title: 'DetalleReto',
            headerTitleAlign: 'center',
            headerRight: () => (
              <Button title="Inicio" onPress={() =>
                navigation.navigate('Home')} color="orange" />
            ),
            headerLeft: () =>(
              <Button title="About" onPress={() =>
                navigation.navigate('About')} color="orange" />
  
            ),
            })}
          />
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
