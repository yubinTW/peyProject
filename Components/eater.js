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
        _name:'apple',
        level: '吃貨',
        user_pic:'https://ppt.cc/fVByIx@.jpg',
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
            {tile: '咖啡鑽', review: "環境不錯,鬆餅好吃", pic: 'http://iphoto.ipeen.com.tw/photo/comment/0/9/0/cgm0d84defbb0d70c5f98d655e9d1e7906b289.jpg'},
        {title: '偈亭', review: "假日人超多，很好吃",pic: 'http://i0.wp.com/pic.pimg.tw/zine1215/1433675918-118242265.jpg?ssl=1'},
        {title: '混HUN', review: "環境很舒適餐點也不錯",pic: 'http://cfcdn4.azsg.opensnap.com/azsg/snapphoto/photo/LJ/H0YL/3D2U0V19D6D2C453FD5866sx.jpg'},
        ]
    },
    {
        _name:'小華',
        level: '食神',
        user_pic:'https://ppt.cc/fZz28x@.jpg',
        comments: [
            {title: '朴大哥炸雞', review: "我覺得還好耶",pic: 'https://pic.pimg.tw/iko40623/1459602997-1779868072_n.jpg'},
            {title: '咖啡鑽', review: "鬆餅超級好吃的!", pic: 'https://farm8.staticflickr.com/7580/15354674913_bed6472f34_o.jpg'},
            {title: '宮原眼科', review: "冰淇淋超好ㄘ",pic: 'http://iphoto.ipeen.com.tw/photo/comment/9/1/5/cm20120711_140284_145225_d4a9357968bed3408ba15fe54428b11d299.jpg'},
            {title: '偈亭', review: "我覺得很好吃唷~",pic: 'http://img.mari.tw/pixnet/2ef8b28c44f76f3885dc2f9cf72d3122.jpg'},
            {title: '混HUN', review: "好好吃喔~",pic: 'https://farm1.static.flickr.com/695/22216602171_cbd033ccdb_b.jpg'},
        ]
    },
    {
        _name:'小叮噹',
        level: '饕客',
        user_pic:'https://ppt.cc/fta6Ex@.jp',
        comments: [
            {title: '咖啡鑽', review: "環境很好不錯", pic: 'https://ppt.cc/ftgUKx'},
            {title: '宮原眼科', review: "冰淇淋好吃，人超多的阿~~",pic: 'http://pic.pimg.tw/aova/1339605127-2546188700.jpg'},
            {title: '偈亭', review: "便宜又好吃推推推",pic: 'https://ppt.cc/fCAvOx'},
            {title: '混HUN', review: "推推推推推",pic: 'https://ppt.cc/fsb7Ax'},
        ]
    },
    {
        _name:'小夫',
        level: '吃貨',
        user_pic:'https://ppt.cc/fVByIx@.jpg',
        comments: [
            {title: '朴大哥炸雞', review: "還可以", pic: 'https://ppt.cc/frMC1x'},
            
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