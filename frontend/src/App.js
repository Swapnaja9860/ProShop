import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import {Container} from "react-bootstrap"
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <>
    <Header/>
    {/* py-3 padding on the y-axis top and bottom */}
    <main className='py-3'>
      <Container>
        <Outlet />
      </Container>
      <ToastContainer/>
    </main>
    <Footer/>
    </>
  )
}

export default App