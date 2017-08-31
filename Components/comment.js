import React, { Component, PropTypes} from 'react'
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

export default class Comment extends React.Component{

    pic_uri={uri:this.props.pic}
    
    render(){
        
        return(
            <View>
                <TouchableOpacity >
                    <View style={styles.container}>
                        <Image 
                            source={this.pic_uri}
                            style={styles.thumbnail} />
                        <View style={styles.rightContainer}>
                            <Text style={styles.title}>{this.props.title}</Text>
                            <Text style={styles.author}>{this.props.review}</Text>
                        </View>         
                    </View> 
                    <View style={styles.separator} />
                </TouchableOpacity>
            </View>
    );}

}
