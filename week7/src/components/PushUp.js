import React, {Component} from 'react'
import pushUp from "./images/pushup.jpg"

class PushUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reps: 0
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
                <img style={stylingImg} src={pushUp} alt="pushup" />
                <h2 style={styling}>Push-up reps: {this.state.reps}</h2>
                <button onClick={() => this.setState({reps: this.state.reps + 1})}>Add Rep</button>
                <button onClick={() => this.setState({reps: 0})}>Reset Reps</button>
            </div>
        )
    }

}

export default PushUp;