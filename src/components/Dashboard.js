import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTokenverifyMutation } from "../endpoints/CrudEndpoint";

const Dashboard = () => {
  const navigate = useNavigate();
  const data = useSelector((state) => state?.userSlice?.users);
  console.log(data, "data---------");

  const [show, setshow] = useState({});
  const [tokenverify] = useTokenverifyMutation();
  console.log(show,"show this is all the address....");

  // const tokenverificaton=async()=>{
  //     let token=await localStorage.getItem("token")
  //     // console.log(token,"token----")

  //     const verify=await axios.post("http://localhost:8765/login/tockencheck",{token:token})
  //     // console.log(verify.data.data.data,"tockencheck")
  //     setshow(verify.data.data.data)
  // }

  useEffect(() => {
    tokenverifyusers();
  }, []);

  const tokenverifyusers = async () => {
    const token = await localStorage.getItem("token");

    const verifyTokenuser = await tokenverify({ token: token }).unwrap();
    console.log(verifyTokenuser?.data?.data, "verifyTokenuser");
    setshow(verifyTokenuser?.data?.data);
  };

  const location=useLocation();

  useEffect(() => {
    const handlePopState = () => {
      console.log("user navigated to back ...!");
      localStorage.clear("token");
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [location]);

  const logout = () => {
    navigate("/");
    localStorage.clear("token");
  };

  return (
    <div>
      <h1>{show.name}</h1>
      <h1>{show.email}</h1>
      <button
        onClick={() => {
          logout();
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
