import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { tabBarStyle } from './styles'
import { TouchableOpacity } from 'react-native-gesture-handler';

class TabBarController extends Component {
  render() {
    return (
      <View style={tabBarStyle.tabBar}> 
        <TouchableOpacity style={[tabBarStyle.tabBarContainer]}>
          <View style={tabBarStyle.tabBarIcon}></View>
          <Text style={tabBarStyle.tabBarTextStyle}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[tabBarStyle.tabBarContainer]}>
          <View style={tabBarStyle.tabBarIcon}></View>
          <Text style={tabBarStyle.tabBarTextStyle}>Orders</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[tabBarStyle.tabBarContainer]}>
          <View style={tabBarStyle.tabBarIcon}></View>
          <Text style={tabBarStyle.tabBarTextStyle}>Help</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[tabBarStyle.tabBarContainer]}>
          <View style={tabBarStyle.tabBarIcon}></View>
          <Text style={tabBarStyle.tabBarTextStyle}>Inbox</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[tabBarStyle.tabBarContainer]} onPress={this.props.onPress}>
          <View style={tabBarStyle.tabBarIcon}></View>
          <Text style={tabBarStyle.tabBarTextStyle}>Account</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default TabBarController;