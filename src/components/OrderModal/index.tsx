import React, { useEffect } from 'react';

import { Overlay, ModalBody, OrderDetails, Actions } from './styles';
import closeIcon from '../../assets/images/close-icon.svg';
import { Order } from '../../types/Order';
import { formatPrice } from '../../utils/format';

interface OrderModalProps {
  visible: boolean;
  order: Order | null;
  handleCloseOrderModal: () => void;
  onCancelOrder: () => void;
  loading: boolean;
  onChangeOrderStatus: () => void;
}

// interface KeyboardEvent {
//   key: string;
//   stopPropagation: () => void;
// }

export function OrderModal({
  visible,
  order,
  handleCloseOrderModal,
  onCancelOrder,
  loading,
  onChangeOrderStatus,
}: OrderModalProps) {
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        handleCloseOrderModal();
      }
      event.stopPropagation();
    }

    document.addEventListener('keydown', handleKeyDown);

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleCloseOrderModal]);

  if (!visible || !order) {
    return null;
  }

  const total = order.products.reduce(
    (acc, curr) => acc + curr.quantity * curr.product.price,
    0
  );

  const orderStatusIcon = {
    WAITING: '👩‍🍳',
    IN_PRODUCTION: '✅',
  };

  const orderStatusText = {
    WAITING: 'Iniciar Produção',
    IN_PRODUCTION: 'Concluir Pedido',
  };

  return (
    <Overlay onClick={handleCloseOrderModal}>
      <ModalBody>
        <header>
          <strong>Mesa {order.table}</strong>
          <button type="button">
            <img
              src={closeIcon}
              alt="Fechar modal"
              onClick={handleCloseOrderModal}
            />
          </button>
        </header>

        <div className="status-container">
          <small>Status do Pedido</small>
          <div>
            <span>
              {order.status === 'WAITING' && '🕗'}
              {order.status === 'IN_PRODUCTION' && '👩‍🍳'}
              {order.status === 'DONE' && '✅'}
            </span>
            <strong>
              {order.status === 'WAITING' && 'Fila de espera'}
              {order.status === 'IN_PRODUCTION' && 'Em produção'}
              {order.status === 'DONE' && 'Pronto!'}
            </strong>
          </div>
        </div>

        <OrderDetails>
          <strong>Itens</strong>

          <div className="order-items">
            {order.products.length > 0 &&
              order.products.map(({ _id, product, quantity }) => (
                <div className="item" key={_id}>
                  <img
                    src={`http://localhost:3001/images/${product.imagePath}`}
                    alt={product.name}
                    width="56"
                    height="28.51"
                  />

                  <span className="quantity">{quantity}x</span>

                  <div className="product-details">
                    <strong>{product.name}</strong>
                    <span>{formatPrice(product.price)}</span>
                  </div>
                </div>
              ))}
          </div>
          <div className="total">
            <span>Total</span>
            <strong>{formatPrice(total)}</strong>
          </div>
        </OrderDetails>

        <Actions>
          {order.status !== 'DONE' && (
            <button
              type="button"
              className="primary"
              disabled={loading}
              onClick={onChangeOrderStatus}
            >
              <span>
                {orderStatusIcon[order.status]}
              </span>
              <strong>
                {orderStatusText[order.status]}
              </strong>
            </button>
          )}

          <button
            type="button"
            className="secondary"
            disabled={loading}
            onClick={onCancelOrder}
          >
            Cancelar Pedido
          </button>
        </Actions>
      </ModalBody>
    </Overlay>
  );
}
