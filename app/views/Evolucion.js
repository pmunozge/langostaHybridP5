import React, { Component } from 'react';
import {styles} from '../estilosApp.js';
import { Text , View } from 'react-native';
import db from '../config/db.js';
import { doc, getDoc } from "firebase/firestore";
import { Menu } from '../widgets/Menu.js';
import { ZonaLogo } from '../widgets/ZonaLogo.js';


export class Evolucion extends Component { 

    async render(){


        const docRef = doc(db, "retos", "0");
        const docSnap = await getDoc(docRef);
    
        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
        } else {
            // doc.data() will be undefined in this case
                console.log("No such document!");
    
        }   
        const { navigate } = this.props.navigation;
        

        return(
            <View style={styles.contenedor}>
                <ZonaLogo/>
                <View style= {styles.contenido}>
                    <Text>Contenido de Evolucion</Text>
                </View>
                <Menu navigate={navigate}/>
            </View>          
        )
    };

 /*  constructor() {
    super();
    const docRef = doc(db, "retos", "0");
        const docSnap =   await getDoc(docRef);

        if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
        }
    this.firestoreRef = db.collection('retos');
    this.state = {
      isLoading: true,
      retosArr: []
    };
  }
  componentDidMount() {
    this.unsubscribe = this.firestoreRef.onSnapshot(this.getCollection);
  }
  componentWillUnmount(){
    this.unsubscribe();
  }

  getCollection = (querySnapshot) => {
    const retosArr = [];
    querySnapshot.forEach((res) => {
      const { categoria, detalle, nombre } = res.data();
      userArr.push({
        key: res.id,
        res,
        categoria,
        detalle,
        nombre,
      });
    });
    this.setState({
        retosArr,
      isLoading: false,
   });
  }
  render() {
    if(this.state.isLoading){
      return(
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E"/>
        </View>
      )
    }    
    return (
      <ScrollView style={styles.container}>
          {
            this.state.retosArr.map((item, i) => {
              return (
                <ListItem
                  key={i}
                  chevron
                  bottomDivider
                  title={item.name}
                  subtitle={item.email}
               /*    onPress={() => {
                    this.props.navigation.navigate('UserDetailScreen', {
                      userkey: item.key
                    });
                  }} />
              );
            })
          }
      </ScrollView>
    );
  }
}*/

}