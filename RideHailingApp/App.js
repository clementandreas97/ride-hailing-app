import React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import ImageTextMV from './src/components/molecules/image-text-mv';
import InputTextWithIconMV from './src/components/molecules/input-text-icon-mv';
import SeparatorAV from './src/components/atoms/separator-av';
import CollectionViewWithTitleMore from './src/containers/organisms/collection-with-title-more';
import TabBarController from './src/containers/organisms/tab-bar';
import BannerTitleSubtitleButton from './src/containers/organisms/banner-with-title-subtitle-button';
import CardView from './src/containers/organisms/card-view';
import DopeSection from './src/containers/organisms/dope-section';

const dopeItems = ['DOPE 1', 'DOPE 2', 'DOPE 3', 'DOPE 4', 'DOPE 5', 'DOPE 6', 'DOPE 7', 'DOPE 8']

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* SearchBar Section with NavBar Margin Handling */}
      <InputTextWithIconMV placeholder='Search Here!'/>
      <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
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
      <TabBarController />
    </SafeAreaView>
  );
}
