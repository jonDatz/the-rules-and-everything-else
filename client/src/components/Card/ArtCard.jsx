import React from "react";
import { Tab, Tabs, Button } from 'react-materialize';

const ArtCard = (props) => {
  console.log(props);
  return (
    <React.Fragment>
      {props.articles &&
        (<div className="col s12 m8">
          <div className="card white">
            {props.profile && props.savedArticles ? (
              <React.Fragment>
                <div className="card-content article-card white">
                  <span className="card-title"><strong>D&D articles provided by Wizards of the Coast</strong></span>
                  <Tabs className='tab-demo z-depth-1 overRide'>
                    <Tab title='Latest' active id='tabNav'>
                      <div className='tabContent'>
                        <div className="card-content grey lighten-4">
                          <div id="recentArticles">
                            <table>
                              <thead>
                                <tr>
                                  <th>Headline</th>
                                  <th>Summary</th>
                                  <th>Bookmark</th>
                                </tr>
                              </thead>
                              <tbody>
                                {props.articles.map((element, index) => (
                                  <tr key={index}>
                                    <td><a href={element.link} target='_blank'>{element.headline}</a></td>
                                    <td>{element.summary}</td>
                                    <td><Button className="purple darken-3" waves="light" onClick={() => props.save(element._id, props.profile.name)}>Save</Button></td>
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
                                </tr>
                              </thead>
                              <tbody>
                                {props.savedArticles.map((element, index) => (
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

                // logged out card
                <React.Fragment>
                <div className="card-content article-card white">
                  <span className="card-title"><strong>D&D articles provided by Wizards of the Coast</strong></span>
                  <Tabs className='tab-demo z-depth-1 overRide'>
                    <Tab title='Latest' active id='tabNav'>
                      <div className='tabContent'>
                        <div className="card-content grey lighten-4">
                          <div id="recentArticles">
                            <table>
                              <thead>
                                <tr>
                                  <th>Headline</th>
                                  <th>Summary</th>
                                  <th>Bookmark</th>
                                </tr>
                              </thead>
                              <tbody>
                                {props.articles.map((element, index) => (
                                  <tr key={index}>
                                    <td><a href={element.link} target='_blank'>{element.headline}</a></td>
                                    <td>{element.summary}</td>
                                    <td><Button className="purple darken-3" waves="light" onClick={() => props.save(element._id, props.profile.name)}>Save</Button></td>
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

                              <tbody>
                                  <td><h1>Login to save articles! <i className="material-icons medium">sentiment_satisfied</i></h1></td>
                              </tbody>
                            </table>
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

export default ArtCard;
