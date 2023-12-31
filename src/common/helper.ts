import { CardDeckInterface, DispatchPayload, PlayerAttribute } from "./interface";
import { GAME_STATUS, PLAYERS_ID,PLAYER_MODE } from "../constants";
// Reducer
import { 
    updateGameStatus, 
    updatePlayerMoves 
} from "../reducer/gameReducer";

export const checkIsGameWin = (cardList: CardDeckInterface[], dispatcher:Function) => {
    let winCondition = cardList.some(list => !list.isMatched);
    if(!winCondition){
        setTimeout(() => {
            dispatcher(updateGameStatus(GAME_STATUS.WIN));
        }, 500);
    }
};

export const updatedPlayerAttributes = (contentPlayer:string, playerMode:string, player1:PlayerAttribute, player2:PlayerAttribute,  isMatched:boolean, dispatcher:Function) => {
    let updatedPlayer = (contentPlayer === PLAYERS_ID.PLAYER_1 && playerMode === PLAYER_MODE.DOUBLE_P) ? PLAYERS_ID.PLAYER_2 : PLAYERS_ID.PLAYER_1;

    let option: DispatchPayload = {
        activePlayer : isMatched ? contentPlayer : updatedPlayer,
        player1: player1,
        player2 : player2
    };
   
    if(contentPlayer === PLAYERS_ID.PLAYER_1){
        option.player1 = {
            ...option.player1,
            numberOfMoves : (player1?.numberOfMoves || 0) + 1,
            matchedPairs : isMatched ? ((player1?.matchedPairs || 0) + 1) : player1?.matchedPairs
        }
    }else {
        option.player2 = {
            ...option.player2,
            numberOfMoves : player2.numberOfMoves + 1,
            matchedPairs : isMatched ? ((player2.matchedPairs || 0) + 1) : player2?.matchedPairs
        }
    }

    dispatcher(updatePlayerMoves(option))
};