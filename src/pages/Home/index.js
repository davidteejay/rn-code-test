import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator, TransitionSpecs } from '@react-navigation/stack';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Info from './Info';
import Market from './Market';
import Details from './Details';
import ServiceKey from './ServiceKey';

const HomeTabs = createBottomTabNavigator();
const MarketScreens = createStackNavigator();

const MarketStack = () => {
  return (
    <MarketScreens.Navigator screenOptions={{ headerShown: false }}>
      <MarketScreens.Screen name="Market" component={Market} />
      <MarketScreens.Screen
        name="Details"
        component={Details}
        options={{
          title: 'Custom Animation',
          gestureDirection: 'horizontal',
          transitionSpec: {
            open: TransitionSpecs.ScaleFromCenterAndroidSpec,
            close: TransitionSpecs.ScaleFromCenterAndroidSpec,
          },
        }}
      />
    </MarketScreens.Navigator>
  );
};

const Home = () => {
  return (
    <HomeTabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Info') {
            iconName = 'info';
          } else if (route.name === 'Market') {
            iconName = 'shopping-cart';
          } else if (route.name === 'Service Key') {
            iconName = 'vpn-key';
          }

          // You can return any component that you like here!
          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <HomeTabs.Screen name="Info" component={Info} />
      <HomeTabs.Screen name="Market" component={MarketStack} />
      <HomeTabs.Screen name="Service Key" component={ServiceKey} />
    </HomeTabs.Navigator>
  );
};

export default Home;
