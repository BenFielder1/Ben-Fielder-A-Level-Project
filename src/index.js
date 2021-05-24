//importing libraries
import React from 'react'
import ReactDOM from 'react-dom'

//importing the game
import Game1 from "./game1"
import Game2 from "./game2"

//the css used on the webpage
import "./index.css"

//Rendering the game to the webpage
ReactDOM.render(
  <React.StrictMode>
    <Game1 />
    <Game2 />
  </React.StrictMode>,
  document.getElementById('root')
)
