import React, { Component, useEffect } from 'react';
import {styles} from '../estilosApp.js';
import { Text , View , FlatList, TouchableOpacity} from 'react-native';
import { Badge } from "react-native-elements";

import db from '../config/db.js';
import { collection, connectFirestoreEmulator, getDocs } from "firebase/firestore";
import { Menu } from '../widgets/Menu.js';
import { ZonaLogo } from '../widgets/ZonaLogo.js';
//import { TouchableOpacity } from 'react-native-gesture-handler';

let retos = [];


export class Evolucion extends Component { 


    state = {
        retos: [],
        loading: true
    }

    
    async componentDidMount() {
        const querySnapshot = await getDocs(collection(db, "retos"));
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          retos.push({"key": doc.id, "value": doc.data()});
          //console.log(doc.id, " => ", doc.data());

        });
        this.setState({retos:retos});
        //console.log(retos);
    }

   


     render(){
        const { navigate } = this.props.navigation;

        return(
            
            <View style={styles.contenedor}>
                <ZonaLogo/>
                <View style= {styles.contenido}>
                
                    <FlatList
                       /* onPress={() => this.props.navigation.navigate('Reto', {'nombre':item.value.nombre, 'categoria': item.value.categoria, 'detalle':item.value.detalle})}*/
                        data= {this.state.retos}
                        //renderItem={item=>this.renderItem(item)}
                        renderItem={({ item }) => 
                            
                            <TouchableOpacity onPress={()=> this.props.navigation.navigate('Reto', 
                                {'nombre':item.value.nombre, 
                                'categoria': item.value.categoria, 
                                'detalle':item.value.detalle ,
                                'periodicidad':item.value.periodicidad,
                                'tiempo':item.value.tiempo,
                                'completado':item.value.completado})}>

                                <Text> {item.value.nombre} </Text>
                                <Text> {item.value.detalle} <Badge value={item.value.completado} status="success"></Badge></Text>
           
                            </TouchableOpacity>
                        }
                        keyExtractor={(item,index)=>item.key}
                    />
                </View>
                <Menu navigate={navigate}/>
            </View>          
        );
    };




    onclick_item = (item) => {

        console.log(item);

        this.props.navigation.navigate('Reto');
   /*      switch (item) {
          case 0:
            this.props.navigation.navigate('Reto');
       
            break;
          case 1:
            this.props.navigation.navigate('Grupos');
            break;
          default:
          //whatever you want
        } */
    }


 }
