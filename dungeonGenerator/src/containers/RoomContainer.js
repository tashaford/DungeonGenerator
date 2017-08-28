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
    request.open('GET', url, true);
    request.onreadystatechange = () => {
      if (request.readyState === request.DONE) {
        if (request.status === 200) {
          const jsonString = request.responseText;
          const data = JSON.parse(jsonString);
        this.setState({
          allCards: data,
          focusCard: data[0][1]
        }, function(){
          console.log(this.state.allCards);
          console.log(this.state.newDeck);
        }) 
      } else {
        console.log('onreadystatechange: error');
        console.log(request.responseText)
      }
    }
  };
  request.send();
}

newRoom(){
  this.createDeck(this.state.allCards);
  this.setFocusCard(this.state.newDeck);
}

setFocusCard(cards){
  let card = this.shuffleCards(cards)[0];
  this.setState({
    focusCard: card
  });
}

createDeck(decks){
  let newDeck = [];
  for (deck of decks) {
    let shuffle = this.shuffleCards(deck);
    newDeck.push(shuffle[0]);
  }
  this.setState({
    newDeck: newDeck
  });
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
    this.createDeck(this.state.allCards)
    return (
      <View>
      <Button style={styles.button} title="Add a room to Dungeon" onPress={this.clickHandler.bind(this)}/>
      <View>
      <Room card={this.state.focusCard} />
      </View>
      </View>
      )
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'white'
  }
})