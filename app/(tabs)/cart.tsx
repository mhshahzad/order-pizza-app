import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function CartScreen() {
  // Placeholder cart items
  const cartItems = [];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Cart</Text>
      {cartItems.length === 0 ? (
        <Text style={styles.empty}>Your cart is empty.</Text>
      ) : (
        // ...render cart items here...
        <Text>Cart items go here</Text>
      )}
      <Button title="Checkout" onPress={() => {}} disabled={cartItems.length === 0} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  empty: { fontSize: 16, color: '#888' },
});
