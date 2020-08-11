import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  Animated,
  Easing,
} from 'react-native';

import { getDiscount, formatPrice } from '../../helpers';

const width = Dimensions.get('window').width - 40;
const height = width * 0.75;

const Product = ({ product, navigation }) => {
  let scaleValue = new Animated.Value(0);
  const cardScale = scaleValue.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 2],
  });

  const animate = () => {
    scaleValue.setValue(0);
    Animated.timing(scaleValue, {
      toValue: 1,
      duration: 500,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();

    setTimeout(() => navigation.navigate('Details', { product }), 500);
    setTimeout(() => scaleValue.setValue(0), 700);
  };

  const { name, price, short_description, image, discount } = product;

  return (
    <Animated.View style={{ transform: [{ scale: cardScale }] }}>
      <TouchableOpacity onPress={animate}>
        <ImageBackground
          style={styles.product}
          imageStyle={styles.product}
          source={{ uri: image }}>
          <View style={styles.infoBar}>
            <View style={styles.infoBarInner}>
              <Text style={styles.title}>{name}</Text>
              <View style={styles.price}>
                <Text
                  style={
                    discount ? [styles.title, styles.discounted] : styles.title
                  }>
                  {price === 0 ? 'Free' : formatPrice(price)}
                </Text>
                {discount && (
                  <Text style={styles.title}>{getDiscount(product)}</Text>
                )}
              </View>
              <Text style={styles.description}>{short_description}</Text>
            </View>
            <Image
              source={require('../../../assets/Ellipse.png')}
              style={styles.avatar}
            />
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  product: {
    width,
    height,
    borderRadius: 8,
    justifyContent: 'flex-end',
    alignItems: 'center',
    overflow: 'hidden',
    marginRight: 15,
  },
  infoBar: {
    padding: 10,
    backgroundColor: '#282828cc',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  infoBarInner: {
    flex: 1,
    paddingRight: 7,
  },
  avatar: {
    height: 30,
    width: 30,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#fff',
    marginBottom: 3,
  },
  description: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '300',
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
});

export default Product;
