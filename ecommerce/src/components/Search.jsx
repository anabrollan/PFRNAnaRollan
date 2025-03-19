import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { colors } from "../global/color";
import Icon from 'react-native-vector-icons/FontAwesome';

const Search = ({ onSearch = () => {}, error = "", goBack = () => {} }) => {
  const [keyword, setKeyword] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter search"
        value={keyword}
        onChangeText={setKeyword}
      />
      
      <Pressable onPress={() => onSearch(keyword)}>
        <Icon name="search" size={24} color="colors.dark" />
      </Pressable>
      
      <Pressable onPress={() => setKeyword("")}>
        <Icon name="eraser" size={24} color="colors.dark" />
      </Pressable>
      
      <Pressable onPress={goBack}>
        <Icon name="arrow-left" size={24} color="colors.dark" />
      </Pressable>
      
      {error ? <Text>{error}</Text> : null}
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 18,
  },
  input: {
    width: 250,
    padding: 8,
    fontSize: 18,
    backgroundColor: colors.light,
    color: colors.dark,
    borderRadius: 10,
  },
});
