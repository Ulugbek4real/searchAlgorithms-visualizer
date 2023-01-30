import {generateRandomMaze } from '../lib/gridFunctions'


const Header = ({visualizeDijkstra, setGrid, grid, getInitialGrid, isRunning}) => {

  return (
    <div className="header"> 
    <h1>Pathfinding Visualizer</h1>
    <div className="actions">
    <button className={isRunning ? "disable" : ""} onClick={()=>{
      if(isRunning) return;
    generateRandomMaze(grid,setGrid)}
    }>Generate Random Walls</button>
    <button className={isRunning ? "disable":""}  onClick={()=> {
        if(isRunning) return;
    visualizeDijkstra()}
    }>Visualize Dijkstra's Algorithm</button>
    <button className={isRunning ? "disable": ""}  onClick={()=>{
        if(isRunning) return;
    setGrid(getInitialGrid())}
    }>Clear Board</button>
    </div>
    </div>
  )
}

export default Header