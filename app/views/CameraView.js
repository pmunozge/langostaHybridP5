import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { Camera } from 'expo-camera';
//import * as ImagePicker from 'expo-image-picker';
import * as ImagePicker from "expo-image-picker/src/ImagePicker";
import {styles} from '../estilosApp.js';
import { useNavigation } from '@react-navigation/native';


export function CameraView({ props}) {
    const navigation = useNavigation();
    let imageUri = '';
    
  const [cameraPermission, setCameraPermission] = useState(null);
  const [imagePermission, setGalleryPermission] = useState(null);

  const [camera, setCamera] = useState(null);
  //const [imageUri, setImageUri] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  const permisionFunction = async () => {
    try {
    const cameraPermission = await Camera.requestCameraPermissionsAsync();
    setCameraPermission(cameraPermission.status === 'granted');

    } catch(e){
        console.log(e)
    }
    try{

    const imagePermission = await ImagePicker.getMediaLibraryPermissionsAsync();
    console.log(imagePermission.status);
    setGalleryPermission(imagePermission.status === 'granted');

    }  catch(e){
          console.log(e)
    }
    if (
      imagePermission.status !== 'granted' &&
      cameraPermission.status !== 'granted'
    ) {
      alert('Permission for media access needed.');
    }
  };

  useEffect(() => {
    permisionFunction();
  }, []);

  const takePicture = async () => {
    if (camera) {
      try{ 
      const options = { quality: 0.7, base64: true };
      const photo = await camera.takePictureAsync(options);
        
 
      console.log(photo.uri);
      const filename = photo.uri.substring(photo.uri.lastIndexOf('/') + 1);
      

      console.log('photo', photo);
      
      navigation.navigate('NuevoReto', {img: photo})
       
        
        
      }catch(e){
        console.log(e);
      }
    }
  };

  const pickImage = async () => {

    
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      base64: true 
    });

    console.log('resultado  '+ result.uri);
    imageUri = result.uri;
    //setImageUri(result.uri);      
    console.log('imageUri '+ imageUri);
    
    navigation.navigate('NuevoReto', {img: result})
  };
    return (
        <View style={styles.contenedor}>
            <Camera  ref={(ref) => setCamera(ref)} style={styles.contenido} type={type} >
                {/* <View style={styles.buttonContainer}>
                    {<TouchableOpacity
                        style={styles.button}
                        onPress={
                          async() => {
                            if(cameraRef){
                              let photo = await cameraRef.takePictureAsync();
                              this.props.navigation.state.params.returnData(photo);
                              this.props.navigation.goBack();
                            }
                        }}>
                        <Text style={styles.text}> Cambiar camara </Text>
                    </TouchableOpacity>}
                   
                </View> */}


            </Camera>
            <Button title={'Take Picture'} onPress={takePicture} />
            <Button title={'Gallery'} onPress={pickImage} />
            {imageUri && <Image source={{ uri: imageUri }} style={{alignSelf:'center', height: 200, width:200}} />}
        </View>
    );
}

/* const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    camera: {
        flex: 1,
    },
    buttonContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        margin: 20,
    },
    button: {
        flex: 0.1,
        alignSelf: 'flex-end',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        color: 'white',
    },
}); */

