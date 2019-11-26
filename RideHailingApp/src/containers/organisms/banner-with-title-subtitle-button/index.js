import React, { Component } from 'react';
import { Text, View } from 'react-native';
import ButtonAV from '../../../components/atoms/button-av'

class BannerTitleSubtitleButton extends Component {
  render() {
    // padding bottom to add bottom border
    return (
      <View style={{flex: 1, paddingHorizontal: 16, marginTop: 16, borderBottomColor: '#F2F2F4', borderBottomWidth: 2, paddingBottom: 16}}>
        {/* Image Section */}
        <View style={{backgroundColor: 'pink', height: 200, borderRadius: 16, width: '100%'}}>
          <View style={{top: 16, left: 16, width: 60, height: 16, backgroundColor: 'white'}}></View>
        </View>
          <Text style={{marginTop: 8, fontWeight: 'bold', fontSize: 16}}>{this.props.title}</Text>
          <Text style={{marginTop: 4, fontSize: 14, color: '#7A7A7A'}}>{this.props.subtitle}</Text>
        {/* Custom Button */}
        <View style={{alignSelf: 'flex-end'}}>
          <ButtonAV buttonTitle={this.props.buttonTitle}/>
        </View>
      </View>
    )
  }
}

export default BannerTitleSubtitleButton;