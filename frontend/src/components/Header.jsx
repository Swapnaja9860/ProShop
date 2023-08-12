import React from 'react'
import {Navbar, Nav, Container}  from 'react-bootstrap'
import {FaShoppingCart, FaUser} from 'react-icons/fa'
import logo from '../assets/logo.png'

const Header = () => {
  return (
    <header>
        {/* whenever the screen is medium in size or less than that show Hamburger */}
        <Navbar bg='dark' variant='dark' expand='md' collapseOnSelect>
            <Container>
                <Navbar.Brand href='/'>
                    <img src={logo} alt='proshop'/>
                    ProShop</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav'></Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    {/* ms-auto align links to the right 
                    me-auto align-links to the left next to ProShop */}
                    <Nav className='ms-auto'>
                        <Nav.Link href='/cart'><FaShoppingCart/> Cart</Nav.Link>
                        <Nav.Link href='/login'><FaUser/>Sign In</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  )
}

export default Header