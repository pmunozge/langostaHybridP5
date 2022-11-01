import React from 'react';
import { View, StyleSheet,TouchableOpacity, Text, Alert} from 'react-native';
import {styles} from '../estilosApp.js';



export class Menu extends React.Component{

    viewMsg = () => {
        Alert.alert(
            "Botón presionado",
            "Langosta.hibryd",
            [
                {
                    text: "Si",
                    
                },
            ],
             )
    }
   render(){
        return(
            <View style={styles.contenedor}>
                <View style={styles.fila}>
                    <TouchableOpacity style={styles.boton} onPress={this.viewMsg}>
                        <Text style={styles.textoBoton}>EVOLUCIÓN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boton} onPress={this.viewMsg}>
                        <Text style={styles.textoBoton}>NUEVO RETO</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.fila}>
                    <TouchableOpacity style={styles.boton} onPress={this.viewMsg}>
                        <Text style={styles.textoBoton}>PERFIL</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boton} onPress={this.viewMsg}>
                        <Text style={styles.textoBoton}>CONTRATACAR</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.fila}>
                    <TouchableOpacity style={styles.boton} onPress={this.viewMsg}>
                        <Text style={styles.textoBoton}>Zona 1 nueva</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boton} onPress={this.viewMsg}>
                        <Text style={styles.textoBoton}>Zona 2 nueva</Text>
                    </TouchableOpacity>
                </View>
        </View>
        )
    }

}