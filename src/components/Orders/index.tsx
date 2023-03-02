import { useEffect, useState } from 'react';
import { api } from '../../assets/services/api';
import { Order } from '../../types/Order';
import { OrdersBoard } from '../OrdersBoard';

import { Container } from './styles';

export function Orders() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    api.get('/orders')
      .then(({ data }) => setOrders(data))
      .catch((error) => console.log(error));
  }, []);

  const waiting = orders.filter((order) => order.status === 'WAITING');
  const production = orders.filter((order) => order.status === 'IN_PRODUCTION');
  const done = orders.filter((order) => order.status === 'DONE');

  return (
    <Container>
      <OrdersBoard icon="🕗" title="Fila de espera" orders={waiting} />
      <OrdersBoard icon="👩‍🍳" title="Em produção" orders={production} />
      <OrdersBoard icon="✅" title="Pronto!" orders={done} />
    </Container>
  );
}
