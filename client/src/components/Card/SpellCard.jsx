import React from 'react';
import "./style.css";

function SpellCard(props) {
    return (
        <React.Fragment>
            <div className="col s12 m4">
                <div className="card deep-purple lighten-5 home-cards">
                    <div className="card-content black-text">
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
                        <div className="scroll scroll1">
                            <p className="spellDescription">{props.spell.desc}</p>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};

export default SpellCard;
