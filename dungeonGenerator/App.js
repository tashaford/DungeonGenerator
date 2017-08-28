import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RoomContainer from './src/containers/RoomContainer'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <Text style={styles.text}>Dungeon Generator</Text>
          <RoomContainer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f2b8b8',
    // justifyContent: 'center',
  },
  text: {
    marginTop: 30,
    marginBottom: 2,
    fontSize: 30,
    color: 'white',
  }
});
