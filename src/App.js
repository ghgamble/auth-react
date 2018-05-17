import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
      state = { loggedIn: null };
      componentWillMount (){
            firebase.initializeApp({
                  apiKey: "AIzaSyCN5c5C0IgIMNu5qTSTY5Eku5HPCatJaI8",
                  authDomain: "auth-4c7ea.firebaseapp.com",
                  databaseURL: "https://auth-4c7ea.firebaseio.com",
                  projectId: "auth-4c7ea",
                  storageBucket: "auth-4c7ea.appspot.com",
                  messagingSenderId: "784080133550"
            });
            firebase.auth().onAuthStateChanged((user) => {
                  if (user) {
                        this.setState({ loggedIn: true });
                  } else {
                        this.setState({ loggedIn: false });
                  }
            });
      }
      renderContent() {
            switch (this.state.loggedIn) {
                  case true:
                        return <View style={styles.buttonContainerStyle}>
                              <Button onPress={() => firebase.auth().signOut()}>
                                    Log Out
                              </Button>
                        </View>;
                  case false:
                        return <LoginForm />;
                  default:
                        return <Spinner size="large" />;
            }
      }
      render() {
            return (
                  <View>
                        <Header headerText="Authentication" />
                        {this.renderContent()}
                  </View>
            );
      }
}

const styles = {
      buttonContainerStyle: {
            flexDirection: 'row',
            height: 40
      }
};

export default App;
