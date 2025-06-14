import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const orders = [
  { id: '101', date: '2024-06-01', total: 18 },
  { id: '102', date: '2024-06-02', total: 22 },
];

export default function OrdersScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Orders</Text>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.orderItem}>
            <Text style={styles.orderId}>Order #{item.id}</Text>
            <Text>Date: {item.date}</Text>
            <Text>Total: ${item.total}</Text>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.empty}>No orders yet.</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  orderItem: { marginBottom: 16, padding: 16, backgroundColor: '#f1f1f1', borderRadius: 8 },
  orderId: { fontWeight: 'bold' },
  empty: { fontSize: 16, color: '#888' },
});
