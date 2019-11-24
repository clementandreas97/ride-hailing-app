import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        {/* SearchBar Section */}
        <View style={{paddingHorizontal: 16, flexDirection: 'row', marginTop: 68, alignItems: 'center'}}>
          <View style={{flex: 1, position: 'relative'}}>
            <View style={{backgroundColor: 'pink', width: 16, height: 16, position: 'absolute', top: 12, left: 12}}></View>
            <TextInput placeholder='Current Text Value' style={{paddingLeft: 32, borderWidth: 1, borderColor: '#E8E8E8', borderRadius: 25, height: 40, fontSize: 12}}></TextInput>
          </View>
          <View style={{marginLeft: 16}}>
            <View style={{backgroundColor: 'pink', width: 36, height: 36}}></View>
          </View>
        </View>
        {/* Header Section */}
        <View>

        </View>
      </View>
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
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#E8E8E8'
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
