import React from "react";
import { Navbar, NavItem, onClick } from 'react-materialize';
import "./style.css"

const Nav = () => {

    return (
        <Navbar brand={<a />} alignLinks="right">

            <NavItem onClick={onClick} href="charactersheet">
                Create a Character
            </NavItem>

            <NavItem href="/compendium">Compendium</NavItem>

        </Navbar>
            )
}

export default Nav;