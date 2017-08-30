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
import eaterPersonall from '../Components/eaterPersonal1';
import eaterPersonal2 from '../Components/eaterPersonal2';
import eaterPersonal3 from '../Components/eaterPersonal3';
import eaterPersonal4 from '../Components/eaterPersonal4';
import eaterPersonal5 from '../Components/eaterPersonal5';


const App = () => {

  return (
    <Router>
    <Scene key="root">
      <Scene ininial key='login' hideNavBar 
        component={Login}  type={ActionConst.RESET}
      />
      <Tabs key="tabbar" hideNavBar tabs tabBarStyle={styles.tabBarStyle} activeBackgroundColor="#ddd">
      <Scene title='店家'>  
        <Scene initial key="key0" hideNavBar icon={TabIcon}
            component = {Store}
        />
      </Scene>
      <Scene title='地點'>  
        <Scene key="key1"hideNavBar icon={TabIcon}
            component={Location}
        />
      </Scene> 
      <Scene title='吃貨'>  
        <Scene key="key2"hideNavBar icon={TabIcon}
            component={Eater}
        />
      </Scene>
      <Scene title='個人'>
        <Scene key="key3" hideNavBar icon={TabIcon}
          component={Personal}
        />
      </Scene>
      </Tabs>
      <Scene title='吃貨個人地圖'>
        <Scene key="key4" hideNavBar icon={TabIcon}
          component={eaterPersonall}
        />
      </Scene>
      <Scene title='吃貨個人地圖'>
        <Scene key="key5" hideNavBar icon={TabIcon}
          component={eaterPersonal2}
        />
      </Scene>
      <Scene title='吃貨個人地圖'>
        <Scene key="key6" hideNavBar icon={TabIcon}
          component={eaterPersonal3}
        />
      </Scene>
      <Scene title='吃貨個人地圖'>
        <Scene key="key7" hideNavBar icon={TabIcon}
          component={eaterPersonal4}
        />
      </Scene>
      <Scene title='吃貨個人地圖'>
        <Scene key="key8" hideNavBar icon={TabIcon}
          component={eaterPersonal5}
        />
      </Scene>
      
        
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