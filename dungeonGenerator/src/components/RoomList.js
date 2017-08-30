import React from 'react';
import { AppRegistry, StyleSheet, View } from 'react-native';
import Room from './Room';

class RoomList extends React.Component {

  render(){
    if(!this.props.rooms){
      return null;
    }
    const options = this.props.rooms.map((room, index) => {
      return <Room value={index} key={index} card={room} entrance={this.props.allEntrances[index]} number={index + 2} />
    })

    return (
      <View style={styles.container}>
        {options}
      </View>
      )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'space-around',
  }
})

export default RoomList