/* eslint-disable no-alert */
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import GetServiceKey from '../../modules/GetServiceKey';

const ServiceKey = () => {
  useEffect(() => {
    GetServiceKey.getServiceKey((err, key) => {
      if (err) {
        console.log(err);
        alert(err);
      } else {
        setKey(key);
      }
    });
  }, []);
  const [key, setKey] = useState(null);

  return (
    <View style={styles.container}>
      <Text>Service Key: {key}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ServiceKey;
