import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import OrderDetail from './OrderDetail';

class OrderList extends Component {
  state = { orders: [] };

  componentWillMount() {
    axios.get('https://order-pizza-api.herokuapp.com/api/orders')
      .then(response => this.setState({ orders: response.data }));
  }

  renderOrders() {
    return this.state.orders.map(order =>
      <OrderDetail key={order.Order_ID} order={order} />
    );
  }

  render() {
    return (
      <ScrollView>
        {this.renderOrders()}
      </ScrollView>
    );
  }
}

export default OrderList;
