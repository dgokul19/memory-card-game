import React, { Fragment, useCallback } from "react";

// Utility
import { useAppDispatch } from "../../hooks";
import { restartGamePlay } from "../../reducer/gameReducer";
// CSS
import classes from "../../styles/game.module.scss";

// Image
import WinGameImage from "../../assets/image/win-game.png";

const WinComponent = () => {
    
    const dispatch = useAppDispatch();

    const restartGame = useCallback(() => {
        dispatch(restartGamePlay())
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