import React from 'react';

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
                        <div className="card-content white-text">
                            <span className="card-title">Recent D&D articles</span>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Headline</th>
                                        <th>Summary</th>
                                        <th>Save</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {props.articles.map((element) => (
                                    <tr>
                                        <td><a href={element.link} target='_blank'>{element.headline}</a></td>
                                        <td>{element.summary}</td>
                                        <td><button>Save</button></td>
                                    </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                )
            }
        </React.Fragment>
    )
};

export default Card;
