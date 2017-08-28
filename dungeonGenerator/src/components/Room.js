import React from 'react';
import { AppRegistry, View, Text, StyleSheet, Image } from 'react-native';

class Room extends React.Component {

  render(){
    if(!this.props.card){
      return null;
    }

    console.log(this.props.card.image);

    return (
      <View style={styles.container}>
        <Text style={styles.text}>Dungeon Room</Text>
        <Text style={styles.text}>Card is {this.props.card.name} </Text>
        <Image source={{uri: this.props.card.image}} style={{height: 370, width: 320}} resizeMode="contain"/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'space-around',
  },
  text: {
    fontSize: 15,
  }
})

export default Room