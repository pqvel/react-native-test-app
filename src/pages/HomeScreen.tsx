import React from 'react';
import {SafeAreaView} from 'react-native';
import CardList from '../components/CardList';

const App: React.FC = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <CardList />
    </SafeAreaView>
  );
};

export default App;
