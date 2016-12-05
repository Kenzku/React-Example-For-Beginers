/**
 * Created by huang on 04/12/2016.
 */
import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };
        this.timerID = null;
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(), /*called every 1 second*/
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <p>It is {this.state.date.toLocaleTimeString()}.</p>
            </div>
        );
    }
}

export default Clock;