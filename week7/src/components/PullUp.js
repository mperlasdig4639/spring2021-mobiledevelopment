import React, {useState} from 'react'

function PullUp () {
    const [reps, setReps] = useState(0);

    return (
        <div>
            <h2>Pull-up Reps: {reps}</h2>
            <button onClick={() => setReps(reps + 1)}>Add Rep</button>
            <button onClick={() => setReps(0)}>Reset Counter</button>
        </div>
    )
}

export default PullUp;