import { FlatList, StyleSheet, Text, View } from 'react-native'
import cartData from '../data/cart.json'
import { CartItem } from '../components/cartItem'
import { formatPrice } from '../utils/price'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem, clearCart } from '../features/cart/cartSlice'
import { usePostOrderMutation } from '../services/shopService'
import { Button } from '../components/button'

export const Cart = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.value.user);
  const cart = useSelector(state => state.cart.value.items)
  const totalPrice = cart.reduce((acc, { price, quantity }) => acc + price * quantity, 0);
  const [triggerPost, result] = usePostOrderMutation()
  const cartIsEmpty = cart.length === 0

  const handleDelete = item => {
    dispatch(removeItem(item))
  }

  const confirmOrder = () => {
    if (user) {
      console.log('Confirmando compra, detalles:');
      triggerPost({ items: cart, total: totalPrice, user, fecha: new Date().toISOString() });
      dispatch(clearCart());
    } else {
      console.log('User not logged in');
    }
  };

  return (
    <View style={styles.container}>
    <FlatList contentContainerStyle={{ gap: 32 }} data={cart} renderItem={({ item }) => (<CartItem {...item} onDelete={handleDelete} />)} ListEmptyComponent={<Text style={styles.totalText}>No hay productos en el carrito</Text>} />
    <View style={styles.total}>
      <Text style={styles.totalText}>Total</Text>
      <Text style={styles.totalText}>{formatPrice(totalPrice)}</Text>
    </View>
    {cartIsEmpty ? null : (
      <View style={styles.payButon}>
        <Button onPress={confirmOrder}>Confirmar compra</Button>
      </View>
    )}

  </View>
  )
}

export const styles = StyleSheet.create({
  cart: {
    minHeight: '100%',
    height: '100%',
    backgroundColor: 'white',
    padding: 16,
  },
  total: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  totalText: {
    fontFamily: 'Unbounded-Bold',
  },
})
