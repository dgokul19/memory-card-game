import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { PLAYER_MODE, GAME_STATUS } from "../constants";

// Define a type for the slice state
interface gameState {
  gameStatus : String,
  playerMode : String,
  activePlayer: String,
  playerName : String,
  defaultCardsCount : Array<string>,
  matchedPairs : Array<string>,
  numberOfMoves : number
}

// Define the initial state using that type
const initialState: gameState = {
  gameStatus : GAME_STATUS.ACTIVE,
  playerMode: PLAYER_MODE.SINGLE_P,
  activePlayer : '',
  playerName : '',
  defaultCardsCount : ["RED", "GREEN"],
  matchedPairs : [],
  numberOfMoves : 0
}

export const gameSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    updatePlayerMode: (state, action: PayloadAction<string>) => {
      state.playerMode = action.payload
    },
    updateGameStatus : (state, action: PayloadAction<string>) => {
      state.gameStatus = action.payload
    },
    updatePlayerMoves : (state ) => {
        state.numberOfMoves += 1;
    },
    restartGamePlay: ( state ) => {
      state.numberOfMoves = 0;
      state.gameStatus = GAME_STATUS.ACTIVE
    }
  },
})

export const { 
  updatePlayerMoves, 
  updatePlayerMode, 
  updateGameStatus,
  restartGamePlay
} = gameSlice.actions

export default gameSlice.reducer