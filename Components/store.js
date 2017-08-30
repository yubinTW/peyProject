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

  const infoData = [
    {title:'蘇格貓底',address:'300新竹市東區光復路二段101號',_type:'咖啡館', star:'4.2', cost:'中低價(NT100~199 /人)', phone:'03 573 6096',time:'ㄧ~日 11:00~21:00', pic:'https://media-cdn.tripadvisor.com/media/photo-s/0a/7b/7b/c6/restaurant-view.jpg'},

  ];


  export default class Store extends React.Component{

    state = {
        storeData : [
            {key:'0', title:'偈亭泡菜鍋', address:'台中市北區雙十路一段89號', pic:'https://farm6.staticflickr.com/5822/23700319152_36dc03e944_b.jpg'},
            {key:'1', title:'咖啡鑽', address:'台中市東區振興路2-6號', pic:'http://pic.pimg.tw/mphoto/1344171111-2474500838_l.jpg'},
            {key:'2', title:'朴大哥的韓式炸雞', address:'台中市北區三民路三段60號', pic:'http://iphoto.ipeen.com.tw/photo/comment/565344/1005364/cm20160313___87484f81eea8b19b4ae05f25e0d9e645468.jpg'},
            {key:'3', title:'混HUN', address:'台中市北區三民路三段114號', pic:'https://pic.pimg.tw/aboa1110/1459422413-218071251_n.jpg?v=1459422414'},
            {key:'4', title:'宮原眼科', address:'台中市中區中山路20號', pic:'http://pic.pimg.tw/barbieedoll/1390649733-2228895926_n.jpg'},
            {key:'5', title:'好迷咖啡', address:'403台中市西區台灣大道二段216號', pic:'http://pic.pimg.tw/bio01234/1379779860-4250275013.jpg'},
        
            
          ]
    }

    constructor(props) {
       super(props);   
    }

    personal = ()=>{
        Actions.location();
        
    }
    showStoreInfo(e,obj){
        Actions.storeinfo(obj);
    }

    render(){
        return(
            <View 
            style={{flex:1}}
            >
            
                <Search 
                />
                <ScrollView>

                {this.state.storeData.map((obj)=>(
                    <TouchableOpacity key={obj.key} style={styles.container} onPress={(e)=>this.showStoreInfo(e,infoData[obj.key])}>
                    <View style={styles.imageStyle}>
                        <Image
                            style={styles.imageSize}
                            source={{ uri: obj.pic }}
                        />
                    </View>
                    <View style={styles.textVirtual}>
                        <Text style={styles.titleText}>{obj.title}</Text>
                        <Text style={styles.baseText}>{obj.address}</Text>   
                    </View>
                </TouchableOpacity>    
                ))}
                
                </ScrollView>
                
            </View>
        );
    }
  }


  const styles = StyleSheet.create({


    container: {
        backgroundColor: 'white',
        flexDirection: 'row',
        height: 100,
        padding: 10,
        backgroundColor: 'white',
    },

    textVirtual:{
        flexDirection: 'column',
    },
 
    baseText: {
        fontSize: 14,
        color: '#808080',
        paddingTop: 5,
        paddingLeft: 30,                    
    },

    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#808080',
        paddingTop: 15,
        paddingLeft: 30,
    },

    imageStyle: {
        width: 80, 
        height: 80,
        borderWidth: 3,
        borderColor: '#F1C40F',
        borderRadius: 10,
        marginLeft: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },

    imageSize: {
        height: 74,
        width: 74,
        borderRadius: 10,
        resizeMode: 'cover',
    }
});