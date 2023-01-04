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
        let body = '';
        
        //Da ERROR
       /*  RNFetchBlob.fetch('GET', img, {
            'Content-Type': 'application/json'
            // more headers  ..
        })
        // when response status code is 200
        .then((res) => {
            // the conversion is done in native code
            let base64Str = res.base64()
            // the following conversions are done in js, it's SYNC
            let text = res.text()
            console.log(text);
            let json = res.json()

        })
        // Status code is not 200
        .catch((errorMessage, statusCode) => {
            // error handling
        }); */
         console.log(img);

         //El Fetch No parece hacer nada

      /*   const getMovies = async () => {
            try {
                const response = await fetch(img, {
                method: 'GET',
                headers: {
                    "Cache-control": "no-cache",
                    'Content-Type': 'application/json'
                },
                body: body,
              }).then((response) => {
                
                 console.log(response.body);
                
                
              }).catch((error) => console.log(error));



             const json = await response.json();
             console.log(JSON.stringify(json));
           } catch (error) {
             console.error(error);
           } 
         }
     */
        var base64Img = 'data:image/png;base64,' + img;

      /*   getMovies(); */
   
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
                 {/* <Text>Img: {img}</Text> */}
                <Image style={{width: 100, height: 50, borderWidth: 1, borderColor: 'red'}} source={{uri: base64Img}}/>
                </View>
                <MenuRetos navigate={navigate}/>
            </View>        
        )
    }
     
}