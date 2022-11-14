import React from 'react';
import { View, StyleSheet,TouchableOpacity, Text, Alert} from 'react-native';
import {styles} from '../estilosApp.js';
import { withNavigation } from 'react-navigation';





export class MenuReto extends React.Component{

    

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

                    <TouchableOpacity style={styles.BotonReto} onPress={() => this.props.navigate('NuevoReto')}>
                        <Text style={styles.textoBoton}>NUEVO RETO</Text>
                    </TouchableOpacity>


        </View>
        )
    }

}