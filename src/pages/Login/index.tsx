import React, { useCallback, useRef } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';
import { Link } from 'react-router-dom';

import { Container, Content, Background, AnimationContainer } from './styles';
import logoImg from '../../assets/images/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';
import getValidationErrors from '../../utils/getValidationErrors';
import { useAuth } from '../../hooks/Auth';
import { useToast } from '../../hooks/Toast';

interface LoginFormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { login } = useAuth();
  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: LoginFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('Digite seu e-mail')
            .email('Digite um e-mail válido'),
          password: Yup.string().required('Digite sua senha'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await login({ email: data.email, password: data.password });
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);
          formRef.current?.setErrors(errors);

          return;
        }

        // Disparar Toast
        addToast({
          type: 'error',
          title: 'Falha na autenticação',
          description: 'Ops, houve um erro na autenticação',
        });
      }
    },
    [login, addToast],
  );

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={logoImg} alt="GoBarber" />

          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Faça seu login</h1>

            <Input
              name="email"
              type="text"
              placeholder="E-mail"
              icon={FiMail}
            />

            <Input
              name="password"
              type="password"
              placeholder="Senha"
              icon={FiLock}
            />

            <Button type="submit">Entrar</Button>

            <a href="forgot" title="Esqueci minha senha">
              Esqueci minha senha
            </a>
          </Form>

          <Link to="/register" title="Criar conta">
            <FiLogIn />
            Criar conta
          </Link>
        </AnimationContainer>
      </Content>
      <Background />
    </Container>
  );
};

export default Login;
