import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Nav
  activeKey="/home"
//   onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
>
  <Nav.Item>
    <Nav.Link href="/home">Home</Nav.Link>
  </Nav.Item>
  <Nav.Item>
  <Nav.Link href="/addEvents">AddEvents</Nav.Link>
  </Nav.Item>
  <Nav.Item>
  <Nav.Link href="/login">Login</Nav.Link>
  </Nav.Item>
  <Nav.Item>
  <Nav.Link href="/manageProducts">ManageProduct</Nav.Link>
  </Nav.Item>
 
  {/* <Nav.Item>
    <Nav.Link eventKey="link-2">Link</Nav.Link>
  </Nav.Item>
  <Nav.Item>
  
    <Nav.Link eventKey="/login" Login>
      Login
    </Nav.Link> */}
  {/* </Nav.Item> */}
</Nav>
        </div>
    );
};

export default Header;