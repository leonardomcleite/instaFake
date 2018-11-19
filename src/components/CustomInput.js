import React, { Component } from 'react';
import { StyleSheet, TextInput } from 'react-native';

export default class CustomInput extends Component {
  render() {
    return (
      <TextInput placeholder={this.props.placeholder}
        style={styles.input}
        ref={this.props.ref}
        autoCapitalize={this.props.autoCapitalize}
        secureTextEntry={this.props.secureTextEntry}
        onChangeText={this.props.onChange}
        onSubmitEditing={this.props.onSubmit}
        underlineColorAndroid={this.props.underlineColorAndroid}/>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  },
});
