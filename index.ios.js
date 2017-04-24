/**
 * Sample React Native Map App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, { Component } from 'react';
 import MapView from 'react-native-maps';
 import {
   AppRegistry,
   StyleSheet,
   Text,
   View
 } from 'react-native';

 export default class ReactMap extends Component {
   render() {
     return (
         <MapView
           style={styles.map}
           initialRegion={{
             latitude: 37.78825,
             longitude: -122.4324,
             latitudeDelta: 0.0922,
             longitudeDelta: 0.0421,
           }}
         />
     );
   }
 }

 const styles = StyleSheet.create({
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

AppRegistry.registerComponent('ReactMap', () => ReactMap);
