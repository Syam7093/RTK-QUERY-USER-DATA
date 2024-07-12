import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Auth = ({ children }) => {
  const navigate = useNavigate();

  const [login, setlogin] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    // console.log(token,"token")
    if (token) {
      setlogin(true);
    } else {
      setlogin(false);
      navigate("/");
    }
  }, []);

  return login ? children : <h1>dsdadsa</h1>;
};

export default Auth;
