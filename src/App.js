import { useEffect, useState, useRef } from 'react';

import Board from './components/Board';
import Score from './components/Score';

import './App.css';

function App() {
  const [score, setScore] = useState(0);
  const [errors, setErrors] = useState(0);
  const [balls, setBalls] = useState([]);
  const [difficulty, setDifficulty] = useState('easy');
  const layerRef = useRef();
  const [isGameStarted, setIsGameStarted] = useState(false);





  const startGame = () => {
    if (isGameStarted) {
      setBalls([]);
      setErrors(0);
      setIsGameStarted(!isGameStarted);
    }
    setIsGameStarted(!isGameStarted);
  };



  useEffect(() => {
    if(!isGameStarted) return setBalls([])
    const colors = ['#83BCFF', '#73E2A7', '#BFC0C0', '#645986'];
    let speed = 1000

    setInterval(() => {
      const newBall = {
        id: Math.floor(Math.random() * 100000),
        x: Math.floor(Math.random() * 1100),
        y: Math.floor(Math.random() * 400),
        height: 30,
        width: 30,
        radius: 50,
        fill: colors[Math.floor(Math.random() * colors.length)],
        stroke: colors[Math.floor(Math.random() * colors.length)],
      }
      setBalls(balls => [...balls,newBall])
    }, speed)

  },[isGameStarted])

 
  const handleHitBalls = (id) => {
    setScore(score => score + 1);
    const newBalls = balls.filter(ball => ball.id !== id);
    setBalls(newBalls);
  };

  const boardClick = (e) => {
    if (errors === 10 || !isGameStarted) {
      setIsGameStarted(false);
      setErrors(0);
      setScore(0);
      return;
    }
    e.target.attrs.container && setErrors(errors => errors + 1);
  };

  return (
    <main>
      <Score
        value={score}
        errors={errors}
        startGame={startGame}
        isGameStarted={isGameStarted} difficulty={difficulty}
        setDifficulty={setDifficulty} />
      <Board
        handleClickBoard={boardClick}
        hitBall={handleHitBalls}
        layerRef={layerRef}
        balls={balls}
        errors={errors} />
    </main>
  );
}

export default App;
