import React, { Component } from "react";
import { Navbar, NavItem, Button } from 'react-materialize';
import "./style.css"

class Nav extends Component {
 
    render() {
        const {isAuthenticated} = this.props.auth;
        console.log(isAuthenticated);
        return (
            <Navbar alignLinks="right" >
            {
                    !isAuthenticated() && (
                        
                    <Button waves="light" style={{ marginRight: "5px" }}>
                        Login
                    </Button>
                    )
                }
                {
                    isAuthenticated() && (
                        <Button waves="light" style={{ marginRight: "5px" }}>
                            Logout
                        </Button>
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