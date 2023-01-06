import React from 'react';

import { View, StyleSheet,TouchableOpacity, Text, Alert, Image} from 'react-native';
import {styles} from '../estilosApp.js';
import { MenuRetos } from '../widgets/MenuRetos.js';
import { ZonaLogo } from '../widgets/ZonaLogo.js';
import * as FileSystem from 'expo-file-system';
//import RNFetchBlob from 'react-native-fetch-blob'


//{'nombre':item.value.nombre, 'categoria': item.value.categoria, 'detalle':item.value.detalle

export class Reto extends React.Component{

  
    
    render(){

        const { navigate } = this.props.navigation;
        const { nombre, categoria ,detalle, periodicidad, tiempo,completado, img} = this.props.route.params;
       
               
        return(
            <View style={styles.contenedor}>
                <ZonaLogo/>
                <View style= {styles.contenido}>
                {/* <Image source={img}/> */}
                 <Text>Nonbre: {nombre}</Text>
                 <Text>Categoria: {categoria}</Text>
                 <Text>Detalle: {detalle}</Text>
                 <Text>Periodicidad: {periodicidad}</Text>
                 <Text>Completado: {completado}</Text>
                 <Text>Tiempo: {tiempo}</Text>
                 <Text>Img: {img}</Text>
                 <Image source={{uri:img}} style={{ width: 200, height: 200 }} />
                 {/* <Text>Img: {img}</Text> */}
                
                </View>
                <MenuRetos navigate={navigate}/>
            </View>        
        )
    }
     
}