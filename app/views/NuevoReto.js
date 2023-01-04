import React , { useState}from "react";
import { SafeAreaView, Text, Alert} from "react-native";
import { Button,Input } from 'react-native-elements';
import { db, storage } from '../config/db.js';
import { doc, addDoc, setDoc, collection} from "firebase/firestore";
import { MenuRetos } from '../widgets/MenuRetos.js';
import {styles} from '../estilosApp.js';
import { CameraView } from '../views/CameraView.js';
import { getStorage, ref, uploadBytes, getDownloadURL} from "firebase/storage";
//import storage from '@react-native-firebase/storage';



export default function NuevoReto({navigation, route}) {
 
  //const storage = getStorage();
 
 
 
  const { img } =   route?.params || {};
  console.log("image :" + img); 


  const subirImagen =  async() =>{

    
    
    const filename = img.uri.substring(img.uri.lastIndexOf('/') + 1);
    const uploadUri = Platform.OS === 'ios' ? img.uri.replace('file://', '') : img;
    
    const storageRef = ref(storage, `images/${filename}`);

    const imgblob = new Blob([JSON.stringify(img)], {
      type: "application/json",
    });
    uploadBytes(storageRef, imgblob).then((snapshot) => {
      console.log('Uploaded a blob or file!');
      getDownloadURL(snapshot.ref).then( url => {
       
            
          
          const docRef = collection(db, '/retos')

          const data = {
            nombre: state.name,
            categoria: state.categoria,
            tiempo: state.tiempo,
            periodicidad: state.periodicidad,
            detalle: state.detalle,
            completado:'0%', 
            img: url
          }


        // console.log(db);

          addDoc(docRef, data)
          .then(() => {
            Alert.alert(
              'Reto añadido con exito',
              'Escritura base de datos exitosa',
              [
                  {
                    text: 'OK', 
                    onPress: () => navigation.navigate('Evolucion')},
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
                    onPress: () => navigation.navigate('NuevoReto')},
              ]
              );
          })
                
                
        }     
        
        
               
        
        )
    });



 /*    console.log(img);
    console.log(filename);
    const task = storage()
      .ref(filename)
      .putFile(uploadUri);
    // set progress state
    
    try {
      await task;
    } catch (e) {
      console.error(e);
    } */
    
  /*   Alert.alert(
      'Photo uploaded!',
      'Your photo has been uploaded to Firebase Cloud Storage!'
    ); */
    





  /*   console.log("estamos por aqui");
    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        resolve(xhr.response);
      };
      xhr.onerror = function (e) {
        console.log(e);
        reject(new TypeError("Network request failed"));
      };
      xhr.responseType = "blob";
      xhr.open("GET", img, true);
      xhr.send(null);
    });
  console.log('blob '+ blob);
    const fileRef = ref(storage, uuid.v4());
    const result = await uploadBytes(fileRef, blob);
  
    // We're done with the blob, close and release it
    blob.close();
  
    return await getDownloadURL(fileRef); */
  }

/*   const recoverImg = () =>{
    if (props.route.params?.img !== this.props.route.params?.img) {
      const result = this.props.route.params?.img;
      console.log(result);
     
    };
  }; */
 /*  let image = props.navigation.getParam('image')
  console.log("image :" +image); */
  /* const returnData = (photo) =>{
     this.setState({img: img}); 
    console.log(photo);
  }; */
  const [state, setState] = useState({
    name: '',
    detalle:'',
    categoria:'',
    tiempo:'',
    periodicidad:'', 
    completado:'', 
    img: ''
  })

const handleChangeText = (name, value) => {
  setState({...state, [name]: value})
};








const guardarNuevoReto = async() => {

  if(comprobarDatosInput()){


    //Cloud Storage Reference

    subirImagen();

    

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
      <Button
        //onPress={() => Alert.alert('Button with adjusted color pressed')}
        onPress={() => navigation.navigate('CameraView')}
        icon={{
          name: "camera",
          size: 15,
          color: "orange"
        }}
        title="Nuevo icono"
 
      />
{/* 
    <Text>name:{nombre},detalle:{detalle},categoria:{categoria},tiempo:{tiempo},Periodicidad:{periodicidad}</Text> */}
      <MenuRetos navigate={navigation.navigate}/>
      
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



/* export default NuevoReto; */