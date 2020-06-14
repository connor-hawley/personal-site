import { useState } from 'react'
import {
  NavbarBrand, NavbarToggler, Collapse, Nav
} from 'reactstrap'
import Link from 'next/link'
import Navbar from './shared/Navbar'
import NavItem from './shared/NavItem'

export default () => {
  const [navbarOpen, setNavbar] = useState(false)

  const toggleNavbar = () => setNavbar(!navbarOpen)

  return (
    <Navbar light expand='md'>
      <NavbarBrand href='/'>Connor Hawley</NavbarBrand>
      <NavbarToggler onClick={toggleNavbar}/>
      <Collapse isOpen={navbarOpen} navbar>
        <Nav className='ml-auto' navbar>
          <NavItem>
            <Link href='/'>
              <a>About</a>
            </Link>
          </NavItem>
          <NavItem>
            <Link href='/posts'>
              <a>Blog</a>
            </Link>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  )
}