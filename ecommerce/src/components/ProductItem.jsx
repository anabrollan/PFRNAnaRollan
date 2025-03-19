import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import Card from './Card'; // Asegúrate de importar Card correctamente

const ProductItem = ({ product }) => {
  return (
    <View style={styles.container}> 
      <Card style={styles.card}>
        <Text style={styles.text}>{product.title}</Text>
        <Image
          resizeMode="cover"
          style={styles.image}
          source={{ uri: product.images[0] }}
        />
      </Card>
      <View>
        <Text>ProductItem</Text>
      </View>
    </View>
  );
};

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
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
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
