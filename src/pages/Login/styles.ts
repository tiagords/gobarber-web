import styled from 'styled-components';
import { shade } from 'polished';

import loginBackgroundImg from '../../assets/images/login-background.png';

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
  max-width: 700px;

  form {
    margin: 80px;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
      font-family: Roboto Slab;
      font-weight: 500;
      font-size: 24px;
      color: #f4ede8;
    }

    input {
      background: #232129;
      border-radius: 10px;
      border: 2px solid #232129;
      padding: 16px;
      width: 100%;
      color: #f4ede8;

      &::placeholder {
        color: #666360;
      }

      & + input {
        margin-top: 8px;
      }
    }

    button {
      background: #ff9000;
      border-radius: 10px;
      border: 0;
      height: 56px;
      padding: 0 16px;
      width: 100%;
      font-size: 16px;
      color: #312e38;
      font-weight: 500;
      margin-top: 19px;
      transition: background-color 0.2s;

      &:hover {
        background-color: ${shade(0.2, '#ff9000')};
      }
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
    color: #ff9000;
    transition: background-color 0.2s;

    &:hover {
      color: ${shade(0.2, '#ff9000')};
    }

    svg {
      margin-right: 16px;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${loginBackgroundImg}) no-repeat center;
  background-size: cover;
`;
