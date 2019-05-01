import React, { Component } from "react";
import { Navbar, NavItem, Dropdown, Divider, Button } from 'react-materialize';
import  './style.css';


class InfoNav extends Component {

    constructor(props) {
        super(props);
    }
 
    render() {

        return (

            <Navbar brand={<a />} alignLinks="right" className="comp-nav" >
                <NavItem onClick={() => document.getElementById(('target1')).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})}>
                Character Sheet 1
                </NavItem>
                <NavItem onClick={() => document.getElementById(('target2')).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})}>
                Character Sheet 2
                </NavItem>
                <NavItem onClick={() => document.getElementById(('target3')).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})}>
                Character Creation 1
                </NavItem>
                <NavItem onClick={() => document.getElementById(('target4')).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})}>
                Character Creation 2
                </NavItem>
                <NavItem onClick={() => document.getElementById(('target5')).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})}>
                Combat
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
