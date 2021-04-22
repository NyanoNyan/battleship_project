import React, { useState, useEffect } from "react";

import DisplayBoard from "./components/DisplayBoard.js";

import Ship from "../src/factory_functions/ship";
import GameBoard from "../src/factory_functions/gameboard";
import Player from "../src/factory_functions/player";

const App = () => {

    return (
      <DisplayBoard />
    )
};

export default App;

// Things that needs to be completed
// - Restart the game
// - Random ships placements for both computer and player (optional)

// learn more about useEffect
// test why hitLocs is not showing
// Look at other codes for inspiration