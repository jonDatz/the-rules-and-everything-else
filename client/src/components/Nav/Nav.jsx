import React from "react";
import { Navbar, NavItem, onClick } from 'react-materialize';
import "./style.css"

const Nav = () => {

    return (
        <Navbar brand={<a />} alignLinks="right">

            <NavItem onClick={onClick}> Getting started</NavItem>

            <NavItem href="components.html">Components</NavItem>

        </Navbar>
            )
}

export default Nav;