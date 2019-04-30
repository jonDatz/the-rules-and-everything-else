import React, { Component } from "react";
import { Tab, Tabs } from 'react-materialize';

class ArtCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false
    }
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
      this.setState({...this.state, savedArticles: res.articles });
    });
  };

  componentDidMount() {
    this._isMounted = true;
    fetch('/api/scrape')
      .then(res => {
        // console.log(res);
        fetch('/db/articles')
          .then(res => {
            return res.json()
          })
          .then(res => {
            console.log('We ran through the article fetch');
            // console.log(res);
            // console.log(this.state);
            this._isMounted && this.setState({articles: res, isLoaded: true})
            console.log(this.state);
          })
      });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return (
      <React.Fragment>
        {this.state.isLoaded &&
          (<div className="col s12 m7">
            <div className="card blue-grey darken-1">
              {this.props.profile && this.props.savedArticles ? (
                <React.Fragment>
                  <div className="card-content">
                    <span className="card-title">D&D articles Via WotC</span>
                    <Tabs className='tab-demo z-depth-1 overRide'>
                      <Tab title='Recent' active id='tabNav'>
                        <div className='tabContent'>
                          <div className="card-content grey lighten-4">
                            <div id="recentArticles">
                              <table>
                                <thead>
                                  <tr>
                                    <th>Headline</th>
                                    <th>Summary</th>
                                    <th>Save</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {this.state.articles.map((element, index) => (
                                    <tr key={index}>
                                      <td><a href={element.link} target='_blank'>{element.headline}</a></td>
                                      <td>{element.summary}</td>
                                      <td><button onClick={() => this.saveArticle(element._id, this.props.profile.name)}>Save</button></td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </Tab>
                      <Tab title='Saved' id='tabNav'>
                        <div className='tabContent'>
                          <div className="card-content grey lighten-4">
                            <div id="savedArticles">
                              <table>
                                <thead>
                                  <tr>
                                    <th>Headline</th>
                                    <th>Summary</th>
                                    <th>Save</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {this.props.savedArticles.map((element, index) => (
                                    <tr key={index}>
                                      <td><a href={element.link} target='_blank'>{element.headline}</a></td>
                                      <td>{element.summary}</td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </Tab>
                    </Tabs>
                  </div>
                </React.Fragment>) : (
                  <React.Fragment>
                    <div className="card-content">
                      <span className="card-title">D&D articles Via WotC</span>
                      <Tabs className='tab-demo z-depth-1 overRide'>
                        <Tab title='Recent' active id='tabNav'>
                          <div className='tabContent'>
                            <div className="card-content grey lighten-4">
                              <div id="recentArticles">
                                <table>
                                  <thead>
                                    <tr>
                                      <th>Headline</th>
                                      <th>Summary</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {this.state.articles.map((element, index) => (
                                      <tr key={index}>
                                        <td><a href={element.link} target='_blank'>{element.headline}</a></td>
                                        <td>{element.summary}</td>
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </Tab>
                        <Tab title='Saved' id='tabNav'>
                          <div className='tabContent'>
                            <div className="card-content grey lighten-4">
                              <div id="savedArticles">
                                <p>Make an Account to be able to save articles to read later!</p>
                              </div>
                            </div>
                          </div>
                        </Tab>
                      </Tabs>
                    </div>
                  </React.Fragment>
                )}
            </div>
          </div>
          )}
      </React.Fragment>
    )
  }
}

export default ArtCard;
