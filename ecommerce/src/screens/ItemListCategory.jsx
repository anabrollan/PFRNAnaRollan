import { StyleSheet, Text, View, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import { colors } from '../global/color';
import products from '../data/products.json';
import ProductItem from '../components/ProductItem';
import Search from '../components/Search';

const ItemListCategory = ({ categorySelected = "", setCategorySelected = () => {} }) => {
  const [keyWord, setKeyWord] = useState("");
  const [error, setError] = useState("");
  const [productsFiltered, setProductsFiltered] = useState([]);

  useEffect(() => {
    const regex = /\d/;
    if (regex.test(keyWord)) {
      setError("Por favor, introduce solamente letras en la búsqueda");
      return;
    }
    setError(""); // Limpiar el error si la búsqueda es válida

    const productsPrefiltered = products.filter(product => product.category === categorySelected);
    const productsFilter = productsPrefiltered.filter(product =>
      product.title.toLowerCase().includes(keyWord.toLowerCase())
    );

    setProductsFiltered(productsFilter);
  }, [keyWord, categorySelected]);

  return (
    <View style={styles.flatListContainer}>
      <Search error={error} onSearch={setKeyWord} goBack={() => setCategorySelected("")} />
      <FlatList
        data={productsFiltered}
        renderItem={({ item }) => <ProductItem product={item} />}
        keyExtractor={(product) => product.id.toString()}
      />
    </View>
  );
};

export default ItemListCategory;

const styles = StyleSheet.create({
  flatListContainer: {
    width: "100%",
    backgroundColor: colors.purple,
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
});
