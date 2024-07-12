import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

// Keyframes for background animation
const moveBackground = keyframes`
  0% { background-position: 0 0; }
  100% { background-position: 100% 100%; }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  
  animation: ${moveBackground} 20s linear infinite;
  background-size: 400%;
`;

const FormWrapper = styled.div`
  background: tomoato;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
  max-width: 400px;
  width: 100%;
  text-align: center;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  color: #ffcccb;
  font-family: 'Arial', sans-serif;
`;

const Input = styled.input`
  width: calc(100% - 20px);
  padding: 12px 10px;
  margin: 10px 0;
  border: 1px solid #b22222;
  border-radius: 10px;
  font-size: 16px;
  background: #3e3e3e;
  color: #fff;
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: #ffcccb;
  }
`;

const Button = styled.button`
  width: calc(100% - 20px);
  padding: 12px 10px;
  margin: 10px 0;
  background: #800000;
  color: #fff;
  border: none;
  border-radius: 25px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s, transform 0.3s;

  &:hover {
    background: #a52a2a;
    transform: translateY(-2px);
  }
`;

const SignUpLink = styled.h5`
  color: #fff;

  a {
    text-decoration: none;
    color: #ffcccb;
    font-weight: bold;
  }
`;

const LoginForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      alert("Please fill all the fields");
      return;
    }

    // Handle login logic here
    console.log("Form submitted", { name, email, password });
  };

  return (
    <Container>
      <FormWrapper>
        <Title>Login</Title>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit">Submit</Button>
        </form>
        <SignUpLink>
          Not a user? Please <Link to="/sign">Sign Up</Link>
        </SignUpLink>
      </FormWrapper>
    </Container>
  );
};

export default LoginForm;
