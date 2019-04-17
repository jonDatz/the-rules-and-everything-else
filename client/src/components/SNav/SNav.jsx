import React, {Component} from "react";
import { SideNav, Button, SideNavItem } from 'react-materialize';
import "./style.css"

class SNav extends Component {
    goTo(route) {
        this.props.history.replace(`/${route}`)
      };

    render () {
        return (
            <div id="snav">
            <SideNav  options={{closeOnClick: true, draggable: true}} class="sidenav sidenav-fixed">

                <SideNavItem userView user={{
                    background: 'https://placeimg.com/640/480/tech',
                    name: 'John Doe'
                }} />

                <SideNavItem onClick={this.goTo.bind(this, 'home')}>Home</SideNavItem>

                <SideNavItem onClick={this.goTo.bind(this, 'compendium')}>Beginner's Compendium</SideNavItem>

                <SideNavItem waves onClick={this.goTo.bind(this, 'charactersheet')}>Custom Character Sheet</SideNavItem>

            </SideNav>
            </div>
        )
    }
}

export default SNav;