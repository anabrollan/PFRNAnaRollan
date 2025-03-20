import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Text, View, TextInput } from 'react-native';
import Header from './src/components/Header'
import { colors } from './src/global/color';
import Home from './src/screens/home';
import ItemDetail from './src/screens/ItemDetail'
import ItemListCategory from './src/screens/ItemListCategory';
import {useFonts} from 'expo-font'


export default function App() {
  const [categorySelected, setCategorySelected] = useState("")
  console.log(categorySelected)

  const [fontsLoaded, fontError] = useFonts({
    Lato: require("./assets/Lato-Regular.ttf"),
  })

  if(!fontsLoaded || fontError) {
    return null
  }

  if(fontsLoaded && !fontError) {

  return (
    <View style={styles.container}>
      <Header title="Categories" />
      {!categorySelected ? (<Home setCategorySelected={setCategorySelected}/>
        
      ):(
      
      <ItemListCategory categorySelected={categorySelected} setCategorySelected={setCategorySelected}/>
        )}
      <StatusBar />
    </View>
  );
  }
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