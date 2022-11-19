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
    filareto: {
        flex:1,
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
    botonreto: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#353000'
    },
   textoBoton:{
        color: '#00ff00',
        fontSize: 14, 
        fontFamily: 'monospace'
    },
    textolistatitulo:{
        color: '#00ff00',
        fontSize: 12, 
        fontFamily: 'monospace'
    },
    textolistacontenido:{
        color: '#00ff00',
        fontSize: 10, 
        fontFamily: 'monospace',
       
    },
   contenido: {
        flex: 2,
    },
    listaitem:{
        flexDirection: 'row',
        backgroundColor: 'orange',
        padding: 10,

    }
});