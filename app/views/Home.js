import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Inicio } from '../widgets/Inicio.js';

const styles = StyleSheet.create({
    contenedor: {
        flex: 1
    }
});

export class Home extends React.Component{
    render(){
        return(
            <View style={styles.contenedor}>
                <Inicio/>
            </View>
        )
    }

}