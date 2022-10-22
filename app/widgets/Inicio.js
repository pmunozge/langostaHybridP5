import React from 'react';
import { View, StyleSheet,TouchableOpacity, Text,ImageBackground } from 'react-native';

const styles = StyleSheet.create({
    contenedor: {
        flex:1,
        backgroundColor: '#353535'
    },
    imagen: {
        flex: 4,
      
    },
    fila: {
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#ffffff',
        borderBottomWidth: 1,
        backgroundColor: '#353535'
    },
    boton: {
        width: '50%',
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#353535'
    },
    textoBoton:{
        color: '#ffffff',
        fontSize: 18
    }

});

export class Inicio extends React.Component{

   render(){
        return(
        <View style={styles.contenedor}>

          
            <ImageBackground style={styles.imagen} source={require('../../assets/img/youarethebest.png')} />
         
            <View style={styles.fila}>
              {/*  Botones */}
            </View>
            <View style={styles.fila}>
                {/*  Botones */}
            </View>

        </View>        
        )
    }

}