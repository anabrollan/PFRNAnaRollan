import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Text, View, TextInput } from 'react-native';
import Header from './src/components/Header'
import { colors } from './src/global/color';
import Home from './src/screens/home';
import ItemDetail from './src/screens/ItemDetail'
import ItemListCategory from './src/screens/ItemListCategory';


export default function App() {
  return (
    <View style={styles.container}>
      <Header title="Categories" />
      <ItemListCategory />
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.light,
  }
  });