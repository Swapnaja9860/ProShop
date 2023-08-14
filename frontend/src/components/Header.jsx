import React from 'react'
import {Navbar, Nav, Container}  from 'react-bootstrap'
import {FaShoppingCart, FaUser} from 'react-icons/fa'
import logo from '../assets/logo.png'
import {LinkContainer} from 'react-router-bootstrap'

const Header = () => {
  return (
    <header>
        {/* whenever the screen is medium in size or less than that show Hamburger */}
        <Navbar bg='dark' variant='dark' expand='md' collapseOnSelect>
            <Container>
                <LinkContainer to='/'>
                    <Navbar.Brand>
                    <img src={logo} alt='proshop'/>
                    ProShop
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls='basic-navbar-nav'></Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    {/* ms-auto align links to the right 
                    me-auto align-links to the left next to ProShop */}
                    <Nav className='ms-auto'>
                        <LinkContainer to='/cart'>
                             <Nav.Link><FaShoppingCart/> Cart</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/login'>
                            <Nav.Link><FaUser/>Sign In</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  )
}

export default Header