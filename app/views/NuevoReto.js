import React from "react";
import { SafeAreaView, StyleSheet, TextInput,Text, Button } from "react-native";

const NuevoReto = () => {
  const [nombre, setName] = React.useState("DefaultN");
  const [detalle,setDetalle] =React.useState("DefaultD");
  const [categoria,setCategoria] =React.useState("DefaultC");
  const [tiempo,setTiempo] =React.useState("DefaultT");
  const [periodicidad,setPeriodicidad] =React.useState("DefaultP");

  return (
    <SafeAreaView>
    <Text>Nombre</Text>
    <TextInput
        style={styles.input}
        onChangeText={(valueN)=>setName(valueN)}
        placeholder="Nombre"
      />
    <Text>Detalle</Text>
    <TextInput
        style={styles.input}
        onChangeText={(valueD)=>setDetalle(valueD)}
        placeholder="Detalle"
      />
    <Text>Categoria</Text>
    <TextInput
        style={styles.input}
        onChangeText={(valueC)=>setCategoria(valueC)}
        placeholder="Categoria"
      />
    <Text>Tiempo</Text>
    <TextInput
        style={styles.input}
        onChangeText={(valueT)=>setTiempo(valueT)}
        placeholder="Tiempo"
      />
    <Text>Periodicidad</Text>
    <TextInput
        style={styles.input}
        onChangeText={(valueP)=>setPeriodicidad(valueP)}
        placeholder="Periodicidad"
      />
    <Button
        
        title="Guardar"
        color="orange"
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