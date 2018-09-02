/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { connect } from "mobx-react";
import { observer, inject } from "mobx-react";
import { userStore } from "./app/store/UserStore";


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};

@inject(["homeStore"]) // 注入对应的store
@observer // 监听当前组件
class App extends Component<Props> {

  constructor(props){
    super(props)
    this.store = this.props.homeStore
  }

    signin() {
        this.props.navigation.navigate('home')
    }

  render() {

    const {text, num,userInfo} = this.store

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!11111</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <Text>{userStore.text}</Text>
        <Text>{text}</Text>
        <TouchableOpacity onPress={()=>{this.signin()}}>
          <Text>{text}</Text>
        </TouchableOpacity>
          <TouchableOpacity onPress={()=>{this.store.plus()}}>
              <Text>{this.store.num}</Text>
          </TouchableOpacity>
        <Text>{userInfo != null ?userInfo.name:""}</Text>
      </View>
    );
  }
}
export default App
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
