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
        <SideNav trigger={<Button className="hamburger"><i className="material-icons">menu</i></Button>} options={{ closeOnClick: true, draggable: true}} className="sidenav sidenav-fixed">
          <div className="title">
            <h2 className="white-text title-1">The Rules...</h2>
            <h4 className="title-2 white-text">
              <strong>& Everything Else</strong>
            </h4>
          </div>
          <hr className="divider" />
          <SideNavItem waves onClick={this.goTo.bind(this, "")}>
            <span className="white-text sLinks">Home</span>{" "}
          </SideNavItem>
          <hr className="divider" />
          <SideNavItem waves onClick={this.goTo.bind(this, "compendium")}>
            <span className="white-text text-accent-4 sLinks">
              Beginner's Compendium
            </span>
          </SideNavItem>
          <hr className="divider" />

          {isAuthenticated() && (
            <React.Fragment>

                <SideNavItem waves onClick={this.goTo.bind(this, "charactersheet")}>
                  <span className="white-text text-accent-4 sLinks">
                    Custom Character Sheet
                  </span>
                </SideNavItem>
                <hr className="divider" />

            </React.Fragment>
          )}

          
          {!isAuthenticated() && (
            <SideNavItem waves onClick={this.login.bind(this)}>
                <span className="white-text text-accent-4 sLinks"> Login  </span>
            </SideNavItem>
          )}

          {isAuthenticated() && (



          <SideNavItem waves onClick={this.logout.bind(this)}>
            <span className="white-text text-accent-4 sLinks"> Logout </span>
          </SideNavItem>

          )}




        </SideNav>
      </div>
    );
  }
}

export default SNav;
