import styled from 'styled-components';

export const Container = styled.header`
  background: #d73035;
  display: flex;
  justify-content: center;
  height: 198px;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1216px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .page-details {
    h1,
    h2 {
    color: #ffffff;
  }

  h1 {
    font-weight: 600;
    font-size: 2rem;
    line-height: 120%;
  }

  h2 {
    font-weight: 400;
    font-size: 1rem;
    line-height: 150%;
    opacity: 0.9;
    margin-top: 6px;
  }
}
`;
