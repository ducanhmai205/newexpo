import React from 'react';
import { Button, Image, View, TouchableOpacity } from 'react-native';
import { ImagePicker } from 'expo';

export default class ImageScreen extends React.Component {
  static navigationOptions  = () => ({
    title: 'ImagePicker',
    headerTitleStyle: { color: '#ecf0f1' },
    headerStyle: {
      backgroundColor: '#f39c12'
        },  
        });
     
  state = {
    image: null,
  };

  render() {
    let { image } = this.state;

    return (
      <TouchableOpacity style={{width: 100, height: 100, alignItems: 'center', justifyContent: 'center' }}>

      <View style={{flex: 1,}}>
        <Button
          title="Pick an image from camera roll"
          onPress={this._pickImage}
        />
        {image &&
          <Image source={{ uri: '../assests/images/robot-dev.png' }} style={{ width: 200, height: 200 }} />}
      </View>
      </TouchableOpacity>
    );
  }

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };
}