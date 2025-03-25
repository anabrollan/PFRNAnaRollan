import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../global/color'

const Card = ({children, style}) => {
  return (
    <View style={styles.container}>
    <Text style={styles.text}>{children}</Text>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.purple,
        width: 300,
        height: 60,
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: colors.light,
        fontSize: 18,
        fontWeight: 'bold',
    }
});