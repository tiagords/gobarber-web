import styled from 'styled-components';
import { shade } from 'polished';

import registerBackgroundImg from '../../assets/images/register-background.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 780px;

  form {
    margin: 80px;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
      font-weight: 500;
      font-size: 24px;
      color: #f4ede8;
    }

    a {
      display: block;
      margin-top: 24px;
      text-decoration: none;
      font-size: 16px;
      text-align: center;
      color: #f4ede8;
      transition: background-color 0.2s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }

  > a {
    display: flex;
    align-items: center;
    margin-top: 24px;
    text-decoration: none;
    font-size: 16px;
    text-align: center;
    color: #f4ede8;
    transition: background-color 0.2s;

    &:hover {
      color: ${shade(0.2, '#F4EDE8')};
    }

    svg {
      margin-right: 16px;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${registerBackgroundImg}) no-repeat center;
  background-size: cover;
`;
