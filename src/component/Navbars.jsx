import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
function Navbar1() {
    return (

        <Navbar expand="lg" className="bg-body-tertiary1"
        >

            <Container>
                <Navbar.Brand href="#home"
                
                >FASHION<span style={{color:"red"}}>CUBE</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav 
                    style={{
                        marginLeft:"700px",
                        marginRight:"100px",
                       justifyContent:'center',
                         
                    }}
                    >
                        <Nav.Link href="#home">HOME</Nav.Link>
                        <NavDropdown title="SHOP" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>

                        </NavDropdown>
                        <Nav.Link href="#link">CONTAC</Nav.Link>
                        <div className="user_tools"
                       style={{ marginLeft: '10px',             
                    }}
                        >
                            <i  className="tool tools_user fa-solid fa-user" ></i>
                            <i style={{margin:'10px 30px'}}className="tool tools_cart fa-solid fa-bag-shopping"></i>
                            <i className="tool tools_search fa-solid fa-magnifying-glass"></i>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
}

export default Navbar1;