import React from 'react';
import { Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';


const OrderDetail = ({ order }) => {
const { Order_ID, Crust, Flavor, Size, Table_No, Timestamp } = order;

  return (
    <Card>
      <CardSection>
        <Text>{Order_ID}</Text>
        <Text>{Crust}</Text>
        <Text>{Flavor}</Text>
        <Text>{Size}</Text>
        <Text>{Table_No}</Text>
      <CardSection/>
      <CardSection>
        <Text>{Order_ID}</Text>
        <Text>{Crust}</Text>
        <Text>{Flavor}</Text>
        <Text>{Size}</Text>
        <Text>{Table_No}</Text>
      <CardSection/>
    </Card>
  );
};

export default OrderDetail;
