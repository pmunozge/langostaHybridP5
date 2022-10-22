import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Menu } from '../widgets/Menu.js';

const styles = StyleSheet.create({
    contenedor: {
        flex: 1
    }
});

export class Home extends React.Component{
    render(){
        return(
            <View style={styles.contenedor}>
                <Menu/>
            </View>
        )
    }

}