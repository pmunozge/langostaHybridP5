import React from 'react';
import { View, StyleSheet,TouchableOpacity, Text, Alert} from 'react-native';
import {styles} from '../estilosApp.js';
import { Menu } from '../widgets/Menu.js';
import { ZonaLogo } from '../widgets/ZonaLogo.js';



export class Contactar extends React.Component{
    render(){

        const { navigate } = this.props.navigation;
        

        return(
            <View style={styles.contenedor}>
                <ZonaLogo/>
                <View style= {styles.contenido}>
                    <Text>Contenido de Contactar</Text>
                </View>
                <Menu navigate={navigate}/>
            </View>          
        )
    }
     
}