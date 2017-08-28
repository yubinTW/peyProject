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
  import { Actions } from 'react-native-router-flux';

export default class Login extends React.Component{

    login = ()=>{
        console.log('user login');
        Actions.key0();
        
    }
    render(){
        return(
            <View>
                <Image
                source={{uri:'https://s-media-cache-ak0.pinimg.com/originals/9c/79/da/9c79da558e9d7a47afcd57837709885c.jpg'}} 
                style={{width: 300, height: 300}}
                />
                <TextInput 
                onChangeText={(text) => this.setState({text})}
                placeholder="email"
                />
                <TextInput 
                onChangeText={(text) => this.setState({text})}
                placeholder="password"
                />
                <Button
                    onPress={this.login}
                    title="Sign In"
                >
                </Button>
            </View>
        );
    }
}