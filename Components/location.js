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
    Button
  } from 'react-native';
  import { Actions } from 'react-native-router-flux';
  import Search from 'react-native-search-box';
  import MapView from 'react-native-maps';
  import Icon from 'react-native-vector-icons/FontAwesome';
  import Prompt from 'react-native-prompt';

  const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    mapconrainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
    mapButton: {
        position: 'absolute',
        right: 30,
        bottom: 50,
        width: 60,
        height: 60,
        borderRadius: 75/2,
        backgroundColor: 'rgba(200, 199, 199, 0.9)',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'black',
        shadowRadius: 8,
        shadowOpacity: 0.12,
        opacity: .6,
        zIndex: 10,
     },
  });

  const infoData = [
    {title:'偈亭泡菜鍋',address:'台中市北區雙十路一段89號',_type:'火鍋店', star:'4.3', cost:'中低價(NT100~199 /人)', phone:'04 2225 9397',time:'ㄧ~日 11:30~23:00', pic:'https://cf-zineblog.zi.org.tw/wp-content/uploads/2017/07/1499876164-3fda5e5473eea839d1ca51fffad9b0d7.jpg'},
    {title:'咖啡鑽',address:'台中市東區振興路2-6號',_type:'咖啡廳', star:'3.5', cost:'中低價(NT100~199 /人)', phone:'04 2229 7210',time:'歇業中', pic:'http://blogwww.s3.amazonaws.com/Blogfiles/1998/465772.jpg'},
    {title:'朴大哥的韓式炸雞',address:'台中市北區三民路三段60號',_type:'韓國餐廳', star:'3.8', cost:'中低價(NT100~199 /人)', phone:'04 2229 6551',time:'三~一 17:00~02:00', pic:'http://pic.pimg.tw/ashinjo/1415083850-3429951509.jpg'},
    {title:'混HUN',address:'台中市北區三民路三段114號',_type:'餐廳', star:'4.0', cost:'中低價(NT100~199 /人)', phone:'04 2223 1080',time:'ㄧ~日 11:30~22:00', pic:'https://farm4.staticflickr.com/3899/15102968170_3db7817757_c.jpg'},
    {title:'宮原眼科',address:'台中市中區中山路20號',_type:'甜點專賣店', star:'4.1', cost:'中低價(NT100~199 /人)', phone:'04 2227 1927',time:'ㄧ~日 10:00~22:00', pic:'https://pic.pimg.tw/standinghere/1443326378-3173397776.jpg'},
    {title:'好迷咖啡',address:'台中市西區台灣大道二段216號',_type:'咖啡館', star:'4.2', cost:'中低價(NT100~199 /人)', phone:'04 2310 1250',time:'ㄧ~六 09:00~20:00', pic:'http://pic.pimg.tw/missieat/1382083234-4089121509_n.jpg'},

  ];

  export default class Location extends React.Component{

    state = {
        promptVisible: false,
        markers : [
            {key:0, latlng: {latitude:24.1465482,longitude:120.6838457} ,title:'偈亭泡菜鍋' ,description:'4.3'},
            {key:1, latlng: {latitude:24.1363892,longitude:120.6873903} ,title:'咖啡鑽' ,description:'3.5'},
            {key:2, latlng: {latitude:24.1477585,longitude:120.6811579} ,title:'朴大哥的韓式炸雞' ,description:'3.8'},
            {key:3, latlng: {latitude:24.1499178,longitude:120.6821093} ,title:'混HUN' ,description:'4.0'},
            {key:4, latlng: {latitude:24.1378452,longitude:120.6812553} ,title:'宮原眼科' ,description:'4.1'},
            {key:5, latlng: {latitude:24.1516749,longitude:120.667193} ,title:'好迷咖啡' ,description:'4.2'},
        ],
    }
    onSearch = (text) => {
        return new Promise((resolve, reject) => {
            console.log('onSearch', text);
            this.setState({promptVisible:true});
            resolve();
        });
    }
    showStoreInfo(e,obj){
        Actions.storeinfo(obj);
    }
    
    render(){
        const hitSlop = {
            top: 15,
            bottom: 15,
            left: 15,
            right: 15,
          }
        return(
            <View style ={styles.container}>
                
                <MapView
                style={styles.map}
                initialRegion={{
                  latitude: 24.1479659,
                  longitude: 120.6713173,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                }}>
                {this.state.markers.map((marker,i) => (
                    <MapView.Marker
                      key={i}
                      coordinate={marker.latlng}
                      title={marker.title}
                      description={marker.description}
                      onCalloutPress={(e,obj)=>{this.showStoreInfo(e,infoData[marker.key])}}
                      
                    />
                  ))}
                </MapView>
                <TouchableOpacity
                    hitSlop = {hitSlop}
                    activeOpacity={0.7}
                    style={styles.mapButton}
                    onPress={this.onSearch}
                >
                <Icon name="search" size={40} color="#00F" />
                    
                </TouchableOpacity>

                <Prompt
                title="Search Location"
                placeholder=""
                defaultValue=""
                visible={ this.state.promptVisible }
                onCancel={ () => this.setState({
                  promptVisible: false,
                }) }
                onSubmit={ (value) => this.setState({
                  promptVisible: false,
                }) }
                />
                
            </View>
        );
    }
  }