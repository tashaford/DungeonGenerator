import React from 'react';
import { AppRegistry, View, Text, StyleSheet } from 'react-native';
import Room from '../components/Room';


export default class GameBox extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      cards: [],
      focusCard: null
    };
  }

  componentDidMount(){
    const url = "http://localhost:3000/api/cards";
    const request = new XMLHttpRequest();
    request.open("GET", url);
    request.addEventListener('load', () => {
      if(request.status === 200){
        const jsonString = request.responseText;
        const data = JSON.parse(jsonString);
        this.setState({
          cards: data,
          focusCard: data[0]
        });
      }
    });
    request.send()
  }

  setFocusCard(card){
    this.setState({
      focusCard: card
    });
  }

  render() {
    return (
      <View style={styles.container}>
      <Text>Hello</Text>

      <Room card={this.state.focusCard} />

      </View>
      )
  }
}

const styles = StyleSheet.create({
  container: {

  }
})