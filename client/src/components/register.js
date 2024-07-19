import React from 'react';
import styled, { keyframes } from 'styled-components';
import { registerUser } from '../api';

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const SignupContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #2c3e50, #4ca1af, #2c3e50);
  background-size: 400% 400%;
  animation: ${gradientAnimation} 15s ease infinite;
`;

const SignupForm = styled.form`
  background: rgba(0, 0, 0, 0.2);
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
  background: rgba(255, 255, 255, 0.2);
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

const Signup = () => {
  const Register = () => {
    const [username, setUsername] = useState('');
    const [passowrd, setPassowrd] = useState('');
    const [message, setMessage] = useState('');

    const handleRegister = async (e)=> {
        e.preventDefault();
        try{
            const data = await registerUser(username,password);
            setMessage(data.message)
        }catch(error){
          setMessage(error.error)
        }
    }
}
  return (
    <SignupContainer>
      <SignupForm>
        <Title>Sign Up</Title>
        <Input type="text" placeholder="Username" value = {username}onChange={(e)=>setUsername(e.target.value)}/>
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" value ={password}onChange={(e)=>setPassowrd(e.target.value)}/>
        <Button type="submit">Sign Up</Button>
        <Text>
          Already have an account? <Link href="/login">Log in</Link>
        </Text>
      </SignupForm>
    </SignupContainer>
  );
};

export default Signup;
