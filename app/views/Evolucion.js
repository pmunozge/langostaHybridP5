import React, { Component, useEffect } from 'react';
import {styles} from '../estilosApp.js';
import { Text , View } from 'react-native';
import db from '../config/db.js';
import { collection, getDocs } from "firebase/firestore";
import { Menu } from '../widgets/Menu.js';
import { ZonaLogo } from '../widgets/ZonaLogo.js';




export class Evolucion extends Component { 

    
    async componentDidMount() {
        const querySnapshot = await getDocs(collection(db, "retos"));
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
        });
    }

     render(){

        const { navigate } = this.props.navigation;
        return(
            
            <View style={styles.contenedor}>
                <ZonaLogo/>
                <View style= {styles.contenido}>
                    <Text>Contenido de Evolucion</Text>
                </View>
                <Menu navigate={navigate}/>
            </View>          
        );
    };
 }
