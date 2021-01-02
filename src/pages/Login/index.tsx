import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import { Container, Content, Background } from './styles';
import logoImg from '../../assets/images/logo.svg';

const Login: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImg} alt="GoBarber" />

      <form action="">
        <h1>Faça seu login</h1>

        <input type="text" placeholder="E-mail" />
        <input type="password" placeholder="Senha" />

        <button type="submit">Entrar</button>

        <a href="forgot" title="Esqueci minha senha">
          Esqueci minha senha
        </a>
      </form>

      <a href="forgot" title="Criar conta">
        <FiLogIn />
        Criar conta
      </a>
    </Content>
    <Background />
  </Container>
);

export default Login;
