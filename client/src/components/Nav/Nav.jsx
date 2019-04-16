import React, { Component } from "react";
import { Navbar, NavItem } from 'react-materialize';
import "./style.css"

class Nav extends Component {
 
    render() {
        const {isAuthenticated} = this.props.auth;
        console.log(isAuthenticated);
        return (
            <Navbar brand={< button />} alignLinks="right" >
            {
                    !isAuthenticated() && (
                        
                        <NavItem onClick={this.login.bind(this)}>
                            Login
                        </NavItem>
                    )
                }
                {
                    isAuthenticated() && (
                        <NavItem onClick={this.logout.bind(this)}>
                            Logout
                        </NavItem>
                    )
                }
                {
                    isAuthenticated() && (
                        <NavItem onClick={this.goTo.bind(this, 'charactersheet')}>
                            Create a Character
                        </NavItem>
                    )
                }
                
                <NavItem onClick={this.goTo.bind(this, 'compendium')}>Compendium</NavItem>

            </Navbar >
        )
    }
}

export default Nav;