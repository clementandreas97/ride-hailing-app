import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { tabBarStyle } from './styles'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { withNavigation } from 'react-navigation';

class TabBarController extends Component {
  render() {
    return (
      <View style={tabBarStyle.tabBar}> 
        <TouchableOpacity style={[tabBarStyle.tabBarContainer]} onPress={() => this.props.navigation.navigate('HomeStack')}>
          <View style={tabBarStyle.tabBarIcon}></View>
          <Text style={tabBarStyle.tabBarTextStyle}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[tabBarStyle.tabBarContainer]} onPress={() => this.props.navigation.navigate('OrderStack')}>
          <View style={tabBarStyle.tabBarIcon}></View>
          <Text style={tabBarStyle.tabBarTextStyle}>Orders</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[tabBarStyle.tabBarContainer]} onPress={() => this.props.navigation.navigate('HelpStack')}>
          <View style={tabBarStyle.tabBarIcon}></View>
          <Text style={tabBarStyle.tabBarTextStyle}>Help</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[tabBarStyle.tabBarContainer]} onPress={() => this.props.navigation.navigate('InboxStack')}>
          <View style={tabBarStyle.tabBarIcon}></View>
          <Text style={tabBarStyle.tabBarTextStyle}>Inbox</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[tabBarStyle.tabBarContainer]} onPress={() => this.props.navigation.navigate('AccountStack')}>
          <View style={tabBarStyle.tabBarIcon}></View>
          <Text style={tabBarStyle.tabBarTextStyle}>Account</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default withNavigation(TabBarController);