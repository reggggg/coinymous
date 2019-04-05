import React, {Component} from 'react';
import history from '../js/history';
import Config from '../config';
import { getFromStorage, setInStorage } from '../utils/storage';

import { NavLink as Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
 } from 'reactstrap';


import '../css/header.css';
class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      isOpen: false,
      dropdownOpen: false
    };
  }

  componentDidMount(){
    const obj = getFromStorage('coinymous');
    if(obj && obj.token){
      const { token } = obj;
      //Verify Token
      fetch(Config.url + '/api/account/verify?token=' + token)
      .then(res => res.json())
      .then(json => {
        if(json.success){
          this.setState({
            token,
            isLoading: false
          });
        }else {
          this.setState({
            isLoading: false
          });
        }
      });
    }else {
      this.setState({
        isLoading: false
      });
    }
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  goToMyAccount = () => {
    history.push('/');
  }

  goToSignin = () => {
    history.push('/signin');
  }

  dropdownToggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  logout = () => {
    this.setState({
      isLoading: true,
    });
    const obj = getFromStorage('coinymous');
    if(obj && obj.token){
      const { token } = obj;
      // remove Token
      fetch(Config.url + '/api/account/logout?token=' + token)
      .then(res => res.json())
      .then(json => {
        if(json.success){
          this.setState({
            token: '',
            isLoading: false
          });
          localStorage.clear();
        }else {
          this.setState({
            isLoading: false
          });
        }
      });
    }else {
      this.setState({
        isLoading: false
      });
    }
  }

  render(){
    const navItems = [
      {name: 'About', href: '/'},
      {name: 'Roadmap', href: '/'},
      {name: 'Pricing', href: '/'},
      {name: 'Team', href: '/'},
      {name: 'FAQ', href: '/'}
    ]

    const {
      isLoading,
      token
    } = this.state;

    let account;
    if(!token){
      account = (<Button className="signup" onClick={this.goToSignin}>Sign in</Button>);
    }else {
      account =
      (
      <Dropdown className="account" isOpen={this.state.dropdownOpen} toggle={this.dropdownToggle}>
        <DropdownToggle caret>
          Account
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Account</DropdownItem>
          <DropdownItem onClick={this.goToMyAccount}>Profile</DropdownItem>

          <DropdownItem divider />
          <DropdownItem onClick={this.logout}>Logout</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      )

    }

    return (
      <div>
        <Navbar color="faded" className="navbar" light expand="md">
          <img src={require('../images/landingPage/CushCash-Logo2-01.svg')} alt=""/>
          <NavbarToggler className="toggler" onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {
                navItems.map((item, index) => (
                  <NavItem key={index}>
                    <NavLink href={item.href} className="navItems">
                      {item.name}
                    </NavLink>
                  </NavItem>
                ))
              }
              {/* <Button className="login">Login</Button> */}
              {account}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
export default Header;
