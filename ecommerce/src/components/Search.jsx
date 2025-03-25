// components/Search.jsx
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { colors } from "../global/color";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'; 
import { faMagnifyingGlass, faXmark, faArrowLeft, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';

const Search = ({ onSearch = () => {}, error = "", goBack = () => {} }) => {
  const [keyword, setKeyword] = useState("");
  const navigation = useNavigation(); 

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter search"
        value={keyword}
        onChangeText={setKeyword}
      />
      
      <Pressable onPress={() => onSearch(keyword)} style={styles.button}>
        <FontAwesomeIcon icon={faMagnifyingGlass} size={20} color={colors.dark} />
      </Pressable>

      <Pressable onPress={() => setKeyword("")} style={styles.button}>
        <FontAwesomeIcon icon={faXmark} size={20} color={colors.dark} />
      </Pressable>

      <Pressable onPress={goBack} style={styles.button}>
        <FontAwesomeIcon icon={faArrowLeft} size={20} color={colors.dark} />
      </Pressable>

      <Pressable onPress={() => navigation.navigate('Checkout')} style={styles.button}>
        <FontAwesomeIcon icon={faShoppingCart} size={20} color={colors.dark} />
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
  },
  input: {
    width: 150,
    padding: 8,
    fontSize: 20,
    backgroundColor: colors.light,
    color: colors.dark,
    borderRadius: 10,
    marginRight: 10, 
    marginLeft: 20,
  },
  button: {
    marginHorizontal: 5, 
  },
});
