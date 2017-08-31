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
import  Search  from 'react-native-search-box';



var FAKE_DATA = [
    {one: 
        [{authors: 'apple', level: "吃貨", imageLinks: {thumbnail: 'https://ppt.cc/fVByIx@.jpg'}},
         {authors: '小美', level: "饕客", imageLinks: {thumbnail: 'https://ppt.cc/fta6Ex@.jpg'}},
         {authors: '小華', level: "食神", imageLinks: {thumbnail: 'https://ppt.cc/fZz28x@.jpg'}},
         {authors: '小叮噹', level: "饕客", imageLinks: {thumbnail: 'https://ppt.cc/fta6Ex@.jpg'}},
         {authors: '小夫', level: "吃貨", imageLinks: {thumbnail: 'https://ppt.cc/fVByIx@.jpg'}}
    ]}];

const datas = [
    {
        _name:'測試姓名',
        level: '測試等級',
        user_pic:'https://ppt.cc/fVByIx@.jpg',
        comments: [
            {title:'店標題', review:'評價',pic:'http://farm3.static.flickr.com/2612/4124807746_fb07a21c63_o.jpg'},
            {title: '偈亭', review: "泡菜鍋推推",pic:'http://farm3.static.flickr.com/2612/4124807746_fb07a21c63_o.jpg'},
            {title: '混HUN', review: "義大利麵不錯~",pic:'https://farm3.staticflickr.com/2941/15289696495_edf9b254a1_c.jpg'},
            {title: '偈亭', review: "泡菜鍋推推",pic:'http://farm3.static.flickr.com/2612/4124807746_fb07a21c63_o.jpg'},
            
        ]
    },
    {
        _name:'apple',
        level: '吃貨',
        user_pic:'https://ppt.cc/fta6Ex@.jpg',
        comments: [
            {title: '偈亭', review: "泡菜鍋推推",pic: 'http://farm3.static.flickr.com/2612/4124807746_fb07a21c63_o.jpg'},
            {title: '混HUN', review: "義大利麵不錯~",pic: 'https://farm3.staticflickr.com/2941/15289696495_edf9b254a1_c.jpg'},
        ]
    },
    {
        _name:'小美',
        level: '饕客',
        user_pic:'https://ppt.cc/fta6Ex@.jpg',
        comments: [
            {title: '偈亭', review: "泡菜鍋推推",pic: 'http://farm3.static.flickr.com/2612/4124807746_fb07a21c63_o.jpg'},
            {title: '混HUN', review: "義大利麵不錯~",pic: 'https://farm3.staticflickr.com/2941/15289696495_edf9b254a1_c.jpg'},
        ]
    },
    {
        _name:'apple',
        level: '吃貨',
        user_pic:'https://ppt.cc/fta6Ex@.jpg',
        comments: [
            {title: '偈亭', review: "泡菜鍋推推",pic: 'http://farm3.static.flickr.com/2612/4124807746_fb07a21c63_o.jpg'},
            {title: '混HUN', review: "義大利麵不錯~",pic: 'https://farm3.staticflickr.com/2941/15289696495_edf9b254a1_c.jpg'},
        ]
    },
    {
        _name:'apple',
        level: '吃貨',
        user_pic:'https://ppt.cc/fta6Ex@.jpg',
        comments: [
            {title: '偈亭', review: "泡菜鍋推推",pic: 'http://farm3.static.flickr.com/2612/4124807746_fb07a21c63_o.jpg'},
            {title: '混HUN', review: "義大利麵不錯~",pic: 'https://farm3.staticflickr.com/2941/15289696495_edf9b254a1_c.jpg'},
        ]
    },
]
   
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

showEaterPersonal(e,obj){
    Actions.eaterpersonal(obj);
}
  
 eat(eaters) {
       return (
            
        <View>
            {datas.map((user,i)=>(
                <TouchableOpacity key={i} onPress= {e =>this.showEaterPersonal(e,user)}  underlayColor='#dddddd'>
                    
                    <View style={styles.container}>
                        <Image
                            source={{uri: user.user_pic}}
                            style={styles.thumbnail} />
                        <View style={styles.rightContainer}>
                            <Text style={styles.title}>{user._name}</Text>
                            <Text style={styles.author}>{user.level}</Text>
                        </View>         
                    </View> 
                    <View style={styles.separator} />
                </TouchableOpacity>
            ))}
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