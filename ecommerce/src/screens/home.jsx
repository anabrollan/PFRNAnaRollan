import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-web'
import categories from '../data/categories.json'
import { colors } from '../global/color'

const Home = () => {
  return (
    <View style={styles.flatListContainer}>
      <FlatList
        data={categories.sort()}
        renderItem={({item})=> <Text>{item}</Text>}
        keyExtractor={element => element}
      />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    flatListContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: colors.medium,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 50,
    },
})