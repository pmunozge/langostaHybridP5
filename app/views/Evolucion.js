import React, { Component, useEffect } from 'react';
import {styles} from '../estilosApp.js';
import { Text , View , FlatList} from 'react-native';
import db from '../config/db.js';
import { collection, getDocs } from "firebase/firestore";
import { Menu } from '../widgets/Menu.js';
import { ZonaLogo } from '../widgets/ZonaLogo.js';

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
        <View style= {styles.contenido}>
            <Text>{data.item.value.nombre}</Text>
        </View>


     render(){
        const { navigate } = this.props.navigation;

 /*       if(this.state.loading){
            return(
            <View >
            <Text>Cargando langostas</Text>
        </View>
        )
        }else{
            return(
                <View >
                <Text>Langostas cargadas</Text>
            </View>
            )
        }
*/

        return(
            
            <View style={styles.contenedor}>
                <ZonaLogo/>
                <View style= {styles.contenido}>
                    <Text>Contenido de Evolucion</Text>
                    <FlatList
                        data= {this.state.retos}
                        renderItem={item=>this.renderItem(item)}
                        keyExtractor={(item,index)=>item.key}
                    />
                </View>
                <Text>Contenido de Evolucion2</Text>
                <Menu navigate={navigate}/>
            </View>          
        );
    };
 }
