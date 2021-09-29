import { Circle } from 'react-konva';

const Ball = ({x,y,fill,hitBall}) => {
    return (
        <Circle
            x={x}
            y={y}
            width={30}
            height={40}
            radius={50}
            fill={fill}
            stroke="white"
            strokeWidth={2}
            onClick={hitBall}
        />
    )
}

export default Ball