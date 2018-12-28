/** @format */

import { AppRegistry, View } from 'react-native';
import React from 'react';
import Header from './src/components/Header';
import OrderList from './src/components/OrderList';

const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'Order Pizza API'} />
    <OrderList />
  </View>
);


AppRegistry.registerComponent('Order Pizza API', () => App);
