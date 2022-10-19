/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {FlatList} from 'react-native';

import {StarRating} from './src/components/StarRating';

function App() {
  const movies = [
    {id: '1', name: 'Uma Noite Sem Fim', star: 4},
    {id: '2', name: 'Uma Noite Sem Fim', star: 5.9},
    {id: '3', name: 'Uma Noite Sem Fim', star: 3.9},
    {id: '4', name: 'Uma Noite Sem Fim', star: 6.9},
    {id: '5', name: 'Uma Noite Sem Fim', star: 7.9},
    {id: '6', name: 'Uma Noite Sem Fim', star: 1.9},
    {id: '7', name: 'Uma Noite Sem Fim', star: 3.9},
  ];
  return (
    <FlatList
      data={movies}
      keyExtractor={item => item.id}
      renderItem={({item}) => <StarRating name={item.name} star={item.star} />}
    />
  );
}

export default App;
