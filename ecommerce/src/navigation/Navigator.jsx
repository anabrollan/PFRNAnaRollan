import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { StyleSheet } from 'react-native';
import { colors } from '../global/color'
import Home from '../screens/home'
import ItemListCategory from '../screens/ItemListCategory'
import ItemDetail from '../screens/ItemDetail'

const Stack = createStackNavigator()

const Navigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'
        screenOptions={{
            headerStyle: {backgroundColor: colors.light}
        }}>
            <Stack.Screen component={Home} name="Home" />
            <Stack.Screen component={ItemListCategory} name="ItemListCategory" />
            <Stack.Screen component={ItemDetail} name="ItemDetail" />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigator

const styles = StyleSheet.create({})