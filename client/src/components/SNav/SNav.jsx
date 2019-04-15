import React from "react";
import { SideNav, Button, SideNavItem } from 'react-materialize';
import "./style.css"

const SNav = () => {

    return (
        <div id="snav">
        <SideNav trigger={<Button />}  options={{closeOnClick: true, isOpen: true}}>

            <SideNavItem userView user={{
                background: 'https://placeimg.com/640/480/tech',
                image: 'static/media/react-materialize-logo.824c6ea3.svg',
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