import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';


const styles = StyleSheet.create({
    textoCabecera: {   
        flex: 3,
        textAlign:'center', 
        textAlignVertical: 'center' ,
        color:  '#ffffff',
        fontSize: 20,
    },
    fila: {
        flex:1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    cabecera:{
        backgroundColor:'#353000',
        height:100
    },
    logo:{
        height:80,
        width:80,
        
    }

});

export class ZonaLogo extends React.Component{



    render(){
        return(
            <View style={styles.cabecera}>
                  <View style={styles.fila}>
                    <Image style={styles.logo} source={require("../../assets/img/logoLangosta.png")} />
                    <Text  style={styles.textoCabecera}>{"You are the best Langosta"}</Text>
                </View>
            </View>
        )
    }
}