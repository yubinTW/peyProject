import React, { Component } from 'react';
import { Router, Scene, ActionConst, Tabs } from 'react-native-router-flux';
import { StyleSheet } from 'react-native';
import Login from '../Components/login';
import Home from '../Components/home';
import TabIcon from '../Components/TabIcon';

import Eater from '../Components/eater';
import Location from '../Components/location';
import Store from '../Components/store';
import Personal from '../Components/personal';

import eaterPersonal1 from '../Components/eaterPersonal1';
import eaterPersonal2 from '../Components/eaterPersonal2';
import eaterPersonal3 from '../Components/eaterPersonal3';
import eaterPersonal4 from '../Components/eaterPersonal4';
import eaterPersonal5 from '../Components/eaterPersonal5';

import Icon from 'react-native-vector-icons/Ionicons';
import StoreInfo from '../Components/storeinfo';

const App = () => {

  return (
    <Router>
    <Scene key="root">
      <Scene ininial key='login' hideNavBar 
        component={Login}  type={ActionConst.RESET}
      />
      <Tabs key="tabbar" hideNavBar tabs tabBarStyle={styles.tabBarStyle} activeBackgroundColor="#ddd">
      <Scene title='店家'>  
        <Scene initial key="key0" hideNavBar 
          name='ios-restaurant'
          icon={TabIcon}
          component = {Store}
        />
      </Scene>
      <Scene title='地點'>  
        <Scene key="key1" hideNavBar 
            name='ios-map'
            icon={TabIcon}
            component={Location}
        />
      </Scene> 
      <Scene title='吃貨'>  
        <Scene key="key2" hideNavBar 
            name='ios-people'
            icon={TabIcon}
            component={Eater}
        />
      </Scene>
      <Scene title='個人'>
        <Scene key="key3" hideNavBar 
          name='ios-person'
          icon={TabIcon}
          component={Personal}
        />
      </Scene>
      </Tabs>
      <Scene>
        <Scene key="key4" icon={TabIcon}
          component={eaterPersonal1}
          hideNavBar
        />
      </Scene>
      <Scene>
        <Scene key="key5" icon={TabIcon}
          component={eaterPersonal2}
          hideNavBar
        />
      </Scene>
      <Scene>
        <Scene key="key6" icon={TabIcon}
          component={eaterPersonal3}
          hideNavBar
        />
      </Scene>
      <Scene>
        <Scene key="key7" icon={TabIcon}
          component={eaterPersonal4}
          hideNavBar
        />
      </Scene>
      <Scene>
        <Scene key="key8"  icon={TabIcon}
          component={eaterPersonal5}
          hideNavBar
        />
      </Scene>
      <Scene key='storeinfo'
        component={StoreInfo}
        hideNavBar={false}
      />
    </Scene>
  </Router>
  );
}


const styles = StyleSheet.create({
    container: {
      flex: 1, backgroundColor: "transparent", justifyContent: "center",
      alignItems: "center",
    },
    tabBarStyle: {
      backgroundColor: "#000",
      
    },
    tabBarSelectedItemStyle: {
      backgroundColor: "#ddd",
    },
  });

export default App;