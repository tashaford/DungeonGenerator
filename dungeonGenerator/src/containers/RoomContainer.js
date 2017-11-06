import React from 'react';
import { AppRegistry, View, StyleSheet, Button, Text, Image } from 'react-native';
import Room from '../components/Room';
import RoomList from '../components/RoomList';

export default class GameBox extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      allCards: [],
      newDeck: [],
      firstRoom: null,
      focusRooms: [],
      entrance: null,
      allEntrances: []
    };
  }

  componentDidMount(){
    const url = "http://192.168.1.106:3000/api/cards";
    const request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.onreadystatechange = () => {
      if (request.readyState === request.DONE) {
        if (request.status === 200) {
          const jsonString = request.responseText;
          const data = JSON.parse(jsonString);
          this.setState({
            allCards: data
          }, function(){
            this.createDeck(this.state.allCards, () => {
            });
          }) 
        } else {
          console.log('onreadystatechange: error');
          console.log(request.responseText)
        }
      }
    };
    request.send();
  }

  setFocusRooms(cards, callback){
    var card = cards[0]
    var newRooms = this.state.focusRooms
    newRooms.push(card)
    cards.splice(0,1);
    this.setState({
      focusRooms: newRooms
    }, callback);
  }

  randomDoorEntrance(choices, callback) {
    this.shuffleCards(choices);
    var chosen = this.state.allEntrances;
    chosen.push(choices[0])
    this.setState({
      allEntrances: chosen
    }, callback);
  }

  createDeck(decks, callback){
    var newDeck = [];
    for (var deck of decks) {
      let shuffle = this.shuffleCards(deck);
      newDeck.push(shuffle[0]);
    }
    this.shuffleCards(newDeck);
    entrance = this.shuffleCards(newDeck[0].greenArrows);
    this.setState({
      newDeck: newDeck,
      firstRoom: newDeck[0],
      entrance: entrance[0]
    }, callback);
    newDeck.splice(0, 1);
  }

  shuffleCards(cards){
    // Fisher–Yates shuffle    
    var counter = cards.length;
    while (counter > 0) {
      let index = Math.floor(Math.random() * counter);
      counter--;
      let temp = cards[counter];
      cards[counter] = cards[index];
      cards[index] = temp;
    }
    return cards;
  }

  clickHandler() {
    this.setFocusRooms(this.state.newDeck, () => {});
    var rooms = this.state.focusRooms;
    this.randomDoorEntrance(rooms[rooms.length - 1].greenArrows, () => {});
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
        <Text style={styles.topText}>Key for cards</Text>
          
          <Text style={styles.text}>{<Image source={require('../../assets/images/barrel.png')} style={{width: 50, height: 50, margin: 5}}></Image>}  barrel</Text>
          <Text style={styles.text}>{<Image source={require('../../assets/images/enemy.png')} style={{width: 50, height: 50, margin: 5}}></Image>}  enemy placements</Text>
          <Text style={styles.text}>{<Image source={require('../../assets/images/treasure.png')} style={{width: 50, height: 50, margin: 5}}></Image>}  treasure chests</Text>
          <Text style={styles.text}>{<Image source={require('../../assets/images/table.png')} style={{width: 100, height: 45, margin: 5}}></Image>}  tables</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button color='#800000' title="Add a room to your dungeon" onPress={this.clickHandler.bind(this)} />
        </View>
          <View>
            <Room card={this.state.firstRoom} entrance={this.state.entrance} number="1" />
            <RoomList rooms={this.state.focusRooms} allEntrances={this.state.allEntrances} />
          </View>
      </View>
      )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  topText: {
    fontSize: 25,
    color: '#800000',
    textAlign: 'left',
    marginHorizontal: 40,
    textDecorationLine: 'underline',
  },
  text: {
    fontSize: 20,
    color: '#800000',
    textAlign: 'left',
    marginHorizontal: 40,
    fontStyle: 'italic',
  },
  buttonContainer: {
    borderWidth: 3,
    borderColor: '#800000',
    borderRadius: 4,
    marginBottom: 15,
    marginTop: 15,
  }
})