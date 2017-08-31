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
    Button,
    ListView,
    ScrollView
  } from 'react-native';
  import { Actions } from 'react-native-router-flux';
  import eater from './eater'
  import Comment from './comment.js';


  export default class eaterPersonal extends React.Component{


    constructor(props) {
       super(props);
       this.state = {
           comments : this.props.comments
       };
    }

    render(){
        return(
            <View style={{flex:1}}>
                <View style={styles.container1}>
                <Image style={styles.photo} 
                        source={{uri:'https://ppt.cc/fVByIx@.jpg'}}   
                />
               <View style={styles.rightContainer1}>
                        <Text style={styles.name}>{this.props._name}</Text>
                        <Text style={styles.level}>{this.props.level}</Text>
                </View>
                </View>
                <View style={styles.separator} />
                <ScrollView>
                    {this.state.comments.map((comment,i) => (
                        <Comment 
                            key = {i}
                            title = {comment.title}
                            review = {comment.review}
                            pic = {comment.pic}
                        />
                    ))}
                </ScrollView>
                
            
            </View>
        );
    }
  }

var styles = StyleSheet.create({
    photo:{
        flex: 1,
        width: 30,
        height: 100,
        marginRight: 10
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000',
        padding: 10
    },
    container1: {
        
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        padding: 10,
        height: 180,
    },
    thumbnail: {
        flex: 1,
        width: 53,
        height: 90,
        marginRight: 10
    },
   rightContainer: {
        flex: 3,
        left: 40,
        
    },
    rightContainer1: {
        flex: 3,
        left: 70,
        
    },
    name:{
        fontSize: 20,
        marginBottom: 8,
        color : 'black'
    },
    level:{
        color: '#656565'
    },
    title: {
        fontSize: 20,
        marginBottom: 8,
        color : 'white'
    },
    author: {
        color: '#DCDCDC'
    },
    separator: {
       height: 1.5,
       backgroundColor: '#FFD700'
   },
    listView:{
       backgroundColor: '#000000',
       
       height:390
       
    },
   

});