import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import Task from './components/Task';
import Auth from './components/Auth';
import Unknown from './components/Unknown';
import LoginForm from './components/LoginForm';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Login></Login>} ></Route>
    <Route path="/sign" element={<Signup></Signup>}></Route>
    
      
      <Route path="/dash" element={<Auth><Dashboard></Dashboard></Auth>}></Route>
      <Route path="/task" element={<Auth> <Task></Task></Auth>}></Route>
      <Route path="/loginfrom" element={<LoginForm></LoginForm>}></Route>
      <Route path="*" element={<Unknown></Unknown>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
