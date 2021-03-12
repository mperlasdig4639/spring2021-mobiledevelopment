import React, {useState} from 'react'
import squat from "./images/squat.jpg"

function Squat () {
    const [reps, setReps] = useState(0);
    
    const styling = {
        color: "coral",
        fontFamily: "Helvetica, Arial, sans-serif"
    };
    const stylingImg = {
        height: "250px",
        width: "auto"
    };

    return (
        <div>
            <img style={stylingImg} src={squat} alt="squat" />
            <h2 style={styling}>Squats: {reps}</h2>
            <button onClick={() => setReps(reps + 1)}>Add Rep</button>
            <button onClick={() => setReps(0)}>Reset Reps</button>
        </div>
    )
}

export default Squat;