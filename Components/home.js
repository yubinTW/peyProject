import React from 'react'
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    Alert,
    Image,
    Button
  } from 'react-native';
  import { Actions, Scene } from 'react-native-router-flux';
  import Tabs from 'react-native-tabs';
  import Personal from './personal';
  import Store from './store';
  import TabIcon from './TabIcon';
  import Eater from './eater.js';
  import Location from './location.js';

  export default class Home extends React.Component{

    constructor(props){
        super(props);
        
        this.state = {page:'second'};
      }

    render(){

        return(
            <View style={styles.container}>
            <Text>Home</Text>
            </View>
        );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });