export const GAME_STATUS  = {
    IDLE : 'idle',
    ACTIVE : 'active',
    WIN : 'win'
};

export const PLAYERS_ID = {
    PLAYER_1 : 'player1',
    PLAYER_2 : 'player2'
};

export const GENERAL_CONSTANTS = {
    INDICATOR : 'indicator',
    ELEMENT : 'element'
}

export const playerDefaultState = {
    name : 'Player 1',
    numberOfMoves : 0,
    matchedPairs : 0,
    timeTaken : ''
};

export const CARD_NUMBERS = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
// export const CARD_NUMBERS = ["A","2","3"];

export const PLAYER_MODE = {
    SINGLE_P : 'single',
    DOUBLE_P : 'double'
};

export const CARDS_COLOR = {
    RED : {
        BG_COLOR : '#F8BBD0',
        COLOR : '#880E4F' 
    },
    GREEN : {
        BG_COLOR : '#e1eedd',
        COLOR : '#183a1d' 
    },
    BLUE : {
        BG_COLOR : '#e3f2fd',
        COLOR : '#283593' 
    },
    YELLOW : {
        BG_COLOR : '#e6ee9c',
        COLOR : '#827717'
    },
    ORANGE : {
        BG_COLOR : '#f0a04b',
        COLOR : '#333'
    }
}