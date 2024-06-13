import { FlatList, StyleSheet, Text, View } from 'react-native'
import cartData from '../data/cart.json'
import { CartItem } from '../components/cartItem'
import { formatPrice } from '../utils/price'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem } from '../features/cart/cartSlice'
import { usePostOrderMutation } from '../services/shopService'
import { Button } from '../components/button'

export const Cart = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.cart.value.user)
  const items = useSelector(state => state.cart.value.items)
  const total = useSelector(state => state.cart.value.total)
  const [triggerPost, result] = usePostOrderMutation()

  const cartIsEmpty = items.length === 0

  const handleDelete = item => {
    dispatch(removeItem(item))
  }

  const confirmOrder = () => {
    triggerPost({ items, total, user })
  }

  return (
    <View style={styles.cart}>
      <FlatList
        contentContainerStyle={{ gap: 32 }}
        data={items}
        renderItem={({ item }) => (
          <CartItem {...item} onDelete={() => handleDelete(item)} />
        )}
        ListEmptyComponent={<Text>No hay productos en el carrito</Text>}
      />
      <View style={styles.total}>
        <Text style={styles.totalText}>Total</Text>
        <Text style={styles.totalText}>{formatPrice(total)}</Text>
      </View>
      {cartIsEmpty ? null : (
        <Button disabled={cartIsEmpty} onPress={confirmOrder}>
          Confirmar pedido
        </Button>
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
