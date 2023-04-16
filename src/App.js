import { useEffect, useState } from 'react';
import './App.css';
import Player from './components/Player/Player';

function App() {
  const [score, setScore] = useState([0, 0, 0]);

  function increaseScore(index) {
    let newScore = [...score];
    newScore[index]++;
    console.log(newScore);
    setScore(newScore);
  }

  function decresaseScore(index) {
    let newScore = [...score];
    if (newScore[index] > 0) newScore[index]--;
    console.log(newScore);
    setScore(newScore);
  }

  useEffect(() => {

  }, [score])

  return (
    <div className="abacus">
      {
        score.map((playerScore, i) =>
          <Player key = {i} name={"Player " + (i + 1)} score={playerScore} onIncrease={() => increaseScore(i)} onDecrease={() => decresaseScore(i)}></Player>)
      }

    </div>
  );
}

export default App;
