import React from 'react';
import { AppRegistry, View, Text, StyleSheet, Image } from 'react-native';
import { Font } from 'expo';

class Room extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      fontLoaded: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      'acme': require('../../assets/Acme-Regular.ttf')
    });

    this.setState({fontLoaded: true})
  }

  render(){
    if(!this.props.card){
      return null;
    }

    return (
      <Image source={require('../../assets/images/brownBackground.jpeg')} style={styles.container}>
        { this.state.fontLoaded ? <Text style={styles.heading}>Room {this.props.number}</Text> : null }
        { this.state.fontLoaded ? <Text style={styles.text}>*  Card from deck is {this.props.card.name}</Text> : null }
        { this.state.fontLoaded ? <Text style={styles.text}>*  Door to next room is via the green arrows at the {this.props.entrance}, the red arrow for the next room joins here</Text> : null }
        <Image source={{uri: this.props.card.image}} style={{height: 370, width: 300, justifyContent: 'center',
    alignItems: 'center', marginTop: 5, marginBottom: 10}} resizeMode="contain"/>
      </Image>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignContent: 'space-around',
    width: 320,
    height: undefined,
    borderRadius: 10,
    borderWidth: 4,
    borderColor: '#800000',
    marginBottom: 5,
    marginTop: 5,
    backgroundColor: 'transparent'
  },
  heading: {
    fontSize: 25,
    color: 'white',
    fontFamily: 'acme',
    marginHorizontal: 10,
    textDecorationLine: 'underline',
    textShadowColor: '#800000',
    textShadowOffset: {width: 1, height: 2}
  },
  text: {
    fontSize: 20,
    color: 'white',
    fontFamily: 'acme',
    textAlign: 'left',
    marginHorizontal: 10,
  }
})

export default Room