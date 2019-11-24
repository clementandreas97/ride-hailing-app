import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: 'pink'}}></View>
      <View style={styles.tabBar}> 
        <View style={[styles.tabBarContainer]}>
          <View style={styles.tabBarIcon}></View>
          <Text style={styles.tabBarTextStyle}>Home</Text>
        </View>
        <View style={[styles.tabBarContainer]}>
          <View style={styles.tabBarIcon}></View>
          <Text style={styles.tabBarTextStyle}>Orders</Text>
        </View>
        <View style={[styles.tabBarContainer]}>
          <View style={styles.tabBarIcon}></View>
          <Text style={styles.tabBarTextStyle}>Help</Text>
        </View>
        <View style={[styles.tabBarContainer]}>
          <View style={styles.tabBarIcon}></View>
          <Text style={styles.tabBarTextStyle}>Inbox</Text>
        </View>
        <View style={[styles.tabBarContainer]}>
          <View style={styles.tabBarIcon}></View>
          <Text style={styles.tabBarTextStyle}>Account</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center'
  },
  tabBar: {
    height: 68,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  tabBarContainer: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'flex-start',
    paddingTop: 8
  },
  tabBarTextStyle: {
    fontSize: 10,
    color: '#545454'
  },
  tabBarIcon: {
    width: 26,
    height: 26,
    backgroundColor: 'white'
  }
});
