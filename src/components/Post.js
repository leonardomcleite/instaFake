import React, { Component } from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import InputComent from './InputComent';
import Likes from './Likes';

const width = Dimensions.get('screen').width;

export default class Post extends Component {

  showComents(foto) {
    return foto.comentario !== '' ?
    <View style={styles.contentComent}>
      <Text style={styles.user}>{foto.loginUsuario}</Text>
      <Text style={styles.coment}>{foto.comentario}</Text>
    </View>
    : null;
  }

  render() {
    const { foto, likeCallBack, sendComentCallBack } = this.props;
    
    return (
      <View>
        <View style={styles.header}>
          <Image source={{uri: foto.urlPerfil}}
          style={styles.avatar}/>
          <Text>{foto.loginUsuario}</Text>
        </View>
        <Image source={{uri: foto.urlFoto}} style={styles.imgPost}/>
        <View style={styles.footer}>
          
          <Likes likeCallBack={likeCallBack} foto={foto}/>

          {this.showComents(foto)}

          {foto.comentarios.map(comentario => 
            <View style={styles.contentComent} key={comentario.id}>
              <Text style={styles.user}>{comentario.login}</Text>
              <Text style={styles.coment}>{comentario.texto}</Text>
            </View>
          )}

          <InputComent sendComentCallBack={sendComentCallBack} idFoto={foto.id}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10
  },
  avatar: {
    width: 40,
    height: 40,
    marginRight: 10,
    borderRadius: 20
  },
  imgPost: {
    width: width,
    height: width
  },
  footer: {
    margin: 10
  },
  contentComent: {
    flexDirection: 'row'
  },
  user: {
    fontWeight: 'bold'
  },
  coment: {
    marginLeft: 5
  }
})
