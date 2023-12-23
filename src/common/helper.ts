import { CardDeckInterface } from "./interface";
import { GAME_STATUS } from "../constants";
// Reducer
import { updateGameStatus } from "../reducer/gameReducer";

export const checkIsGameWin = (cardList: CardDeckInterface[], dispatcher:Function) => {
    let winCondition = cardList.some(list => !list.isMatched);
    if(!winCondition){
        setTimeout(() => {
            dispatcher(updateGameStatus(GAME_STATUS.WIN));
        }, 500);
    }
};
