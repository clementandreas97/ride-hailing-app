import React from 'react';
import {View, Text} from 'react-native';

// TODO: Add the actual Image
const DopeMV = (props) => {
  return (
    <View style={{width: '25%', alignItems: 'center', marginBottom: 8}}>
      <View style={{width: 50, height: 50, backgroundColor: 'pink', borderRadius: 18, borderWidth: 1, borderColor: '#EFEFEF'}}></View>
      <Text style={{marginTop: 4, fontWeight: 'bold', fontSize: 12, color: '#545454', textAlign: 'center'}}>{props.title}</Text>
    </View>
  )
}

export default DopeMV;