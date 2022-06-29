import "./App.css";
import { useEffect, useState } from "react";
import MoleContainer from "./MoleContainer";

function App() {
  const [score, setScore] = useState(0);
  const [isOn, setIsOn] = useState(false);

  const createMoleHill = () => {
    let hills = [];
    for (let i = 0; i < 9; i++) {
      hills.push(<MoleContainer key={i} setScore={setScore} score={score} />);
    }
    return <div>{hills}</div>;
  };

  const handleChange = () => {
    setIsOn(true);
  };

  useEffect(() => {}, [isOn]);

  return (
    <div className="App">
      <h1>React-a-Mole!</h1>

      <div className="score">Score : {score}</div>

      <div>
        {isOn === false && (
          <button onClick={handleChange}>Play react a mole!</button>
        )}

        {isOn === true && (
          <button onClick={() => setIsOn(false)}>Pause! I need a break!</button>
        )}

        {score > 0 && <button onClick={() => setScore(0)}>Reset Score</button>}
      </div>

      <div>{isOn ? createMoleHill() : null}</div>
    </div>
  );
}

export default App;
