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
  } from 'react-native';
  import { Actions } from 'react-native-router-flux';
  import  Search  from 'react-native-search-box';

  export default class Store extends React.Component{

    constructor(props) {
       super(props);   
    }

    personal = ()=>{
        Actions.location();
        
    }

    render(){
        return(
            <View>
                <Search 
                />
                
                <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
                    <View style={styles.imageStyle}>
                        <Image
                            style={styles.imageSize}
                            source={{ uri: 'https://farm6.staticflickr.com/5822/23700319152_36dc03e944_b.jpg' }}
                        />
                    </View>
                    <View style={styles.textVirtual}>
                        <Text style={styles.titleText}>偈亭泡菜鍋</Text>
                        <Text style={styles.baseText}>台中市北區雙十路一段89號</Text>   
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
                    <View style={styles.imageStyle}>
                        <Image
                            style={styles.imageSize}
                            source={{ uri:'http://pic.pimg.tw/mphoto/1344171111-2474500838_l.jpg' }}
                        />
                    </View>
                    <View style={styles.textVirtual}>
                        <Text style={styles.titleText}>咖啡鑽</Text>
                        <Text style={styles.baseText}>台中市東區振興路2-6號</Text>   
                    </View>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
                    <View style={styles.imageStyle}>
                        <Image
                            style={styles.imageSize}
                            source={{ uri:'http://iphoto.ipeen.com.tw/photo/comment/565344/1005364/cm20160313___87484f81eea8b19b4ae05f25e0d9e645468.jpg' }}
                        />
                    </View>
                    <View style={styles.textVirtual}>
                        <Text style={styles.titleText}>朴大哥的韓式炸雞</Text>
                        <Text style={styles.baseText}>台中市北區三民路三段60號</Text>   
                    </View>
                </TouchableOpacity>    

                <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
                    <View style={styles.imageStyle}>
                        <Image
                            style={styles.imageSize}
                            source={{ uri:'https://pic.pimg.tw/aboa1110/1459422413-218071251_n.jpg?v=1459422414'}}
                        />
                    </View>
                    <View style={styles.textVirtual}>
                        <Text style={styles.titleText}>混HUN</Text>
                        <Text style={styles.baseText}>台中市北區三民路三段114號</Text>   
                    </View>
                </TouchableOpacity>  

                <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
                    <View style={styles.imageStyle}>
                        <Image
                            style={styles.imageSize}
                            source={{ uri:'http://pic.pimg.tw/barbieedoll/1390649733-2228895926_n.jpg'}}
                        />
                    </View>
                    <View style={styles.textVirtual}>
                        <Text style={styles.titleText}>宮原眼科</Text>
                        <Text style={styles.baseText}>台中市中區中山路20號</Text>   
                    </View>
                </TouchableOpacity>
                
                
                
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