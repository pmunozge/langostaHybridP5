import React from "react";
import { SafeAreaView, StyleSheet, TextInput,Text,Alert,Form} from "react-native";
import { Button,Icon,Input } from 'react-native-elements';




const NuevoReto = () => {
  const [errorMessageN, setErrorMessageN] = React.useState('');
  const [errorMessageD, setErrorMessageD] = React.useState('');
  const [errorMessageC, setErrorMessageC] = React.useState('');
  const [errorMessageT, setErrorMessageT] = React.useState('');
  const [errorMessageP, setErrorMessageP] = React.useState('');

  const [nombre, setName] = React.useState("");
  const [detalle,setDetalle] =React.useState("");
  const [categoria,setCategoria] =React.useState("");
  const [tiempo,setTiempo] =React.useState("");
  const [periodicidad,setPeriodicidad] =React.useState("");

  const  comprobarDatosInput = () => {
    //Comprobacion de que no estan vacios
    if(nombre=="")
      setErrorMessageN("No puedes dejar el nombre vacío")
    else
      setErrorMessageN("")
    if(detalle=="")
      setErrorMessageD("No puedes dejar el detalle vacío")
    else
      setErrorMessageD("")
    if(categoria=="")
      setErrorMessageC("No puedes dejar la categoria vacía")
    else
      setErrorMessageC("") 

    //Doble comprobacion numerico y vacio
    if(tiempo==""){
      setErrorMessageT("No puedes dejar el tiempo vacío")
    }else if(isNaN(parseInt(tiempo))){
      setErrorMessageT("Tiene que ser un campo numerico")
    }
    else{
      setErrorMessageT("")   
    } 
    if(periodicidad==""){
      setErrorMessageP("No puedes dejar la periodiciadad vacía")
    }else if(isNaN(parseInt(periodicidad))){
      setErrorMessageP("Tiene que ser un campo numerico")
    }
    else{
      setErrorMessageT("")   
    } 

  }

  return (
    <SafeAreaView>
    <Text>Nombre</Text>
    
    <Input
        style={styles.input}
        onChangeText={(valueN)=>setName(valueN)}
        placeholder="Nombre"
        errorStyle={{ color: 'orange' }}
        
        errorMessage={errorMessageN}
      />
      
    <Text>Detalle </Text>
    <Input
        style={styles.input}
        onChangeText={(valueD)=>setDetalle(valueD)}
        placeholder="Detalle"
        errorStyle={{ color: 'orange' }}
        errorMessage={errorMessageD}
      />
    <Text>Categoria</Text>
    <Input
        style={styles.input}
        onChangeText={(valueC)=>setCategoria(valueC)}
        placeholder="Categoria"
        errorStyle={{ color: 'orange' }}
        errorMessage={errorMessageC}
      />
    <Text>Tiempo</Text>
    <Input
        style={styles.input}
        onChangeText={(valueT)=>setTiempo(valueT)}
        placeholder="Tiempo"
        errorStyle={{ color: 'orange' }}
        errorMessage={errorMessageT}
      />
    <Text>Periodicidad</Text>
    <Input
        style={styles.input}
        onChangeText={(valueP)=>setPeriodicidad(valueP)}
        placeholder="Periodicidad"
        errorStyle={{ color: 'orange' }}
        errorMessage={errorMessageP}
      />
     
     
    <Button
        //onPress={() => Alert.alert('Button with adjusted color pressed')}
        onPress={ () => comprobarDatosInput()}
        icon={{
          name: "save",
          size: 15,
          color: "white"
        }}
        title="Guardar"
      />

    <Text>name:{nombre},detalle:{detalle},categoria:{categoria},tiempo:{tiempo},Periodicidad:{periodicidad}</Text>

    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});




export default NuevoReto;