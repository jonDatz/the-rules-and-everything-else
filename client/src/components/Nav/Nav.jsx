import React, { Component } from "react";
import { Navbar, NavItem } from 'react-materialize';
import "./style.css"

class Nav extends Component {
    goTo(route) {
        this.props.history.replace(`/${route}`)
    };

    login() {
        this.props.auth.login();
    };

    logout() {
        this.props.auth.logout();
    };

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