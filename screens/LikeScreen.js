import React from 'react';

import { StyleSheet, Text, View } from 'react-native';
import { Container, Header, Content, Tab, Tabs } from 'native-base';
export default class LikeScreen extends React.Component {
  static navigationOptions = {
    title: 'Like',
    headerTitleStyle: { color: '#ecf0f1' },
    headerStyle: {
      backgroundColor: '#f39c12'
  			},	
  	 
  };

  render() {
    return (
      <Container>
        
        <Tabs initialPage={1}>
          <Tab heading="Chat">
            
          </Tab>
          <Tab heading="Recent Chat">
          
          </Tab>
        </Tabs>
        </Container>
          );
  }
}
