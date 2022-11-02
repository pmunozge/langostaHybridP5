import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Inicio } from '../widgets/Inicio.js';
import {styles} from '../estilosApp.js';



export class Home extends React.Component{
    render(){
        const { navigate } = this.props.navigation;
        return(
            <View style={styles.contenedor}>
                <Inicio navigate={navigate}/>
            </View>
        )
    }

}