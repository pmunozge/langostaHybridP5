import { StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    contenedor: {
        flex:1,
        backgroundColor: '#353535'
    },
    fila: {
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#ffffff',
        borderBottomWidth: 1,
        backgroundColor: '#353000'
    },
    boton: {
        width: '50%',
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#353000'
    },
    textoBoton:{
        color: '#00ff00',
        fontSize: 14, 
        fontFamily: 'monospace'
    },
    contenido: {
        flex: 2,
    }  

});