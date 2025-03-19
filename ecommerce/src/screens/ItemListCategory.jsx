import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { colors } from '../global/color'
import products from '../data/products.json'
import ProductItem from '../components/ProductItem'
import Search from '../components/Search'

const ItemListCategory = () => {
  return (
    <View style={styles.flatListContainer}>
        <Search />
      <FlatList 
      data={products}
      renderItem={({ item }) => <ProductItem product={item}/>}
      keyExtractor={(product)=> product.id}
      />
    </View>
  )
}

export default ItemListCategory

const styles = StyleSheet.create({})