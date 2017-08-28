import React from 'react';
import { AppRegistry, View, Text, StyleSheet, Button } from 'react-native';
import Room from '../components/Room';

export default class GameBox extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      allCards: [],
      newDeck: [],
      focusCard: null
    };
  }

  componentDidMount(){
    const url = "http://192.168.111.159:3000/api/cards";
    const request = new XMLHttpRequest();
    request.open('HEAD', url, true);
    request.onreadystatechange = () => {
      if (request.readyState === request.DONE) {
        if (request.status === 200) {
          console.warn('onreadystatechange: success');
          const jsonString = request.responseText;
          const data = JSON.parse(jsonString);
          console.log(data);
          this.setState({
            allCards: data,
            focusCard: data[0]
          })
        } else {
          console.warn('onreadystatechange: error');
          console.log(request.responseText)
        }
      }
    };
    request.send();
  }

  setFocusCard(card){
    this.setState({
      focusCard: card
    });
  }

  createDeck(cards){
    for (let i = 0; i < cards.length; i++) {
      let shuffle = this.shuffleCards(i);
      newDeck.push(shuffle[0]);
    }
  }

  shuffleCards(cards){
    // Fisher–Yates shuffle
    let counter = cards.length;
    while (cards.length > 0) {
      let index = Math.floor(Math.random() * counter);
      counter--;
      let temp = cards[counter];
      cards[counter] = cards[index];
      cards[index] = temp;
    }
    return cards;
  }

  clickHandler() {

  }

  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.text}>Card: {this.state.data}</Text>
      <View>
      <Room card={this.state.focusCard} />
      </View>
      <Button style={styles.button} title="Add a room to Dungeon" onPress={this.clickHandler.bind(this)}/>
      </View>
      )
  }
}

const styles = StyleSheet.create({
  container: {

  },
  text: {
    fontSize: 20,
    color: 'white',
  },
  button: {
    backgroundColor: 'white'
  }
})