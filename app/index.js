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
        <Scene key="location"hideNavBar icon={TabIcon}
            component={Location}
        />
      </Scene> 
      <Scene title='吃貨'>  
        <Scene key="Eater"hideNavBar icon={TabIcon}
            component={Eater}
        />
      </Scene>
      <Scene title='個人'>
        <Scene key="Personal" hideNavBar icon={TabIcon}
          component={Personal}
        />
      </Scene>
      </Tabs>
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