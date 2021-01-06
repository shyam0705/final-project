import React from 'react';
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';
import { Component } from 'react';
import { Nav, NavItem, NavbarToggler, Collapse } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import ParticlesBg from 'particles-bg';
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen:false
        }
    }
    toggleNav = () => {
        this.setState({ isOpen:!this.state.isOpen })
    }
    render() {
        return (
        <header id="home">
            <ParticlesBg type="circle" bg={true} />
            <React.Fragment>
                <Navbar light expand="md" className="ml-auto">
                    <div className="container">
                        <NavbarBrand className="mr-auto" href="/"><img src='assets/images/logo.png' height="30" width="41" alt='Ristorante Con Fusion' /></NavbarBrand>
                        <NavbarToggler onClick={() => this.toggleNav()} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav navbar className="ml-auto">
                                <NavItem>
                                    <NavLink className="nav-link" to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/aboutus'><span className="fa fa-info fa-lg"></span> About Us</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/menu'><span className="fa fa-list fa-lg"></span> Menu</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/contactus'><span className="fa fa-address-card fa-lg"></span> Contact Us</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                    
                </Navbar>
                <div className="jum">
                    <div className="container">
                            <div className="row banner">
                                <div className="banner-text">
                                    <h1 className="responsive-headline">NAGDA_KVADI</h1>
                                    <h3>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</h3>
                                    <hr/>
                                </div>
                            </div>
                    </div>
                </div>
                </React.Fragment>
            </header>
        );
    }
}

export default Header;