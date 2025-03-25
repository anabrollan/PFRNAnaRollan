import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import CartData from "../data/cart.json";
import CartItem from "../components/CartItem";

const Cart = ({ navigation }) => {
  // Calcular el total de la compra
  const total = CartData.reduce(
    (acumulador, currentItem) => acumulador + currentItem.price * currentItem.quantity,
    0
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={CartData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          return <CartItem cartItem={item} />;
        }}
      />
      
      <View style={styles.totalContainer}>
        {/* Botón de Confirmación, que navega al Checkout */}
        <Pressable onPress={() => navigation.navigate("Checkout")} style={styles.confirmButton}>
          <Text>Confirm</Text>
        </Pressable>
        
        <Text style={styles.totalText}>Total: ${total}</Text>
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    flex: 1,
    marginBottom: 120,
  },
  totalContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20, // Agregado para espacio extra
  },
  confirmButton: {
    backgroundColor: "#007bff",  // Fondo azul para el botón
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginRight: 10,  // Espaciado entre botones
  },
  totalText: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
});
