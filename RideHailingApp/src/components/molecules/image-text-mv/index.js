import React from 'react';
import {Text, View} from 'react-native';

// TODO: Add the actual Image
const ImageTextMV = (props) => {
  return (
    <View style={{alignItems: 'center'}}>
      <View style={{backgroundColor: 'pink', width: 32, height: 32}}></View>
      <Text style={{marginTop: 8, fontWeight: 'bold', fontSize: 12, color: 'white'}}>
      {props.title}
      </Text>
    </View>
  )
}

export default ImageTextMV;