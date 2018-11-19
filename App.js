

import React, {Component} from 'react';
import {Platform, StyleSheet, ScrollView} from 'react-native';
import ColorButton from './components/ColorButton'
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  constructor() {
    super()
    this.state = {
      backgroundColor: 'blue'
    }
    this.changeColor = this.changeColor.bind(this)
  }



  changeColor(backgroundColor) {
    this.setState({ backgroundColor: backgroundColor })
  }

  render() {
    const {backgroundColor} = this.state
    return (
      <ScrollView style={[styles.container, {backgroundColor}]}>
        <ColorButton backgroundColor="red"
          onSelect={(color) => this.changeColor(color)}/>
        <ColorButton backgroundColor="blue"
          onSelect={(color) => this.changeColor(color)}/>
        <ColorButton backgroundColor="green"
          onSelect={(color) => this.changeColor(color)}/>
        <ColorButton backgroundColor="salmon"
          onSelect={(color) => this.changeColor(color)}/>
        <ColorButton backgroundColor="#00FF00"
          onSelect={(color) => this.changeColor(color)}/>
        <ColorButton backgroundColor="rgb(255,0,255)"
          onSelect={(color) => this.changeColor(color)}/>
        <ColorButton backgroundColor="navy"
          onSelect={(color) => this.changeColor(color)}/>
        <ColorButton backgroundColor="brown"
          onSelect={(color) => this.changeColor(color)}/>
        <ColorButton backgroundColor="gray"
          onSelect={(color) => this.changeColor(color)}/>
        <ColorButton backgroundColor="orange"
          onSelect={(color) => this.changeColor(color)}/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
});
