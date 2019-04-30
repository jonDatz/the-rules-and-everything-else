import React, { Component } from "react";
// import Card from '../Card/Card';
import SpellCard from '../Card/SpellCard';
import ArtCard from '../Card/ArtCard';
import Head from '../Head/Head';
import Profile from '../Profile/Profile';
import { timingSafeEqual } from "crypto";

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false
    }

  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props != nextProps;
  }
  render() {

    const { isAuthenticated } = this.props.auth;
    if (!isAuthenticated()) {
      return (
        <React.Fragment>
          <div className="sidenav-spacing">
            <Head />
            <div className='row'>
              <SpellCard />
              <ArtCard auth={this.props.auth} />
            </div>
          </div>
        </React.Fragment>
      )
    } else {
      return (
        <React.Fragment>
          <div className="sidenav-spacing">
            <Head />
            <div className="row">
              <Profile auth={this.props.auth} />
            </div>
          </div>
        </React.Fragment>
      )
    }
  }
}

export default Home;