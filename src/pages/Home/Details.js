import React from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  Platform,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  Text,
  ScrollView,
} from 'react-native';

import { getDiscount, formatPrice } from '../../helpers';

const width = Dimensions.get('window').width;
const height = width * 0.75;

const Details = ({ navigation, route }) => {
  const { product } = route.params;

  return (
    <ScrollView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        translucent={Platform.OS === 'android'}
        backgroundColor={Platform.OS === 'android' ? '#0005' : '#0000'}
      />
      <ImageBackground
        source={{ uri: product?.image }}
        style={styles.headerImage}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <Text style={styles.back}>GO BACK</Text>
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.details}>
        <Text style={styles.title}>{product?.name}</Text>
        <View style={styles.price}>
          <Text
            style={
              product?.discount
                ? [styles.priceText, styles.discounted]
                : styles.priceText
            }>
            {product?.price === 0 ? 'Free' : formatPrice(product?.price)}
          </Text>
          {product?.discount && (
            <Text style={styles.priceText}>{getDiscount(product)}</Text>
          )}
        </View>
        <Text style={styles.description}>{product?.description}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  headerImage: {
    height,
    width,
    padding: 20,
  },
  backButton: {
    marginTop: 30,
  },
  back: {
    color: '#fff',
  },
  details: {
    padding: 20,
  },
  title: {
    color: '#333',
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 5,
  },
  price: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  discounted: {
    opacity: 0.5,
    textDecorationLine: 'line-through',
    marginRight: 5,
  },
  priceText: {
    color: '#333',
    fontWeight: 'bold',
    fontSize: 20,
  },
  description: {
    color: '#333',
    marginVertical: 15,
    fontSize: 15,
    textAlign: 'justify',
  },
});

export default Details;
