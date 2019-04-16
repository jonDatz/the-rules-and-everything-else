import React from "react";
import { SideNav, Button, SideNavItem } from 'react-materialize';
import logo from './logo.svg';
import "./style.css"

const SNav = () => {

    return (
        <div id="snav">
        <SideNav trigger={<Button />}  options={{closeOnClick: true, draggable: true}} class="sidenav sidenav-fixed">

            <SideNavItem userView user={{
                background: 'https://placeimg.com/640/480/tech',
                image: {logo},
                name: 'John Doe'
            }} />

            <SideNavItem href="#!icon" icon="cloud">First Link With Icon</SideNavItem>

            <SideNavItem href="#!second">Second Link</SideNavItem>

            <SideNavItem divider />

            <SideNavItem subheader>Subheader</SideNavItem>

            <SideNavItem waves href="#!third">Third Link With Waves</SideNavItem>

        </SideNav>
        </div>
            )
}

export default SNav;