import React, { Component } from "react";
import Card from '../Card/Card';

class Home extends Component {
  state = {
    spell: {},
    isLoaded: false,
    error: null
  };


  componentDidMount() {
    console.log('hey I mounted');
    fetch('/api/random/spell')
      .then(res => {
        console.log(res);
        return res.json();
      })
      .then((data) => {
        console.log(data);
        console.log(data.school.name);
        this.setState({
          isLoaded: true,
          spell: data,
          school: data.school.name,
          classes: data.classes.map(item => {
            return item.name
          })
        });
        console.log(this.state)

      }, (error) => {
        console.error(error)
        this.setState({
          isLoaded: true,
          error: error
        });
      });
  }


  render() {
    
    const { error, spell } = this.state;

    if (error) {
      return (
        <React.Fragment>
          <div className="sidenav-spacing">
            <h1>Home Page</h1>
            
          </div>
        </React.Fragment>
      )
    } else {
      return (
        <React.Fragment>
          <div className="sidenav-spacing">
            <h1>Home Page</h1>
            <div class="row">
              <Card spell={spell} classes={this.state.classes} school={this.state.school} />
              <Card />
            </div>
          </div>
        </React.Fragment>
      )
    }
  }
}

export default Home;