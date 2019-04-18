import React, { Component } from "react";

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
    const { isAuthenticated } = this.props.auth;
    const { error, spell } = this.state;

    if (error) {
      return (
        <React.Fragment>
          <div className="sidenav-spacing">
            <h1>Home Page</h1>
            {
              !isAuthenticated() && (
                <h2>
                  Ayyyyy, you aren't logged in
              </h2>
              )
            }
            {
              isAuthenticated() && (
                <h2>
                  Yay!!!!! you are logged in
              </h2>
              )
            }
            <div class="row">
              <div class="col s12 m6">
                <div class="card blue-grey darken-1">
                  <div class="card-content white-text">
                    <span class="card-title">Spell of the Day</span>
                    <p>Thanks for Visiting us! </p>
                    <p>Sorry, Something went Wrong Loading your random spell :/ </p>
                  </div>
                  <div class="card-action">
                    <a href="#">Magic Button</a>
                  </div>
                </div>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque velit, lobortis ut magna
              varius, blandit rhoncus sem. Morbi lacinia nisi ac dui fermentum, sed luctus urna tincidunt.
              Etiam ut feugiat ex. Cras non risus mi. Curabitur mattis rutrum ipsum, ut aliquet urna
              imperdiet ac. Sed nec nulla aliquam, bibendum odio eget, vestibulum tortor. Cras rutrum
              ligula in tincidunt commodo. Morbi sit amet mollis orci, in tristique ex. Donec nec ornare
              elit. Donec blandit est sed risus feugiat porttitor. Vestibulum molestie hendrerit massa non
              consequat. Vestibulum vitae lorem tortor. In elementum ultricies tempus. Interdum et
              malesuada fames ac ante ipsum primis in faucibus.
        </p>
          </div>
        </React.Fragment>
      )
    } else {
      return (
        <React.Fragment>
          <div className="sidenav-spacing">
            <h1>Home Page</h1>
            {
              !isAuthenticated() && (
                <h2>
                  Ayyyyy, you aren't logged in
            </h2>
              )
            }
            {
              isAuthenticated() && (
                <h2>
                  Yay!!!!! you are logged in
            </h2>
              )
            }
            <div class="row">
              <div class="col s12 m6">
                <div class="card blue-grey darken-1">
                  <div class="card-content white-text">
                    <span class="card-title">Spell of the Day</span>
                    <p>Thanks for Visiting us! </p>
                    <p>Here's a random Spell from the SRD as a reward.</p>
                    <table>
                      <thead>
                        <tr>
                          <th>{spell.name}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Casting time</td>
                          <td>{spell.casting_time}</td>
                        </tr>
                        <tr>
                          <td>Components</td>
                          <td>{spell.components}</td>
                        </tr>
                        <tr>
                          <td>Range</td>
                          <td>{spell.range}</td>
                        </tr>
                        <tr>
                          <td>Concentration</td>
                          <td>{spell.concentration}</td>
                        </tr>
                        <tr>
                          <td>School</td>
                          <td>{this.state.school}</td>
                        </tr>
                      </tbody>
                    </table>
                    <p>{spell.desc}</p>
                    <p>{' '+this.state.classes}</p>
                    <div>
                      
                    </div>
                  </div>
                  <div class="card-action">
                    <a href="#">Magic Button</a>
                  </div>
                </div>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque velit, lobortis ut magna
              varius, blandit rhoncus sem. Morbi lacinia nisi ac dui fermentum, sed luctus urna tincidunt.
              Etiam ut feugiat ex. Cras non risus mi. Curabitur mattis rutrum ipsum, ut aliquet urna
              imperdiet ac. Sed nec nulla aliquam, bibendum odio eget, vestibulum tortor. Cras rutrum
              ligula in tincidunt commodo. Morbi sit amet mollis orci, in tristique ex. Donec nec ornare
              elit. Donec blandit est sed risus feugiat porttitor. Vestibulum molestie hendrerit massa non
              consequat. Vestibulum vitae lorem tortor. In elementum ultricies tempus. Interdum et
              malesuada fames ac ante ipsum primis in faucibus.
      </p>
          </div>
        </React.Fragment>
      )
    }
  }
}

export default Home;