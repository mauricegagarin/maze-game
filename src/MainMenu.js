// MainMenu.js
import React from 'react';
import './App.css';

class MainMenu extends React.Component {
  handleStartGame = () => {
    this.props.onStartGame(); 
  };

  render() {
    const { onShowAboutUs, onShowInstructions } = this.props;

    return (
      <div className="main-menu">
        <h1>Maze Game</h1>
        <div className="menu-options">
          <button onClick={this.handleStartGame}>Start Game</button>
          <button onClick={onShowInstructions}>Instructions</button>
          <button onClick={onShowAboutUs}>About</button>
        </div>
      </div>
    );
  }
}

export default MainMenu;
