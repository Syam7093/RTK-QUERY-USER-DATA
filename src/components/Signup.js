import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useCreateUserMutation } from "../endpoints/CrudEndpoint";
import Swal from "sweetalert2";
import "../App.css"


const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const FormWrapper = styled.div`
  background-color: #f1f8e9;
  padding: 60px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 320px;
`;

const FormTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: #333;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
`;

const FormButton = styled.button`
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  background-color: orange;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userCreate] = useCreateUserMutation();


  const saveUserData = async () => {
    const dataToSend = {
      name: name,
      email: email,
      password: password,
    };
    try {
      if (name && email && password) {
        const data = await userCreate(dataToSend).unwrap();
        console.log(data, "this is data");
        setEmail("");
        setName("");
        setPassword("");
        Swal.fire({
          text: "Account created successfull ... Plz login",
          confirmButtonText: "OK",
          confirmButtonColor: "orange",
          customClass: {
          content: "text-bold", 
          }, 
        });
      } else {
        Swal.fire({
          text: "Please enter all the fields...",
          confirmButtonText: "OK",
          confirmButtonColor: "orange",
          customClass: {
          content: "text-bold", 
          }, 
        });
      }
    } catch (error) {
      console.log(error, "something went wrong...");
    }
  };

  return (
    <FormContainer>
      <FormWrapper>
        <FormTitle>Sign Up</FormTitle>
        <div>
          <label>Name</label>
          <FormInput
          value={name}
          placeholder="Enter name here..."
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Email</label>
          <FormInput
          value={email}
          placeholder="Enter email here..."
            type="text"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Password</label>
          <FormInput
          value={password}
          placeholder="Enter password here..."
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div>
          <FormButton
            onClick={() => {
              saveUserData();
            }}
          >
            Sign Up
          </FormButton>
          <p>
            Already have an account? <Link to="/">Login</Link>
          </p>
        </div>
      </FormWrapper>
    </FormContainer>
  );
};

export default Signup;
