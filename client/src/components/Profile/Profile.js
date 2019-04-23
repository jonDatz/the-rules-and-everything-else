import React, { Component } from 'react';
import Card from '../Card/Card';

class Profile extends Component {
  componentWillMount() {
    this.setState({ profile: {} });
    const { userProfile, getProfile } = this.props.auth;
    if (!userProfile) {
      getProfile((err, profile) => {
        console.log(profile)
        this.setState({ profile });
      });
    } else {
      this.setState({ profile: userProfile });
    }
  }
  render() {
    const { profile } = this.state;
    return (
      <React.Fragment>
        <Card spell={this.props.spell} classes={this.props.classes} school={this.props.school} />
        <Card articles={this.props.articles} profile={profile} />
      </React.Fragment>
    );
  }
}

export default Profile;