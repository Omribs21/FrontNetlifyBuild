import React, { useEffect } from 'react';
import './App.css';
import Navbar from './app/Components/Navbar';
import { Outlet, useNavigate } from "react-router-dom";
import Carousel from './app/Components/Carousel';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GetAllPersonalProductsAsync } from './app/Slicers/GetAllPersonalProductsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { GetAllProductsAsync } from './app/Slicers/GetAllProductsSlice';
import { GetOrdersAsync } from './app/Slicers/GetAllOrdersSlice';
import { selectToken } from './app/Slicers/loginSlice';
function App() {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const check = true
  useEffect(() => {
    if (check) {
      dispatch(GetAllProductsAsync());
      dispatch(GetAllPersonalProductsAsync());
      navigate("/products");
    } // navigate instantly to main page 
  }, [])


  return (
    <div style={{ flexDirection: "column" }} className="App" >
      <Carousel />
      <Navbar />
      <Outlet />
      <ToastContainer></ToastContainer>
    </div>


  );
}

export default App;
