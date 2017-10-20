import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import Colors from '../constants/Colors';

import LikeScreen from '../screens/LikeScreen';
import ChatScreen from '../screens/ChatScreen';
import HomeScreen from '../screens/HomeScreen';
import ImageScreen from '../screens/ImageScreen';
import SettingScreen from '../screens/SettingScreen';
import MainActivity from '../screens/MainActivity';
export default TabNavigator(
  {
    LikeScreen: {
      screen: LikeScreen,
    },
    ChatScreen: {
      screen: ChatScreen,
    },
    HomeScreen: {
      screen: HomeScreen,
    },
    ImageScreen: {
      screen: ImageScreen,
    },
    MainActivity: {
      screen: MainActivity,
    },
    SettingScreen: {
      screen: SettingScreen,
    },
    
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'LikeScreen':
            iconName = Platform.OS === 'ios'
              ? `ios-hand${focused ? '' : '-outline'}`
              : 'md-hand';
            break;
          case 'ChatScreen':
            iconName = Platform.OS === 'ios'
              ? `ios-chatbubbles${focused ? '' : '-outline'}`
              : 'md-chatbubbles';
            break;
          case 'HomeScreen':
            iconName = Platform.OS === 'ios'
              ? `ios-home${focused ? '' : '-outline'}`
              : 'md-home';
              break;
          case 'ImageScreen':
             iconName = Platform.OS === 'ios'
              ? `ios-images${focused ? '' : '-outline'}`
              : 'md-images';
              break;
          case 'SettingScreen':
            iconName = Platform.OS === 'ios'
              ? `ios-settings${focused ? '' : '-outline'}`
              : 'md-settings';
               break;
          case 'MainActivity':
            iconName = Platform.OS === 'ios'
              ? `ios-settings${focused ? '' : '-outline'}`
              : 'md-settings';
               break;     
        }
        return (
          <Ionicons
            name={iconName}
            size={28}
            style={{ marginBottom: -3 }}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
        );
      },
      
    }),
    
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: true,
    headerMode : 'none',
  }
);
