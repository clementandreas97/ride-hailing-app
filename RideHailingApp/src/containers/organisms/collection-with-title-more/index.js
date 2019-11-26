import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';
import CollectionCellMV from '../../../components/molecules/collection-cell-mv';

class CollectionViewWithTitleMore extends Component {
  render() {
    return (
      <View style={{marginVertical: 16}}>
        <View style={{marginHorizontal: 16,flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{fontWeight: 'bold', fontSize: 14}}>{this.props.title}</Text>
          <Text style={{fontWeight: 'bold', fontSize: 14, color: 'pink'}}>{this.props.linkTitle}</Text>
        </View>
        <ScrollView horizontal style={{marginTop: 8, paddingBottom: 8, paddingLeft: 16, paddingRight: 16}}>
          {/* Collection Cell 1 */}
          <CollectionCellMV title='Cell Title 1'/>
          {/* Collection Cell 2 */}
          <CollectionCellMV title='Cell Title 2'/>
          {/* Collection Cell 3 */}
          <CollectionCellMV title='Cell Title 3'/>
          {/* Collection Cell 4 */}
          <CollectionCellMV title='Cell Title 4'/>
          {/* Collection Cell 5 */}
          <CollectionCellMV title='Cell Title 5'/>
        </ScrollView>
      </View>
    )
  }
}

export default CollectionViewWithTitleMore;