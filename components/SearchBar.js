import React, { Component } from 'react';
import { Container, Header, Item, Input, Icon, Button, Text } from 'native-base';
export default class SearchBar extends Component {
  render() {
    return (
      <Container>
        <Header searchBar >
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
            <Icon name="ios-people" />
          </Item>
          
        </Header>
      </Container>
    );
  }
}