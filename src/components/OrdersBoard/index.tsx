import { useState } from 'react';
import { toast } from 'react-toastify';
import { api } from '../../assets/services/api';

import { Order } from '../../types/Order';
import { OrderModal } from '../OrderModal';
import { Board, OrdersContainer } from './styles';

interface OrdersBoardProps {
  icon: string;
  title: string;
  orders: Order[];
  onCancelOrder: (orderId: string) => void;
  onChangeOrderStatus: (orderId: string, status: Order['status']) => void;
}

export function OrdersBoard({
  icon,
  title,
  orders,
  onCancelOrder,
  onChangeOrderStatus,
}: OrdersBoardProps) {
  const [isOpenOrderModal, setIsOpenOrderModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  function handleOpenOrderModal(order: Order) {
    setIsOpenOrderModal((prevState) => !prevState);
    setSelectedOrder(order);
  }

  function handleCloseOrderModal() {
    setIsOpenOrderModal((prevState) => !prevState);
    setSelectedOrder(null);
  }

  async function handleCancelOrder() {
    setIsLoading(true);

    await api.delete(`/orders/${selectedOrder?._id}`);

    toast.success(`O pedido da mesa ${selectedOrder?.table} foi cancelado!`);

    onCancelOrder(selectedOrder!._id);
    setIsLoading(false);
    setIsOpenOrderModal(false);
  }

  async function handleChangeOrderStatus() {
    setIsLoading(true);

    const status = selectedOrder?.status === 'WAITING'
      ? 'IN_PRODUCTION'
      : 'DONE';

    await api.patch(`/orders/${selectedOrder?._id}`, { status });

    toast.success(
      `O pedido da mesa ${selectedOrder?.table} teve o status alterado!`
    );

    onChangeOrderStatus(selectedOrder!._id, status);
    setIsLoading(false);
    setIsOpenOrderModal(false);
  }

  return (
    <Board>
      <OrderModal
        visible={isOpenOrderModal}
        order={selectedOrder}
        handleCloseOrderModal={handleCloseOrderModal}
        onCancelOrder={handleCancelOrder}
        loading={isLoading}
        onChangeOrderStatus={handleChangeOrderStatus}
      />

      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>({orders.length})</span>
      </header>

      {orders.length > 0 && (
        <OrdersContainer>
          {orders.map((order) => (
            <button
              type="button"
              key={order._id}
              onClick={() => handleOpenOrderModal(order)}
            >
              <strong>{`Mesa ${order.table}`}</strong>
              <span>{`${order.products.length} itens`}</span>
            </button>
          ))}
        </OrdersContainer>
      )}
    </Board>
  );
}
