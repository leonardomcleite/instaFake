import React, { Component } from 'react';
import { Image, StyleSheet, TouchableOpacity, View, Text } from 'react-native';

export default class Likes extends Component {

  loadIcon(likeada) {
    return likeada ?  require('../../resources/img/s2-checked.png') : require('../../resources/img/s2.png');
  }

  showLikes(qtdLikes) {
    return qtdLikes > 0 ?
      <Text style={styles.curtidas}>{qtdLikes} {qtdLikes > 1 ? 'curtidas' : 'curtida'}</Text>
    : null;
  }

  render() {
    const { foto, likeCallBack } = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => {likeCallBack(foto.id)}}>
          <Image source={this.loadIcon(foto.likeada)} style={styles.iconLike}/>
        </TouchableOpacity>
        {this.showLikes(foto.likers.length)}
      </View>
    );
  }

}

const styles = StyleSheet.create({
  iconLike: {
    width: 40,
    height: 40,
    marginBottom: 5
  },
  curtidas: {
    fontWeight: 'bold'
  },
});
