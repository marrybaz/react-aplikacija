import React, { Component } from 'react';

export default class Komentar extends Component {
    state = {
        obrisana: false
    }

    obrisi() {
        this.setState({
            obrisana: true
        })
    }

    render() {
        if(this.state.obrisana) return null;
        return (
            <div>
                <p>
                    {this.props.ime} : "<i>{this.props.utisak}</i>"
                    <button onClick={this.obrisi}>x</button>
                </p>
            </div>
        )
    }
}