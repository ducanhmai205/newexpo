'use strict';

import React, { Component } from 'react';
import { Ionicons } from '@expo/vector-icons';
import {
  StyleSheet,
  View,
  Text, 
  TouchableOpacity,
  Icon,
  Image
} from 'react-native';
export default class SettingScreen extends React.Component {
  static navigationOptions = {
    title: 'Setting',
    headerTitleStyle: { color: '#ecf0f1' },
    headerStyle: {
      backgroundColor: '#f39c12'
        },  
     
  };

  render() {
    return (
    <View style={styles.container}>
      <View style={styles.baoquanhone}>

        <TouchableOpacity style={styles.WrapOne} >
          <View >
                <Ionicons name="ios-settings" size={35}  />
                    <Text>Setting</Text>
          </View>
        </TouchableOpacity>
       
        <TouchableOpacity style={styles.WrapTwo} >
          <View style={styles.containertwo}>
                <Ionicons name="ios-brush" size={35}  />
                    <Text>Writing</Text>
          </View>
        </TouchableOpacity>
       
        <TouchableOpacity style={styles.WrapThree}>
          <View style={styles.containerthree}>
                <Ionicons name="ios-remove-circle-outline" size={35}  />
                    <Text>Block</Text>
          </View>
        </TouchableOpacity>
         
      </View>
      
      <View style={styles.baoquanhtwo}>
        
        <TouchableOpacity style={styles.WrapFour} >
          <View style={styles.containerfour}>
                <Ionicons name="ios-thumbs-up" size={35}  />
                    <Text>Writing</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.WrapFive} >
          <View style={styles.containerfive}>
                <Ionicons name="ios-paper-outline" size={35}  />
                    <Text>Note</Text>
          </View>
         </TouchableOpacity>
          
        <TouchableOpacity style={styles.WrapSix} >
          <View style={styles.containersix}>
                <Ionicons name="ios-mail" size={35}  />
                    <Text>Mail</Text>
          </View>  
        </TouchableOpacity> 
      </View>
             
      <View style={styles.baoquanhthree}>

        <TouchableOpacity style={styles.WrapSeven} >
          <View style={styles.containersven}>
                <Ionicons name="ios-copy" size={35}  />
                    <Text>Writing</Text>
          </View> 
        </TouchableOpacity>   

        <TouchableOpacity style={styles.WrapEight} >
          <View style={styles.containereight}>
                <Ionicons name="ios-contact" size={35}  />
                    <Text>Contact</Text>
          </View>
        </TouchableOpacity>   
              
          <View style={styles.containernine}></View>
        </View>
               <View style={styles.baoquanhfour}></View>
      </View>

      );
  }
}

const styles = StyleSheet.create({
  container:{
    flexDirection: 'column',
    flex: 1,
 
},
WrapOne:{
  flex: 1,
  backgroundColor:'#ecf0f1',
  justifyContent: 'center',
        alignItems: 'center',
},
WrapTwo:{
  flex: 1,
  backgroundColor:'#bdc3c7',
},
WrapThree:{
  flex: 1,
  backgroundColor:'#ecf0f1',
},
WrapFour:{
  flex: 1,
  backgroundColor:'#bdc3c7',
  justifyContent: 'center',
        alignItems: 'center',
        paddingTop : 20,
},
WrapFive:{
  flex: 1,
  backgroundColor:'#ecf0f1',
  justifyContent: 'center',
        alignItems: 'center',
},
WrapSix:{
  flex: 1,
  backgroundColor:'#bdc3c7',
  justifyContent: 'center',
        alignItems: 'center',
},
WrapSeven:{
  flex: 1,
  backgroundColor:'#ecf0f1',
  justifyContent: 'center',
        alignItems: 'center',
},
WrapEight:{
  flex: 1,
  backgroundColor:'#bdc3c7',
  justifyContent: 'center',
        alignItems: 'center',

},

  containerone:{
    flex: 1,
     backgroundColor:'#ecf0f1',
     justifyContent: 'center',
        alignItems: 'center',
  },
  containertwo:{
  flex: 1,
     backgroundColor:'#bdc3c7',
     justifyContent: 'center',
        alignItems: 'center',
  },
  containerthree:{
   flex: 1,
     backgroundColor:'#ecf0f1',
     justifyContent: 'center',
        alignItems: 'center',
  },
  containerfour:{
   flex: 1,
     backgroundColor:'#bdc3c7',
     justifyContent: 'center',
        alignItems: 'center',
  },
  containerfive:{
    flex: 1,
     backgroundColor:'#ecf0f1',
     justifyContent: 'center',
        alignItems: 'center',
  },
  containersix:{
    flex: 1,
     backgroundColor:'#bdc3c7',
     justifyContent: 'center',
        alignItems: 'center',
  },
  containersven:{
  flex: 1,
     backgroundColor:'#ecf0f1',
     justifyContent: 'center',
        alignItems: 'center',
  },
  containereight:{
  flex: 1,
     backgroundColor:'#bdc3c7',
     justifyContent: 'center',
        alignItems: 'center',
  },
  containernine:{
  flex: 1,
     backgroundColor:'#ecf0f1',
     justifyContent: 'center',
        alignItems: 'center',
  },
  baoquanhone:{
    flex: 1,
     flexDirection: 'row',
     backgroundColor:'#e74c3c',
     
  },
  baoquanhtwo:{
    flex: 1,
    flexDirection: 'row',
     backgroundColor:'#27ae60',
     
  },
  baoquanhthree:{
    flex: 1,
    flexDirection: 'row',
     backgroundColor:'#8e44ad',
  },
  baoquanhfour:{
    flex: 1,
    flexDirection: 'row',
     backgroundColor:'#ecf0f1',
  },

});


