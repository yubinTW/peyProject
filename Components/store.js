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
    {title:'偈亭泡菜鍋',address:'台中市北區雙十路一段89號',_type:'火鍋店', star:'4.3', cost:'中低價(NT100~199 /人)', phone:'04 2225 9397',time:'ㄧ~日 11:30~23:00', pic:'https://cf-zineblog.zi.org.tw/wp-content/uploads/2017/07/1499876164-3fda5e5473eea839d1ca51fffad9b0d7.jpg'},
    {title:'咖啡鑽',address:'台中市東區振興路2-6號',_type:'咖啡廳', star:'3.5', cost:'中低價(NT100~199 /人)', phone:'04 2229 7210',time:'歇業中', pic:'http://blogwww.s3.amazonaws.com/Blogfiles/1998/465772.jpg'},
    {title:'朴大哥的韓式炸雞',address:'台中市北區三民路三段60號',_type:'韓國餐廳', star:'3.8', cost:'中低價(NT100~199 /人)', phone:'04 2229 6551',time:'三~一 17:00~02:00', pic:'http://pic.pimg.tw/ashinjo/1415083850-3429951509.jpg'},
    {title:'混HUN',address:'台中市北區三民路三段114號',_type:'餐廳', star:'4.0', cost:'中低價(NT100~199 /人)', phone:'04 2223 1080',time:'ㄧ~日 11:30~22:00', pic:'https://farm4.staticflickr.com/3899/15102968170_3db7817757_c.jpg'},
    {title:'宮原眼科',address:'台中市中區中山路20號',_type:'甜點專賣店', star:'4.1', cost:'中低價(NT100~199 /人)', phone:'04 2227 1927',time:'ㄧ~日 10:00~22:00', pic:'https://pic.pimg.tw/standinghere/1443326378-3173397776.jpg'},
    {title:'好迷咖啡',address:'台中市西區台灣大道二段216號',_type:'咖啡館', star:'4.2', cost:'中低價(NT100~199 /人)', phone:'04 2310 1250',time:'ㄧ~六 09:00~20:00', pic:'http://pic.pimg.tw/missieat/1382083234-4089121509_n.jpg'},

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