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
    ListView
  } from 'react-native';
  import { Actions } from 'react-native-router-flux';
  import eater from './eater'


  var FAKE_DATA = [
    {one: [ {authors: '朴大哥炸雞', review: "還可以",imageLinks: {thumbnail: 'https://ppt.cc/frMC1x'}},

          ]
    }];
//{authors: '小明', level: "吃貨",imageLinks: {thumbnail: 'http://img.mari.tw/pixnet/2ef8b28c44f76f3885dc2f9cf72d3122.jpg'}},


  export default class eaterPersonal extends React.Component{

    constructor(props) {
       super(props);
       this.state = {
           dataSource: new ListView.DataSource({
               rowHasChanged: (row1, row2) => row1 !== row2
           })
       };
    }

    componentDidMount() {
    var user1 = FAKE_DATA;
    this.setState({
        dataSource: this.state.dataSource.cloneWithRows(user1)
    });
    }

    eat(user1) {
       return (
            <View>
                <TouchableOpacity >
                    <View style={styles.container}>
                        <Image 
                            source={{uri: user1.one[0].imageLinks.thumbnail}}
                            style={styles.thumbnail} />
                        <View style={styles.rightContainer}>
                            <Text style={styles.title}>{user1.one[0].authors}</Text>
                            <Text style={styles.author}>{user1.one[0].review}</Text>
                        </View>         
                    </View> 
                    <View style={styles.separator} />
                </TouchableOpacity>
               
              
            </View>
       );
    }

    render(){
        return(
            <View>
                <View style={styles.container1}>
                <Image style={styles.photo} 
                        source={{uri:'https://ppt.cc/fVByIx@.jpg'}}   
                />
               <View style={styles.rightContainer1}>
                        <Text style={styles.name}>小夫</Text>
                        <Text style={styles.level}>吃貨</Text>
                </View>
                </View>
                <View style={styles.separator} />
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.eat.bind(this)}
                    style={styles.listView}
                />
            
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
       
       height:370
       
    },
   

});