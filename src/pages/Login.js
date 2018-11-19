import React, { Component } from 'react';
import { AsyncStorage, Button, Dimensions, StyleSheet, Text, View } from 'react-native';
import CustomInput from '../components/CustomInput';

const width = Dimensions.get('screen').width;

export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: '',
      password: '',
    }
  }

  submitedUser() {
    const endPoint = "https://instalura-api.herokuapp.com/api/public/login";

    const requestInfo = {
      method: 'POST',
      body: JSON.stringify({
        login: this.state.user,
        senha: this.state.password,  
      }),
      headers: {
        'Content-type': 'application/json'
      }
    }
    
    fetch(endPoint, requestInfo)
      .then(response => {
        if(response.ok)
          return response.text();

        throw new Error("Não foi possível efetuar login")
      })
      .then(token => {
        AsyncStorage.multiSet([
          ['usuario', this.state.usuario],
          ['token', token]
        ]);
      })
      .catch(e => this.setState({message: e.message}))
  }

  logout() {
    AsyncStorage.removeItem('usuario');
    AsyncStorage.removeItem('token');

    this.props.navigator.resetTo({
      screen:{
        screen: 'Login',
        title: 'Login'
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>InstaFake</Text>
        <View style={styles.form}>
          <CustomInput
            placeholder="Usuário"
            onChange={text => this.setState({user: text})}
            autoCapitalize="none"/>
          <CustomInput
            placeholder="Senha"
            onChange={text => this.setState({password: text})}
            autoCapitalize="none"
            secureTextEntry={true}/>

          <Button
            style={styles.buttonLogin}
            title="Login"
            onPress={this.submitedUser.bind(this)}/>
        </View>
        <Text style={styles.message}>{this.state.message}</Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  form: {
    width: width * 0.8
  },
  title: {
    fontWeight: 'bold',
    fontSize: 26
  },
  buttonLogin: {
    marginTop: 15,
    color: '#e74c3c'
  },
  message: {
    marginTop: 15,
    color: '#e74c3c'
  }
});
