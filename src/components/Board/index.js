import { Stage, Layer, Group, } from 'react-konva';
import Ball from '../Ball';

const Board = ({ hitBall, handleClickBoard, layerRef, balls }) => {

  const margin = 60
  const boardWidth = window.innerWidth - margin
  const boardHeight = window.innerHeight - margin

  return (
    <>
      <section className="board">
        <Stage width={boardWidth} height={boardHeight} onClick={(e) => handleClickBoard(e)}>
          <Layer ref={layerRef}>
            <Group x={60} y={60}>
              {balls.map(ball => {
               return <Ball key={ball.id} x={ball.x} y={ball.y} hitBall={() => hitBall(ball.id)} fill={ball.fill}/>
              })}
            </Group>
          </Layer>
        </Stage>
      </section>
    </>
  );
};
export default Board;
