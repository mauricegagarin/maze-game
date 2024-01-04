import React from 'react';
import './App.css';

class Instructions extends React.Component {
  render() {
    const { onBackToMainMenu } = this.props;

    return (
      <div className="instructions">
        <h1>Instructions</h1>
        <div className="instructions-content">
          <p>
            Welcome to the Maze Game! Follow these steps to navigate through the maze:
          </p>
          <ol>
            <li>Use the arrow keys to move through the maze.</li>
            <li>Avoid obstacles and reach the exit to win.</li>
            <li>Have fun exploring the maze!</li>
          </ol>
        </div>
        <button onClick={onBackToMainMenu}>Back to Main Menu</button>
      </div>
    );
  }
}

export default Instructions;
