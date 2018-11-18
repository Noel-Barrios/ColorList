

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableHighlight} from 'react-native';

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
      <View style={[styles.container, {backgroundColor}]}>

        <TouchableHighlight style={styles.button}
        onPress={() => this.changeColor('yellow')}
        underlayColor="orange">

          <View style={styles.row}>
            <View style={[styles.sample, {backgroundColor: 'yellow'}]} />
            <Text style={styles.text}>Yellow</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  button: {
    margin: 10,
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
    alignSelf: 'stretch',
    backgroundColor: 'rgba(255,255,255,.8)',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sample: {
    height: 20,
    width: 20,
    borderRadius: 10,
    margin: 5,
    backgroundColor: 'white',
  },
  text: {
    fontSize: 30,
    margin: 5,
  },
});
