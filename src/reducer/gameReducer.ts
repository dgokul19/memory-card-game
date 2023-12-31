import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { PLAYER_MODE, GAME_STATUS, playerDefaultState, PLAYERS_ID } from "../constants";
import { PlayerAttribute, DispatchPayload } from '../common/interface'; 

// Define a type for the slice state
type gameState = {
  gameStatus : string,
  playerMode : string,
  activePlayer: string,
  defaultCardsCount : Array<string>,
  player1 : PlayerAttribute,
  player2 : PlayerAttribute
}

// Define the initial state using that type
const initialState: gameState = {
  gameStatus : GAME_STATUS.IDLE,
  playerMode: PLAYER_MODE.SINGLE_P,
  activePlayer : PLAYERS_ID.PLAYER_1,
  defaultCardsCount : ["RED", "GREEN"],
  player1 : playerDefaultState,
  player2 : {
    ...playerDefaultState,
    name : 'Player 2'
  }
}


export const gameSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    updatePlayerMode: (state, action: PayloadAction<string>) => {
      state.playerMode = action.payload;
    },
    updateGameStatus : (state, action: PayloadAction<string>) => {
      state.gameStatus = action.payload;
    },
    updatePlayerMoves : (state, action: PayloadAction<DispatchPayload> ) => {
      const data: DispatchPayload = action.payload;
      state.activePlayer = data.activePlayer;
      state.player1 = data.player1;
      state.player2 = data.player2;
    },
    restartGamePlay: ( state ) => {
      state.gameStatus = GAME_STATUS.ACTIVE;
      state.player1 = playerDefaultState;
      state.player2 = {...playerDefaultState, name: 'Player 2'};
    },
    updateActivePlayer : (state, action: PayloadAction<string>) => {
      state.activePlayer = action.payload;
    }
  },
})

export const { 
  updatePlayerMoves, 
  updatePlayerMode, 
  updateGameStatus,
  restartGamePlay,
  updateActivePlayer
} = gameSlice.actions

export default gameSlice.reducer