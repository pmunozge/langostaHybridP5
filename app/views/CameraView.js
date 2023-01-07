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
      const options = { quality: 0.7 };
      const photo = await camera.takePictureAsync(options);
        
      navigation.navigate('NuevoReto', {img: photo.uri})
              
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
    console.log(JSON.stringify(result.assets[0].uri));
       
    navigation.navigate('NuevoReto', {img: result.assets[0].uri})
    
  };

  


    return (
        <View style={styles.contenedor}>
            <Camera  ref={(ref) => setCamera(ref)} style={styles.contenido} type={type} >
            </Camera>
            <Button title={'Take Picture'} onPress={takePicture} />
            <Button title={'Gallery'} onPress={pickImage} />
            {imageUri && <Image source={{ uri: imageUri }} style={{alignSelf:'center', height: 200, width:200}} />}
        </View>
    );
}

