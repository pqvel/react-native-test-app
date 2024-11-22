import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import Card from './Card.tsx';

type Product = {
  title: string;
  price: string;
  image: string;
};

const products: Product[] = [
  {
    title: 'Товар 1',
    price: '29.99',
    image: 'https://via.placeholder.com/100',
  },
  {
    title: 'Товар 2',
    price: '49.99',
    image: 'https://via.placeholder.com/100',
  },
  {
    title: 'Товар 3',
    price: '19.99',
    image: 'https://via.placeholder.com/100',
  },
  {
    title: 'Товар 4',
    price: '59.99',
    image: 'https://via.placeholder.com/100',
  },
  {
    title: 'Товар 5',
    price: '69.99',
    image: 'https://via.placeholder.com/100',
  },
  {
    title: 'Товар 6',
    price: '79.99',
    image: 'https://via.placeholder.com/100',
  },
];

const CardList: React.FC = () => {
  const renderItem = ({item}: {item: Product}) => {
    return <Card product={item} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderItem}
        numColumns={2}
        contentContainerStyle={styles.list}
        keyExtractor={item => item.title} // Используйте уникальный идентификатор
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  list: {
    gap: 12,
    justifyContent: 'space-between',
  },
});

export default CardList;
