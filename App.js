
import React, { Component } from 'react';
 
import { StyleSheet,  View, Image, Button, Platform } from 'react-native';
 
import { captureScreen } from "react-native-view-shot";
 
export default class App extends Component {
 
  constructor(){
 
    super();
 
    this.state={
 
      imageURI : 'https://s.tmocache.com/images/png/products/phones/Samsung-Galaxy-J3-Prime/250x270_1.png'
 
    }
  }
 
  captureScreenFunction=()=>{
 
    captureScreen({
      format: "jpg",
      quality: 0.8
    })
    .then(
      uri => this.setState({ imageURI : uri }),
      error => console.error("Oops, Something Went Wrong", error)
    );
 
  }
 
  render() {
 
    return (
 
      <View style={styles.MainContainer}>
       
       <Button title="Capture Device Screenshot" onPress={this.captureScreenFunction} />
 
       <Image source={{uri : this.state.imageURI}} style={{width: 200, height: 300, resizeMode: 'contain', marginTop: 5}} />
        
      </View>
    
  );
  }
}
 
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#000',
    marginTop: (Platform.OS) === 'ios' ? 20 : 0,
  }
});
