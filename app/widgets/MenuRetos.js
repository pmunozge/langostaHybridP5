import React from 'react';
import { View, StyleSheet,TouchableOpacity, Text, Alert} from 'react-native';
import {styles} from '../estilosApp.js';
import { withNavigation } from 'react-navigation';





export class MenuRetos extends React.Component{

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
                <View style={styles.filareto}>
                    <TouchableOpacity style={styles.botonreto} onPress={() => this.props.navigate('NuevoReto')}>
                        <Text style={styles.textoBoton}>NUEVO RETO</Text>
                    </TouchableOpacity>
            
                </View>
             
                <View style={styles.filareto}>
                    <TouchableOpacity style={styles.botonreto} onPress={() => this.props.navigate('Evolucion')}>
                        <Text style={styles.textoBoton}>EVOLUCIÓN</Text>
                    </TouchableOpacity>
            
                </View>
               
        </View>
        )
    }

}