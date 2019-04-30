import React, { Component } from 'react';

class SpellCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            spell: {},
            isLoaded: false,
            error: null,
        };
    }

    componentDidMount() {
        let newState = {};
        console.log('hey I mounted');
        fetch('/api/random/spell')
            .then(res => {
                console.log(res);
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
                console.log(newState)
                this.setState(newState);
            }, (error) => {
                console.error(error)
                this.setState({
                    isLoaded: true,
                    error: error
                });
            });
    }

    render() {
        return (
            <React.Fragment>
                {this.state.isLoaded &&
                    <div className="col s12 m5">
                        <div className="card grey darken-4">
                            <div className="card-content white-text">
                                <span className="card-title">Spell of the Day</span>
                                <p>Thanks for Visiting us! </p>
                                <p>Here's a random Spell from the SRD as a reward.</p>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>{this.state.spell.name}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Casting time</td>
                                            <td>{this.state.spell.casting_time}</td>
                                        </tr>
                                        <tr>
                                            <td>Components</td>
                                            <td>{this.state.spell.components}</td>
                                        </tr>
                                        <tr>
                                            <td>Range</td>
                                            <td>{this.state.spell.range}</td>
                                        </tr>
                                        <tr>
                                            <td>Concentration</td>
                                            <td>{this.state.spell.concentration}</td>
                                        </tr>
                                        <tr>
                                            <td>School</td>
                                            <td>{this.state.school}</td>
                                        </tr>
                                        <tr>
                                            <td>Eligable Classes</td>
                                            <td>{' ' + this.state.classes}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <p>{this.state.spell.desc}</p>

                                <div className="card-action">
                                    <a href="#">Magic Button</a>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </React.Fragment>
        )
    }
};

export default SpellCard;
