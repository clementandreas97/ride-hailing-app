import React from 'react';
import {Text, View} from 'react-native';

// TODO: Add the actual image
const CollectionCellMV = (props) => {
  return (
    <View style={{marginRight: 16}}>
      <View style={{backgroundColor: 'pink', height: 100, width: 100, borderRadius: 4, marginBottom: 8}}></View>
      <Text style={{fontSize: 12, fontWeight: 'bold', paddingLeft: 2}}>{props.title}</Text>
    </View>
  );
}

export default CollectionCellMV;