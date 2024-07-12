import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../endpoints/CrudEndpoint";
import { setusers } from "../slices/userSlice";
import { useDispatch } from "react-redux";

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

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  const [loginuser] = useLoginUserMutation();
  const dispatch = useDispatch();
  const [main, setmain] = useState([
    { name: "ramesh", age: 20, gender: "male" },
  ]);

  useEffect(() => {
    const email = localStorage.getItem("email");
    const password = localStorage.getItem("password");
    if (email && password) {
      setemail(email);
      setpassword(password);
    }
  }, [email, password]);

  const loginuserdata = async () => {
    const datasend = {
      email: email,
      password: password,
    };
    try {
      const savedata = await loginuser(datasend).unwrap();
      console.log(savedata, "savedata");
      if (savedata?.isLogin === true) {
        navigate("/dash");
        localStorage.setItem("token", savedata?.data);
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
      } else {
        alert("plz enter correct data");
      }
    } catch (error) {
      console.log(error, "something went wrong...");
    }
  };

  return (
    <FormContainer>
      <FormWrapper>
        <FormTitle>Login</FormTitle>
        <div>
          <label>Email</label>
          <FormInput
            type="text"
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Password</label>
          <FormInput
            type="password"
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />
        </div>
        <div>
          <FormButton
            onClick={() => {
              loginuserdata();
              dispatch(setusers(main));
            }}
          >
            Submit
          </FormButton>
          <h5>
            Not a user? <Link to="/sign">Signup</Link>
          </h5>
        </div>
      </FormWrapper>
    </FormContainer>
  );
};

export default Login;
