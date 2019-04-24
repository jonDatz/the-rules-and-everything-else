import React, { Component } from "react";
// import Card from '../Card/Card';
import SpellCard from '../Card/SpellCard';
import ArtCard from '../Card/ArtCard';
import Head from '../Head/Head';
import Profile from '../Profile/Profile';
import { timingSafeEqual } from "crypto";

class Home extends Component {
  state = {
    spell: {},
    isLoaded: false,
    error: null,
    profile: {}
  };

  saveArticle = (id, user) => {
    const savedArticle = {
      articleId: id,
      user: user
    };

    fetch('/api/save', {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(savedArticle)
    }).then(res => {
      return res.json();
    }).then(res => {
      this.setState({savedArticles: res.articles});

    });

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

    fetch('/api/scrape')
      .then(res => {
        console.log(res);
        fetch('/articles')
          .then(res => {
            return res.json()
          })
          .then(res => {
            console.log(res);
            this.setState({
              articles: res
            });
            console.log(this.state);
          })
      });
  }

  render() {

    const { error, spell, articles } = this.state;
    const { isAuthenticated } = this.props.auth;

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
            <Head />
            <div className="row">
              {isAuthenticated() && (<Profile save={this.saveArticle} auth={this.props.auth} spell={spell} classes={this.state.classes} school={this.state.school} articles={articles} />)}
              {!isAuthenticated() && (
                <SpellCard auth={this.props.auth} spell={spell} classes={this.state.classes} school={this.state.school} />)}
              {!isAuthenticated() && (<ArtCard save={this.saveArticle} articles={articles} auth={this.props.auth} />)}
              {/* <SpellCard spell={spell} classes={this.state.classes} school={this.state.school} /> */}


            </div>
          </div>
        </React.Fragment>
      )
    }
  }
}

export default Home;