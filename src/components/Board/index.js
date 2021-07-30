import { Stage, Layer, Circle, Group, } from 'react-konva';

const Board = ({ handleClickBall, handleClickBoard, layerRef, balls }) => {
  return (
    <section style={{ width: "1280px", height: "500px", background: "blue", margin: "60px auto" }}>
      <Stage width={1280} height={500} onClick={handleClickBoard}>
        <Layer width={1280} height={500} ref={layerRef}>
          <Group x={60} y={60}>
            {balls.map(ball =>
              <Circle key={ball.id} x={ball.x} y={ball.y} radius={ball.radius} fill={ball.fill} onClick={() => handleClickBall(ball.id)} />)}

          </Group>
        </Layer>
      </Stage>
    </section>
  );
};
export default Board;
