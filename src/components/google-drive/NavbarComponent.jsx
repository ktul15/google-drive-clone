import React from 'react'
import {Link} from 'react-router-dom'
import {Navbar, Nav} from 'react-bootstrap'

export default function NavbarComponent() {
  return (
    <Navbar bg='light' expand='sm' className=' p-3 d-flex justify-content-between'>
    <Navbar.Brand as={Link} to='/'>
      WDS Drive
    </Navbar.Brand>
    <Nav className='flex-end'>
      <Nav.Link as={Link} to='/user'>Profile</Nav.Link>
    </Nav>
    </Navbar>
  )
}
