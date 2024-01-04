import React from 'react';
import MainMenu from './MainMenu';
import AboutUs from './AboutUs';
import Instructions from './Instructions';
import MazeGame from './MazeGame'; 
import './App.css';

class App extends React.Component {
  state = {
    showMainMenu: true,
    showAboutUs: false,
    showInstructions: false,
    showMazeGame: false, 
  };

  handleShowAboutUs = () => {
    this.setState({
      showMainMenu: false,
      showAboutUs: true,
      showInstructions: false,
      showMazeGame: false,
    });
  };

  handleShowInstructions = () => {
    this.setState({
      showMainMenu: false,
      showAboutUs: false,
      showInstructions: true,
      showMazeGame: false,
    });
  };

  handleStartGame = () => {
    this.setState({
      showMainMenu: false,
      showAboutUs: false,
      showInstructions: false,
      showMazeGame: true,
    });
  };

  handleBackToMainMenu = () => {
    this.setState({
      showMainMenu: true,
      showAboutUs: false,
      showInstructions: false,
      showMazeGame: false,
    });
  };

  render() {
    return (
      <div>
        {this.state.showMainMenu && (
          <MainMenu
            onShowAboutUs={this.handleShowAboutUs}
            onShowInstructions={this.handleShowInstructions}
            onStartGame={this.handleStartGame} 
          />
        )}

        {this.state.showAboutUs && (
          <AboutUs onBackToMainMenu={this.handleBackToMainMenu} />
        )}

        {this.state.showInstructions && (
          <Instructions onBackToMainMenu={this.handleBackToMainMenu} />
        )}

        {this.state.showMazeGame && (
          <MazeGame onBackToMainMenu={this.handleBackToMainMenu} />
        )}
      </div>
    );
  }
}

export default App;
