import React, { Component } from 'react';
import ArtCard from '../Card/ArtCard';
import SpellCard from '../Card/SpellCard';

class Profile extends Component {

  constructor(props) {
    super(props);

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
      body: JSON.stringify({ user: user })
    }).then(res => {
      console.log(res);
      return res.json();
    }).then(res => {
      console.log(res)
      if (res.articles) {
        this.setState({ savedArticles: res.articles })
      };
    });
  };

  componentDidMount() {
    this.setState({ profile: {} });
    const { userProfile, getProfile } = this.props.auth;
    if (!userProfile) {
      getProfile((err, profile) => {
        console.log(profile)
        this.setState({ profile });
        this.findOrCreateUser(profile.name);
      });
    } else {
      this.setState({ profile: userProfile });
      this.findOrCreateUser(userProfile.name);
    };
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