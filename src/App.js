import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { resetState } from 'react-modal/lib/helpers/ariaAppHider';
import './App.css';
import Player from './components/Player/Player';

Modal.setAppElement('#root');

function App() {
  const [score, setScore] = useState([
    { name: "P1", score: 0 }, 
    { name: "P2", score: 0 }, 
    { name: "P3", score: 0 }, 
  ]);

  const [maxScore, setMaxScore] = useState(11);

  const [playerWins, setPlayerWins] = useState(null)

  const [modalIsOpen, setIsOpen] = useState(true);

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };


  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  
  function changeName(index, newName){
    let newState = [...score];
    newState[index] = {...newState[index], name: newName};
    console.log(newState);
    setScore(newState);
  }

  function increaseScore(index) {
    if (score[index].score < maxScore) {
      let newScore = [...score];
      newScore[index].score++;
      console.log(newScore);
      setScore(newScore);
    }
    else if (score[index].score == maxScore) {
      console.warn(score[index].name + " wins");
      setPlayerWins(score[index].name);
    }
  }

  function decresaseScore(index) {
    if (score[index].score > 0) {
      let newScore = [...score];
      newScore[index].score--;
      console.log(newScore);
      setScore(newScore);
    }
  }

  function addPlayer() {
    let newPlayers = [...score, {name: "P1", score: 0}];
    setScore(newPlayers);
  }

  function removePlayer(index) {
    let newPlayers = [...score];
    newPlayers.splice(index, 1);
    setScore(newPlayers);
  }

  function resetGame(){
    setPlayerWins(null);
    let newScore = score.map((player) => {
      //player.score = 0;
      return({...player, score: 0});
    });
    setScore(newScore);

  }

  useEffect(() => {

  }, [score])

  return (
    <div className="abacus">
      <Modal
        isOpen={Boolean(playerWins)}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 className='mb-4'>{playerWins} wins!</h2>
        <button 
        className='relative bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 text-sm text-white font-semibold h-12 px-6 rounded-lg flex items-center dark:bg-slate-700 dark:hover:bg-slate-600 pointer-events-auto'
        onClick={resetGame}>Restart</button>
      </Modal>
      <div className={"actions " + (playerWins ? "disabled" : "")} >
        <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Settings</button>
        <button onClick={addPlayer}  className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Add player</button>
      </div>
      {
        score.map((player, i) =>
          <Player key = {i} name = {player.name} score={player.score}  disabled = {playerWins} onRemovePlayer={() => removePlayer(i)} onIncrease={() => increaseScore(i)} onDecrease={() => decresaseScore(i)} onChangeName = {(newName) => changeName(i, newName)}></Player>)
      }

    </div>
  );
}

export default App;