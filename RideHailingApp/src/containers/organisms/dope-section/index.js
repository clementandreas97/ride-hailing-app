import React, { Component } from 'react';
import { View } from 'react-native';
import DopeMV from '../../../components/molecules/dope-mv';

class DopeSection extends Component {
  prepareDope() {
    var dopeViews = this.props.dopeItems.map( (dope) =>
      <DopeMV key={dope} title={dope}/>
    );
    return dopeViews
  }

  render() {
    return (
      <View style={{flexDirection: 'row', flexWrap: 'wrap', marginTop: 16, paddingHorizontal: 0, justifyContent: 'space-around'}}>
        <View style={{justifyContent: 'space-around', flexDirection: 'row', width: '100%', flexWrap: 'wrap'}}>
          {this.prepareDope()}
        </View>
      </View>
    )
  }
}

export default DopeSection;