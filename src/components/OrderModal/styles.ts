import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(0.28125rem);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalBody = styled.div`
  background: #FFFFFF;
  width: 480px;
  border-radius: 0.5rem;
  padding: 2rem;
  position: relative;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    strong {
      font-weight: 600;
      font-size: 1.5rem;
      line-height: 120%;
      color: #333333;
    }

    button {
      line-height: 0;
      background: transparent;
      border: 0;
    }
  }

  .status-container {
    margin-top: 1.5rem;

    small {
      font-size: 0.875rem;
      opacity: 0.8;
    }

    div {
      display: flex;
      gap: 0.5rem;
      margin-top: 0.5rem;
      align-items: center;
    }
  }
`;

export const OrderDetails = styled.div`
  margin-top: 2rem;

  > strong {
    font-weight: 500;
    font-size: 0.875rem;
    opacity: 0.8;
  }

  .order-items {
    margin-top: 1rem;

    .item {
      display: flex;

      & + .item {
        margin-top: 1rem;
      }

      img {
        border-radius: 0.375rem;
      }

      .quantity {
        font-size: 0.875rem;
        color: #666666;
        display: block;
        min-width: 1.25rem;
        margin-left: 0.75rem;
      }

      .product-details {
        margin-left: 0.25rem;

        strong {
          display: block;
          margin-bottom: 0.25rem;
        }

        span {
          font-size: 0.875rem;
          color: #666666;
        }
      }
    }
  }

  .total {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1.5rem;

    span {
      font-weight: 500;
      font-size: 0.875rem;
      opacity: 0.8;
    }
  }
`;

export const Actions = styled.footer`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;

  .primary {
    background: #333333;
    border-radius: 3rem;
    border: 0;
    color: #ffffff;
    padding: 0.75rem 0.875rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }

  .secondary {
    margin-top: 0.875rem;
    background: transparent;
    border: 0;
    color: #D73035;
    padding: 0.75rem 0.875rem;
    font-weight: bold;
  }
`;
