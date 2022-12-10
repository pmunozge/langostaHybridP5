import React , { useState}from "react";
import { SafeAreaView, StyleSheet, TextInput,Text,Alert,Form} from "react-native";
import { Button,Icon,Input } from 'react-native-elements';
import db from '../config/db.js';
import { doc, addDoc, setDoc, collection} from "firebase/firestore";
import { MenuRetos } from '../widgets/MenuRetos.js';
import {styles} from '../estilosApp.js';


const NuevoReto = (props) => {

  const [state, setState] = useState({
    name: '',
    detalle:'',
    categoria:'',
    tiempo:'',
    periodicidad:'', 
    completado:''
  })

const handleChangeText = (name, value) => {
  setState({...state, [name]: value})
};


const guardarNuevoReto = async() => {

  if(comprobarDatosInput()){

    const docRef = collection(db, "retos")
    const data = {
      nombre: state.name,
      categoria: state.categoria,
      tiempo: state.tiempo,
      periodicidad: state.periodicidad,
      detalle: state.detalle,
      completado:'0%'
    }


    console.log(db);
  
    addDoc(docRef, data)
    .then(() => {
      Alert.alert(
        'Reto añadido con exito',
        'Escritura base de datos exitosa',
        [
             {
              text: 'OK', 
              onPress: () => props.navigation.navigate('Evolucion')},
        ]
        );
       
    })
    .catch(error => {
      Alert.alert(
        'Fallo al crear reto',
        'Escritura en base de datos fallida',
        [
             {
              text: 'ERROR', 
              onPress: () => props.navigation.navigate('NuevoReto')},
        ]
        );
    })
  }
  
} 

  const [errorMessageN, setErrorMessageN] = useState('');
  const [errorMessageD, setErrorMessageD] = useState('');
  const [errorMessageC, setErrorMessageC] = useState('');
  const [errorMessageT, setErrorMessageT] = useState('');
  const [errorMessageP, setErrorMessageP] = useState('');

 /*  const [nombre, setName] = React.useState("");
  const [detalle,setDetalle] =React.useState("");
  const [categoria,setCategoria] =React.useState("");
  const [tiempo,setTiempo] =React.useState("");
  const [periodicidad,setPeriodicidad] =React.useState(""); */

  const  comprobarDatosInput = () => {

    var n = false;
    var d = false;
    var c = false;
    var t = false;
    var p = false;
    //Comprobacion de que no estan vacios
    if(state.name===''){
      setErrorMessageN("No puedes dejar el nombre vacío");
      
    }else{
      setErrorMessageN("")
      n = true;
    }
    if(state.detalle===''){
      setErrorMessageD("No puedes dejar el detalle vacío")
    }else{
      setErrorMessageD("");
      d = true;
    }
    if(state.categoria==='')
      setErrorMessageC("No puedes dejar la categoria vacía")
    else{
      setErrorMessageC("");
      c = true;
    }
    //Doble comprobacion numerico y vacio
    if(state.tiempo===''){
      setErrorMessageT("No puedes dejar el tiempo vacío")
    }else if(isNaN(parseInt(state.tiempo))){
      setErrorMessageT("Tiene que ser un campo numerico")
    }
    else{
      setErrorMessageT("");
      t = true;   
    } 
    if(state.periodicidad===''){
      setErrorMessageP("No puedes dejar la periodiciadad vacía")
    }else if(isNaN(parseInt(state.periodicidad))){
      setErrorMessageP("Tiene que ser un campo numerico")
    }
    else{
      setErrorMessageT("");
      p = true;
    } 

    if (p&&t&&c&&d&&n){
      return true;
    }else{
      return false;
    }
  }

  return (
    <SafeAreaView style={styles.contenedor}>
    <Text>Nombre</Text>
    
    <Input
        style={styles.input}
        onChangeText={(value)=> handleChangeText('name',value)}
        placeholder="Nombre"
        errorStyle={{ color: 'orange' }}
        
        errorMessage={errorMessageN}
      />
      
    <Text>Detalle </Text>
    <Input
        style={styles.input}
        onChangeText={(value)=> handleChangeText('detalle',value)}
        placeholder="Detalle"
        errorStyle={{ color: 'orange' }}
        errorMessage={errorMessageD}
      />
    <Text>Categoria</Text>
    <Input
        style={styles.input}
        onChangeText={(value)=> handleChangeText('categoria',value)}
        placeholder="Categoria"
        errorStyle={{ color: 'orange' }}
        errorMessage={errorMessageC}
      />
    <Text>Tiempo</Text>
    <Input
        style={styles.input}
        onChangeText={(value)=> handleChangeText('tiempo',value)}
        placeholder="Tiempo"
        errorStyle={{ color: 'orange' }}
        errorMessage={errorMessageT}
      />
    <Text>Periodicidad</Text>
    <Input
        style={styles.input}
        onChangeText={(value)=> handleChangeText('periodicidad',value)}
        placeholder="Periodicidad"
        errorStyle={{ color: 'orange' }}
        errorMessage={errorMessageP}
      />
     
     
    <Button
        //onPress={() => Alert.alert('Button with adjusted color pressed')}
        onPress={ () => guardarNuevoReto()}
        icon={{
          name: "save",
          size: 15,
          color: "orange"
        }}
        title="Guardar"
 
      />
{/* 
    <Text>name:{nombre},detalle:{detalle},categoria:{categoria},tiempo:{tiempo},Periodicidad:{periodicidad}</Text> */}
      <MenuRetos navigate={props.navigation.navigate}/>
      
    </SafeAreaView>
  );
};

/* 
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
 */



export default NuevoReto;