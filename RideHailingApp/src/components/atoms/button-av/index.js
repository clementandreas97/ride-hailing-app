import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const SmallButtonAV = (props) => {
  return (
    <TouchableOpacity style={{backgroundColor: 'pink', borderRadius: 4, paddingHorizontal: 12, paddingVertical: 8}}>
      <Text style={{fontSize: 12, fontWeight: 'bold', color: 'white', textAlign: 'center'}}>{props.buttonTitle}</Text>
    </TouchableOpacity>
  )
}

export default SmallButtonAV