import React from "react";
import { SafeAreaView, StyleSheet, TextInput,Text,Alert,Form} from "react-native";
import { Button,Icon,Input } from 'react-native-elements';




const NuevoReto = () => {
  const [errorMessageN, setErrorMessageN] = React.useState('');
  const [errorMessageD, setErrorMessageD] = React.useState('');
  const [errorMessageC, setErrorMessageC] = React.useState('');
  const [errorMessageT, setErrorMessageT] = React.useState('');
  const [errorMessageP, setErrorMessageP] = React.useState('');

  const [nombre, setName] = React.useState("DefaultN");
  const [detalle,setDetalle] =React.useState("DefaultD");
  const [categoria,setCategoria] =React.useState("DefaultC");
  const [tiempo,setTiempo] =React.useState("DefaultT");
  const [periodicidad,setPeriodicidad] =React.useState("DefaultP");

  const  comprobarDatosInput = () => {
    
    setErrorMessageN("Example error message!")
    console.log(errorMessageN)
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
        errorMessage={errorMessageD}
      />
    <Text>Categoria</Text>
    <Input
        style={styles.input}
        onChangeText={(valueC)=>setCategoria(valueC)}
        placeholder="Categoria"
        errorMessage={errorMessageC}
      />
    <Text>Tiempo</Text>
    <Input
        style={styles.input}
        onChangeText={(valueT)=>setTiempo(valueT)}
        placeholder="Tiempo"
        errorMessage={errorMessageT}
      />
    <Text>Periodicidad</Text>
    <Input
        style={styles.input}
        onChangeText={(valueP)=>setPeriodicidad(valueP)}
        placeholder="Periodicidad"
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