import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { formatPrice } from '../utils/price'

export const CartItem = ({
  id,
  brand,
  image,
  model,
  size,
  quantity,
  price,
  onDelete,
}) => (
  <View style={styles.cartItem}>
    <Image style={styles.image} source={{ uri: image }} />
    <View style={styles.info}>
      <Text>{brand}</Text>
      <Text>{model}</Text>
      <Text>Talle: {size}</Text>
      <Text>Cantidad: {quantity}</Text>
      <Text>{formatPrice(price)}</Text>
      <Pressable style={styles.delete} onPress={() => onDelete(id)}>
        <Text style={styles.deleteText}>Eliminar</Text>
      </Pressable>
    </View>
  </View>
)

const styles = StyleSheet.create({
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  image: {
    height: 96,
    width: 160,
  },
  info: {
    gap: 8,
    flex: 1,
  },
  delete: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: '#e5e7eb',
    width: 96,
    alignItems: 'center',
  },
  deleteText: {
    color: '#4b5563',
    fontWeight: 'bold',
  },
})
