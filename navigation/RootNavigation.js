import { Notifications } from 'expo';
import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Text } from 'react-native';
import MainTabNavigator from './MainTabNavigator';


const RootStackNavigator = StackNavigator(
  {
    Main: {
      screen: MainTabNavigator,
    },
  },
  
);

export default class RootNavigator extends React.Component {
  
  render() {
    return <RootStackNavigator />;
  }

  
}
