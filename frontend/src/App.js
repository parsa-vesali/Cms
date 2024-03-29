import React from 'react'
import { useRoutes } from "react-router-dom";
import SideBar from './Components/Common/SideBar/SideBar'
import NavBar from './Components/Common/NavBar/NavBar'
import routes from './Routes'
import './App.css'

export default function App() {
  let router = useRoutes(routes)
  return (
    <>
      <SideBar />
      <div className='main'>
        <NavBar />
        {router}
      </div>
    </>
  )
}
