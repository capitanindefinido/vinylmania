import { StyleSheet, Text, View } from 'react-native'
import { formatPrice } from '../utils/price'
import { formatDate } from '../utils/date'

export const OrderItem = ({ id, total, fecha, items }) => {
  const formattedDate = new Date(fecha).toLocaleDateString();

  return (
    <View style={styles.container}>
      <Text style={styles.id}>Order ID: {id}</Text>
      <Text style={styles.total}>Total: ${total}</Text>
      <Text style={styles.date}>Date: {formattedDate}</Text>
      {items.map((item, index) => (
        <View key={index}>
          <Text style={styles.brand}>Brand: {item.brand}</Text>
          <Text style={styles.quantity}>Quantity: {item.quantity}</Text>

        </View>
      ))}
    </View>
  );
};

export const styles = StyleSheet.create({
  orderItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  orderText: {
    fontFamily: 'Unbounded-Bold',
  },
})
