import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cart from "../screens/Cart";
import Checkout from "../screens/Checkout";

const Stack = createNativeStackNavigator();

const CartStackNavigation = () => {
    return (
      <Stack.Navigator
        initialRouteName="Cart"
        screenOptions={{
          headerShown: false,  // Si no necesitas mostrar el header
        }}
      >
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="Checkout" component={Checkout} />  {/* Añades la pantalla de Checkout */}
      </Stack.Navigator>
    );
  };

export default CartStackNavigation;