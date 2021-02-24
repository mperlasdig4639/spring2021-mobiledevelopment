import React, {Component} from 'react'

class LapRun extends Component {
    constructor(props) {
        super(props);
        this.state = {
            laps: 0
        };
    };


    render() {
        return(
            <div>
                <h2>Laps Run: {this.state.laps}</h2>
                <button onClick={() => this.setState({laps: this.state.laps + 1})}>Add Lap</button>
                <button onClick={() => this.setState({laps: 0})}>Reset Laps</button>
            </div>
        )
    }

}

export default LapRun;