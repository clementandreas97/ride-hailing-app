import React from 'react';
import { Button, SafeAreaView, StyleSheet, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
        {/* SearchBar Section with NavBar Margin Handling */}
        <View style={{paddingHorizontal: 16, flexDirection: 'row', marginTop: 44, alignItems: 'center'}}>
          <View style={{flex: 1, position: 'relative'}}>
            <View style={{backgroundColor: 'pink', width: 16, height: 16, position: 'absolute', top: 12, left: 12}}></View>
            <TextInput placeholder='Current Text Value' style={{paddingLeft: 32, borderWidth: 1, borderColor: '#E8E8E8', borderRadius: 25, height: 40, fontSize: 12}}></TextInput>
          </View>
          <View style={{marginLeft: 16}}>
            <View style={{backgroundColor: 'pink', width: 36, height: 36}}></View>
          </View>
        </View>
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
            <View style={{alignItems: 'center'}}>
              <View style={{backgroundColor: 'pink', width: 32, height: 32}}></View>
              <Text style={{marginTop: 8, fontWeight: 'bold', fontSize: 12, color: 'white'}}>
                Header Menu 1
              </Text>
            </View>
            <View style={{alignItems: 'center'}}>
              <View style={{backgroundColor: 'pink', width: 32, height: 32}}></View>
              <Text style={{marginTop: 8, fontWeight: 'bold', fontSize: 12, color: 'white'}}>
                Header Menu 2
              </Text>
            </View>
            <View style={{alignItems: 'center'}}>
              <View style={{backgroundColor: 'pink', width: 32, height: 32}}></View>
              <Text style={{marginTop: 8, fontWeight: 'bold', fontSize: 12, color: 'white'}}>
                Header Menu 3
              </Text>
            </View>
            <View style={{alignItems: 'center'}}>
              <View style={{backgroundColor: 'pink', width: 32, height: 32}}></View>
              <Text style={{marginTop: 8, fontWeight: 'bold', fontSize: 12, color: 'white'}}>
                Header Menu 4
              </Text>
            </View>
          </View>
        </View>
        {/* Main DOPE Section */}
        <View style={{width: '100%', flexDirection: 'row', flexWrap: 'wrap', marginTop: 16, paddingHorizontal: 0, justifyContent: 'space-around'}}>
          <View style={{justifyContent: 'space-around', flexDirection: 'row', width: '100%'}}>
            <View style={{width: '25%', alignItems: 'center'}}>
              <View style={{width: 50, height: 50, backgroundColor: 'pink', borderRadius: 18, borderWidth: 1, borderColor: '#EFEFEF'}}></View>
              <Text style={{marginTop: 4, fontWeight: 'bold', fontSize: 12, color: '#545454', textAlign: 'center'}}>DOPE 1</Text>
            </View>
            <View style={{width: '25%', alignItems: 'center'}}>
              <View style={{width: 50, height: 50, backgroundColor: 'pink', borderRadius: 18, borderWidth: 1, borderColor: '#EFEFEF'}}></View>
              <Text style={{marginTop: 4, fontWeight: 'bold', fontSize: 12, color: '#545454', textAlign: 'center'}}>DOPE 2</Text>
            </View>
            <View style={{width: '25%', alignItems: 'center'}}>
              <View style={{width: 50, height: 50, backgroundColor: 'pink', borderRadius: 18, borderWidth: 1, borderColor: '#EFEFEF'}}></View>
              <Text style={{marginTop: 4, fontWeight: 'bold', fontSize: 12, color: '#545454', textAlign: 'center'}}>DOPE 3</Text>
            </View>
            <View style={{width: '25%', alignItems: 'center'}}>
              <View style={{width: 50, height: 50, backgroundColor: 'pink', borderRadius: 18, borderWidth: 1, borderColor: '#EFEFEF'}}></View>
              <Text style={{marginTop: 4, fontWeight: 'bold', fontSize: 12, color: '#545454', textAlign: 'center'}}>DOPE 4</Text>
            </View>
          </View>
          <View style={{justifyContent: 'space-around', flexDirection: 'row', width: '100%', marginTop: 8}}>
            <View style={{width: '25%', alignItems: 'center'}}>
              <View style={{width: 50, height: 50, backgroundColor: 'pink', borderRadius: 18, borderWidth: 1, borderColor: '#EFEFEF'}}></View>
              <Text style={{marginTop: 4, fontWeight: 'bold', fontSize: 12, color: '#545454', textAlign: 'center'}}>DOPE 5</Text>
            </View>
            <View style={{width: '25%', alignItems: 'center'}}>
              <View style={{width: 50, height: 50, backgroundColor: 'pink', borderRadius: 18, borderWidth: 1, borderColor: '#EFEFEF'}}></View>
              <Text style={{marginTop: 4, fontWeight: 'bold', fontSize: 12, color: '#545454', textAlign: 'center'}}>DOPE 6</Text>
            </View>
            <View style={{width: '25%', alignItems: 'center'}}>
              <View style={{width: 50, height: 50, backgroundColor: 'pink', borderRadius: 18, borderWidth: 1, borderColor: '#EFEFEF'}}></View>
              <Text style={{marginTop: 4, fontWeight: 'bold', fontSize: 12, color: '#545454', textAlign: 'center'}}>DOPE 7</Text>
            </View>
            <View style={{width: '25%', alignItems: 'center'}}>
              <View style={{width: 50, height: 50, backgroundColor: 'pink', borderRadius: 18, borderWidth: 1, borderColor: '#EFEFEF'}}></View>
              <Text style={{marginTop: 4, fontWeight: 'bold', fontSize: 12, color: '#545454', textAlign: 'center'}}>DOPE 8</Text>
            </View>
          </View>
        </View>
        {/* Separator */}
        <View style={{height: 16, backgroundColor: '#F2F2F4', marginTop: 16}}></View>
        {/* Banner Section */}
        {/* paddingBottom to add Bototm Border */}
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
        <View style={{marginVertical: 16}}>
          <View style={{marginHorizontal: 16,flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontWeight: 'bold', fontSize: 14}}>Scroller Title</Text>
            <Text style={{fontWeight: 'bold', fontSize: 14, color: 'pink'}}>More</Text>
          </View>
          <ScrollView horizontal style={{marginTop: 8, paddingBottom: 8, paddingHorizontal: 16}}>
            {/* Collection Cell 1 */}
            <View style={{marginRight: 16}}>
              <View style={{backgroundColor: 'pink', height: 100, width: 100, borderRadius: 4, marginBottom: 8}}></View>
              <Text style={{fontSize: 12, fontWeight: 'bold', paddingLeft: 2}}>Cell Text 1</Text>
            </View>
            {/* Collection Cell 2 */}
            <View style={{marginRight: 16}}>
              <View style={{backgroundColor: 'pink', height: 100, width: 100, borderRadius: 4, marginBottom: 8}}></View>
              <Text style={{fontSize: 12, fontWeight: 'bold', paddingLeft: 2}}>Cell Text 2</Text>
            </View>
            {/* Collection Cell 3 */}
            <View style={{marginRight: 16}}>
              <View style={{backgroundColor: 'pink', height: 100, width: 100, borderRadius: 4, marginBottom: 8}}></View>
              <Text style={{fontSize: 12, fontWeight: 'bold', paddingLeft: 2}}>Cell Text 3</Text>
            </View>
            {/* Collection Cell 4 */}
            <View style={{marginRight: 16}}>
              <View style={{backgroundColor: 'pink', height: 100, width: 100, borderRadius: 4, marginBottom: 8}}></View>
              <Text style={{fontSize: 12, fontWeight: 'bold', paddingLeft: 2}}>Cell Text 4</Text>
            </View>
            {/* Collection Cell 5 */}
            <View style={{marginRight: 16}}>
              <View style={{backgroundColor: 'pink', height: 100, width: 100, borderRadius: 4, marginBottom: 8}}></View>
              <Text style={{fontSize: 12, fontWeight: 'bold', paddingLeft: 2}}>Cell Text 5</Text>
            </View>
          </ScrollView>
        </View>
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
