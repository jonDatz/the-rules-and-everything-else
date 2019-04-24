import React, { Component } from "react";
import { SideNav, SideNavItem, Button } from "react-materialize";
import "./style.css";

class SNav extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`);
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <div id="snav">
        <SideNav options={{ closeOnClick: true, draggable: true}} className="sidenav sidenav-fixed">
          <div className="title">
            <h2 className="red-text text-accent-4 title-1">The Rules...</h2>
            <h4 className="title-2">
              <strong>& Everything Else</strong>
            </h4>
          </div>
          <hr className="divider" />
          <SideNavItem waves onClick={this.goTo.bind(this, "")}>
            <span className="red-text text-accent-4 sLinks">Home</span>{" "}
          </SideNavItem>
          <hr className="divider" />
          <SideNavItem waves onClick={this.goTo.bind(this, "compendium")}>
            <span className="red-text text-accent-4 sLinks">
              Beginner's Compendium
            </span>
          </SideNavItem>
          <hr className="divider" />

          {isAuthenticated() && (
            <React.Fragment>

                <SideNavItem waves onClick={this.goTo.bind(this, "charactersheet")}>
                  <span className="red-text text-accent-4 sLinks">
                    Custom Character Sheet
                  </span>
                </SideNavItem>
                <hr className="divider" />

            </React.Fragment>
          )}

          
          {!isAuthenticated() && (
            <SideNavItem waves onClick={this.login.bind(this)}>
                <Button flat waves="light" className="login">
                Login
                </Button>
            </SideNavItem>
          )}

          {isAuthenticated() && (

              <Button onClick={this.logout.bind(this)}  flat waves="light" className="login">
                Logout
              </Button>

          )}




        </SideNav>
      </div>
    );
  }
}

export default SNav;
