import React from "react";
import { SafeAreaView, StyleSheet, TextInput,Text } from "react-native";

const NuevoReto = () => {
  const [nombre, setName] = React.useState("DefaultN");
  const [detalle,setDetalle] =React.useState("DefaultD");

  return (
    <SafeAreaView>
    <Text>Nombre</Text>
    <TextInput
        style={styles.input}
        onChangeText={(value)=>setName(value)}
        placeholder="useless placeholder"
      />
    <Text>Detalle</Text>
    <Text>Categoria</Text>
    <Text>Tiempo</Text>
    <Text>Periodicidad</Text>

    <Text>name:{nombre},detalle:{detalle}</Text>

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