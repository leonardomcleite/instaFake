import React, { Component } from 'react';
import { FlatList, Platform, StyleSheet, View, Text } from 'react-native';
import Post from '../components/Post';

const marginTopInitial = Platform.select({
  ios: 30,
  android: 0
});

export default class Feed extends Component {

  constructor( ) {
    super();
    this.state = {
      fotos: []
    }
  }

  componentDidMount() {
    // fetch('https://10.0.2.2/api/public/fotos/rafael') //local
    fetch('https://instalura-api.herokuapp.com/api/public/fotos/rafael')
      .then(resposta => resposta.json())
      .then(json => this.setState({fotos: json}))
      .catch(e => {
        console.warn('Não foi possível carregar as fotos: ' + e);
        this.setState({status: 'ERRO'})
      });
  }

  like(idFoto) {
    const foto = this.findById(idFoto);
    const user = AsyncStorage.getItem('token')

    let newList = [];
    if (!foto.likeada) {
      newList = foto.likers.concat({loginUsuario: user})
    } else {
      newList = foto.likers.filter(like => { 
        return like.loginUsuario !== user;
      })
    }

    const fotoAtualizada = {
      ...foto,
      likeada: !foto.likeada,
      likers: newList
    }

    this.updatePhoto(fotoAtualizada);
  }

  addComent(valueInputComent, inputComent, idFoto) {
    if (valueInputComent === '') return;

    const foto = this.findById(idFoto);
    const newList = [...foto.comentarios, {
      id: valueInputComent,
      login: user,
      texto: valueInputComent
    }];

    const fotoAtualizada = {
      ...foto,
      comentarios: newList
    }

    this.updatePhoto(fotoAtualizada);
    inputComent.clear();
  }

  findById(idFoto) {
    return this.state.fotos.find(foto => foto.id === idFoto)
  }

  updatePhoto(fotoAtualizada) {
    const fotos = this.state.fotos.map(foto =>
      foto.id === fotoAtualizada.id ? fotoAtualizada : foto);
    this.setState({fotos});
  }

  render() {
    return (
      <View>
        <Text>Hello</Text>
        <FlatList
          style={styles.container}
          data = {this.state.fotos}
          keyExtractor={item => (item.id.toString())}
          renderItem={({item}) => 
            <Post foto={item} 
              likeCallBack={this.like.bind(this)}
              sendComentCallBack={this.addComent.bind(this)}/>
          }
        />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    marginTop: marginTopInitial
  }
});
