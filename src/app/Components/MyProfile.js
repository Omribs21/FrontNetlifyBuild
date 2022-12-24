import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { selectFirstName, selectLastName, selectUserName, selectToken, selectEmail } from '../Slicers/loginSlice';
import CustomizedDialogs from './FooterComponents/TermsOfService';
import ContactUs from './FooterComponents/ContactUs';
import ReturnPolicy from './FooterComponents/ReturnPolicy';
import { Link, Outlet } from 'react-router-dom';
import Footer from './FooterComponents/Footer';
const MyProfile = () => {
  const first_name = useSelector(selectFirstName)
  const user_name = useSelector(selectUserName)
  const last_name = useSelector(selectLastName)
  const token = useSelector(selectToken)
  const email = useSelector(selectEmail)


  return (
    <div class="header">
      <div style={{ height: "0px" }} class="inner-header flex">
        <div style={{ color: "black", width: "620px", height: "550px", backgroundColor: "gainsboro", margin: "auto", marginTop: "1%", padding: "20px", borderRadius: "25px" }}>
          <br></br>
          
          <h1 class="animate__animated animate__backInDown" style={{ fontSize: "50px", textAlign:"center",  color: "black", fontFamily: "monospace" }}>Welcome Back! {user_name}</h1>
          <h2 class="animate__animated animate__backInUp" style={{ fontSize: "30px", textAlign:"center",  color: "black", fontFamily: "monospace" }}>Your Personal details:</h2>
          <br></br>
          <div style={{ display: "flex", rowGap: "15px" }}>
            <div class="animate__animated animate__backInLeft" style={{textAlign:"left"}}> 
              <p>User Name: {user_name}</p>
              <p>First name: {first_name}</p>
              <p>Last Name: {last_name}</p>
              <p>Email:{email}</p>
            </div>
            {/* <div class="animate__animated animate__backInRight" style={{marginLeft:"30px"}}>
              <p>City:</p>
              <p>District:</p>
              <p>Postal ID:</p>
              <p>Phone:</p>
            </div> */}

          </div>
          <Link to='/myorders'>My orders</Link>
          <Outlet />
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default MyProfile