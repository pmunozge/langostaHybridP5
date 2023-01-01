import React, { Component, useEffect } from 'react';
import {styles} from '../estilosApp.js';
import { Text , View , FlatList, TouchableOpacity} from 'react-native';
import {ProgressBar} from '@react-native-community/progress-bar-android';
import { Badge } from "react-native-elements";

import db from '../config/db.js';
import { collection, connectFirestoreEmulator, getDocs } from "firebase/firestore";
import { MenuRetos } from '../widgets/MenuRetos.js';
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
        this.setState({retos:retos, loading:false});
        //console.log(retos);
    }

   


     render(){
        const { navigate } = this.props.navigation;

        if(this.state.loading){
            return(
            <View style={styles.barraProgreso}>
            <Text style={{textAlignVertical: "center",textAlign: "center",}}>Cazando langostas, espere por favor</Text>
                <ProgressBar styleAttr="Horizontal" />
            </View>  
            )
        }else{
       

        
        return(

            <View style={styles.contenedor}>
                <ZonaLogo/>

                <View style= {styles.contenido}>
                
                    <FlatList 
                     
                        data= {this.state.retos}
                        //renderItem={item=>this.renderItem(item)}
                        renderItem={({ item }) => 
                            
                            <TouchableOpacity style= {styles.listaitem} onPress={()=> this.props.navigation.navigate('Reto', 
                                {'nombre':item.value.nombre, 
                                'categoria': item.value.categoria, 
                                'detalle':item.value.detalle ,
                                'periodicidad':item.value.periodicidad,
                                'tiempo':item.value.tiempo,
                                'completado':item.value.completado})}>
                                <View style={styles.vistavertical}>
                                    <Text style= {styles.textolistatitulo}> {item.value.nombre}</Text>
                                    <Text style= {styles.textolistacontenido}> {item.value.detalle}</Text>
                                </View>
                                <View style={styles.vistabadge}>
                                    <Badge value={item.value.completado} status="success"></Badge>
                                </View>
                            </TouchableOpacity>
                        }
                        keyExtractor={(item,index)=>item.key}
                    />
                </View>
                <MenuRetos navigate={navigate}/>
            </View>          
        );
    };
}

    onclick_item = (item) => {

        console.log(item);

        this.props.navigation.navigate('Reto');

    }
    


 }
