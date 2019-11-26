import React from 'react';
import {View, Text, TextInput} from 'react-native';

// TODO: Add the actual image for Icons
const InputTextWithIconMV = (props) => {
  return (
    <View style={{paddingHorizontal: 16, flexDirection: 'row', marginVertical: 8, alignItems: 'center'}}>
      <View style={{flex: 1, position: 'relative'}}>
        <View style={{backgroundColor: 'pink', width: 16, height: 16, position: 'absolute', top: 12, left: 12}}></View>
        <TextInput placeholder={props.placeholder} style={{paddingLeft: 32, borderWidth: 1, borderColor: '#E8E8E8', borderRadius: 25, height: 40, fontSize: 12}}></TextInput>
      </View>
      <View style={{marginLeft: 16}}>
        <View style={{backgroundColor: 'pink', width: 36, height: 36}}></View>
      </View>
    </View>
  )
}

export default InputTextWithIconMV;