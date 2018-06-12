import React, { Component } from 'react';
import {Navbar,Nav,NavItem} from 'react-bootstrap';
class Headers extends Component {
  onLogin(){
    this.props.onLogin();
  }
  render(){

    return(
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
                Github searcher
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem onClick={this.onLogin.bind(this)} href="#">login</NavItem>
        </Nav>
      </Navbar>
    );
  }
}
export default Headers;
