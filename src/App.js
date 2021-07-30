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

  const difficultyOptions = (difficulty) => {
    switch (difficulty) {
      case "easy":
        return {
          totalBalls: 20,
          width: 80,
          height: 80
        };
      case "normal":
        return {
          totalBalls: 30,
          width: 30,
          height: 30
        };
      case "hard":
        return {
          totalBalls: 40,
          width: 20,
          height: 20
        };
      default: return;
    }
  };

  useEffect(() => {
    if (!isGameStarted) return setBalls([]);

    const { totalBalls, width, height } = difficultyOptions(difficulty);
    let arr = [];
    const colors = ['#83BCFF', '#73E2A7', '#BFC0C0', '#645986'];

    for (let x = 0; x < totalBalls; x++) {
      arr.push({
        id: (Math.random() * 1000),
        x: (Math.random() * 1000),
        y: (Math.random() * 400),
        height,
        width,
        radius: 50,
        fill: colors[Math.floor(Math.random() * colors.length)],
        stroke: colors[Math.floor(Math.random() * colors.length)],
      });
      setBalls(arr);
    }
  }, [isGameStarted, difficulty]);

  const handleHitBalls = (id) => {
    setScore(score => score + 1);
    const newBalls = balls.filter(ball => ball.id !== id);
    setBalls(newBalls);

  };
  const handleClickBoard = (e) => {
    if (errors === 10 || !isGameStarted) {
      setIsGameStarted(false);
      setErrors(0);
      setScore(0);
      return;
    }
    e.currentTarget.width && setErrors(errors => errors + 1);

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
        handleClickBoard={handleClickBoard}
        handleClickBall={handleHitBalls}
        layerRef={layerRef}
        balls={balls}
        errors={errors} />
    </main>
  );
}

export default App;
