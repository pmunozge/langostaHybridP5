import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Text, Button } from 'react-native';
import { Home} from './app/views/Home.js'
import { Evolucion} from './app/views/Evolucion.js'
//import { NuevoReto} from './app/views/NuevoReto.js'
import NuevoReto from './app/views/NuevoReto.js'
import { Perfil} from './app/views/Perfil.js'
import { Contactar} from './app/views/Contactar.js'
import { Reto} from './app/views/Reto.js'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Companieros } from './app/views/Companieros.js';
import { Grupos } from './app/views/Grupos.js';
import { About } from './app/views/About.js';
import { CameraView } from './app/views/CameraView.js';
import { SafeAreaView } from 'react-navigation';

import {db}from './app/config/db.js';


import * as Notifications from 'expo-notifications';
import { useState, useEffect, useRef } from 'react';
import { Platform } from 'react-native';

const Stack = createNativeStackNavigator();


Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function App() {
  console.log("esperando")
  
    
  schedulePushNotification();
  

  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

   
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
          options={{title: 'Langosta Home',headerTitleAlign: 'center'} }
       />
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
            name="Reto" 
            component={Reto} 
            options={({ navigation }) => ({
            title: 'Reto',
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
            name="CameraView" 
            component={CameraView} 
            options={({ navigation , route}) => ({
            title: 'Camera',
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


async function schedulePushNotification() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "You've got mail! 📬",
      body: 'Here is the notification body',
      data: { data: 'goes here' },
    },
    trigger: { seconds: 2 },
  });
}

async function registerForPushNotificationsAsync() {
  let token;

  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
  } else {
    alert('Must use physical device for Push Notifications');
  }

  return token;
}