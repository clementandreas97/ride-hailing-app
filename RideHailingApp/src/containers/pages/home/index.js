import React, { Component } from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';

import SeparatorAV from '../../../components/atoms/separator-av';
import ImageTextMV from '../../../components/molecules/image-text-mv';
import InputTextWithIconMV from '../../../components/molecules/input-text-icon-mv';
import BannerTitleSubtitleButton from '../../../containers/organisms/banner-with-title-subtitle-button';
import CardView from '../../organisms/card-view';
import CollectionViewWithTitleMore from '../../organisms/collection-with-title-more';
import DopeSection from '../../organisms/dope-section';
import TabBarController from '../../../containers/organisms/tab-bar';

const dopeItems = ['DOPE 1', 'DOPE 2', 'DOPE 3', 'DOPE 4', 'DOPE 5', 'DOPE 6', 'DOPE 7', 'DOPE 8']

class Home extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        {/* SearchBar Section with NavBar Margin Handling */}
        <InputTextWithIconMV placeholder='Search Here!'/>
        <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
          {/* Header Section */}
          <View style={{marginHorizontal: 16, marginTop: 8}}>
            {/* Upper Header Section */}
            <View style={{borderTopLeftRadius: 4, borderTopRightRadius: 4, backgroundColor: '#2C5FB8', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 16, alignItems: 'center', paddingVertical: 16}}>
              <View style={{width: 72, height: 32, backgroundColor: 'pink'}}></View>
              <Text style={{fontWeight: 'bold', fontSize: 16, color: 'white'}}>Rp. 50.000</Text>
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
          <DopeSection dopeItems={dopeItems}/>
          {/* Separator */}
          <SeparatorAV customHeight={16} customMarginTop={16}/>
          {/* Banner Section */}
          {/* paddingBottom to add Bottom Border */}
          <BannerTitleSubtitleButton title='Banner Title' subtitle='Banner Subtitle' buttonTitle='Banner Button'/>
          {/* Card View */}
          <CardView title='Card Title' subtitle='Card Subtitle' buttonTitle='Card Button'/>
          {/* Horizontal Collection */}
          <CollectionViewWithTitleMore title='Collection Title' linkTitle='More'/>
        </ScrollView>
        {/* TabBar Section */}
        <TabBarController onPress={() => this.props.navigation.navigate('Account')}/>
      </SafeAreaView>
    );
  }
}

export default Home;