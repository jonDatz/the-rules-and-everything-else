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
      spell: {},
      isLoaded: false,
      error: null,
      profile: {}
    };
    this._isMounted = false;
    this.saveArticle = this.saveArticle.bind(this);
  }
  

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
      this._isMounted && this.setState({savedArticles: res.articles});
    });
  };

  componentDidMount() {
    this._isMounted = true;
    let newState = {};
    fetch('/api/random/spell')
      .then(res => {
        if (res) {
        return res.json();
        }
      })
      .then((data) => {
        newState.isLoaded = true;
        newState.spell = data;
        newState.school = data.school.name;
        newState.classes = data.classes.map(item => {
            return item.name
          });

      }, (error) => {
        console.error(error)
        this.setState({
          isLoaded: true,
          error: error
        });
      });

    fetch('/api/scrape')
      .then(res => {
        fetch('/db/articles')
          .then(res => {
            return res.json()
          })
          .then(res => {       
            newState.articles = res;
            this._isMounted && this.setState(newState)
          })
      });
  }
  componentWillUnmount() {
    this._isMounted = false;
  }
  shouldComponentUpdate(nextProps, nextState) {
    return this.state != nextState;
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
            </div>
          </div>
        </React.Fragment>
      )
    }
  }
}

export default Home;