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
      profile:{
        left: 20,
        top: 20,
        flex: 1
      },
    pic: {
        width: 100,
        height: 100,
        borderRadius: 50,
        position: 'absolute'
    },
    personalDetail:{
        top: 25,
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: '微軟正黑體',
        textAlign: 'center'
    },
    logoutButton:{
        width: 50,
        height: 20,
        top:80,
        right:50,
        position: 'absolute',
        backgroundColor: 'rgba(200, 199, 199, 0.6)',
        borderRadius: 10
    }
  });

  export default class Personal extends React.Component{

    logout = ()=>{
        alert('掰');
    }
    
    render(){
        return(
            <View>
                <View 
                    style={styles.profile}
                >
                    <Image 
                        source={{uri:'https://s-media-cache-ak0.pinimg.com/originals/9c/79/da/9c79da558e9d7a47afcd57837709885c.jpg'}} 
                        style={styles.pic}
                    />
                    <Text
                        style={styles.personalDetail}
                    >食神    小明</Text>
                    <TouchableOpacity
                    style={styles.logoutButton}
                    onPress={this.logout}>
                        <Text style={{color:'rgba(255, 0, 0, 0.9)', alignContent:'center',textAlign:'center'}}>登出</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
  }