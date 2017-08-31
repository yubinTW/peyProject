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

const styles = StyleSheet.create({
    pic:{
        height: 300,
    },
    title:{
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: '微軟正黑體',
        marginLeft: 20
    },
    text:{
        fontSize: 20,
        fontFamily: '微軟正黑體',
        marginLeft: 20
    },
    separator: {
        height: 1,
        backgroundColor: '#333'
    },
})

export default class Login extends React.Component{

    login = ()=>{
        Actions.key0();
        
    }
    render(){
        return(
            <View style={{
                
                alignItems: 'center'}}>
                <Image
                source={require('../img/peyLOGO.png')} 
                style={{
                    top: 30,
                    height:300,
                    width: 180,
                    
                }}
                />
                <View style={{marginTop: 20, width:220}}>
                    <TextInput 
                    onChangeText={(text) => this.setState({text})}
                    placeholder="email"
                    />
                    
                    <TextInput 
                    onChangeText={(text) => this.setState({text})}
                    placeholder="password"
                    />
                    
                    <View style={{height:50}} />
                    <Button
                        style={{borderRadius:30, borderWidth:1}}
                        onPress={this.login}
                        title="Sign In"
                    >
                    </Button>
                </View>
            </View>
        );
    }
}