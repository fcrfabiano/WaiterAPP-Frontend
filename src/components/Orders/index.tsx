import { Order } from '../../types/Order';
import { OrdersBoard } from '../OrdersBoard';

import { Container } from './styles';

const orders: Order[] = [
  {
    _id: '63742fa01c0d7e7484f0edc7',
    table: '01',
    status: 'WAITING',
    products: [
      {
        product: {
          name: 'Pizza Quatro Queijos',
          imagePath: '1668556758387-quatro-queijos.png',
          price: 40,
        },
        quantity: 1,
        _id: '63742fa01c0d7e7484f0edc8',
      },
      {
        product: {
          name: 'Madero Strawberry',
          imagePath: '1668557503628-strawberry.webp',
          price: 36,
        },
        quantity: 4,
        _id: '63742fa01c0d7e7484f0edc9',
      },
    ],
  },
  {
    _id: '637432d8c289fdb70c630025',
    table: '02',
    status: 'WAITING',
    products: [
      {
        product: {
          name: 'Madero Strawberry',
          imagePath: '1668557503628-strawberry.webp',
          price: 36,
        },
        quantity: 1,
        _id: '637432d8c289fdb70c630026',
      },
    ],
  },
  {
    _id: '637432f1f4d07579082325d1',
    table: '02',
    status: 'WAITING',
    products: [
      {
        product: {
          name: 'Madero Strawberry',
          imagePath: '1668557503628-strawberry.webp',
          price: 36,
        },
        quantity: 1,
        _id: '637432f1f4d07579082325d2',
      },
    ],
  },
];

export function Orders() {
  return (
    <Container>
      <OrdersBoard icon="🕗" title="Fila de espera" orders={orders} />
      <OrdersBoard icon="👩‍🍳" title="Em produção" orders={[]} />
      <OrdersBoard icon="✅" title="Pronto!" orders={[]} />
    </Container>
  );
}
