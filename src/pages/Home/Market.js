import React from 'react';
import { ScrollView, StyleSheet, SafeAreaView, Text } from 'react-native';

import Product from '../../components/Product';
import products from '../../../assets/products.json';

const Market = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content}>
        <Text style={styles.categoryTitle}>Pirate</Text>
        <ScrollView horizontal style={styles.category}>
          {products
            .filter(product => product.category === 'Pirate')
            .sort((a, b) => a.order > b.order)
            .map(product => (
              <Product
                product={product}
                key={product.id}
                navigation={navigation}
              />
            ))}
        </ScrollView>
        <Text style={styles.categoryTitle}>Culinary</Text>
        <ScrollView horizontal style={styles.category}>
          {products
            .filter(product => product.category === 'Culinary')
            .sort((a, b) => a.order > b.order)
            .map(product => (
              <Product
                product={product}
                key={product.id}
                navigation={navigation}
              />
            ))}
        </ScrollView>
        <Text style={styles.categoryTitle}>Sci-Fi</Text>
        <ScrollView horizontal style={styles.category}>
          {products
            .filter(product => product.category === 'Sci-Fi')
            .sort((a, b) => a.order > b.order)
            .map(product => (
              <Product
                product={product}
                key={product.id}
                navigation={navigation}
              />
            ))}
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  content: {
    padding: 20,
  },
  categoryTitle: {
    marginVertical: 10,
    fontSize: 26,
    fontWeight: 'bold',
  },
  category: {
    paddingVertical: 10,
    marginBottom: 15,
  },
});

export default Market;
