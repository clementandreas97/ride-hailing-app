import React from 'react';
import { Button, SafeAreaView, StyleSheet, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import DopeMV from './src/components/molecules/dope-mv';
import ImageTextMV from './src/components/molecules/image-text-mv';
import InputTextWithIconMV from './src/components/molecules/input-text-icon-mv';
import SeparatorAV from './src/components/atoms/separator-av';
import CollectionViewWithTitleMore from './src/containers/organisms/collection-with-title-more';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* SearchBar Section with NavBar Margin Handling */}
      <InputTextWithIconMV placeholder='Search Here!'/>
      <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
        {/* Header Section */}
        <View style={{marginHorizontal: 16, marginTop: 8}}>
          {/* Upper Header Section */}
          <View style={{borderTopLeftRadius: 4, borderTopRightRadius: 4, backgroundColor: '#2C5FB8', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 16, alignItems: 'center', paddingVertical: 16}}>
            <View style={{width: 72, height: 32, backgroundColor: 'pink'}}>

            </View>
            <Text style={{fontWeight: 'bold', fontSize: 16, color: 'white'}}>
            Rp. 50.000
            </Text>
          </View>
          {/* Lower Header Section */}
          <View style={{borderBottomLeftRadius: 4, borderBottomRightRadius: 4, backgroundColor: '#2F65BD', flexDirection: 'row', justifyContent: 'space-around', paddingTop: 20, paddingBottom: 12}}>
            <ImageTextMV title='Header Menu 1'/>
            <ImageTextMV title='Header Menu 2'/>
            <ImageTextMV title='Header Menu 3'/>
            <ImageTextMV title='Header Menu 4'/>
          </View>
        </View>
        {/* Main DOPE Section */}
        <View style={{width: '100%', flexDirection: 'row', flexWrap: 'wrap', marginTop: 16, paddingHorizontal: 0, justifyContent: 'space-around'}}>
          <View style={{justifyContent: 'space-around', flexDirection: 'row', width: '100%', flexWrap: 'wrap'}}>
            <DopeMV title='DOPE 1'/>
            <DopeMV title='DOPE 2'/>
            <DopeMV title='DOPE 3'/>
            <DopeMV title='DOPE 4'/>
            <DopeMV title='DOPE 5'/>
            <DopeMV title='DOPE 6'/>
            <DopeMV title='DOPE 7'/>
            <DopeMV title='DOPE 8'/>
          </View>
        </View>
        {/* Separator */}
        <SeparatorAV customHeight={16} customMarginTop={16}/>
        {/* Banner Section */}
        {/* paddingBottom to add Bottom Border */}
        <View style={{flex: 1, paddingHorizontal: 16, marginTop: 16, borderBottomColor: '#F2F2F4', borderBottomWidth: 2, paddingBottom: 16}}>
          {/* Image Section */}
          <View style={{backgroundColor: 'pink', height: 200, borderRadius: 16, width: '100%'}}>
            <View style={{top: 16, left: 16, width: 60, height: 16, backgroundColor: 'white'}}></View>
          </View>
          <Text style={{marginTop: 8, fontWeight: 'bold', fontSize: 16}}>Banner Title</Text>
          <Text style={{marginTop: 4, fontSize: 14, color: '#7A7A7A'}}>Banner Subtitle</Text>
          {/* Custom Button */}
          <TouchableOpacity style={{backgroundColor: 'pink', borderRadius: 4, paddingHorizontal: 12, paddingVertical: 8, marginTop: 4, alignSelf: 'flex-end'}}>
            <Text style={{fontSize: 12, fontWeight: 'bold', color: 'white', textAlign: 'center'}}>Button</Text>
          </TouchableOpacity>
        </View>
        {/* Card View */}
        <TouchableOpacity style={{flex: 1, backgroundColor: 'white', marginHorizontal: 16, marginVertical: 16}}>
          {/* Card Container */}
          <View style={{backgroundColor: 'white', height: 200}}>
            {/* Upper Card Section */}
            <View style={{backgroundColor: 'pink', height: '70%', borderTopLeftRadius: 16, borderTopRightRadius: 16, borderLeftColor: '#F2F2F4', borderLeftWidth: 2, borderRightColor: '#F2F2F4', borderRightWidth: 2}}></View>
            {/* Lower Card Section */}
            <View style={{position: 'relative', backgroundColor: 'white', height: '30%', borderBottomLeftRadius: 16, borderBottomRightRadius: 16, borderBottomColor: '#F2F2F4', borderBottomWidth: 2, borderLeftColor: '#F2F2F4', borderLeftWidth: 2, borderRightColor: '#F2F2F4', borderRightWidth: 2, paddingVertical: 8, paddingHorizontal: 8}}>
              <Text style={{fontWeight: 'bold', fontSize: 12}}>Card Title</Text>
              <Text style={{fontSize: 12, marginTop: 2}}>Card Subtitle</Text>
              {/* Button */}
              <TouchableOpacity style={{backgroundColor: 'pink', borderRadius: 4, paddingHorizontal: 8, paddingVertical: 4, marginTop: 4, alignSelf: 'flex-end', position: 'absolute', right: 12, bottom: 12}}>
                <Text style={{fontSize: 10, fontWeight: 'bold', color: 'white', textAlign: 'center'}}>Button</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
        {/* Horizontal Collection */}
        <CollectionViewWithTitleMore title='Collection Title' linkTitle='More'/>
      </ScrollView>
      {/* TabBar Section */}
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
    </SafeAreaView>
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
    height: 48,
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
    backgroundColor: 'pink'
  }
});
