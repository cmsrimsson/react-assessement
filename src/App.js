
import React from 'react';
import Game from './components/Game/Game';
import image1 from './components/Assest/images/raccoon.png';
import image2 from  './components/Assest/images/squirrel.png';
import image3 from './components/Assest/images/bunny.png';
import image4 from './components/Assest/images/hound.png';
import "./App.css";


function App(props) {
  const raccoons = {
    name: 'Russiaville Raccoons',
    logoSrc: image1,
  }

  const squirrels = {
    name: 'Sheridan Squirrels',
    logoSrc: image2,
  }

  const bunnies = {
    name: 'Burlington Bunnies',
    logoSrc: image3,
  }

  const hounds = {
    name: 'Hammond Hounds',
    logoSrc: image4,
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
