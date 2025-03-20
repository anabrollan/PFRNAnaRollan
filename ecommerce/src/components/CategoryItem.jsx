import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Card from './Card'
import { colors } from '../global/color'

const CategoryItem = ({category, selectedCategory = () => {}}) => {
  return (
    <Card>
      <Pressable onPress={() => selectedCategory(category)}>
        <Text style={styles.text}>{category}</Text>
      </Pressable>
    </Card>
  )
}

export default CategoryItem

const styles = StyleSheet.create({
  text: {
    color: colors.light,
    textAlign: 'center',
    fontSize: 25,
  }
})