import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import TabBarController from '../../organisms/tab-bar';

const Account = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, marginVertical: 16, marginHorizontal: 16}}>
        <Text>Account Page</Text>
      </View>
      <TabBarController />
    </SafeAreaView>
  )
}

export default Account;