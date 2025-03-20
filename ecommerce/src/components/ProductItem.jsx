import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import Card from './Card'; 
import { colors } from '../global/color';

const ProductItem = ({ product }) => {
  return (
      <Card style={styles.card}>
        <Text style={styles.text}>{product.title}</Text>
        <Image
          resizeMode="cover"
          style={styles.image}
          source={{ uri: product.images[0] }}
        />
      </Card>
  )
}

export default ProductItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: 10,
  },
  card: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    elevation: 5,
    flexDirection: "row",
    height: 150,
    width: 250,
    justifyContent: "space-between",
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 10,
  },
});
