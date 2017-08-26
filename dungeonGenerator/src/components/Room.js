import React from 'react';
import { AppRegistry, View, Text, StyleSheet, Image } from 'react-native';

class Room extends React.Component {

  render(){
    if(!this.props.card){
      return null;
    }

    return (
      <View style={styles.container}>
        <Text>Dungeon Room</Text>
        <Text> {this.props.card.name} </Text>
      </View>
      )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    alignContent: 'space-around'
  },

})

export default Room