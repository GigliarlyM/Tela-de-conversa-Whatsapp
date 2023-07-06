import { StyleSheet } from "react-native";

const estilo = () => {
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
        },
        campoPessoa:{
          flex: 1,
          flexDirection: 'row',
          backgroundColor: '#eee',
          width: '100%',
          marginTop: 40,
        },
        campoVisual:{
          flex: 8,
          backgroundColor: '#ccc',
          width: '100%'
        },
        mensagem:{
          backgroundColor: '#aaa',
          width: '80%',
          paddingHorizontal: 20,
          paddingVertical: 15,
          alignContent: 'center',
          alignSelf: 'center',
          color: '#fff',
          borderTopLeftRadius: 20,
          borderBottomLeftRadius: 20,
          justifyContent: 'center',
        },
        campoMensagem:{
          flex:1,
          flexDirection: 'row',
          backgroundColor: '#eee',
          width: '100%',
          paddingHorizontal: 15,
          justifyContent: 'center',
        },
        mensagemEsquerda: {
          backgroundColor: '#aaa',
          position: 'relative',
          width: '50%',
          borderRadius: 10,
          fontSize: 20,
          borderTopLeftRadius: 0,
          marginHorizontal: 5,
          paddingHorizontal: 10,
          marginTop: 10,
          borderWidth: 1,
        },
        mensagemDireita: {
          backgroundColor: '#0e0',
          position: 'relative',
          width: '50%',
          fontSize: 20,
          borderRadius: 10,
          borderTopRightRadius: 0,
          marginHorizontal: 5,
          paddingHorizontal: 10,
          marginTop: 10,
          borderWidth: 1,
          textAlign: 'right',
          alignSelf: 'flex-end'
        },
        btnEnvio:{
          backgroundColor: '#0f0',
          borderTopRightRadius: 20,
          borderBottomRightRadius: 20,
          height: 57,
          alignSelf: 'center',
          marginRight: 10,
          justifyContent: 'center'
        },
        perfil: {
          position: 'absolute',
          top: 6,
          left: 12,
          height: 80,
          width: 75,
          resizeMode: 'contain',
          borderWidth: 1,
          borderWidth: 1,
          borderRadius: 50,
        },
        descricaoPessoa: {
          position: 'absolute',
          top: 10,
          left: 100
        },
    });

    return styles
}


export default estilo;