import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #232129;
  border-radius: 10px;
  width: 100%;

  border: 2px solid #232129;
  color: #f4ede8;

  display: flex;
  align-items: center;
  color: #666360;
  padding: 0 0 0 16px;

  & + div {
    margin-top: 8px;
  }

  transition: 0.2s ease-in all;

  ${props =>
    props.isFocused &&
    css`
      border: 2px solid #ff9000;
      color: #ff9000;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #ff9000;
    `}

  input {
    padding: 16px;
    flex: 1;
    border: 0;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    background-color: transparent;
    color: #f4ede8;

    &::placeholder {
      color: #666360;
    }
  }
`;
