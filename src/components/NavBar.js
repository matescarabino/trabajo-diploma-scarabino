import React from 'react'
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css"

const NavBar = () => {
  return (
    <>
      <div>
        <h2>Trabajo de diploma</h2>
        <ul>
          <Button style={{ marginRight: 20 }}>Usuarios</Button>
          <Button style={{ marginRight: 20 }}>Muestras</Button>
          <Button style={{ marginRight: 20 }}>Laboratorios</Button>
        </ul>
      </div>
    </>

  )
}

export default NavBar