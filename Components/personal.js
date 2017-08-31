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
  import Icon from 'react-native-vector-icons/Ionicons';


 var FAKE_DATA = [
    {one: [ {authors: '朴大哥炸雞', review: "我覺得還好耶",imageLinks: {thumbnail: 'https://pic.pimg.tw/iko40623/1459602997-1779868072_n.jpg'}},
            {authors: '咖啡鑽', review: "鬆餅超級好吃的!", imageLinks: {thumbnail: 'https://farm8.staticflickr.com/7580/15354674913_bed6472f34_o.jpg'}},
            {authors: '宮原眼科', review: "冰淇淋超好ㄘ",imageLinks: {thumbnail: 'http://iphoto.ipeen.com.tw/photo/comment/9/1/5/cm20120711_140284_145225_d4a9357968bed3408ba15fe54428b11d299.jpg'}},
            {authors: '偈亭', review: "我覺得很好吃唷~",imageLinks: {thumbnail: 'http://img.mari.tw/pixnet/2ef8b28c44f76f3885dc2f9cf72d3122.jpg'}},
            {authors: '混HUN', review: "好好吃喔~",imageLinks: {thumbnail: 'https://farm1.static.flickr.com/695/22216602171_cbd033ccdb_b.jpg'}},
        
          ]
    }];
  const styles = StyleSheet.create({
      profile:{
         left: 20,
        top: 20,
        height:160
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
    },
    
    separator: {
       height: 1.5,
       backgroundColor: '#FFD700'
   },
    thumbnail: {
        flex: 1,
        width: 53,
        height: 90,
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
    rightContainer: {
        flex: 3,
        left: 40,
        
    },
    title: {
        fontSize: 20,
        marginBottom: 8,
        color : 'white'
    },
    author: {
        color: '#DCDCDC'
    },
    listView:{
       backgroundColor: '#000000',
       
       height:360
       
    },
    addstore:{
        width:100,
        height:40,
        top:80,
        right:150,
        position: 'absolute',
        borderRadius: 10,
        borderColor:'black',
        borderWidth:1
    },
  });


  export default class Personal extends React.Component{

    constructor(props) {
       super(props);
       this.state = {
           dataSource: new ListView.DataSource({
               rowHasChanged: (row1, row2) => row1 !== row2
           }),
           datas : [
                {authors: '朴大哥炸雞', review: "我覺得還好耶",pic: 'https://pic.pimg.tw/iko40623/1459602997-1779868072_n.jpg'},
                {authors: '咖啡鑽', review: "鬆餅超級好吃的!", pic: 'https://farm8.staticflickr.com/7580/15354674913_bed6472f34_o.jpg'},
                {authors: '宮原眼科', review: "冰淇淋超好ㄘ",pic: 'http://iphoto.ipeen.com.tw/photo/comment/9/1/5/cm20120711_140284_145225_d4a9357968bed3408ba15fe54428b11d299.jpg'},
                {authors: '偈亭', review: "我覺得很好吃唷~",pic: 'http://img.mari.tw/pixnet/2ef8b28c44f76f3885dc2f9cf72d3122.jpg'},
                {authors: '混HUN', review: "好好吃喔~",pic: 'https://farm1.static.flickr.com/695/22216602171_cbd033ccdb_b.jpg'},
            ]
       };
    }
    componentDidMount() {
    var user1 = FAKE_DATA;
    this.setState({
        dataSource: this.state.dataSource.cloneWithRows(user1)
    });
    }

    logout = ()=>{
        alert('掰','title');
        Actions.login();
    }
    
    eat(user1) {
       return (
           <View>
                {this.state.datas.map((item,i)=>(
                    <TouchableOpacity key={i}>
                        <View style={styles.container}>
                            <Image 
                                source={{uri: item.pic}}
                                style={styles.thumbnail} />
                            <View style={styles.rightContainer}>
                                <Text style={styles.title}>{item.authors}</Text>
                                <Text style={styles.author}>{item.review}</Text>
                            </View>  
                            <View>
                                <TouchableOpacity
                                    onPress={()=>alert('修改修改...')}
                                >
                                    <Icon name={'ios-create'} size={30} color='green' style={{marginRight:20}}/>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={()=>alert('刪除刪除...')}  
                                >
                                    <Icon name={'ios-trash'} size={30} color='red'/>
                                </TouchableOpacity>
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
                <View style={styles.profile}>
                    <Image  
                        source={{uri:'https://s-media-cache-ak0.pinimg.com/originals/9c/79/da/9c79da558e9d7a47afcd57837709885c.jpg'}} 
                        style={styles.pic}
                    />
                    <Text
                        style={styles.personalDetail}
                    >食神    小明</Text>
                    <TouchableOpacity style={styles.addstore} 
                        onPress={()=>{alert('新增新增...')}}    
                    >
                        < Text style={{ fontWeight:'bold',lineHeight:30,color:'black', alignContent:'center',textAlign:'center',justifyContent:'center'}}>新增口袋名單</Text>
                        
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={styles.logoutButton}
                    onPress={this.logout}>
                        <Text style={{color:'rgba(255, 0, 0, 0.9)', alignContent:'center',textAlign:'center'}}>登出</Text>
                    </TouchableOpacity>
                    
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