import React, { Component } from 'react';

class OpenWeather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            temp: 0
        };
    }

    componentDidMount() {        
        // let url = 'http://api.openweathermap.org/data/2.5/weather?q=' + this.props.city + '&APPID=7646f7548ba1b2c60b152bfe7750967d';
        // let request = new Request(url);

        fetch('http://api.openweathermap.org/data/2.5/weather?q=' + this.props.city + '&APPID=7646f7548ba1b2c60b152bfe7750967d')
        .then(function (request) {
            return request.json();
        })
        .then(
            (result) => {
                console.log(result.main.temp);
                this.setState({
                    isLoaded: true,
                    temp: (result.main.temp-273.15).toFixed(1)
                });
              },
              (error) => {
                this.setState({
                  isLoaded: true,
                  temp: -1000
                });
              }
                        
        );
    }
    render() {
        
        if (!this.state.isLoaded) {
            return <div>...</div>;
        } else {
            return (
                <div>
                    {this.state.temp}
                </div>
            );
        }
    }
}

export default OpenWeather;

