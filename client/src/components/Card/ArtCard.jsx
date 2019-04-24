import React from "react";
import { Tab, Tabs } from 'react-materialize';

const ArtCard = (props) => {
  console.log(props);
  return (
    <React.Fragment>
      {props.articles && 
    (<div className="col s12 m7">
      <div className="card blue-grey darken-1">
        {props.profile && props.savedArticles ? (
          <React.Fragment>
            <div className="card-content blue-grey darken-1">
              <span className="card-title">D&D articles Via WotC</span>
            </div>
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
                          {props.articles.map((element, index) => (
                            <tr key={index}>
                              <td><a href={element.link} target='_blank'>{element.headline}</a></td>
                              <td>{element.summary}</td>
                              <td><button onClick={() => props.save(element._id, props.profile.name)}>Save</button></td>
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
          </React.Fragment>) : (
            <React.Fragment>
              <div className="card-content white-text">
                <span className="card-title">D&D articles Via WotC</span>
                <table>
                  <thead>
                    <tr>
                      <th>Headline</th>
                      <th>Summary</th>
                      <th>Save</th>
                    </tr>
                  </thead>
                  <tbody>
                    {props.articles.map((element, index) => (
                      <tr key={index}>
                        <td><a href={element.link} target='_blank'>{element.headline}</a></td>
                        <td>{element.summary}</td>
                        <td><button>Save</button></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
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
