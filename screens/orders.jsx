import React, { useEffect } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { OrderItem } from '../components/orderItem';
import { useSelector } from 'react-redux';
import { useGetOrdersByUserQuery } from '../services/shopService';

export const Orders = () => {
  const user = useSelector(state => state.auth.value.user);
  const { data: orders, error, isLoading, refetch } = useGetOrdersByUserQuery(user.localId);

  useEffect(() => {
    console.log('Current user:', user);
    refetch(); // Refetch the orders when the component mounts
  }, [user, refetch]);

  useEffect(() => {
    console.log('Orders data:', orders);
  }, [orders]);

  if (isLoading) {
    return <Text>Cargando ordenes...</Text>;
  }

  if (error) {
    return <Text>Error al cargar ordenes!</Text>;
  }

  const ordersArray = orders ? Object.values(orders) : [];

  return (
    <View style={styles.orders}>
      <FlatList 
        contentContainerStyle={styles.list} 
        data={ordersArray} 
        renderItem={({ item }) => <OrderItem {...item} />} 
        keyExtractor={(item, index) => index.toString()}
        ListEmptyComponent={<Text>No hay ordenes</Text>} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  orders: {
    backgroundColor: 'white',
    minHeight: '100%',
  },
  list: {
    gap: 32,
  },
});
