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

  export default class Location extends React.Component{

    state = {
        promptVisible: false,
        markers : [
            {key:0, latlng: {latitude:24.1478704,longitude:120.6721542} ,title:'王品牛排' ,description:'4.1'},
            {key:1, latlng: {latitude:24.1473907,longitude:120.673168} ,title:'手工巧克力專賣店' ,description:'4.3'},
        ],
    }
    onSearch = (text) => {
        return new Promise((resolve, reject) => {
            console.log('onSearch', text);
            this.setState({promptVisible:true});
            resolve();
        });
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