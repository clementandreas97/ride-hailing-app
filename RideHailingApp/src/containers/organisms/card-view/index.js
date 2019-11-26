import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import SmallButtonAV from '../../../components/atoms/small-button-av';

class CardView extends Component {
  render() {
    return(
      <TouchableOpacity style={{flex: 1, backgroundColor: 'white', marginHorizontal: 16, marginVertical: 16}}>
          {/* Card Container */}
          <View style={{backgroundColor: 'white', height: 200}}>
            {/* Upper Card Section */}
            <View style={{backgroundColor: 'pink', height: '70%', borderTopLeftRadius: 16, borderTopRightRadius: 16, borderLeftColor: '#F2F2F4', borderLeftWidth: 2, borderRightColor: '#F2F2F4', borderRightWidth: 2}}></View>
            {/* Lower Card Section */}
            <View style={{position: 'relative', backgroundColor: 'white', height: '30%', borderBottomLeftRadius: 16, borderBottomRightRadius: 16, borderBottomColor: '#F2F2F4', borderBottomWidth: 2, borderLeftColor: '#F2F2F4', borderLeftWidth: 2, borderRightColor: '#F2F2F4', borderRightWidth: 2, paddingVertical: 8, paddingHorizontal: 8}}>
              <Text style={{fontWeight: 'bold', fontSize: 12}}>{this.props.title}</Text>
              <Text style={{fontSize: 12, marginTop: 2}}>{this.props.subtitle}</Text>
              {/* Button */}
              <View style={{alignSelf: 'flex-end', position: 'absolute', right: 12, bottom: 12}}>
                <SmallButtonAV buttonTitle={this.props.buttonTitle}/>
              </View>
            </View>
          </View>
        </TouchableOpacity>
    )
  }
}

export default CardView;