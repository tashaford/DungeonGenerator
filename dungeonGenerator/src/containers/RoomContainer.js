import React from 'react';
import { AppRegistry, View, Text, StyleSheet } from 'react-native';
import Room from '../components/Room';


export default class GameBox extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      allCards: [],
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
          allCards: data,
          focusCard: data[0]
        });
        console.log({this.props.allCards});ß

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
        <Room card={this.state.focusCard} />
      </View>
      )
  }
}

const styles = StyleSheet.create({
  container: {

  }
})