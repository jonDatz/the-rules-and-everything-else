import React, {Component} from "react";
import { SideNav, SideNavItem } from 'react-materialize';
import "./style.css"

class SNav extends Component {
    goTo(route) {
        this.props.history.replace(`/${route}`)
      };

      login() {
        this.props.auth.login();
      };
    
      logout() {
        this.props.auth.logout();
      };

    render () {
        const { isAuthenticated } = this.props.auth;
        return (
            <div id="snav">
            <SideNav  options={{closeOnClick: true, draggable: true}} className="sidenav sidenav-fixed grey lighten-2">

            {!isAuthenticated() && (
                <SideNavItem waves onClick={this.login.bind(this)}><span  className="blue-grey-text text-lighten-5">Login</span></SideNavItem>
            )}

            {isAuthenticated() && (
                <SideNavItem waves onClick={this.logout.bind(this)}><span  className="blue-grey-text text-lighten-5">Logout</span></SideNavItem>
            )}

                <SideNavItem onClick={this.goTo.bind(this, '')}><span  className="blue-grey-text text-lighten-5">Home</span> </SideNavItem>

                <SideNavItem onClick={this.goTo.bind(this, 'compendium')}><span  className="blue-grey-text text-lighten-5">Beginner's Compendium</span></SideNavItem>

            {isAuthenticated() && (
                <SideNavItem waves onClick={this.goTo.bind(this, 'charactersheet')}><span  className="blue-grey-text text-lighten-5">Custom Character Sheet</span></SideNavItem>
            )}
                

            </SideNav>
            </div>
        )
    }
}

export default SNav;