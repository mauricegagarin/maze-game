// MazeGame.js
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import './MazeGame.css';

const MazeGame = ({ onBackToMainMenu }) => {
  const [playerPosition, setPlayerPosition] = useState({ x: 0, y: 0 });

  // Wrap the initialization of 'mazeLayout' in useMemo to memoize it
  const mazeLayout = useMemo(() => [
    [1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1],
  ], []);

  const handleKeyDown = useCallback((e) => {
    e.preventDefault();

    const { keyCode } = e;
    setPlayerPosition((prevPosition) => {
      const newPosition = { ...prevPosition };

      switch (keyCode) {
        case 37: // Left arrow key
          if (newPosition.x > 0 && mazeLayout[newPosition.y][newPosition.x - 1] === 0) {
            newPosition.x -= 1;
          }
          break;
        case 38: // Up arrow key
          if (newPosition.y > 0 && mazeLayout[newPosition.y - 1][newPosition.x] === 0) {
            newPosition.y -= 1;
          }
          break;
        case 39: // Right arrow key
          if (newPosition.x < mazeLayout[0].length - 1 && mazeLayout[newPosition.y][newPosition.x + 1] === 0) {
            newPosition.x += 1;
          }
          break;
        case 40: // Down arrow key
          if (newPosition.y < mazeLayout.length - 1 && mazeLayout[newPosition.y + 1][newPosition.x] === 0) {
            newPosition.y += 1;
          }
          break;
        default:
          return prevPosition;
      }

      return newPosition;
    });
  }, [mazeLayout]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  const renderMaze = () => (
    <div className="maze">
      {mazeLayout.map((row, rowIndex) => (
        <div key={rowIndex} className="maze-row">
          {row.map((cell, columnIndex) => (
            <div
              key={columnIndex}
              className={`maze-cell ${cell === 1 ? 'wall' : 'path'}`}
            >
              {playerPosition.x === columnIndex &&
                playerPosition.y === rowIndex && (
                  <div className="player"></div>
                )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );

  return (
    <div className="maze-game-container">
      <h1>Maze Game</h1>
      <div className="maze-game">
        {renderMaze()}
      </div>
      <p>
        Player Position: {`(${playerPosition.x}, ${playerPosition.y})`}
      </p>
      <button onClick={onBackToMainMenu}>Back to Main Menu</button>
    </div>
  );
};

export default MazeGame;
