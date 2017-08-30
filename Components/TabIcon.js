import React, {
    PropTypes,
  } from 'react';
  import {
    Text,
  } from 'react-native';
  import Icon from 'react-native-vector-icons/Ionicons';
  
  const propTypes = {
    selected: PropTypes.bool,
    title: PropTypes.string,
  };
  
  const TabIcon = (props) => {
    return (
    <Icon name={props.name} size={40} color={props.focused ? 'red' : 'gray'} />
    )
  };
  
  TabIcon.propTypes = propTypes;
  
  export default TabIcon;