import styled from 'styled-components';

export const Container = styled.div`
  background: #232129;
  border-radius: 10px;
  border: 2px solid #232129;

  width: 100%;
  color: #f4ede8;
  display: flex;
  align-items: center;
  color: #666360;
  padding: 0 0 0 16px;

  & + div {
    margin-top: 8px;
  }

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
