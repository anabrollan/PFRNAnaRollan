import { StyleSheet, Text, View, FlatList } from 'react-native';
import React, { useState } from 'react';
import categories from '../data/categories.json';
import { colors } from '../global/color';
import CategoryItem from '../components/CategoryItem';
import Search from '../components/Search';

const Home = ({ setCategorySelected }) => {
  const [searchKeyword, setSearchKeyword] = useState('');

  const filteredCategories = categories
    .sort()
    .filter(category => category.toLowerCase().includes(searchKeyword.toLowerCase()));

  return (
    <View style={styles.container}>
      <Search onSearch={setSearchKeyword} />

      <FlatList
        showsVerticalScrollIndicator={false}
        data={filteredCategories}
        renderItem={({ item }) => (
          <CategoryItem category={item} selectedCategory={setCategorySelected} />
        )}
        keyExtractor={(item) => item}
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
