import React, {useState} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import BlueButton from './BlueButton';
import FavouriteButton from './FavouriteButton';

type Product = {
  title: string;
  price: string;
  image: string; // Добавлено поле для изображения
};

type CardProps = {
  product: Product;
};

const Card: React.FC<CardProps> = ({product}) => {
  const [inCart, setInCart] = useState<boolean>(false);

  const handleAddToCart = () => {
    setInCart(true);
    // Здесь можно добавить логику для добавления товара в корзину
  };

  return (
    <View style={styles.card}>
      <Image source={{uri: product.image}} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>${product.price}</Text>
      {/* <Button
        title={inCart ? 'В корзине' : 'В корзину'}
        onPress={handleAddToCart}
        disabled={inCart}
      /> */}
      <View style={styles.buttons}>
        <BlueButton
          title={inCart ? 'В корзине' : 'В корзину'}
          onPress={handleAddToCart}
        />
        <FavouriteButton />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    display: 'flex',
    flexDirection: 'column',
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#fff',
    width: '48%',
    marginRight: 6,
    marginLeft: 6,
  },
  image: {
    width: '100%',
    height: 100,
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    color: '#888',
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row', // Измените на 'row'
    // justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default Card;
