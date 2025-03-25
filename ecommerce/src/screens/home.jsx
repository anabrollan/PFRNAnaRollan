import { StyleSheet, Text, View, FlatList } from 'react-native';
import React, { useState } from 'react';
import categories from '../data/categories.json';
import { colors } from '../global/color';
import CategoryItem from '../components/CategoryItem';
import Search from '../components/Search';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
        <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={element => element}
        data={categories}
        renderItem={({ item }) => 
          <CategoryItem category={item}
        navigation={navigation}/>}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.medium,
    paddingTop: 20,
    paddingHorizontal: 10,
  },
});