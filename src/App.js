import { useEffect, useState, useRef } from 'react';

import Board from './components/Board';
import Score from './components/Score';

import './App.css';

function App() {
  const [score, setScore] = useState(0);
  const [errors, setErrors] = useState(0);
  const [balls, setBalls] = useState([]);

  const layerRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isGameStarted, setIsGameStarted] = useState(false);

  /*  useEffect(() => {
     if (!isPlaying || !isGameStarted) return;
     console.log(isPlaying);
   }, [isPlaying, isGameStarted]); */

  const startGame = () => {
    console.log('iniciei');
    setIsGameStarted(!isGameStarted);
    setIsPlaying(true);
  };

  useEffect(() => {
    if (!isGameStarted) return setBalls([]);
    let arr = [];
    for (let x = 0; x < 20; x++) {
      arr.push({
        id: (Math.random() * 1000),
        x: (Math.random() * 1000.81),
        y: (Math.random() * 400),
        radius: 50,
        fill: "green"
      });
      setBalls(arr);
    }
  }, [isGameStarted]);

  const handleHitBalls = (id) => {
    setScore(score => score + 1);
    const newBalls = balls.filter(ball => ball.id !== id);
    setBalls(newBalls);

  };
  const handleClickBoard = () => {
    if (layerRef.current.children) return;
    console.log("stage");
  };

  return (
    <main>
      <Score value={score} errors={errors} startGame={startGame} />
      <Board handleClickBoard={handleClickBoard} handleClickBall={handleHitBalls} layerRef={layerRef} balls={balls} />
    </main>
  );
}

export default App;
