import React from 'react'
import { Outlet } from "react-router-dom";
import Navbar from '../Navbar';

const MainLayout = () => {
  // console.log("MainLayout rendered")

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default MainLayout