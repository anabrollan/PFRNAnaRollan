import { StyleSheet, Text, View, Button, Image, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors } from "../global/color"
import allProducts from "../data/products.json"

const ItemDetail = ({ route, navigation }) => {
  const [product, setProduct] = useState(null)
  const [orientation, setOrientation] = useState("portrait")

  const { productId: idSelected } = route.params

  const { width, height } = Dimensions.get("window")

  useEffect(() => {
    if (width > height) setOrientation("landscape")
    else setOrientation("portrait")
  }, [width, height])

  useEffect(() => {
    const productSelected = allProducts.find(
      (product) => product.id === idSelected
    )
    setProduct(productSelected)
  }, [idSelected])

  return (
    <View>
      <Button onPress={() => navigation.goBack()} title="Back to category" color={colors.medium} titleStyle={{ fontSize: 18, fontWeight: 'bold', color: colors.grey }} />
      {product ? (
        <View
          style={
            orientation === "portrait"
              ? styles.mainContainer
              : styles.mainContainerLandscape
          }
        >
          <Image source={{ uri: product.images[0] }} style={styles.productImage} resizeMode="contain"/>
          <Text style={styles.text}>{product.title}</Text>
          <Text style={styles.text}>{product.description}</Text>
          <Text style={styles.text}>${product.price}</Text>
        </View>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  )
}

export default ItemDetail

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.purple,
  },
  mainContainerLandscape: {
    flex: 1,
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: colors.purple,
  },
  productImage: {
    width: 200,
    height: 200,
  },
  text: {
    color: colors.light,
  }
})
