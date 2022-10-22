import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { Menu } from '../widgets/Menu.js';

const styles = StyleSheet.create({
    contenedor: {
        flex:1,
        backgroundColor: '#353535'
    },
    imagen: {
        flex: 2,
    }   
});

export class Inicio extends React.Component{

   render(){
        return(
        <View style={styles.contenedor}>

          
            <ImageBackground style={styles.imagen} source={require('../../assets/img/youarethebest.png')} />
         
            <Menu/>

        </View>        
        )
    }

}