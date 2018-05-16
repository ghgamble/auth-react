import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';

class App extends Component {
      componentWillMount() {
            firebase.initializeApp ({
                  apiKey: "AIzaSyCN5c5C0IgIMNu5qTSTY5Eku5HPCatJaI8",
                  authDomain: "auth-4c7ea.firebaseapp.com",
                  databaseURL: "https://auth-4c7ea.firebaseio.com",
                  projectId: "auth-4c7ea",
                  storageBucket: "auth-4c7ea.appspot.com",
                  messagingSenderId: "784080133550"
            });
      }
      render() {
            return (
                  <View>
                        <Header headerText="Authentication" />
                  </View>
            );
      }
}

export default App;
