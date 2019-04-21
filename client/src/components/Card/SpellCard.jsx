import React from 'react';

function SpellCard(props) {
    return (
        <React.Fragment>
            {
                props.spell &&
                (
                    <div className="col s12 m5">
                        <div className="card grey darken-4">
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

        </React.Fragment>
    )
};

export default SpellCard;
