import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Card from './Card'

const CategoryItem = ({category}) => {
  return (
    <Card>
      <Text>{category}</Text>
    </Card>
  )
}

export default CategoryItem

const styles = StyleSheet.create({})