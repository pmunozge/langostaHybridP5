import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import {styles} from '../estilosApp.js';


export function CameraView({ props }) {

  const [cameraPermission, setCameraPermission] = useState(null);
  const [imagePermission, setGalleryPermission] = useState(null);

  const [camera, setCamera] = useState(null);
  const [imageUri, setImageUri] = useState(null);
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
      const photo = await camera.takePictureAsync();
      props.navigation.state.params.returnData(photo);

      console.log(data.uri);
      setImageUri(data.uri);

      props.navigation.goBack();
      }catch(e){
        console.log(e);
      }
    }
  };

  const pickImage = async () => {
    
      let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
   
    });

    console.log(result);
    if (!result.cancelled) {
      setImageUri(result.uri);
    }
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
            {imageUri && <Image source={{ uri: imageUri }} style={{ flex: 1 }} />}
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

