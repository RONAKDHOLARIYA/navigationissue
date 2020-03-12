import React from 'react';
import {Text, View, FlatList, TouchableOpacity} from 'react-native';

const menu = ({navigation}) => {
  let data = [
    {
      id: 0,
      name: 'item 1',
    },
    {
      id: 1,
      name: 'item 2',
    },
    {
      id: 2,
      name: 'item 3',
    },
    {
      id: 3,
      name: 'item 4',
    },
  ];
  return (
    <FlatList
      data={data}
      keyExtractor={(data, id) => id.toString()}
      ItemSeparatorComponent={() => {
        return <View style={{height: 2, backgroundColor: '#fff'}}></View>;
      }}
      renderItem={({item, index}) => {
        return (
          <TouchableOpacity
            onPress={() => {
              navigation.push('Info', {name: item.name});
            }}
            key={index}
            style={{
              height: 300,
              backgroundColor: 'purple',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 18, fontWeight: 'bold', color: '#fff'}}>
              {item.name}
            </Text>
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default menu;
