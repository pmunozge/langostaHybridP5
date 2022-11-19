import React, { Component, useEffect } from 'react';
import {styles} from '../estilosApp.js';
import { Text , View , FlatList, TouchableOpacity} from 'react-native';
import { Badge } from "react-native-elements";

import db from '../config/db.js';
import { collection, getDocs } from "firebase/firestore";
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
        console.log(retos);
    }

    renderItem = data =>
    <View style={styles.contenedor}>
        <View style= {styles.fila}>
              <TouchableOpacity  >
                 <Text >{data.item.value.nombre}</Text>
                    <Text>  {data.item.value.detalle} <Badge value={data.item.value.completado} status="success"></Badge></Text>
             </TouchableOpacity>    
          </View>
         
    </View>


     render(){
        const { navigate } = this.props.navigation;

        return(
            
            <View style={styles.contenedor}>
                <ZonaLogo/>
                <View style= {styles.contenido}>
                
                    <FlatList
                        onPress={() => this.props.navigate('Contactar')}
                        data= {this.state.retos}
                        renderItem={item=>this.renderItem(item)}
                        keyExtractor={(item,index)=>item.key}
                    />
                </View>
                <Menu navigate={navigate}/>
            </View>          
        );
    };
 }
