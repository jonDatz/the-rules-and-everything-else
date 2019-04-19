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
            <SideNav  options={{closeOnClick: true, draggable: true}} className="sidenav sidenav-fixed grey lighten-2">


                <SideNavItem onClick={this.goTo.bind(this, 'home')}><span  className="blue-grey-text text-lighten-5">Home</span> </SideNavItem>

                <SideNavItem onClick={this.goTo.bind(this, 'compendium')}><span  className="blue-grey-text text-lighten-5">Beginner's Compendium</span></SideNavItem>

                <SideNavItem waves onClick={this.goTo.bind(this, 'charactersheet')}><span  className="blue-grey-text text-lighten-5">Custom Character Sheet</span></SideNavItem>

            </SideNav>
            </div>
        )
    }
}

export default SNav;