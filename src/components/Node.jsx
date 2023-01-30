import React from 'react';
import {FaCarAlt,FaAsterisk} from 'react-icons/fa';

const Node = ({
    className,
    col,
    isFinish,
    isStart,
    isWall,
    onMouseDown,
    onMouseEnter,
    onMouseUp,
    row
}) => {

    return (
        <div
            id={`node-${row}-${col}`}
            className={` ${isWall ? "node-wall" : ""} ${className }`}
            onMouseDown={() => onMouseDown(row, col)}
            onMouseEnter={() => onMouseEnter(row, col)}
            onMouseUp={() => onMouseUp()}
        >{isStart ? <FaCarAlt /> : isFinish ? <FaAsterisk /> :  ""}</div>
    );
};

export default Node;
