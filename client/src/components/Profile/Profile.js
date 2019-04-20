import React, {Component} from 'react';

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
        <div className="container">
        <p>{profile.name}</p>
          </div>
      );
    }
  }
  
  export default Profile;