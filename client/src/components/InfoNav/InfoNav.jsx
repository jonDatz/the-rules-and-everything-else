import React, { Component } from "react";
import { Navbar, NavItem, Dropdown, Divider, Button } from 'react-materialize';
import  './style.css';


class InfoNav extends Component {
 
    render() {

        return (

            <Navbar brand={<a />} alignLinks="right" className="comp-nav" >
                <NavItem href="">
                Getting started
                </NavItem>
                <NavItem href="components.html">
                Components
                </NavItem>
                <Dropdown trigger={ <a>Drop me!</a> }>

                    <NavItem>one</NavItem>

                    <NavItem>two</NavItem>

                    <Divider />

                    <NavItem>three</NavItem>
                </Dropdown>
            </Navbar>

        )
    }
}

export default InfoNav;
