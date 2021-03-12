import React, {Component} from 'react'
import running from './images/running.jpg'

class LapRun extends Component {
    constructor(props) {
        super(props);
        this.state = {
            laps: 0
        };
    };


    render() {
        const styling = {
            color: "coral",
            fontFamily: "Helvetica, Arial, sans-serif"
        };
        const stylingImg = {
            height: "250px",
            width: "auto"
        };
        return(
            <div>
                <img style={stylingImg} src={running} alt="running" />
                <h2 style={styling}>Laps Run: {this.state.laps}</h2>
                <button onClick={() => this.setState({laps: this.state.laps + 1})}>Add Lap</button>
                <button onClick={() => this.setState({laps: 0})}>Reset Laps</button>
            </div>
        )
    }

}

export default LapRun;