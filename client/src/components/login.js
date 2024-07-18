import React from 'react';
import styled, { keyframes } from 'styled-components';

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #2c3e50, #4ca1af, #2c3e50);
  background-size: 400% 400%;
  animation: ${gradientAnimation} 15s ease infinite;
`;

const LoginForm = styled.form`
  background: rgba(0, 0, 0, 0.1);
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
  text-align: center;
  width: 300px;
`;

const Title = styled.h2`
  margin-bottom: 1rem;
  color: #ffffff;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: none;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.3);
  color: #ffffff;
  font-size: 1rem;
  ::placeholder {
    color: #cccccc;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 0.75rem;
  border: none;
  border-radius: 5px;
  background: linear-gradient(135deg, #4ca1af, #2c3e50);
  background-size: 200% 200%;
  animation: ${gradientAnimation} 15s ease infinite;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background-position: 100% 50%;
  }
`;

const Text = styled.p`
  margin-top: 1rem;
  color: #f1f1f1;
`;

const Link = styled.a`
  color: black;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Login = () => {
  return (
    <LoginContainer>
      <LoginForm>
        <Title>Login</Title>
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Button type="submit">Log In</Button>
        <Text>
          Don't have an account? <Link href="/signup">Sign up</Link>
        </Text>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;
