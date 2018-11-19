

import React, {Component} from 'react';
import {Platform, StyleSheet, ListView, Text} from 'react-native';
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

    this.ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })

    const availableColors = ['red', 'green', 'yellow', 'salmon', 'pink', '#0000FF', 'rgba(255,0,255,.9)', 'brown', 'orange', 'grey']

    this.state = {
      backgroundColor: 'blue',
      availableColors,
      dataSource: this.ds.cloneWithRows(availableColors)
    }
    this.changeColor = this.changeColor.bind(this)
  }



  changeColor(backgroundColor) {
    this.setState({ backgroundColor: backgroundColor })
  }

  render() {
    const {backgroundColor} = this.state
    return (
      <ListView style={[styles.container, {backgroundColor}]}
        dataSource={this.state.dataSource}
        renderRow={(color) => (
          <ColorButton backgroundColor={color}
            onSelect={(color) => this.changeColor(color)}/>
        )}
        renderHeader={() => (
          <Text style={styles.header}>Color List</Text>
        )}>
      </ListView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: 'lightgrey',
    paddingTop: 30,
    padding: 10,
    fontSize: 30,
    textAlign: 'center',
  }
});
