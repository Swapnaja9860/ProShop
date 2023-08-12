import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import {Container} from "react-bootstrap"
import HomeScreen from './screens/HomeScreen'

const App = () => {
  return (
    <>
    <Header/>
    {/* py-3 padding on the y-axis top and bottom */}
    <main className='py-3'>
      <Container>
        <HomeScreen/>
      </Container>
    </main>
    <Footer/>
    </>
  )
}

export default App