import React from 'react';
import { StyleSheet, Text, ScrollView, View } from 'react-native';
import RoomContainer from './src/containers/RoomContainer'
import { Font } from 'expo';

export default class App extends React.Component {

  state = {
    fontLoaded: false
  }

  async componentDidMount() {
    await Font.loadAsync({
      'acme': require('./assets/Acme-Regular.ttf')
    });

    this.setState({fontLoaded: true})
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          { this.state.fontLoaded ? <Text style={styles.text}>Dungeon Generator</Text> : null }
          <RoomContainer />
        </ScrollView>
      </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#e8d8c3',
  },
  text: {
    marginTop: 30,
    marginBottom: 10,
    fontSize: 38,
    fontWeight: 'bold',
    color: '#800000',
    fontFamily: 'acme',
    textAlign: 'center',
    textShadowColor: '#3f0000',
    textShadowOffset: {width: 1, height: 2},
    textDecorationLine: 'underline',
  }
});
