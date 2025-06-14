import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet, Image } from 'react-native';

const pizzas = [
  { id: '1', name: 'Margherita', price: 8 },
  { id: '2', name: 'Pepperoni', price: 10 },
  { id: '3', name: 'Veggie', price: 9 },
];

export default function MenuScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <View style={styles.splashContainer}>
        <Text style={styles.splashText}>Loading Pizza Menu...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pizza Menu</Text>
      <FlatList
        data={pizzas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.pizzaItem}>
            <Text style={styles.pizzaName}>{item.name}</Text>
            <Text style={styles.pizzaPrice}>${item.price}</Text>
            <Button title="Add to Cart" onPress={() => {}} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  pizzaItem: { marginBottom: 16, padding: 16, backgroundColor: '#f9f9f9', borderRadius: 8 },
  pizzaName: { fontSize: 18, fontWeight: '500' },
  pizzaPrice: { fontSize: 16, marginBottom: 8 },
  splashContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  splashImage: { width: 180, height: 180, marginBottom: 24 },
  splashText: { fontSize: 20, fontWeight: 'bold', color: '#d35400' },
});