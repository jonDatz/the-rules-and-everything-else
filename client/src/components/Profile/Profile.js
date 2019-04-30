import React, { Component } from 'react';
import ArtCard from '../Card/ArtCard';
import SpellCard from '../Card/SpellCard';

class Profile extends Component {

  constructor(props) {
    super(props);
    this._isMounted = false;
    this.findOrCreateUser = this.findOrCreateUser.bind(this);
  }

  findOrCreateUser = (user) => {
    console.log('CreateUser Ran');
    fetch('/db/user', {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ user: user.name })
    }).then(res => {
      console.log(res);
      return res.json();
    }).then(res => {
      console.log(res)
      if (res.articles) {
        this._isMounted && this.setState({ savedArticles: res.articles, profile: user })
      };
    });
  };

  componentDidMount() {
    this._isMounted = true;
    this.setState({ profile: {} });
    const { userProfile, getProfile } = this.props.auth;
    if (!userProfile) {
      getProfile((err, profile) => {
        console.log(profile)
        // this.setState({ profile });
        this.findOrCreateUser(profile);
      });
    } else {
      // this.setState({ profile: userProfile });
      this.findOrCreateUser(userProfile);
    };
  }

  componentWillUnmount () {
    this._isMounted = false;
  }

  render() {
    if (!this.state) {
      return (
        <React.Fragment>
          <div>...loading</div>
        </React.Fragment>
      )
    } else {
      const { profile, savedArticles } = this.state;
      return (
        <React.Fragment>
          <SpellCard spell={this.props.spell} classes={this.props.classes} school={this.props.school} />
          <ArtCard auth={this.props.auth} save={this.props.save} savedArticles={savedArticles} articles={this.props.articles} profile={profile} />
        </React.Fragment>
      )
    }
  }
}

  export default Profile;