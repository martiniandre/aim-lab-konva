import { Stage, Layer, Circle, Group, } from 'react-konva';

const Board = ({ handleClickBall, handleClickBoard, layerRef, balls }) => {
  return (
    <>
      <section style={{ width: "1280px", height: "550px", margin: "60px auto" }}>
        <Stage width={1280} height={550} onClick={(e) => handleClickBoard(e)}>
          <Layer ref={layerRef}>
            <Group x={60} y={60}>
              {balls.map(ball => (
                <Circle
                  key={ball.id}
                  x={ball.x}
                  y={ball.y}
                  width={30}
                  height={40}
                  radius={ball.radius}
                  fill={ball.fill}
                  stroke="white"
                  strokeWidth={2}
                  onClick={() => handleClickBall(ball.id)} />


              ))}
            </Group>
          </Layer>
        </Stage>
      </section>
    </>
  );
};
export default Board;
