import React from 'react';
import { View, StyleSheet,TouchableOpacity, Text, Alert} from 'react-native';

const styles = StyleSheet.create({
    contenedor: {
        flex:1,
        backgroundColor: '#353535'
    },
    fila: {
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#ffffff',
        borderBottomWidth: 1,
        backgroundColor: '#353000'
    },
    boton: {
        width: '50%',
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#353000'
    },
    textoBoton:{
        color: '#00ff00',
        fontSize: 14, 
        fontFamily: 'monospace'
    }

});

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
        </View>
        )
    }

}