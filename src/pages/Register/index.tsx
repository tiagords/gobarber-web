import React from 'react';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';

import { Container, Content, Background } from './styles';
import logoImg from '../../assets/images/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

const Register: React.FC = () => (
  <Container>
    <Background />
    <Content>
      <img src={logoImg} alt="GoBarber" />

      <form action="">
        <h1>Faça seu cadastro</h1>

        <Input name="name" type="text" placeholder="Nome" icon={FiUser} />
        <Input name="email" type="text" placeholder="E-mail" icon={FiMail} />
        <Input
          name="password"
          type="password"
          placeholder="Senha"
          icon={FiLock}
        />

        <Button type="submit">Entrar</Button>
      </form>

      <a href="forgot" title="Cadastre-se">
        <FiArrowLeft />
        Voltar para o login
      </a>
    </Content>
  </Container>
);

export default Register;
