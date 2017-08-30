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
import { Actions } from 'react-native-router-flux';
import  Search  from 'react-native-search-box';


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
        backgroundColor: '#FFD700'
    },
})

export default class StoreInfo extends React.Component{
    
    pic_uri={uri:this.props.pic}
    
    render(){
        
        return(
            <View>
            <Image
                source={this.pic_uri} 
                style={styles.pic}
            />
            
            <Text 
                style={styles.title}
            >{this.props.title}</Text>
            <View style={styles.separator} />
            <Text 
                style={styles.text}
            >評價：{this.props.star}</Text>
            <View style={styles.separator} />
            <Text 
                style={styles.text}
            >類型：{this.props._type}</Text>
            <View style={styles.separator} />
            <Text 
                style={styles.text}
            >電話：{this.props.phone}</Text>
            <View style={styles.separator} />
            <Text
                style={styles.text}
            >店址：{this.props.address}</Text>
            <View style={styles.separator} />
            <Text
                style={styles.text}
            >時間：{this.props.time}</Text>
            <View style={styles.separator} />
            <Text
                style={styles.text}
            >價位：{this.props.cost}</Text>
            <View style={styles.separator} />
            </View>
    );}
}