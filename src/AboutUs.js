import React from 'react';
import './App.css';

class AboutUs extends React.Component {
  render() {
    const { onBackToMainMenu } = this.props;

    return (
      <div className="about-us">
        <h1>About Us</h1>
        <div className="about-content">
          <p>
            Welcome to the Maze Game! We are a team of passionate developers
            dedicated to creating engaging and challenging games for players.
          </p>
          <p>Developers:  </p>
          <p>1. Arciaga, Marlon Christopher</p>
          <p>2. Gagarin, Maurice Gabriel</p>
            
        </div>
        <button onClick={onBackToMainMenu}>Back to Main Menu</button>
      </div>
    );
  }
}

export default AboutUs;
