import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { tabBarStyle } from './styles'

class TabBarController extends Component {
  render() {
    return (
      <View style={tabBarStyle.tabBar}> 
        <View style={[tabBarStyle.tabBarContainer]}>
          <View style={tabBarStyle.tabBarIcon}></View>
          <Text style={tabBarStyle.tabBarTextStyle}>Home</Text>
        </View>
        <View style={[tabBarStyle.tabBarContainer]}>
          <View style={tabBarStyle.tabBarIcon}></View>
          <Text style={tabBarStyle.tabBarTextStyle}>Orders</Text>
        </View>
        <View style={[tabBarStyle.tabBarContainer]}>
          <View style={tabBarStyle.tabBarIcon}></View>
          <Text style={tabBarStyle.tabBarTextStyle}>Help</Text>
        </View>
        <View style={[tabBarStyle.tabBarContainer]}>
          <View style={tabBarStyle.tabBarIcon}></View>
          <Text style={tabBarStyle.tabBarTextStyle}>Inbox</Text>
        </View>
        <View style={[tabBarStyle.tabBarContainer]}>
          <View style={tabBarStyle.tabBarIcon}></View>
          <Text style={tabBarStyle.tabBarTextStyle}>Account</Text>
        </View>
      </View>
    )
  }
}

export default TabBarController;