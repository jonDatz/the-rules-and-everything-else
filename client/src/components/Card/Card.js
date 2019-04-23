import React from 'react';
import { Tabs, Tab } from 'react-materialize';

function Card(props) {
    return (
        <React.Fragment>
            {
                props.spell &&
                (
                    <div className="col s12 m5">
                        <div className="card blue-grey darken-1">
                            <div className="card-content white-text">
                                <span className="card-title">Spell of the Day</span>
                                <p>Thanks for Visiting us! </p>
                                <p>Here's a random Spell from the SRD as a reward.</p>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>{props.spell.name}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Casting time</td>
                                            <td>{props.spell.casting_time}</td>
                                        </tr>
                                        <tr>
                                            <td>Components</td>
                                            <td>{props.spell.components}</td>
                                        </tr>
                                        <tr>
                                            <td>Range</td>
                                            <td>{props.spell.range}</td>
                                        </tr>
                                        <tr>
                                            <td>Concentration</td>
                                            <td>{props.spell.concentration}</td>
                                        </tr>
                                        <tr>
                                            <td>School</td>
                                            <td>{props.school}</td>
                                        </tr>
                                        <tr>
                                            <td>Eligable Classes</td>
                                            <td>{' ' + props.classes}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <p>{props.spell.desc}</p>

                                <div className="card-action">
                                    <a href="#">Magic Button</a>
                                </div>
                            </div>
                        </div>
                    </div>)
            }
            {props.articles &&
                (<div className="col s12 m7">
                    <div className="card blue-grey darken-1">
                        {props.profile ? (
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
                                                                    <td><button data-id={element._id}>Save</button></td>
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
                                                <div id="savedArticles">Saved Articles once I make that route</div>
                                            </div>
                                        </div>
                                    </Tab>
                                </Tabs>
                                {/* <div class="card-tabs">
                                    <ul class="tabs tabs-fixed-width">
                                        <li class="tab"><a href="#recentArticles">Recent</a></li>
                                        <li class="tab"><a class="active" href="#savedArticles">Saved</a></li>
                                    </ul>
                                </div>
                                <div class="card-content grey lighten-4">
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
                                                        <td><button data-id={element._id}>Save</button></td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                    <div id="savedArticles">Saved Articles once I make that route</div>
                                </div> */}
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
                )
            }
        </React.Fragment>
    )
};

export default Card;
