
import React from 'react';
import Game from './components/Game/Game';
import "./App.css";


function App(props) {
  const raccoons = {
    name: 'Russiaville Raccoons',
    logoSrc: './Assest/images/raccoon.png'
  }

  const squirrels = {
    name: 'Sheridan Squirrels',
    logoSrc: './Assest/images/squirrel.png'
  }

  const bunnies = {
    name: 'Burlington Bunnies',
    logoSrc: './Assest/images/bunny.png'
  }

  const hounds = {
    name: 'Hammond Hounds',
    logoSrc: './Assest/images/hound.png'
  }

  return (
    <div className="App">
      <Game
        venue="Union 525 Gem"
        homeTeam={squirrels}
        visitingTeam={raccoons}
      />
      <Game
        venue="Sheridan Arena"
        homeTeam={bunnies}
        visitingTeam={hounds}
      />
    </div>
  )
}
export default App;
