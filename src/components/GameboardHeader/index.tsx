import React, { Fragment, useCallback } from "react";

// Utility Inports
import { useAppSelector, useAppDispatch } from '../../hooks';
import { updatePlayerMode, updateGameStatus } from "../../reducer/gameReducer";
import { GAME_STATUS, PLAYER_MODE } from "../../constants";

// CSS
import classes from "../../styles/game.module.scss";

const GameBoardHeader = (): React.ReactNode => {

    const dispatch = useAppDispatch();
    // State selectors
    const { gameStatus, playerMode } = useAppSelector(state => state.gameReducer);

    const handlePlayerMode = useCallback((currentPlayerMode: String) => {
        if(currentPlayerMode === playerMode) return;
        if (gameStatus !== GAME_STATUS.ACTIVE) {
            const newPayload = (playerMode === PLAYER_MODE.SINGLE_P) ? PLAYER_MODE.DOUBLE_P : PLAYER_MODE.SINGLE_P;
            dispatch(updatePlayerMode(newPayload))
        } else {
            alert('Game is active, Please finish the game or refresh to proceed !!');
        }
    }, [playerMode, gameStatus]);

    const handleGameMode = useCallback(() => {
        const newPayload = (gameStatus !== GAME_STATUS.ACTIVE) ? GAME_STATUS.ACTIVE : GAME_STATUS.IDLE;
        dispatch(updateGameStatus(newPayload))
    }, [gameStatus]);

    return (
        <Fragment>
            <div className={classes.headerElementContainer}>
                <ul>
                    <li className={playerMode === PLAYER_MODE.SINGLE_P ? classes.activeGameMode : ''} onClick={() => handlePlayerMode(PLAYER_MODE.SINGLE_P)}>Single Player</li>
                    <li className={playerMode === PLAYER_MODE.DOUBLE_P ? classes.activeGameMode : ''} onClick={() => handlePlayerMode(PLAYER_MODE.DOUBLE_P)}>Double Player</li>
                </ul>
                <h2>Test Your Memory !!</h2>
                <span>
                    <ul>
                        <li className={classes.activeGameMode}>Easy</li>
                        {/* <li style={{opacity : '.6'}} className={playerMode === PLAYER_MODE.DOUBLE_P ? classes.activeGameMode : ''} onClick={() => handlePlayerMode(PLAYER_MODE.DOUBLE_P)}>Medium</li>
                <li style={{opacity : '.6'}} className={playerMode === PLAYER_MODE.DOUBLE_P ? classes.activeGameMode : ''} onClick={() => handlePlayerMode(PLAYER_MODE.DOUBLE_P)}>Hard</li> */}
                    </ul>
                    <button disabled={gameStatus === GAME_STATUS.ACTIVE} className={classes.playButton} onClick={handleGameMode}>
                        Play Game <i className={`fa fa-play-circle`}></i>
                    </button>
                </span>
            </div>
        </Fragment>
    )
};

export default GameBoardHeader;