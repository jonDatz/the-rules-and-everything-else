import React, { Component } from 'react';
import Card from '../Card/Card';

class Profile extends Component {
  
  findOrCreateUser = (user) => {
    console.log('CreateUser Ran');
    fetch('/user', {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({user: user})
    }).then(res => {
      console.log(res);
      return res.json();
    }).then(res => {
      console.log(res)
    });
  }

  componentWillMount() {
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
    };
  }
  render() {
    const { profile } = this.state;
    return (
      <React.Fragment>
        <Card spell={this.props.spell} classes={this.props.classes} school={this.props.school} />
        <Card save={this.props.save} articles={this.props.articles} profile={profile} />
      </React.Fragment>
    );
  }
}

export default Profile;