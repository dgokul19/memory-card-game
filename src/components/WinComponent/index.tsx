import React, { Fragment, useCallback } from "react";

// Utility
import { useAppDispatch } from "../../hooks";
import { updateGameStatus } from "../../reducer/gameReducer";
import { GAME_STATUS } from "../../constants";
// CSS
import classes from "../../styles/game.module.scss";

// Image
import WinGameImage from "../../assets/image/win-game.png";

const WinComponent = () => {
    
    const dispatch = useAppDispatch();

    const restartGame = useCallback(() => {
        dispatch(updateGameStatus(GAME_STATUS.ACTIVE))
    },[]);

    return(
        <Fragment>
            <div className={classes.winGameContainer}>
                <img src={WinGameImage} alt={`You Win Image`} />
                <div className={classes.buttonRow}>
                    <button onClick={restartGame}>Play Again !!</button>
                </div>
            </div>
        </Fragment>
    );
};

export default WinComponent;