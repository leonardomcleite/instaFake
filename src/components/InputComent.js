import React, { Component } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import CustomInput from './CustomInput';

export default class InputComent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      valueInputComent: ''
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <CustomInput
          style={styles.input}
          placeholder="Adicione um comentario..." 
          ref={input => this.inputComent = input}
          onChange={text => this.setState({valueInputComent: text})}
          onSubmit={() => {
            this.props.sendComentCallBack(this.state.valueInputComent, this.inputComent, this.props.idFoto);
          }}
          underlineColorAndroid="transparent"/>
        <TouchableOpacity onPress={() => {
          this.props.sendComentCallBack(this.state.valueInputComent, this.inputComent, this.props.idFoto);
          this.setState({valueInputComent: ''});
        }}>
          <Image style={styles.iconSend} source={require('../../resources/img/send.png')}/>
        </TouchableOpacity>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  },
  input: {
    flex: 1
  },
  iconSend: {
    width: 30,
    height: 30
  },
});
