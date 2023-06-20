import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export default function Header1() {
  return (
    <>
    <Navbar 
      style={{backgroundColor:"rgb(24, 25, 33)",
     
    }}
    
    >
      <Container>
        <Navbar.Brand href="#home"
        style={{color:'#f8f8f8'}}
        >PREE SHIPPING ON ALL U.S. ORDERS OVER $50</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <div id="Nav">
          <div className="dropdown">
  <button
    className="dropdown-toggle"
    type="button"
    id="dropdownMenuButton"
    data-mdb-toggle="dropdown"
    aria-expanded="false"
    style={{color:'#f8f8f8',
    backgroundColor:"rgb(24, 25, 33)",
    border:"none"
  }}
    >
   USD
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <li>
      <a className="dropdown-item" href="#">
        CAD
      </a>
    </li>
    <li>
      <a className="dropdown-item" href="#">
     AUD
      </a>
    </li>
    <li>
      <a className="dropdown-item" href="#">
      EUR
      </a>
    </li>
    <li>
      <a className="dropdown-item" href="#">
      GBP
      </a>
    </li>
  </ul>
</div>
<div className="dropdown">
  <button
    className=" dropdown-toggle"
    type="button"
    id="dropdownMenuButton"
    data-mdb-toggle="dropdown"
    aria-expanded="false"
    style={{color:'#f8f8f8',
    backgroundColor:"rgb(24, 25, 33)",
    border:"none"
  }}
    >
    Einglish
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <li>
      <a className="dropdown-item" href="#">
       french
      </a>
    </li>
    <li>
      <a className="dropdown-item" href="#">
      Italian
      </a>
    </li>
    <li>
      <a className="dropdown-item" href="#">
       German
      </a>
    </li>
    <li>
      <a className="dropdown-item" href="#">
       Spanish
      </a>
    </li>
  </ul>
</div>  <div className="dropdown">
  <button
    className=" dropdown-toggle"
    type="button"
    id="dropdownMenuButton"
    data-mdb-toggle="dropdown"
    aria-expanded="false"
    style={{color:'#f8f8f8',
    backgroundColor:"rgb(24, 25, 33)",
    border:"none"
  }}
    >
    My Acount
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <li>
      <i class="fa-solid fa-right-to-bracket"></i>
      <a className="dropdown-item" href="#">
        Sign In
      </a>
    </li>
    <li>
      <i class="fa-solid fa-user-plus"></i>
      <a className="dropdown-item" href="#">
        Register
      </a>
    </li>
   
  </ul>
</div>
</div>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  

      </>

  )
}
