import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header'
import Chat from './components/Chat'

export default class App extends React.Component {
  render() {
    return (
        <View style={{ flex: 1 }}>
          <Header headerText="Rohan's Chat App"/>
          <Chat />
        </View>
  );
  }
}

