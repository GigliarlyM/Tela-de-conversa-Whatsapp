import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { FlatList, Image, ScroollView, Text, TextInput, TouchableOpacity, View } from 'react-native';

const listaMensagens = [{'you': 'Como você está?'}, {'me': 'Estou no meio'}, {'you': 'pequeno teste'}]
function App() {
  const [mensagem, setMensagem] = React.useState();

  const enviarMensagem = mensagem => {
    
    listaMensagens.push({'me': mensagem})
    setMensagem('');
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.campoPessoa}>
        <Image source={require('./image/perfil.jpg')} style={styles.perfil} />
        <View style={styles.descricaoPessoa}>
          <Text style={{ fontSize: 30 }}>Nome da Pessoa</Text>
          <Text>+55 83 99999-9999</Text>
        </View>
      </View>

      <View style={styles.campoVisual}>
        <FlatList
          data={listaMensagens}
          renderItem={({ item }) => {
            if ('you' in item){
              return <Text style={styles.mensagemEsquerda}>{item.you}</Text>
            }else{
              return <Text style={styles.mensagemDireita}>{item.me}</Text>
            }
          }} />
      </View>

      <View style={styles.campoMensagem}>
        <TextInput
          multiline
          style={styles.mensagem}
          value={mensagem}
          onChangeText={setMensagem}
          placeholder="Mensagem..."
          keyboardType="default" />
        <TouchableOpacity
          style={styles.btnEnvio}
          onPress={() => { enviarMensagem(mensagem); }} >
          <Text style={{
            padding: 10
          }}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const stylesComponents = require('./style/style')
const styles = stylesComponents.default()

export default App;