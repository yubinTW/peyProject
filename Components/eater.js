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
    TouchableHighlight,
  } from 'react-native';
import { Actions } from 'react-native-router-flux';
import eaterPersonal from './eaterPersonal1';
import eaterPersona2 from './eaterPersonal2';
import eaterPersona3 from './eaterPersonal3';
import eaterPersona4 from './eaterPersonal4';
import eaterPersona5 from './eaterPersonal5';
import  Search  from 'react-native-search-box';



var FAKE_DATA = [
    {one: 
        [{authors: '小明', level: "吃貨", imageLinks: {thumbnail: 'https://ppt.cc/fVByIx@.jpg'}},
         {authors: '小美', level: "饕客", imageLinks: {thumbnail: 'https://ppt.cc/fta6Ex@.jpg'}},
         {authors: '小華', level: "食神", imageLinks: {thumbnail: 'https://ppt.cc/fZz28x@.jpg'}},
         {authors: '小叮噹', level: "饕客", imageLinks: {thumbnail: 'https://ppt.cc/fta6Ex@.jpg'}},
         {authors: '小夫', level: "吃貨", imageLinks: {thumbnail: 'https://ppt.cc/fVByIx@.jpg'}}
    ]}];

   
export default class Eater extends React.Component{
   
    constructor(props) {
       super(props);
       this.state = {
           dataSource: new ListView.DataSource({
               rowHasChanged: (row1, row2) => row1 !== row2
           })
       };
    }
componentDidMount() {
    var eaters = FAKE_DATA;
    this.setState({
        dataSource: this.state.dataSource.cloneWithRows(eaters)
    });
    }
 personal = ()=>{
        console.log('user profile');
        Actions.key4();     
    }
personal1 = ()=>{
        console.log('user profile');
        Actions.key5();     
    }
personal2 = ()=>{
        console.log('user profile');
        Actions.key6();     
    }
personal3 = ()=>{
        console.log('user profile');
        Actions.key7();     
    }
personal4 = ()=>{
        console.log('user profile');
        Actions.key8();     
    }
  
 eat(eaters) {
       return (
            
        <View>
            
            <TouchableOpacity onPress= {this.personal}  underlayColor='#dddddd'>
                <View style={styles.container}>
                    <Image
                        source={{uri: eaters.one[0].imageLinks.thumbnail}}
                        style={styles.thumbnail} />
                    <View style={styles.rightContainer}>
                        <Text style={styles.title}>{eaters.one[0].authors}</Text>
                        <Text style={styles.author}>{eaters.one[0].level}</Text>
                    </View>         
                </View> 
                <View style={styles.separator} />
            </TouchableOpacity>
            <TouchableOpacity onPress= {this.personal1}  underlayColor='#dddddd'>
                <View style={styles.container}>
                    <Image
                        source={{uri: eaters.one[1].imageLinks.thumbnail}}
                        style={styles.thumbnail} />
                    <View style={styles.rightContainer}>
                        <Text style={styles.title}>{eaters.one[1].authors}</Text>
                        <Text style={styles.author}>{eaters.one[1].level}</Text>
                    </View>         
                </View>
                <View style={styles.separator} />
            </TouchableOpacity>
            <TouchableOpacity onPress= {this.personal2}  underlayColor='#dddddd'>
                <View style={styles.container}>
                    <Image
                        source={{uri: eaters.one[2].imageLinks.thumbnail}}
                        style={styles.thumbnail} />
                    <View style={styles.rightContainer}>
                        <Text style={styles.title}>{eaters.one[2].authors}</Text>
                        <Text style={styles.author}>{eaters.one[2].level}</Text>
                    </View>         
                </View>
                <View style={styles.separator} />
            </TouchableOpacity>
            <TouchableOpacity onPress= {this.personal3}  underlayColor='#dddddd'>
                <View style={styles.container}>
                    <Image
                        source={{uri: eaters.one[3].imageLinks.thumbnail}}
                        style={styles.thumbnail} />
                    <View style={styles.rightContainer}>
                        <Text style={styles.title}>{eaters.one[3].authors}</Text>
                        <Text style={styles.author}>{eaters.one[3].level}</Text>
                    </View>         
                </View>
                <View style={styles.separator} />
            </TouchableOpacity>
            <TouchableOpacity onPress= {this.personal4}  underlayColor='#dddddd'>
                <View style={styles.container}>
                    <Image
                        source={{uri: eaters.one[4].imageLinks.thumbnail}}
                        style={styles.thumbnail} />
                    <View style={styles.rightContainer}>
                        <Text style={styles.title}>{eaters.one[4].authors}</Text>
                        <Text style={styles.author}>{eaters.one[4].level}</Text>
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
            <View style={styles.search}>
            <Search 
            />
            </View>
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
    search:{
         height: 40,
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        padding: 10
    },
    thumbnail: {
        flex: 1,
        width: 53,
        height: 90,
        marginRight: 10
    },
    rightContainer: {
        flex: 3,
        
    },
    title: {
        fontSize: 20,
        marginBottom: 8,
        color : 'black'
    },
    author: {
        color: '#656565'
    },
    separator: {
       height: 2,
       backgroundColor: '#000000'
   },
    listView:{
        backgroundColor: 'black',
        height:480
    }

});