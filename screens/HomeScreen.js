import React from 'react';

import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';
import { StackNavigator } from 'react-navigation';
export default class HomeScreen extends React.Component {
  static navigationOptions  = () => ({
    title: 'Home',
    headerTitleStyle: { color: '#ecf0f1' },
    headerStyle: {
      backgroundColor: '#f39c12'
        },  
     
  });
  render() {
    return (
        <ScrollView style={styles.scrollContainer}>

            <View style={styles.container}>
                <View style={styles.box}><Text>Box1</Text></View>
                <View style={styles.box}><Text>Box2</Text></View>
                <View style={styles.box}><Text>Box3</Text></View>
                <View style={styles.box}><Text>Box4</Text></View>
                <View style={styles.box}><Text>Box5</Text></View>
                <View style={styles.box}><Text>Box6</Text></View>
                <View style={styles.box}><Text>Box7</Text></View>
                <View style={styles.box}><Text>Box8</Text></View>
                <View style={styles.box}><Text>Box9</Text></View>
                <View style={styles.box}><Text>Box10</Text></View>
                <View style={styles.box}><Text>Box10</Text></View>
                <View style={styles.box}><Text>Box10</Text></View>
                <View style={styles.box}><Text>Box10</Text></View>
                <View style={styles.box}><Text>Box10</Text></View>
                <View style={styles.box}><Text>Box10</Text></View>
                <View style={styles.box}><Text>Box10</Text></View>
                <View style={styles.box}><Text>Box10</Text></View>
                <View style={styles.box}><Text>Box10</Text></View>
                <View style={styles.box}><Text>Box10</Text></View>
            </View>



        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({

scrollContainer: {
    flex: 1,
},
container:{
    flex: 1,
    flexDirection:'row',
    flexWrap: 'wrap',
},    

box:{
    margin: 2,
    paddingLeft: 1,
    width: Dimensions.get('window').width /4 -6,
    justifyContent: 'center',
    height: 130,
    alignItems: 'center',
    backgroundColor: '#f1c40f',

},



})