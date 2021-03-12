import PullUp from './components/PullUp'
import LapRun from './components/LapRun'
import PushUp from './components/PushUp'
import Squat from './components/Squat'

function App() {
  return (
    <div className="App">
        <h1>Exercise Tracker</h1>
        <h3>by MJ Perlas</h3>
        <PullUp/>
        <LapRun/>
        <PushUp/>
        <Squat/>
    </div>
  );
}

export default App;
